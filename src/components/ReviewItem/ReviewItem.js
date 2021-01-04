import React from 'react';

const ReviewItem = (props) => {
  const {name, quantity} = props.product;
  const style = {
    margin: 50,
    padding: 10,

  }
  return (
    <div style={style}>
      <h4 className="product-name">{name}</h4>
      <p>Quantity: {quantity}</p>
      <button className="cart-btn">Remove Product</button>
    </div>
  );
};

export default ReviewItem;