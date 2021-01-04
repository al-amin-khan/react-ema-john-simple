import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';

const ProductDetail = () => {
  const {productKey} = useParams();
  const product_pd = fakeData.find(item => item.key === productKey);
  return (
    <div>
      <h1>{productKey} This is product detail page</h1>
    </div>
  );
};

export default ProductDetail;