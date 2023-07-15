import React, { useState } from "react";
import data from "./data";
import { Link, useNavigate } from "react-router-dom";
import "./form.css";
// import axios from "axios";
export const FormDonate = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [foodName, setFoodName] = useState("");
  const [category, setCategory] = useState("Category");
  const [selectedImage, setSelectedImage] = useState(null);

  const [content, setContent] = useState("");
  const handleImageUpload = (event) => {
    setSelectedImage(event.target.files[0]);
  };
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleSubmit = async () => {
    

    // const res = await axios.post(PRODUCTS_URL, {
      // content : content,
      // image : selectedImage,
    //   name : foodName,
    //   category : category,
    //   quantity : quantity
    // })
    // navigate("/products")
  };

  return (
    <section className="section-donate">
      <div className="donate-form">
        <h1 className="h1-donate">Donate Form</h1>
        <form className="form-donate" onSubmit={handleSubmit}>
          <label className="donate-label">Content</label>
          <input
            value={content}
            name="content"
            onChange={(e) => setContent(e.target.value)}
            required
            id="content"
            placeholder="Content"
          />
          <label className="donate-label">Name</label>
          <input
            className=""
            value={foodName}
            name="name"
            onChange={(e) => setFoodName(e.target.value)}
            required
            id="name"
            placeholder="Food Name"
          />
          <label className="donate-label">Image</label>
          <input className="image-input" type="file" onChange={handleImageUpload} />
          <label className="donate-label">Category</label>
          <select onChange={handleCategory} value={category}>
            <option>{category}</option>
            {data.map((product) => {
              return <option>{product.name}</option>;
            })}
          </select>
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
        </form>
        <Link to="">
          <button
            onClick={handleSubmit}
            className="button-donate"
            type="submit"
          >
            Donate
          </button>
        </Link>
      </div>
    </section>
  );
};
export default FormDonate;
