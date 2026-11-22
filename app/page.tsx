import type { Metadata } from "next";
import Hero from "@/components/ui/hero";
import About from "@/components/ui/About";
import Testimonials from "@/components/ui/testimonials";
import Growth from "@/components/ui/growth";
import Industries from "@/components/ui/industries";
import Projects from "@/components/ui/projects";
import ServiceCards from "@/components/ui/service-cards";
import Team from "@/components/ui/team";
import Contact from "@/components/ui/contact";
import FAQ from "@/components/ui/FAQ";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.genzuv.in",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ServiceCards />
      <Growth />
      <Industries />
      <Projects />
      {/* <Team /> */}
      <FAQ /> 
      <Testimonials />
      <Contact />
    </main>
  );
}
