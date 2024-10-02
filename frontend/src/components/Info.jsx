import React from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import "./Info.css";
import f1 from "./images/f1.jpeg";
import logo5 from "./images/logo5.jpeg";
import logo8 from "./images/logo8.jpeg";

const Info = () => {
  return (
    <div className="info-section">
      <Container fluid>
        <Row>
          <Col md={6} className="info-left">
            <div className="designer-info">
              <h1>Prendi Dekor</h1>
              <p>
                Duhet te dekoroni shtepine dhe nuk keni ndonje ide te qarte? Ne
                jemi ketu per ju per tju ndihmuar te sjellim ate qe doni, sepse
                kemi nje larshmeri produktesh qe ju japim zgjidhje per cdo gje
                rreth dekorimit. Mos hezitoni te na kontaktoni jemi ketu per ju.
              </p>
              <Button variant="dark" href="contact">
                Kontakt
              </Button>
            </div>
          </Col>
          <Col md={6} className="info-right">
            <Carousel interval={3000} fade>
              <Carousel.Item>
                <img src={f1} alt="Designer 1" className="designer-img" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={logo5} alt="Designer 2" className="designer-img" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={logo8} alt="Designer 3" className="designer-img" />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Info;
