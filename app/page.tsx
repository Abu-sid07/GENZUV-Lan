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
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
