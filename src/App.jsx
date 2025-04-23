import React from "react";
import Hero from "./components/Hero/Hero.jsx";
import Tech from "./components/Tech/Tech.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Blog from "./components/Blog/Blog.jsx";
import Contact from "./components/Contact/Contact.jsx";
import GlobalStyle from "./GlobalStyles.jsx";
import styled from "styled-components";

const AppWrapper = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 1rem; // some side padding for breathing room
`;

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Hero
          logo="/logo192.png"
          img="/hero-img.png"
          name="Christina Baldwin"
          title="A Frontend Developer with a Background in Sustainability"
        />
        <Tech />
        <Projects />
        <Skills />
        <Blog />
        <Contact />
      </AppWrapper>
    </>
  );
};
