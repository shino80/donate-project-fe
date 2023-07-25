import React, { useState, useEffect } from "react";
import Login from "./auth/login/Login";
import Register from "./auth/register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Products from "./pages/products-donate/Products/Products";
import Details from "./pages/products-donate/Details/Details";
import Navbar from "./pages/NavBar/Navbar";
import { Card } from "./pages/Card/Card";
import Page1 from "./pages/hero/Product";
import Footer from "./pages/Footer/footer";
import WithNavBarFooter from "./context/WithNavBarFooter";
import FormDonate from "./pages/DonateForm/FormDonate";
import { Layout } from "./pages/Layout";
import { RequireAuth } from "./context/RequireAuth";
import ContactForm from "./pages/Contact/Contact";
import About from "./pages/About/About";
import DashBoard from "./pages/Dashboard";
function App() {
  return (
    <div className="App">
      <Router>
        <WithNavBarFooter>
          <Navbar />
        </WithNavBarFooter>

        <Routes>
          <Route path="/" element={<Layout />}>
            {/* public routes */}
            <Route path="/" element={<Page1 />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/about" element={<About />} />
            <Route element={<RequireAuth />}>
              {/* private routes */}
              <Route path="/dashboard" element={<DashBoard/>} />

              <Route path="/card" element={<Card />} />
              <Route path="/donate-form" element={<FormDonate />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<Details />} />
             
            </Route>
          </Route>
        </Routes>
        <WithNavBarFooter>
          <Footer />
        </WithNavBarFooter>
      </Router>
    </div>
  );
}
export default App;
