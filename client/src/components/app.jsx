/* eslint-disable no-unused-vars */
import React from 'react';
import Overview from './overview/index.jsx';
import examples from '../examples.js';

function App() {
  const [product, setProduct] = React.useState(examples.product);
  const [styles, setStyles] = React.useState(examples.styles.results);
  const [meta, setMeta] = React.useState(examples.meta);

  return (
    <div id="app">
      <Overview product={product} styles={styles} setStyles={setStyles} metaData={meta} />
    </div>
  );
}

export default App;
