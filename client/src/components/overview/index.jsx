/* eslint-disable no-unused-vars */
import React from 'react';
import Image from './image/index.jsx';
import ProductInfo from './info/index.jsx';
import StyleSelector from './styleSelector/index.jsx';

function Overview({
  product, styles, setStyles, metaData,
}) {
  const [style, setStyle] = React.useState(styles[2]);

  return (
    <div id="overview">
      <StyleSelector currentStyle={style} allStyles={styles} setStyle={setStyle} />
      <ProductInfo metaData={metaData} product={product} style={style} />
      <Image images={style.photos} />
    </div>
  );
}

export default Overview;
