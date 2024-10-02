import React from "react";
import { Carousel } from "react-bootstrap";
import { motion } from "framer-motion";
import "./Carosel1.css";
import logo from "./images/logo.jpeg";
import logo2 from "./images/logo2.jpeg";
import logo3 from "./images/logo3.jpeg";

const Carosel1 = () => {
  return (
    <Carousel interval={3000} fade>
      <Carousel.Item>
        <motion.img
          className="caroselphoto"
          src={logo2}
          alt="First slide"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
        <Carousel.Caption>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            PREDNI DECOR
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            JU BENI POROSINE DHE NE KRIJOME ARTIN.
          </motion.p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <motion.img
          className="caroselphoto"
          src={logo}
          alt="Second slide"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
        <Carousel.Caption>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            PRENDI DECOR
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            JU BENI POROSINE DHE NE KRIJOME ARTIN.
          </motion.p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <motion.img
          className="caroselphoto"
          src={logo3}
          alt="Third slide"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
        <Carousel.Caption>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            PRENDI DECOR
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            JU BENI POROSINE DHE NE KRIJOME ARTIN.
          </motion.p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carosel1;
