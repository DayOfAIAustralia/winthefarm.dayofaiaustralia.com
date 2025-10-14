import type { Metadata } from "next";
import { DM_Serif_Text, Figtree } from "next/font/google";
import Script from 'next/script'; // Import Script
import GTMAnalytics from '@/components/gtm-analytics';
import { Suspense } from 'react';
import "./globals.css";

export const metadata: Metadata = {
  title: "Win the Farm | Day of AI Australia",
  description:
    "Register now for Australia's ultimate election challenge. Create AI bots to win the farm in a simulated election over three weeks.",
};

const dmserif = DM_Serif_Text({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-serif",
});

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
});

const GTM_ID = 'GTM-PQSWP4R8';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmserif.variable} ${figtree.variable} antialiased`}
    >
      {/* GTM Script */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />
      <body>
        {/* GTM Noscript */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        
        <Suspense fallback={null}>
          <GTMAnalytics />
        </Suspense>

        {children}
      </body>
    </html>
  );
}
