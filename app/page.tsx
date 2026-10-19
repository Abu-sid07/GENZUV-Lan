import type { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import Hero from "@/components/ui/hero";
import About from "@/components/ui/About";
import Testimonials from "@/components/ui/testimonials";
import Growth from "@/components/ui/growth";
import Industries from "@/components/ui/industries";
import Projects from "@/components/ui/projects";
import ServiceCards from "@/components/ui/service-cards";
import Team from "@/components/ui/team";
import Contact from "@/components/ui/contact";
import Footer from "@/components/ui/footer";

// 1. FIX THE IMPORT ROUTE STRING TO MATCH YOUR ACTUAL FILENAME CASING EXACTLY:
// If the actual file in your explorer is named "FAQ.tsx", use this line:
import FAQ from "@/components/ui/FAQ";

// OR if the actual file in your explorer is named "faq.tsx", use this line instead:
// import FAQ from "@/components/ui/faq";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://genzuv.in",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ServiceCards />
        <Growth />
        <Industries />
        <Projects />
        {/* <Team /> */}
        
        {/* 2. ENSURE THIS COMPONENT TAG MATCHES THE EXACT IMPORT VARIABLE DECLARED ABOVE */}
        <FAQ /> 
        
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
