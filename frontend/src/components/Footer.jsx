import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import logo1 from "./images/logo1.jpeg";
import whatsappLogo from "./images/whatsapp-logo.png";
import "./Footer.css";

const Footer = () => {
  const phoneNumber = "+355682725751";
  const whatsappMessage = "Përshëndetje!";

  return (
    <footer className="footer">
      <Container>
        <Row className="mb-4">
          <Col xs={12} md={4} className="text-center">
            <Image src={logo1} roundedCircle width={100} />
            <h5 className="mt-2">Prendi Decor</h5>
            <h6>ZGJEDHA IDEALE</h6>
          </Col>
          <Col xs={12} md={4} className="text-center">
            <ul className="list-unstyled">
              <li>
                <a href="/">Kryefaqja</a>
              </li>
              <li>
                <a href="/products/">Produktet</a>
              </li>
              <li>
                <a href="/about/">Rreth Nesh</a>
              </li>
              <li>
                <a href="/contact/">Kontakti</a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={4} className="text-center">
            <h5>Na kontaktoni</h5>
            <p>Email: info@prendidecor.com</p>
            <p>
              <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                  whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center"
              >
                <Image
                  src={whatsappLogo}
                  alt="WhatsApp"
                  width={80}
                  height={80}
                  className="me-4"
                />
                Phone: {phoneNumber}
              </a>
            </p>
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Prendi Decor. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
