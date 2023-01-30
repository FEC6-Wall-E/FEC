import React from 'react';
import getRatingData from '../../sharedComponents/lib/averageRating.js';
import StarRating from '../../sharedComponents/StarRating.jsx';
import Price from './price.jsx';

function ProductInfo({ metaData, product, style }) {
  const ratingData = getRatingData(metaData);

  return (
    <div id="ProductInfo">
      <StarRating count={ratingData.ratings} rating={ratingData.averageRating} />
      <h2>{product.category}</h2>
      <h1>{product.name}</h1>
      <Price original={style.original_price} sale={style.sale_price} />
    </div>
  );
}

export default ProductInfo;
