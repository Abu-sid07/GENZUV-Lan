import type { Metadata } from "next";
import { DM_Sans, Fraunces, DM_Serif_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import SmoothScroll from "@/components/ui/smooth-scroll";
import "lenis/dist/lenis.css";
import "./globals.css";
import head_logo from '@/src/assests/genz_uv_logo.png';

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
});

// Optimized description targeting both premium quality and budget variations
const seoDescription = 
  "Get the best premium quality digital marketing and affordable AI automation systems built for measurable revenue, WhatsApp leads, and business growth.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.genzuv.in"),

  
  title: {
    default: "GENZ UV | Best Digital Marketing & Premium AI Automation",
    template: "%s | GENZ UV"
  },
  description: seoDescription,
  
  // High-value search terms mapped directly to your user targets
  keywords: [
    "genz uv",
    "best website services",
    "best AI marketing agency",
    "trusted AI automation agency",
    "top rated WhatsApp marketing agency",
    "fast lead generation agency",
    "premium growth marketing agency",
    "reliable sales automation company",
    "best Meta ads agency",
    "high quality website development",
    "trusted Google ads expert",
    "fast WhatsApp funnel setup",
    "best B2B marketing agency",
    "top ROI marketing agency",
    "results driven digital marketing",
    "proven lead generation systems"
  ],

  icons: {
    icon: "/Logo.jpeg",
    apple: "/Logo.jpeg",
  },
  openGraph: {
    type: "website",
    url: "https://www.genzuv.in/",
    siteName: "GENZ UV",
    title: "GENZ UV | Best Digital Marketing & Premium AI Automation",
    description: seoDescription,
    images: [
      {
        url: "/Logo.jpeg",
        width: 768,
        height: 768,
        alt: "GENZ UV Marketing Agency logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GENZ UV | Best Digital Marketing & Premium AI Automation",
    description: seoDescription,
    images: ["/Logo.jpeg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${fraunces.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
