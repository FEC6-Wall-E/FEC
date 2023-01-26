import React from 'react';
import Overview from './overview/index.jsx';
import examples from '../examples.js';

function App() {
  const [product, setProduct] = React.useState(examples.product);
  const [style, setStyle] = React.useState(examples.styles.results[0]);

  return (
    <div>
      <Overview product={product} style={style} setStyle={setStyle} />
    </div>
  );
}

export default App;
