import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contacto">
      <div className="contact-title">
        <h2>Ponete en contacto</h2>
      </div>

      {/* Sección full width con fondo */}
      <div className="contact-section">
        {/* Contenedor interno centrado */}
        <div className="contact-container">
          {/* LEFT */}
          <div className="contact-left">
            <h3>Espero tu mensaje</h3>
            <p>
              Buenas! Estoy disponible para asumir nuevos proyectos. No dudes en
              contactarme y ponernos de acuerdo. Gracias!
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z" />
                  <path d="M0 4l8 5 8-5" />
                </svg>
                <span>luciana_lr@hotmail.com</span>
              </div>

              <div className="contact-detail">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-geo-alt"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                </svg>
                <span>Mendoza, Argentina</span>
              </div>

              <div className="contact-detail">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-whatsapp"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.6 2.3A7.9 7.9 0 0 0 8 0C3.6 0 .06 3.5.06 7.9c0 1.4.36 2.7 1.04 3.9L0 16l4.2-1.1a8 8 0 0 0 3.8.9h.01c4.3 0 7.9-3.5 7.9-7.9a7.9 7.9 0 0 0-2.3-5.6" />
                </svg>
                <span>+54 9 261 5964429</span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <form className="contact-right">
            <label>Completa con tu nombre</label>
            <input type="text" placeholder="Tu nombre" name="name" />

            <label>Completa con tu correo electrónico</label>
            <input type="email" placeholder="Tu email" name="email" />

            <label>Tu mensaje</label>
            <textarea
              name="message"
              rows="6"
              placeholder="Ingrese su mensaje"
            ></textarea>

            <button type="submit" className="contact-submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
