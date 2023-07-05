import React ,{useState} from "react";

import { useParams, Link } from "react-router-dom";
import data from "../product/data";
import "./detail.css";
import axios from "axios";

// patchUrl = ""
const Details = () => {
  const { id } = useParams();
  const product = data.find((item) => item.id === parseInt(id));
  const { name, image, stocked } = product;

  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };


  
  const handleDonate = async () => {
     // patch tong san pham khi nguoi dung donate
    // totalProduct = stocked + quantity ; 
    // const res = await (`${patchUrl}/products/${id}}`, {
    //   stocked : totalProduct
    // })
    // console.log(`Total products now is ${totalProduct}`)
    console.log(`Total products now is ${stocked}`)
  };
  return (
    <section className="section-app">
    <div className="product-section">
      <div className="detail-product">
        <img src={image} alt={name} />
        <div className="product-info">
          <div className="info-row">
            {" "}
            <p>Name: {name}</p>
          </div>
          <div className="info-row">
            <p>Stocked: {stocked}</p>
          </div>
          <div className="info-row">
            {" "}
            <p>
              Quantity:{" "}
              <select onChange={handleQuantityChange} value={quantity} className="select-box">
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
            </p>
          </div>

          <div className="buttons">
            <Link onClick={handleDonate} className="btn-donate" to="">
              Donate
            </Link>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};
export default Details;
