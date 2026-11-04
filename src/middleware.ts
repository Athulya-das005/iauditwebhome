import { NextResponse, type NextRequest } from "next/server";
import { COOKIE_NAME, verifyAdminToken } from "@/lib/auth";

export async function middleware(request: NextRequest) {
    const host = (request.headers.get("x-forwarded-host") || request.headers.get("host") || "").split(":")[0].toLowerCase();
    const forwardedProto = request.headers.get("x-forwarded-proto");
    const { pathname, search } = request.nextUrl;

    // 1. Survey subdomain permanent redirect: survey.iaudit.global & surveys.iaudit.global -> https://iaudit.global/
    if (host === "survey.iaudit.global" || host === "surveys.iaudit.global" || host.startsWith("survey.") || host.startsWith("surveys.")) {
        return NextResponse.redirect("https://iaudit.global/", 301);
    }

    // 2. Canonical domain permanent redirect: www.iaudit.global -> https://iaudit.global/*
    if (host === "www.iaudit.global" || host.startsWith("www.")) {
        return NextResponse.redirect(`https://iaudit.global${pathname}${search}`, 301);
    }

    // 3. Force HTTPS only when an explicit downstream proxy signals an insecure connection
    if (forwardedProto === "http" && !host.includes("localhost") && !host.includes("127.0.0.1")) {
        return NextResponse.redirect(`https://${host || "iaudit.global"}${pathname}${search}`, 301);
    }

    // 4. Admin authentication handling
    if (pathname === "/admin/login") {
        return NextResponse.next();
    }

    if (pathname.startsWith("/admin")) {
        const token = request.cookies.get(COOKIE_NAME)?.value;
        const authenticated = token ? await verifyAdminToken(token) : false;

        if (!authenticated) {
            const loginUrl = new URL("/admin/login", request.url);
            loginUrl.searchParams.set("next", pathname);
            return NextResponse.redirect(loginUrl);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * 1. /_next/static (static files)
         * 2. /_next/image (image optimization files)
         * 3. Static asset extensions (.svg, .png, .jpg, .jpeg, .gif, .webp, .ico, .txt, .xml)
         */
        "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml)$).*)",
    ],
};
