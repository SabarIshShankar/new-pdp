import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./ProductPage";
import Discounts from "./Discounts";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product" element={<ProductPage />} />
        <Route path="/room" element={<Discounts />} />
      </Routes>
    </BrowserRouter>
  );
}
