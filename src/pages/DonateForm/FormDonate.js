import React, { useState } from "react";
import data from "./data";
import { Link,useNavigate } from "react-router-dom";
import "./form.css";
// import axios from "axios";
export const FormDonate = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [foodName, setFoodName] = useState("Choose Food");
  const [category, setCategory] = useState("Category");
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };
  const handleFoodName = (event) => {
    setFoodName(event.target.value);
  };
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleSubmit =  async () => {
    console.log(
      "Name" + foodName + " Category" + category + " Quantity" + quantity
    );
    // const res = await axios.post(PRODUCTS_URL, {
    //   name : foodName,
    //   category : category,
    //   quantity : quantity
    // })
    // navigate("/products")
  };

  return (
    <section className="section-donate">
   
      <div className="donate-form">
          <h1 className="h1-donate">Donate Form </h1>
          <div className="info-donate">
            <label className="donate-label">Name</label>
            <select onChange={handleFoodName} value={foodName}>
            <option>{foodName}</option>
              {data.map((product) => {
                return <option>{product.name}</option>;
              })}
            </select>
          </div>
          <div className="info-donate">
            <label className="donate-label">Category</label>
            <select onChange={handleCategory} value={category}>
            <option>{category}</option>
              {data.map((product) => {
                return <option>{product.name}</option>;
              })}
            </select>
          </div>
          <div className="info-donate">
            <label className="donate-label">Quantity </label>
            <select onChange={handleQuantityChange} value={quantity}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>{" "}
          </div>
          <div className="button-form">
            <Link to="">
              <button  className="button-donate" onClick={handleSubmit}>Donate</button>
            </Link>
          </div>
      </div>
      
    </section>
  );
};
export default FormDonate;
