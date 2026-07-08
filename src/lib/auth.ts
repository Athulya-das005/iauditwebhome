import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const COOKIE_NAME = "iaudit_admin_session";
const SESSION_MAX_AGE = 60 * 60 * 12; // 12 hours

function getSessionSecret() {
    const secret = process.env.ADMIN_SESSION_SECRET ?? process.env.ADMIN_PASSWORD;
    if (!secret) {
        throw new Error("ADMIN_SESSION_SECRET or ADMIN_PASSWORD must be set.");
    }
    return new TextEncoder().encode(secret);
}

export async function createAdminSession() {
    const token = await new SignJWT({ role: "admin" })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime(`${SESSION_MAX_AGE}s`)
        .sign(getSessionSecret());

    const cookieStore = await cookies();
    cookieStore.set(COOKIE_NAME, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: SESSION_MAX_AGE,
    });
}

export async function clearAdminSession() {
    const cookieStore = await cookies();
    cookieStore.delete(COOKIE_NAME);
}

export async function isAdminAuthenticated() {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value;
    if (!token) return false;

    try {
        await jwtVerify(token, getSessionSecret());
        return true;
    } catch {
        return false;
    }
}

export function verifyAdminCredentials(email: string, password: string) {
    const expectedEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
    const expectedPassword = process.env.ADMIN_PASSWORD;

    if (!expectedEmail || !expectedPassword) return false;

    return email.trim().toLowerCase() === expectedEmail && password === expectedPassword;
}

/** @deprecated Use verifyAdminCredentials instead. */
export function verifyAdminPassword(password: string) {
    const expected = process.env.ADMIN_PASSWORD;
    if (!expected) return false;
    return password === expected;
}

export async function verifyAdminToken(token: string) {
    try {
        await jwtVerify(token, getSessionSecret());
        return true;
    } catch {
        return false;
    }
}

export { COOKIE_NAME };
