import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
  Image,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo1 from "./images/logo1.jpeg";
import "./NavigationBar.css";

const NavigationBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${searchTerm}`);
    }
  };

  return (
    <div className="navBar">
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <Image src={logo1} alt="logo1" width={90} height={55} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="/">Kryefaqja</Nav.Link>
              <Nav.Link href="products">Produktet</Nav.Link>
              <Nav.Link href="about">Rreth Nesh</Nav.Link>
              <NavDropdown title="More" id="navbarScrollingDropdown">
                <NavDropdown.Item href="contact">Kontakti</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex" onSubmit={handleSearch}>
              <Form.Control
                type="search"
                placeholder="Kerko..."
                className="me-2"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button
                className="buttonstyle"
                variant="outline-success"
                type="submit"
              >
                Kerko
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
