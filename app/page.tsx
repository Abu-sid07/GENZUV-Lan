import About from "@/components/ui/About";
import Testimonials from "@/components/ui/testimonials";
import Growth from "@/components/ui/growth";
import Projects from "@/components/ui/projects";
import ServiceCards from "@/components/ui/service-cards";

export default function Home() {
  return (
    <main>
       <About />
      <ServiceCards />
      <Growth />
      <Projects />
      <Testimonials />
     
    </main>
  );
}
