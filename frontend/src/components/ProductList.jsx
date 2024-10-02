import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "./ProductList.css";
import logo4 from "./images/logo4.jpeg";
import logo from "./images/logo.jpeg";
import logo6 from "./images/logo6.jpeg";
import logo7 from "./images/logo7.jpeg";

const products = [
  {
    id: 1,
    name: "Vazo",
    image: logo4,
  },
  {
    id: 2,
    name: "Tavolina",
    image: logo,
  },
  {
    id: 3,
    name: "Parmake",
    image: logo6,
  },
  {
    id: 4,
    name: "Dekorime",
    image: logo7,
  },
];

const ProductList = () => {
  return (
    <div className="product-list">
      <h2 className="text-center mb-4">Cfare ofrojme ne...</h2>

      <Row>
        {products.map((product, index) => (
          <Col key={product.id} xs={12} md={6} lg={3} className="mb-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-center">
                    {product.name}
                  </Card.Title>

                  <Button
                    variant="primary"
                    href="/products/"
                    className="mt-auto align-self-center"
                  >
                    Shiko me shume
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductList;
