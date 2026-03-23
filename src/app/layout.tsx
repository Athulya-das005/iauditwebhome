import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
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
        {/* Google Tag Manager (noscript) - immediately after <body> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5JVJM386"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* Google Tag Manager - head script */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
(function(w,d,s,l,i){w[l]=w[l]||[];
w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),
dl=l!='dataLayer'?'&l='+l:'';
j.async=true;
j.src='https://www.googletagmanager.com/gtm.js?id=GTM-5JVJM386'+dl;
f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5JVJM386');
          `}
        </Script>
        <Analytics />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
