/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { TwitterShareButton } from 'react-twitter-embed';
import getRatingData from '../../sharedComponents/lib/averageRating.js';
import StarRating from '../../sharedComponents/StarRating.jsx';
import Price from './price.jsx';

function ProductInfo({ metaData, product, style }) {
  const ratingData = getRatingData(metaData);
  const twitterText = `Checkout this ${product.name} from Atelier! Get it at http://localhost:3000/${product.id}`;

  return (
    <div id="ProductInfo">
      <StarRating count={ratingData.ratings} rating={ratingData.averageRating} />
      <h2 className="infoCategory">{product.category}</h2>
      <h1 className="infoName">{product.name}</h1>
      <Price original={style.original_price} sale={style.sale_price} />
      <p className="infoDescription">{product.description}</p>
      <div id="shareButtons">
        <i
          onClick={() => window.open(`https://twitter.com/intent/tweet?text=${twitterText}`)}
          className="fa-brands fa-twitter fa-2xl shareButton"
        />
      </div>
    </div>
  );
}

export default ProductInfo;
