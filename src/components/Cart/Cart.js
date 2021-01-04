import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
  const cart = props.cart;
  const totalPrice = cart.reduce((total, product) => total+ product.price,0);
  const tax = (totalPrice*.15);
  const grandTotal = (totalPrice+tax).toFixed(3);
  return (
    <div>
      <h3>Order Summery:</h3>
      <p>Total items ordered: {cart.length}</p>
      <p>Total Price: {totalPrice.toFixed(3)}</p>
      <p>Tax & Vat: {tax.toFixed(3)}</p>
      <p>Price with Vat: {grandTotal}</p>
      <Link to='/review'>
        <button className='cart-btn'>Review Order</button>
      </Link>
      <ol>
      {
        cart.map(item => <li>{item.name}</li>)
      }
      </ol>
    </div>
  );
};

export default Cart;