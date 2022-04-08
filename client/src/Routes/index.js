import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/NavBar";
import Admin from "../pages/Admin";

const index = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gestion-de-la-cave" element={<Admin />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default index;
