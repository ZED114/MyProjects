import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Services from "./Components/Services";
import Navbar from "./Components/Navbar";
import MyApp from "./Components/MyApp";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<MyApp />} />
          <Route path="/about" element={<MyApp />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<MyApp />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
