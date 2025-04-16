import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

export const App = () => {
  return (
    <>
      <Hero
        logo="../public/logo192.png"
        img="../public/hero-img.png"
        name="Christina Baldwin"
        title="A Frontend Developer with a Background in Sustainability"
      />
      <Tech />
      <Projects />
      <Skills />
      <Blog />
      <Contact />
    </>
  );
};
