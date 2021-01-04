import React, { useState } from 'react';
import { useEffect } from 'react';
import fakeData from '../../fakeData';
import {getDatabaseCart} from '../../utilities/databaseManager'
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    //cart-data
    const savedCart = getDatabaseCart();
    const productKey = Object.keys(savedCart);
    const cartProduct = productKey.map(key => {
      const product = fakeData.find(pd => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });
    setCart(cartProduct);
  }, []);
  return (
    <div>
      <h1>Cart items: {cart.length}</h1>
      {
        cart.map( item => <ReviewItem product={item} key={item.key}></ReviewItem>)
      }
    </div>
  );
};

export default Review;