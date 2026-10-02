import type { Metadata } from "next";
import { DM_Serif_Text, Figtree } from "next/font/google";
import Script from "next/script";
import GTMAnalytics from "@/components/gtm-analytics";
import { Suspense } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HomeSectionScroll } from "@/components/site-link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://onthefence.dayofaiaustralia.com/"),
  title: "On the Fence | Day of AI Australia",
  description:
    "Join On the Fence, a national AI and health literacy challenge for Years 7-10. Students build AI agents and learn to spot misinformation.",
  openGraph: {
    siteName: "On the Fence",
    description:
      "A national AI and health literacy challenge for Years 7-10. Build AI agents and learn to spot misinformation.",
    type: "website",
  },
  icons: {
    icon: { url: "/logos/otf-logo.svg", type: "image/svg+xml", sizes: "any" },
  },
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

const GTM_ID = "GTM-PQSWP4R8";
const analyticsEnabled =
  process.env.NODE_ENV === "production" && process.env.VERCEL_ENV !== "preview";

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
      {analyticsEnabled && (
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
      )}
      <body className="flex min-h-screen flex-col">
        {analyticsEnabled && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
        )}

        <Suspense fallback={null}>
          {analyticsEnabled && <GTMAnalytics />}
          <HomeSectionScroll />
        </Suspense>

        <Header />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
