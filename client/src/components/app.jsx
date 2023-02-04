/* eslint-disable no-unused-vars */
import React from 'react';
import axios from 'axios';
import Overview from './overview/index.jsx';
import QandA from './qa/QandA.jsx';
import RelatedProducts from './relatedItemsAndComparison/RelatedProducts.jsx';
import YourOutfitList from './relatedItemsAndComparison/YourOutfitList.jsx';
import examples from '../examples.js';

function App() {
  const [product, setProduct] = React.useState(null);
  const [styles, setStyles] = React.useState(null);
  const [meta, setMeta] = React.useState(null);
  // eslint-disable-next-line no-undef
  const initID = document.querySelector('main') ? +document.querySelector('main').getAttribute('pid') : 40344;
  const [pid, setPid] = React.useState(initID);

  if (window.location.href === 'http://localhost:3000/') window.location.href = ('http://localhost:3000/?pid=40349');

  React.useEffect(() => {
    Promise.all([
      axios.get(`/products/${pid}`)
        .then((result) => {
          setProduct(result.data);
        }),
      axios.get(`/products/${pid}/styles`)
        .then((result) => {
          setStyles(result.data.results);
        }),
      axios.get(`/meta/${pid}`)
        .then((result) => {
          setMeta(result.data);
        }),
    ])
      .catch((err) => {
        const errStatus = err.response.status;
        // eslint-disable-next-line no-console
        console.log(errStatus, err);
        if (errStatus === 500) window.location.href = ('http://localhost:3000/?pid=40349');
      });
  }, [pid]);

  return (
    <div id="app">
      {product && styles && meta
        ? <Overview product={product} styles={styles} setStyles={setStyles} metaData={meta} />
        : null}
      {/* <RelatedProducts />
      <YourOutfitList /> */}
      {/* <QandA /> */}
    </div>
  );
}

export default App;
