import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/imagenes/yo.jpg";
import instagram from "../assets/imagenes/instagram.png";
import whatsapp from "../assets/imagenes/whatsapp.png";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""} fixed="top">
      <Container className="containerr">
        <Navbar.Brand className="contenedor" href="#home">
          <img src={logo} className="logo" alt="logo" />
          <h3>LU</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#habilidades"
              className={
                activeLink === "habilidades"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("habilidades")}
            >
              Habilidades
            </Nav.Link>
            <Nav.Link
              href="#proyectos"
              className={
                activeLink === "proyectos"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("proyectos")}
            >
              Proyectos
            </Nav.Link>
            <Nav.Link
              href="#contacto"
              className={
                activeLink === "contacto" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("contacto")}
            >
              Contacto
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://instagram.com" className="ins">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="https://whatsapp.com" className="What">
                <img src={whatsapp} alt="whatsapp" />
              </a>
            </div>
            <a href="/cvLuciana.pdf" download>
              <button className="cv" onClick={() => console.log("cv")}>
                <span>Descarga mi CV</span>
              </button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
