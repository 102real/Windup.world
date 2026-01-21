import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Header from "@/components/ui/Header";

export default function Home() {
  return (
    <main className="flex flex-col w-full selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <Header />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
