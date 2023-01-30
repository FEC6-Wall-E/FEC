import React from 'react';
import getRatingData from '../../sharedComponents/lib/averageRating.js';
import StarRating from '../../sharedComponents/StarRating.jsx';


function ProductInfo({ metaData, product }) {
  const ratingData = getRatingData(metaData);

  return (
    <div id="ProductInfo">
      <StarRating count={ratingData.ratings} rating={ratingData.averageRating} />
    </div>
  );
}

export default ProductInfo;
