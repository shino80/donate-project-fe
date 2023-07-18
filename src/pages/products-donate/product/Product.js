import React from "react";
import {Link } from 'react-router-dom';
import './product.css'
const Product =({image,name,id,stocked})=>{
return (
    <article className="product">
    <div className="image">
    <img src={image} alt={name}/>
    </div>
    <div className="product-footer">
    <h3>{name}</h3>
    <h4>Stocked:{stocked}</h4> 
    <Link  className="btn" to={`/products/${id}`}>Recevie</Link>
    </div>
    
    </article>

)
};

export default Product;