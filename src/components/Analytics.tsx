"use client";

import Script from "next/script";

/**
 * Analytics Component
 *
 * Centralizes website analytics (except GTM, Google Ads gtag, and Clarity in layout <head>):
 * - Facebook Pixel
 * - LinkedIn Insight Tag
 */
export default function Analytics() {
    const fbPixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

    return (
        <>
            {fbPixelId && (
                <>
                    <Script id="facebook-pixel" strategy="afterInteractive">
                        {`
                            !function(f,b,e,v,n,t,s)
                            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                            n.queue=[];t=b.createElement(e);t.async=!0;
                            t.src=v;s=b.getElementsByTagName(e)[0];
                            s.parentNode.insertBefore(t,s)}(window, document,'script',
                            'https://connect.facebook.net/en_US/fbevents.js');
                            fbq('init', '${fbPixelId}');
                            fbq('track', 'PageView');
                        `}
                    </Script>
                    <noscript>
                        <img
                            height="1"
                            width="1"
                            style={{ display: "none" }}
                            src={`https://www.facebook.com/tr?id=${fbPixelId}&ev=PageView&noscript=1`}
                            alt="Facebook Meta Pixel analytics tracking image"
                        />
                    </noscript>
                </>
            )}

            <Script id="linkedin-partner-init" strategy="afterInteractive">
                {`
_linkedin_partner_id = "9714209";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);
                `}
            </Script>
            <Script id="linkedin-insight-loader" strategy="afterInteractive">
                {`
(function(l) {
if (!l){
  window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
  window.lintrk.q=[];
}
var s = document.getElementsByTagName("script")[0];
var b = document.createElement("script");
b.type = "text/javascript";
b.async = true;
b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
s.parentNode.insertBefore(b, s);
})(window.lintrk);
                `}
            </Script>
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: "none" }}
                    src="https://px.ads.linkedin.com/collect/?pid=9714209&fmt=gif"
                    alt="LinkedIn Insight Tag analytics tracking image"
                />
            </noscript>
        </>
    );
}
