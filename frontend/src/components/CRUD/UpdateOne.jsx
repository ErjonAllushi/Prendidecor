import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import { Container, Form, Button } from "react-bootstrap";
const UpdateOne = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [updateItem, setUpdateItem] = useState({
    itemName: "",
    itemDesc: "",
    image: "",
  });
  useEffect(() => {
    const getData = async () => {
      await axios
        .get("http://localhost:5000/produkt/" + id)
        .then((res) => {
          const { itemName, itemDesc, image } = res.data;
          setUpdateItem((prevItem) => ({
            ...prevItem,
            itemName: itemName || "",
            itemDesc: itemDesc || "",
            image: image || "",
          }));
        })
        .catch((err) => console.log(err));
    };
    getData();
  }, [id]);
  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(updateItem).forEach(([key, value]) => {
      formData.append(key, value);
    });
    axios
      .patch("http://localhost:5000/update/" + id, formData)
      .then((res) => {
        console.log("Update");
      })
      .catch((err) => {
        console.log("Not update:" + err);
      });
  };

  const handleBack = async () => {
    navigate("/products/");
  };
  return (
    <Container>
      <Form onSubmit={handleUpdate} encType="multipart/form-data">
        <Form.Group className="mb-3" controlId="itemName">
          <Form.Label>Emri i produktit</Form.Label>
          <Form.Control
            type="text"
            value={updateItem.itemName}
            onChange={(e) =>
              setUpdateItem({ ...updateItem, itemName: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="itemDescription">
          <Form.Label>Pershkrimi i produktit</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={updateItem.itemDesc}
            onChange={(e) =>
              setUpdateItem({ ...updateItem, itemDesc: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="itemImage">
          <Form.Label>Foto</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) =>
              setUpdateItem({ ...updateItem, image: e.target.files[0] })
            }
          />
        </Form.Group>
        <Button type="submit" variant="warning">
          Perditeso
        </Button>
        <Button type="submit" variant="warning" onClick={handleBack}>
          Kthehu
        </Button>
      </Form>
    </Container>
  );
};

export default UpdateOne;
