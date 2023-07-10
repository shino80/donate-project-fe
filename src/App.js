import React, { useState, useEffect } from "react";
import Login from "./auth/login/Login";
import Register from "./auth/register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import Products from "./pages/products-donate/Products/Products";
import Details from "./pages/products-donate/Details/Details";
import Navbar from "./pages/Navbar";
import { Card } from "./pages/Card/Card";
import { useGlobalContext } from "./context/context";
import Page1 from "./pages/hero/Product";
import Footer from "./pages/Footer/footer";
import WithNavBarFooter from "./context/WithNavBarFooter";

function App() {
  const { toLogin, setToLogin } = useGlobalContext();

  return (
    <div className="App">
      <Router>
      <WithNavBarFooter>
      <Navbar />
      </WithNavBarFooter>
      

        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/card" element={<Card />} />

          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Details />} />
        </Routes>
        <WithNavBarFooter>
      <Footer/>
      </WithNavBarFooter>
      </Router>
    </div>
  );
}
export default App;
