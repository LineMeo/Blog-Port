import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/Home.js";
import Works from "../Components/Works.js";

import Header from "./Header";
import Footer from "./Footer";

export default function Router() {
  return (
    <BrowserRouter>
      <Header rota="Home" rota2="Works" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Works" element={<Works />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
