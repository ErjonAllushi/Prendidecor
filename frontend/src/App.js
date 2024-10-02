import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Produktet from "./components/CRUD/Produktet";

import ReadOne from "./components/CRUD/ReadOne";
import UpdateOne from "./components/CRUD/UpdateOne";
import Contact from "./components/CRUD/Contact";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="body">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/" element={<Produktet />} />
        <Route path="/readOne/:id" element={<ReadOne />} />
        <Route path="/updateOne/:id" element={<UpdateOne />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/about/" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
