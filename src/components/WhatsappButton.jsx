import React from "react";
import "../styles/whatsapp.css";

const WhatsAppButton = () => {
  const phoneNumber = "919370280380";

  const message =
    "Hello, I am interested in your construction chemical products. Please share details.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <i className="fab fa-whatsapp whatsapp-icon"></i>
    </a>
  );
};

export default WhatsAppButton;
