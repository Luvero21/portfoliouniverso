import { useState, useEffect, useCallback, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import Constelacion from "./constelaciones";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 1800;

  // ✅ memorizado para que no cambie en cada render
  const toRotate = useMemo(() => [" Desarrolladora Web "], []);

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];

    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prev) => prev + 1);
      setDelta(500);
    }
  }, [text, isDeleting, loopNum, toRotate]);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [tick, delta]);

  return (
    <section className="banner" id="home">
      <Constelacion /> {/* 🌌 Fondo animado */}
      <Container>
        <Row className="align-item-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Bienvenidos a mi Portfolio</span>
            <div className="intro-text">
              <h1>Soy Luciana!</h1>
              <h2 className="wrap">{text}</h2>
            </div>
            <p>
              Una programadora web, mi recorrido comenzó en un momento de cambio
              global y desde entonces no he dejado de aprender. Descubrí en el
              desarrollo una mezcla perfecta entre lógica, creatividad y
              resolución de problemas. Hoy construyo experiencias digitales
              modernas mientras sigo avanzando en este camino interminable de
              nuevas tecnologías, donde cada proyecto es una oportunidad de
              crecer.
            </p>

            <button onClick={() => console.log("connect")}>
              Conectemonos! <ArrowRightCircle size={25} />
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
