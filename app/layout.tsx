import type { Metadata } from "next";
import "../src/index.css";
import Providers from "./providers";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://adminizer.org"),
  title: "Adminizer - Modern Admin Panel for Node.js",
  description:
    "Framework-agnostic, open-source admin panel for Node.js with TypeScript backend and React frontend. Build robust dashboards with ease.",
  alternates: {
    canonical: "https://adminizer.org",
  },
  openGraph: {
    title: "Adminizer - Modern Admin Panel for Node.js",
    description:
      "Framework-agnostic, open-source admin panel for Node.js with TypeScript backend and React frontend. Build robust dashboards with ease.",
    type: "website",
    url: "https://adminizer.org",
    siteName: "Adminizer",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
  authors: [{ name: "Adminizer" }],
  keywords: [
    "admin panel",
    "nodejs",
    "typescript",
    "react",
    "dashboard",
    "open source",
    "framework agnostic",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=104086598', 'ym');

            ym(104086598, 'init', {ssr:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
          `}
        </Script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/104086598"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
