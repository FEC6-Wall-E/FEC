/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import getRatingData from '../../sharedComponents/lib/averageRating.js';
import StarRating from '../../sharedComponents/StarRating.jsx';
import Price from './price.jsx';

function ProductInfo({ metaData, product, style }) {
  const ratingData = getRatingData(metaData);
  const href = 'http://localhost:3000';
  const twitterText = `Checkout this ${product.name} from Atelier! Get it at ${href}?pid=${product.id}`;

  return (
    <div id="ProductInfo">
      <StarRating count={ratingData.ratings} rating={ratingData.averageRating} />
      <h2 className="infoCategory">{product.category}</h2>
      <h1 className="infoName">{product.name}</h1>
      <Price original={style.original_price} sale={style.sale_price} />
      <p className="infoDescription">{product.description}</p>
      <div id="shareButtons">
        <i
          // eslint-disable-next-line no-undef
          onClick={() => window.open(`https://twitter.com/intent/tweet?text=${twitterText}`)}
          className="fa-brands fa-twitter fa-2xl shareButton"
        />
        <i
          // eslint-disable-next-line no-alert, no-undef
          onClick={() => alert('This button doesnt work until deployed!\n\nThis is in overview/info/index.jsx!')}
          // onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${href}`)}
          className="fa-brands fa-facebook fa-2xl shareButton"
        />
        <i
          // eslint-disable-next-line no-undef
          onClick={() => window.open(`https://www.pinterest.com/pin/create/link/?url=${href}/&description=${product.slogan}`)}
          className="fa-brands fa-pinterest fa-2xl shareButton"
        />
      </div>
    </div>
  );
}

export default ProductInfo;
