// ContactView.js

// Import the CSS file at the top of your ContactView.js file
import  './styles/Contacto.css';
import React from "react";

const ContactView = () => {
  const emailAddress = "SliferRedStore@gmail.com";
  const phoneNumber = "961" + Math.floor(Math.random() * 100000000);
  const facebookPageLink = "https://www.facebook.com/p/Slifer-Red-Store-100063534282087/";

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h2>Contact Us</h2>
        <div>
          <p>Email: {emailAddress}</p>
          <p>Phone: {phoneNumber}</p>
          <p>
            Facebook:{" "}
            <a href={facebookPageLink} target="_blank" rel="noopener noreferrer">
              Slifer Red Store Facebook Page
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
