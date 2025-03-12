// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Global components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BrowseCars from "./pages/BrowseCars";
import CarDetail from "./pages/CarDetail";

const App = () => {
  return (
    <Router>
      <Navbar />

      {/* Define routes here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/browse" element={<BrowseCars />} />
        <Route path="/car/:carId" element={<CarDetail />} />

        {/* 404 Fallback */}
        <Route path="*" element={<div className="p-8">Page Not Found</div>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
