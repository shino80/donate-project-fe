import React from "react";
import { Link } from "react-router-dom";
import "./product.css";
import foodPage from "./food-donate.jpg";
const Page1 = () => {
  return (
    <div className="container-page">
      <div className="card-page">
        <img src={foodPage} alt="img" />
        <div className="content">
          <h1>Food Donation</h1>
          <p>
            Donating food is crucial in addressing food insecurity and hunger,
            which affect millions of people worldwide. By donating food, you can
            contribute to reducing waste, supporting vulnerable populations, and
            ensuring access to nutritious meals for those who need it most.
          </p>
          <Link to="/donate-form">
            {" "}
            <button className="btn-page">Donate Now !</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page1;
