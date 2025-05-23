import { createGlobalStyle } from "styled-components";
import { media } from "./media";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

html {
  font-family: "Poppins", sans-serif;
}

body {
  background: black;
  color: white;
  line-height: 1.5;
}

button {
  background-color: #4ecdc4;
  border: none;
  padding: 0.7rem 0.8rem;
  font-size: 1rem;
  display: block;
  margin: 0 auto;
  border-radius: 5px;
  cursor: pointer;
}

hr {
  background-color: #4ecdc4;
  height: 7px;
  width: 800px;
  margin: 0 auto;
}

.text-italic {
  font-style: italic;
}

.text-center {
  text-align: center;
}

.text-left {
  text-align: left;
}

.m-b-s {
  margin-bottom: 2.5rem;
}

.m-b-m {
  margin-bottom: 5rem;
}

.m-b-l {
  margin-bottom: 10rem;
}

.p-s {
  padding: 0.4rem 0.6rem;
}

.p-m {
  padding: 5rem;
}

.p-l {
  padding: 5rem 7rem;
}

.bg-colour-1 {
  background-color: white;
  color: black;
}

.bg-colour-2 {
  background-color: black;
  color: white;
}

`;

export default GlobalStyle;
