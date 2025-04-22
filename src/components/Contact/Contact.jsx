import "./Contact.css";
import styled from "styled-components";

const ContactContainer = styled.div`
  text-align: center;
`;

const Contact = () => {
  return (
    <ContactContainer className="m-b-l p-l">
      <h2>Get in touch!</h2>
      <hr className="m-b-s" />
      <h3>Christina Baldwin</h3>
      <p className="m-b-s">+46(0)729 193 108</p>
      <p className="m-b-s">christina.baldwin13@yahoo.com</p>
      <div className="contact-links">
        <a className="contact-link" href="">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
        <a className="contact-link" href="">
          <ion-icon name="logo-github"></ion-icon>
        </a>
      </div>
    </ContactContainer>
  );
};

export default Contact;
