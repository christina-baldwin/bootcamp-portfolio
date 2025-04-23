import styled from "styled-components";

const ContactContainer = styled.div`
  text-align: center;
`;
const ContactLinks = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
`;
const ContactLink = styled.a`
  color: #4ecdc4;
  font-size: 2.5rem;

  &:hover,
  &:active {
    transition: all 0.3s ease;
    color: white;
  }

  &:link,
  &:visited {
    color: #4ecdc4;
  }
`;

const Contact = () => {
  return (
    <ContactContainer className="m-b-l p-l">
      <h2>Get in touch!</h2>
      <hr className="m-b-s" />
      <h3>Christina Baldwin</h3>
      <p className="m-b-s">+46(0)729 193 108</p>
      <p className="m-b-s">christina.baldwin13@yahoo.com</p>
      <ContactLinks>
        <ContactLink href="">
          <ion-icon name="logo-linkedin"></ion-icon>
        </ContactLink>
        <ContactLink href="">
          <ion-icon name="logo-github"></ion-icon>
        </ContactLink>
      </ContactLinks>
    </ContactContainer>
  );
};

export default Contact;
