/* eslint-disable no-unused-vars */
import React from 'react';
import Image from './image/index.jsx';
import ProductInfo from './info/index.jsx';
import StyleSelector from './styleSelector/index.jsx';
import AddToCart from './addToCart/index.jsx';
import Details from './details/index.jsx';

function Overview({
  product, styles, setStyles, metaData, theme,
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
    <div onClick={}data-testid="OVERVIEW" id="overviewContainer">
      <div data-testid="OVERVIEW_MAIN" id="overview">
        <div className="leftSide">
          <Image style={style} />
        </div>
        <div className="rightSide">
          <ProductInfo metaData={metaData} product={product} style={style} theme={theme} />
          <StyleSelector
            currentStyle={style}
            allStyles={styles}
            setStyle={setStyle}
            theme={theme}
          />
          <AddToCart currentStyle={style} sizes={sizes} theme={theme} />
        </div>
      </div>
      <Details product={product} theme={theme} />
    </div>
  );
}

export default Overview;
