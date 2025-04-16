import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export const App = () => {
  return (
    <>
      <Hero
        name="Christina Baldwin"
        title="A Frontend Developer with a Background in Sustainability"
      />
      <Tech />
      <Projects />
      <Skills />
    </>
  );
};
