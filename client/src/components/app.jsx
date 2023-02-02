/* eslint-disable no-unused-vars */
import React from 'react';
import axios from 'axios';
import Overview from './overview/index.jsx';
import examples from '../examples.js';

function App() {
  const [product, setProduct] = React.useState(null);
  const [styles, setStyles] = React.useState(null);
  const [meta, setMeta] = React.useState(null);
  // eslint-disable-next-line no-undef
  const seedPID = +document.querySelector('main').getAttribute('pid');

  React.useEffect(() => {
    Promise.all([
      axios.get(`/products/${seedPID}`)
        .then((result) => {
          setProduct(result.data);
        }),
      axios.get(`/products/${seedPID}/styles`)
        .then((result) => {
          setStyles(result.data.results);
        }),
      axios.get(`/meta/${seedPID}`)
        .then((result) => {
          setMeta(result.data);
        }),
    ])
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  }, []);

  return product && styles && meta ? (
    <div id="app">
      <Overview product={product} styles={styles} setStyles={setStyles} metaData={meta} />
    </div>
  ) : null;
}

export default App;
