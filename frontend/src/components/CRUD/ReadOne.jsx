import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./ReadOne.css";

const ReadOne = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("http://localhost:5000/produkt/" + id)
        .then((res) => setItem(res.data))
        .catch((err) => console.log(err));
    };
    getData();
  }, [id]);

  const handleDelete = async () => {
    await axios
      .delete("http://localhost:5000/delete/" + id)
      .then(() => navigate("/products/"))
      .catch((err) => console.log(err));
  };

  return (
    <Container className=" container-margin">
      <Row className="align-items-center">
        <Col sm={12} md={6} lg={8}>
          <Card className="shadow-lg border-0">
            <Card.Body>
              <Card.Title className="text-center mb-4">
                {item.itemName}
              </Card.Title>
              <Card.Text className="text-muted">{item.itemDesc}</Card.Text>
              <div className="d-flex justify-content-center mt-4">
                <Button
                  variant="danger"
                  onClick={handleDelete}
                  className="me-3"
                >
                  Fshije
                </Button>
                <Button variant="warning" href={"/updateOne/" + item._id}>
                  Perditeso
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <div className="image-container">
            <img
              src={"http://localhost:5000/images/" + item.image}
              alt={item.itemName}
              className="img-fluid rounded shadow"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ReadOne;
