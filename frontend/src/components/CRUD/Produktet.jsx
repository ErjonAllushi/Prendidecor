import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import CreateProduct from "./CreateProduct";
import { motion } from "framer-motion";
import "./Produktet.css";

const Produktet = () => {
  const [items, setItems] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("search") || "";

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("http://localhost:5000/produkt")
        .then((res) => setItems(res.data))
        .catch((err) => console.log("No data: " + err));
    };
    getData();
  }, []);

  const maxDescription = (description, maxLength) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength) + "...";
  };

  const filteredItems = items.filter(
    (item) =>
      item.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.itemDesc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  const addNewProduct = (newProduct) => {
    setItems((prevItems) => [...prevItems, newProduct]);
  };

  return (
    <div>
      <Container className="mb-5">
        <h1 className="text-center product-title my-4">ARTI QE OFROJME</h1>

        <div className="mb-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bt" variant="success" onClick={toggleForm}>
              {showForm ? "Mbylleni" : "Shtoni produkt te ri"}
            </Button>
          </motion.div>
        </div>

        {showForm && (
          <motion.div
            className="mb-5"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CreateProduct addProduct={addNewProduct} />
          </motion.div>
        )}

        <Row className="g-4">
          {filteredItems.map((item) => (
            <Col xs={12} sm={6} md={4} lg={3} key={item._id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="h-100 shadow-sm">
                  <Card.Img
                    variant="top"
                    src={"http://localhost:5000/images/" + item.image}
                    alt={item.itemName}
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="text-center product-title">
                      {item.itemName}
                    </Card.Title>
                    <Card.Text className="flex-grow-1 product-desc">
                      {maxDescription(item.itemDesc, 30)}
                    </Card.Text>
                    <Link
                      to={"/readOne/" + item._id}
                      className="btn btn-primary mt-auto"
                    >
                      View More
                    </Link>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
          {filteredItems.length === 0 && (
            <p>No products found for "{searchTerm}".</p>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Produktet;
