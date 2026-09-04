import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import StickyScrollButton from "@/components/StickyScrollButton";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.iaudit.global"),
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
      <head>
        {/* Google Tag Manager — as high in <head> as possible */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TC7HZ9V4');`,
          }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
(function(){
  var host = location.hostname;
  if (host === "localhost" || host === "127.0.0.1") return;
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "vv5p7cavq6");
})();
            `.trim(),
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) — immediately after <body> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TC7HZ9V4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Analytics />
        <Header />
        <main>{children}</main>
        <StickyScrollButton />
      </body>
    </html>
  );
}
