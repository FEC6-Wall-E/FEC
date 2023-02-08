/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import getRatingData from '../../sharedComponents/lib/averageRating.js';
import StarRating from '../../sharedComponents/StarRating.jsx';
import Price from './price.jsx';

function ProductInfo({
  metaData, product, style, theme,
}) {
  const ratingData = getRatingData(metaData);
  const href = 'http://localhost:3000';
  const twitterText = `Checkout this ${product.name} from BnL! Get it at ${href}?pid=${product.id}`;

  return (
    <div id="ProductInfo">
      <div className="left">
        <StarRating count={ratingData.ratings} rating={ratingData.averageRating} theme={theme} />
        <h2 className={`infoCategory ${theme}`}>{product.category}</h2>
        <h1 className={`infoName ${theme}`}>{product.name}</h1>
        <Price original={style.original_price} sale={style.sale_price} theme={theme} />
      </div>
      <div id="ShareButtons">
        <div
          className={`shareButton ${theme}`}
          onClick={() => window.open(`https://twitter.com/intent/tweet?text=${twitterText}`)}
        >
          <i
            className="fa-brands fa-twitter fa-2xl"
          />
        </div>
        <div
          className={`shareButton ${theme}`}
          onClick={() => alert('This button doesnt work until deployed!\n\nThis is in overview/info/index.jsx!')}
          // onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${href}`)}
        >
          <i
            className="fa-brands fa-facebook fa-2xl"
          />
        </div>
        <div
          className={`shareButton ${theme}`}
          onClick={() => window.open(`https://www.pinterest.com/pin/create/link/?url=${`${href}?pid=${product.id}`}/&description=${product.slogan}`)}
        >
          <i
            className="fa-brands fa-pinterest fa-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
