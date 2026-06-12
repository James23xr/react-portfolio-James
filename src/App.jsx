import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import { Technologies } from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <MotionConfig reducedMotion="user">
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-neutral-900 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <div className="container mx-auto px-8">
          <Navbar />
          <main id="main">
            <section id="home" className="scroll-mt-24">
              <Hero />
            </section>
            <section id="about" className="scroll-mt-24">
              <About />
            </section>
            <section id="skills" className="scroll-mt-24">
              <Technologies />
            </section>
            <section id="experience" className="scroll-mt-24">
              <Experience />
            </section>
            <section id="projects" className="scroll-mt-24">
              <Projects />
            </section>
            <section id="education" className="scroll-mt-24">
              <Education />
            </section>
            <section id="contact" className="scroll-mt-24">
              <Contact />
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </MotionConfig>
  );
};

export default App;
