import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "./Contact.css";
import axios from "axios";
const Contact = () => {
  const [newContact, setNewContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
  });
  const [sms, setSms] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/Contact", newContact)
      .then((res) => {
        console.log("SMS sended");
        setSms("SMS sended");
      })
      .catch((err) => {
        console.log("SMS not sended: " + err);
      });
  };
  return (
    <Container className="Container">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>Emri</Form.Label>
          <Form.Control
            type="text"
            value={newContact.firstName}
            onChange={(e) =>
              setNewContact({ ...newContact, firstName: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Mbiemri</Form.Label>
          <Form.Control
            type="text"
            value={newContact.lastName}
            onChange={(e) =>
              setNewContact({ ...newContact, lastName: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="itemName">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={newContact.email}
            onChange={(e) =>
              setNewContact({ ...newContact, email: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="comment">
          <Form.Label>Mesazhi</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={newContact.comment}
            onChange={(e) =>
              setNewContact({ ...newContact, comment: e.target.value })
            }
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Dergo
        </Button>
      </Form>
      <p>{sms}</p>
    </Container>
  );
};

export default Contact;
