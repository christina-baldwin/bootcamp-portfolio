import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const FadeInWrapper = styled.div`
  opacity: 0; /* Initially hidden */
  transform: translateY(20px); /* Initially pushed down */
  transition: opacity 1s ease, transform 1s ease;
  &.in-view {
    opacity: 1; /* Fade in */
    transform: translateY(0); /* Slide up */
  }
`;

const FadeInOnScroll = ({ children }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      const rect = element.getBoundingClientRect();

      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        element.classList.add("in-view"); // Add class to trigger animation
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <FadeInWrapper ref={elementRef}>{children}</FadeInWrapper>;
};

export default FadeInOnScroll;
