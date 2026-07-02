import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Header from "@/components/ui/Header";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-background text-foreground">
      <Header />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
