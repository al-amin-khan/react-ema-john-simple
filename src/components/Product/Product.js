import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  const {name, img, seller, price, stock} = props.product;
  const handleAddProduct = props.handleAddProduct;

  return (
    <div className="product">
      <div>
        <img src={img} alt=""/>
      </div>
      <div className="product-info">
        <h4 className="product-name">{name}</h4>
        <br/>
        <p><small>Seller: {seller}</small></p>
        <p>${price}</p>
        <p><small>Only {stock} left in the stock. Order Soon.</small></p>
        <button className="cart-btn" onClick={handleAddProduct}><FontAwesomeIcon icon={faCartPlus} /> Add to cart</button>
      </div>
    </div>
  );
};

export default Product;