import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/Home.js";
import Personagens from "../Components/Home.js";
import Grif from "../Components/Home.js";
import Corv from "../Components/Home.js";

import Header from "./Header";
import Footer from "./Footer";

export default function Router() {
  return (
    <BrowserRouter>
      <Header rota="Home" rota2="About" rota3="Works" rota4="Onu" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<Personagens />} />
        <Route path="/Works" element={<Grif />} />
        <Route path="/Onu" element={<Corv />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
