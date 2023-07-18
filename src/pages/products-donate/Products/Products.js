import React, { useState, useEffect } from "react";
import Product from "../product/Product";
import './products.css';

const API_TEST = "https://api.escuelajs.co/api/v1/products?offset=0&limit=10";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(API_TEST)
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <section className="section-app">
      <div className="section">
        <h1 className="section-title">Products</h1>
        <div className="products-center">
          {data.map(product => (
            <Product
              key={product.id}
              name={product.category.name}
              image={product.category.image}
              stocked={product.price}
                id={product.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
