import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import logo1 from "./images/logo1.jpeg";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <Container className="about-us-container my-5 py-5 shadow-lg rounded">
      <Row className="align-items-center">
        <Col md={6} className="text-center">
          <Image
            src={logo1}
            alt="About Us"
            className="about-us-image rounded-circle shadow"
            fluid
          />
        </Col>
        <Col md={6} className="text-center text-md-start">
          <h2 className="mb-4 about-us-title">PRENDI DECOR</h2>

          <p className="p">
            PRENDI DECOR: Nje nga kompanite me interesante ne fushën e ndertimit
            dhe design-it mbreslënës. Një kompani referuese per inxhinier,
            arkitekt dhe individ qe e duan "te bukurën". PRENDI DECOR -
            PRODUKTE: Prodhime betoni; Ndertime parmake ballkonesh; Zgara -
            Furra; Parmakë betoni; Bazamente; Lavamane; Vazo; Pllaka dekorative;
            Tavolina; Stola + Kosha; Gur të bardhë; Çezme; Zgara; Shatrivane;
            Kuzhinier; Kërpudha; Dekorative; Statuja etj. PRENDI DECOR: Mbi 500
            produkte / artikuj dhe forma të ndryshme betoni, mbi 500 artikuj ku
            puna eshte e perkthyer ne produkte cilesore dhe, që mbeten gjatë në
            memorien e klientelës. PRENDI DECOR: Vizioni i kompanisë është për
            ta kthejmë punën / angazhimin e stafit / produktet në imazhe dhe
            vepra arti. Ne produkte sipas standardit europian! PRENDI DECOR:
            Duam qe klientët te jenë të kenaqur me produktet qe porosisin tek
            ne, me sherbimin e ofruar dhe gmimin mjaft konkurrues, gjithashtu.
            PRENDI DECOR: Punojme ne te gjithe Shqiperine!! Per individe dhe
            kompani te ndryshme biznesi. Produktet dhe punimet tona gienden ne
            vila dhe rezidenca, pallate, objekte civile dhe industriale, qendra
            tregtare dhe godina komerciale. Cilesia dhe profesionalizmi i
            spikatur jane pjese e perditshmerise sonë. Ju mirepresim
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
