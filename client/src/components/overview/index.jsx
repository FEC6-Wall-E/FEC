/* eslint-disable no-unused-vars */
import React from 'react';
import Image from './image/index.jsx';
import ProductInfo from './info/index.jsx';
import StyleSelector from './styleSelector/index.jsx';
import AddToCart from './addToCart/index.jsx';
import Details from './details/index.jsx';

function Overview({
  product, styles, setStyles, metaData,
}) {
  const [style, setStyle] = React.useState(styles[0]);

  React.useEffect(() => {
    setStyle(styles[0]);
  }, [styles]);

  const sizes = [];
  Object.keys(style.skus).forEach((sku) => {
    if (style.skus[sku].quantity !== 0) {
      sizes.push(style.skus[sku].size);
    }
  });

  return (
    <div id="overviewContainer">
      <div id="overview">
        <div className="leftSide">
          <Image style={style} />
        </div>
        <div className="rightSide">
          <ProductInfo metaData={metaData} product={product} style={style} />
          <StyleSelector currentStyle={style} allStyles={styles} setStyle={setStyle} />
          <AddToCart currentStyle={style} sizes={sizes} />
        </div>
      </div>
      <Details product={product} />
    </div>
  );
}

export default Overview;
