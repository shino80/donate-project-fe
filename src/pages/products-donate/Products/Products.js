import React from "react";

import Product from "../product/Product";
import data from "../product/data";
import './products.css'

const Products =()=> {

    return (
        <section className="section-app">
    <div className="section">
    <h1 className="section-title">Products</h1>
    <div className="products-center">
    {data.map((product) => {return <Product key={product.id} {...product} />
    })}
    </div>
    </div>
    </section>
)}

export default Products;