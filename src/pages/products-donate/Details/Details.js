import React, { useState, useEffect } from "react";

import { useParams, Link } from "react-router-dom";
// import data from "../product/data";
import "./detail.css";
// import axios from "axios";

const API_TEST = "https://api.escuelajs.co/api/v1/products/";
const Details = () => {
  const { id } = useParams();
  console.log(id)
  // const product = data.find((item) => item.id === parseInt(id));
  // const { name, image, stocked } = product;
  const [detailProduct, setDetailProduct] = useState({
    name: null,
    image: null,
    stocked: null,
  });
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_TEST}${id}`);
        const data = await res.json();
        const name = data.category.name;
        const image = data.category.image;
        const stocked = data.price;
        const chooseProduct = {
          name,
          image,
          stocked,
        };
        console.log(chooseProduct)
        setDetailProduct(chooseProduct);
        // Process the data or set it to state
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

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
    console.log(`Total products now is ${stocked}`);
  };
  const { name, image, stocked } = detailProduct;
  return (
    <section className="section-app">
      <div className="product-section">
        <div className="detail-product">
          <img src={image} alt={name} />
          <div className="product-info">
            <div>
              {" "}
              <p>Name: {name}</p>
            </div>
            <div>
              <p>Stocked: {stocked}</p>
            </div>
            <div>
              {" "}
              <p>
                Quantity:{" "}
                <select
                  onChange={handleQuantityChange}
                  value={quantity}
                  className="select-box"
                >
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
                Recevie
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Details;
