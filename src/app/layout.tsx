import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  title: "iAudit Global",
  description: "Internal audit management software",
  // Google Search Console verification
  verification: {
    google: "-Z7vE3YjIssRGM2QAtUMIbnJ6STeBiKSKl4pYtdl6U4",
  },
  // Bing Webmaster verification
  other: {
    "msvalidate.01": "0CCE8B18B2884AD8E4F7625EAD496D65",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <Analytics />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
