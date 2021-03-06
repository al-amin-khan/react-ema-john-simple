import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
  const fakeDataFirstTen = fakeData.slice(0,10);
  const [products, setProducts] = useState(fakeDataFirstTen);
  const [cart, setCart] = useState([]);


  
  const handleAddProduct = (product) => {
    console.log(product);
    const updatedCart = [...cart, product];
    setCart(updatedCart);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {
          products.map(product => <Product product={product} handleAddProduct={() => handleAddProduct(product)} key={product.key}></Product>)
        }
      </div>
      <div className="cart-container">
        <h3>Order Summery: {cart.length}</h3>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;