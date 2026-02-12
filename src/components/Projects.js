import { Col, Container, Row } from "react-bootstrap";
import portadaAntartida from "../assets/imagenes/portadaAntartidarefrigeracion.png";
import portadaLapelu from "../assets/imagenes/portadaLapelu.png";
import portadaCalzadoslyp from "../assets/imagenes/portadaCalzadoslyp.png";
import portadaLyp from "../assets/imagenes/PortadaLyp.png";
import portadaSistema from "../assets/imagenes/portadaSistema.jpg";

export const Projects = () => {
  const projects = [
    {
      title: "Pagina web Antartida Refrigeracion",
      description:
        "Se trata de una pagina web informativa sobre los servicios que presta una compania de Climatización",
      imgUrl: portadaAntartida,
      url: "https://antartida-tercerentrega.vercel.app",
    },
    {
      title: "Pagina web Peluqueria La Pelu",
      description:
        "Se trata de una pagina web informativa sobre distintos servicio de la estetica",
      imgUrl: portadaLapelu,
      url: "https://stylos-theta.vercel.app",
    },
    {
      title: "Eccomerce Calzados LYP",
      description:
        "Muestra una pagina web eccomerce en la cual podes comprar calzado infantil",
      imgUrl: portadaCalzadoslyp,
      url: "https://proyecto-lyp-calzado-infantil.vercel.app/",
    },
    {
      title: "Eccomerce Tienda LYP",
      description: "Es una eccomerce sobre articulos varios.",
      imgUrl: portadaLyp,
      url: "https://tiendalyp.vercel.app/",
    },
    {
      title: "Sistema de gestion de productos- clientes-usuarios",
      description:
        "Se trata de una pagina web en la cual ademas podes agregar clientes y articulos a un sistema con Phyton",
      imgUrl: portadaSistema,
    },
  ];
  return (
    <section className="project" id="projets">
      <Container>
        <Row>
          <Col>
            <h2>Proyectos</h2>
            <p>
              A continuación se muestran algunos de los proyectos en los que he
              trabajado.
            </p>
            <Row>
              {projects.map((project, index) => (
                <Col key={index} sm={6} md={4}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card"
                  >
                    {project.imgUrl && (
                      <img
                        src={project.imgUrl}
                        alt={project.title}
                        className="project-img"
                      />
                    )}
                    <h3 className="titulo">{project.title}</h3>
                    <p className="descripcion">{project.description}</p>
                  </a>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
