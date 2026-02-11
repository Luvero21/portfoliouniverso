import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import porcentaje from "../assets/imagenes/html5.png";
import porcentaje1 from "../assets/imagenes/css3.png";
import porcentaje2 from "../assets/imagenes/js.png";
import porcentaje3 from "../assets/imagenes/react.png";
import porcentaje4 from "../assets/imagenes/python.png";
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="Skills">
              <h2>Skills</h2>
              <p>Desarrollo Front-end.</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={porcentaje} alt="porcentaje" />
                  <h5>HTML5</h5>
                </div>
                <div className="item">
                  <img src={porcentaje1} alt="porcentaje" />
                  <h5>CSS 3</h5>{" "}
                </div>
                <div className="item">
                  <img src={porcentaje2} alt="porcentaje" />
                  <h5>JAVASCRIPT</h5>
                </div>
                <div className="item">
                  <img src={porcentaje3} alt="porcentaje" />
                  <h5>REACT</h5>
                </div>
                <div className="item">
                  <img src={porcentaje4} alt="porcentaje" />
                  <h5>PYTHON</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
