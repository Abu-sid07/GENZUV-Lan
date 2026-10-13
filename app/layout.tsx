import type { Metadata } from "next";
import { DM_Sans, Fraunces, DM_Serif_Display } from "next/font/google";
import SmoothScroll from "@/components/ui/smooth-scroll";
import "lenis/dist/lenis.css";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://genzuv.in"),
  title: "GENZ UV | Digital Marketing & AI Automation",
  description:
    "Digital marketing and AI automation for businesses that want more enquiries on WhatsApp and calls.",
  icons: {
    icon: "/Logo.jpeg",
    apple: "/Logo.jpeg",
  },
  openGraph: {
    type: "website",
    url: "https://genzuv.in",
    siteName: "GENZ UV",
    title: "GENZ UV | Digital Marketing & AI Automation",
    description:
      "Digital marketing and AI automation for businesses that want more enquiries on WhatsApp and calls.",
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
    title: "GENZ UV | Digital Marketing & AI Automation",
    description:
      "Digital marketing and AI automation for businesses that want more enquiries on WhatsApp and calls.",
    images: ["/Logo.jpeg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${fraunces.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
