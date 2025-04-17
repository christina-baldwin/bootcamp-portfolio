import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Get in touch!</h2>
      <hr />
      <h3>Christina Baldwin</h3>
      <p>+46(0)729 193 108</p>
      <p>christina.baldwin13@yahoo.com</p>
      <div className="contact-links">
        <a href="">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
        <a href="">
          <ion-icon name="logo-github"></ion-icon>
        </a>
      </div>
    </div>
  );
};

export default Contact;
