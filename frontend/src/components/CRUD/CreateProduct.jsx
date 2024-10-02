import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";
import "./CreateProduct.css";

const CreateProduct = ({ addProduct }) => {
  const [newItem, setNewItem] = useState({
    itemName: "",
    itemDesc: "",
    image: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(newItem).forEach(([key, value]) => {
      formData.append(key, value);
    });

    axios
      .post("http://localhost:5000/produkt", formData)
      .then((res) => {
        console.log("Product Added");
        addProduct(res.data);

        setNewItem({
          itemName: "",
          itemDesc: "",
          image: "",
        });

        document.getElementById("itemImage").value = null;
      })
      .catch((err) => {
        console.log("Product Not Added: " + err);
      });
  };

  return (
    <Container>
      <h1>Shtoni produkte</h1>
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <Form.Group className="mb-3" controlId="itemName">
          <Form.Label>Emri i produktit.</Form.Label>
          <Form.Control
            type="text"
            value={newItem.itemName}
            onChange={(e) =>
              setNewItem({ ...newItem, itemName: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="itemDescription">
          <Form.Label>Pershkrimi i produktit.</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={newItem.itemDesc}
            onChange={(e) =>
              setNewItem({ ...newItem, itemDesc: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="itemImage">
          <Form.Label>Vendosni foton</Form.Label>
          <Form.Control
            type="file"
            id="itemImage"
            onChange={(e) =>
              setNewItem({ ...newItem, image: e.target.files[0] })
            }
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Shto
        </Button>
      </Form>
    </Container>
  );
};

export default CreateProduct;
