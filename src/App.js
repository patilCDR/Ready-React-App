import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="about" index element={<About />} />
          <Route path="services" index element={<Services />} />
          <Route path="contact" index element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
