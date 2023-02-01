/* eslint-disable no-unused-vars */
import React from 'react';
import Overview from './overview/index.jsx';
import QandA from './qa/QandA.jsx';
import RelatedProducts from './relatedItemsAndComparison/RelatedProducts.jsx';
import YourOutfitList from './relatedItemsAndComparison/YourOutfitList.jsx';
import examples from '../examples.js';

function App() {
  const [product, setProduct] = React.useState(examples.product);
  const [styles, setStyles] = React.useState(examples.styles.results);
  const [meta, setMeta] = React.useState(examples.meta);

  return (
    <div id="app">
      <Overview product={product} styles={styles} setStyles={setStyles} metaData={meta} />
      <RelatedProducts />
      {/* <YourOutfitList /> */}
      {/* <QandA /> */}
    </div>
  );
}

export default App;
