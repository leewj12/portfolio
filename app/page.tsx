import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TechStack } from "@/components/tech-stack";
import { ProjectsSection } from "@/components/projects-section";
import { Contact, Footer } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <ProjectsSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
