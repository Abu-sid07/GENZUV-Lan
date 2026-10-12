import Navbar from "@/components/ui/navbar";
import Hero from "@/components/ui/hero";
import About from "@/components/ui/About";
import Testimonials from "@/components/ui/testimonials";
import Growth from "@/components/ui/growth";
import Projects from "@/components/ui/projects";
import ServiceCards from "@/components/ui/service-cards";
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
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
