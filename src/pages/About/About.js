import React from "react";
import { Link } from "react-router-dom";
import "./about.css";
import jp from "./jp-img.jpg";
const About = () => {
  return (
    <div className="about-page">
      <div className="card-page">
        <img src={jp} alt="img" />
        <div className="content">
          <h1>Donate Team</h1>
          <p>
            As students living and studying in Japan, our mission is to create a
            website that facilitates food donation and distribution to local
            communities facing food insecurity. By uniting students from
            different backgrounds and cultures, we aim to make a positive impact
            on the lives of those in need while fostering a stronger sense of
            community and empathy.
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

export default About;
