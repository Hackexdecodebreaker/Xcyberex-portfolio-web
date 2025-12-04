import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { MouseTrail } from "./components/MouseTrail";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#f0f0f5]">
      <MouseTrail />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}