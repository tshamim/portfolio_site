import ContactForm from "@/components/sections/contact-form";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Services from "@/components/sections/services";
import Testimonials from "@/components/sections/testimonials";

export default function Page() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <ContactForm />
    </>
  );
}
