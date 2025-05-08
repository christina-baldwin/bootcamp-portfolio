import styled from "styled-components";
import FadeInOnScroll from "../../FadeInOnScroll";
import { media } from "../../media";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 64px 0px;
  gap: 16px;

  @media ${media.smallDesktop} {
    padding: 128px;
    gap: 128px;
  }
`;

const ContactTitle = styled.h2`
  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 48px;
  font-weight: 700;

  @media ${media.smallDesktop} {
    font-size: 80px;
  }
`;

const ContactTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const ContactText = styled.p`
  color: #fff;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;

  @media ${media.tabletLandscape} {
    font-size: 24px;
  }

  @media ${media.smallDesktop} {
    font-size: 30px;
  }
`;

const ContactLinks = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
`;

const ContactLink = styled.a`
  color: #4ecdc4;
  font-size: 2.5rem;
  padding: 64px 0px;

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
  width: 599px;
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
        <ContactTitle>Get in touch!</ContactTitle>
        <StyledHr className="m-b-s" />
        <ContactTextContainer>
          <ContactText>Christina Baldwin</ContactText>
          <ContactText>+46(0)729 193 108</ContactText>
          <ContactText>christina.baldwin13@yahoo.com</ContactText>
        </ContactTextContainer>
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
