import React from "react";
import "./product.css";
import foodPage from './food-donate.jpg'
const Page1 = () => {
  return (
    <div className="container-page">
      <div className="card-page">
        <img src={foodPage} alt="img" />
        <div className="content">
          <h1>Title</h1>
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing se
          </p>
            <button className="btn-page">View more</button>
        </div>
      </div>
    </div>
  );
};

export default Page1;
