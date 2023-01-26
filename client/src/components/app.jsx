/* eslint-disable no-unused-vars */
import React from 'react';
import Overview from './overview/index.jsx';
import examples from '../examples.js';

function App() {
  const [product, setProduct] = React.useState(examples.product);
  const [styles, setStyles] = React.useState(examples.styles.results);

  return (
    <div>
      <Overview product={product} styles={styles} setStyles={setStyles} />
    </div>
  );
}

export default App;
