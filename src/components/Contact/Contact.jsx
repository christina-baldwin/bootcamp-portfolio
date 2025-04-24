import styled from "styled-components";
import FadeInOnScroll from "../../FadeInOnScroll";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ContactLinks = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
`;

const ContactLink = styled.a`
  color: #4ecdc4;
  font-size: 2.5rem;

  &:link,
  &:visited {
    color: #4ecdc4;
  }

  &:hover,
  &:active {
    transition: all 0.3s ease;
    color: white;
  }
`;

const StyledHr = styled.hr`
  width: 100%;
  max-width: 100%;
  border: none;
  height: 2px;
  background-color: #4ecdc4;
  margin: 2rem auto;
`;

const Contact = () => {
  return (
    <FadeInOnScroll>
      <ContactContainer className="m-b-l p-m">
        <h2 className="text-center">Get in touch!</h2>
        <StyledHr className="m-b-s" />
        <h3 className="text-center">Christina Baldwin</h3>
        <p className="text-center m-b-s">+46(0)729 193 108</p>
        <p className="text-center m-b-s">christina.baldwin13@yahoo.com</p>
        <ContactLinks>
          <ContactLink href="#" aria-label="Go to LinkedIn account">
            <ion-icon name="logo-linkedin"></ion-icon>
          </ContactLink>
          <ContactLink href="#" aria-label="Go to GitHub account">
            <ion-icon name="logo-github"></ion-icon>
          </ContactLink>
        </ContactLinks>
      </ContactContainer>
    </FadeInOnScroll>
  );
};

export default Contact;
