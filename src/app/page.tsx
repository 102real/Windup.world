import Hero from "@/components/sections/Hero";
import Studio from "@/components/sections/Studio";
import Projects from "@/components/sections/Projects";
import History from "@/components/sections/History";
import Contact from "@/components/sections/Contact";
import Header from "@/components/ui/Header";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-background text-foreground">
      <Header />
      <Hero />
      <Studio />
      <Projects />
      <History />
      <Contact />
    </main>
  );
}
