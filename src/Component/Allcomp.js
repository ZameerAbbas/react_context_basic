import React from "react";
import About from "./About";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";

const Allcomp = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
};

export default Allcomp;
