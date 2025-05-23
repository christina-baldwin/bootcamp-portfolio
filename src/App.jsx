import React from "react";
import Hero from "./components/Hero/Hero.jsx";
import Tech from "./components/Tech/Tech.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Blog from "./components/Blog/Blog.jsx";
import Contact from "./components/Contact/Contact.jsx";
import GlobalStyle from "./GlobalStyles.jsx";
import styled from "styled-components";
import logo from "/logo192.png";

const AppWrapper = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`;

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Hero
          logo={logo}
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
