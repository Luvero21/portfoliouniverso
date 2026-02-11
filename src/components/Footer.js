import React from "react";
import whatsappIcon from "../assets/imagenes/whatsapp.png";

const Footer = () => {
  const whatsappLink = "https://wa.me/5492615964429";
  return (
    <div>
      <div className="footer">
        <div className="footer-left">
          <p>
            © 2026 <span>Luciana Reales</span>. Todos los derechos reservados.
          </p>
        </div>

        <div className="footer-right">
          <p>Conéctate conmigo</p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <img
              src={whatsappIcon}
              alt="WhatsApp"
              style={{ width: "24px", height: "24px", marginRight: "8px" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
