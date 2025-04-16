import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";

export const App = () => {
  return (
    <>
      <Hero
        name="Christina Baldwin"
        title="Frontend Developer with a Background in Sustainability"
      ></Hero>
      <Tech />
      <Projects />
    </>
  );
};
