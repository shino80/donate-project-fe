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
            Food donation emerges as a key solution in addressing the global
            food crisis. By donating food, individuals, communities, and
            organizations contribute to alleviating hunger and providing
            sustenance to those who struggle to access nutritious meals. Whether
            it's through local food banks, charitable organizations, or
            community-driven initiatives, every donation makes a significant
            difference in the lives of the less fortunate.
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
