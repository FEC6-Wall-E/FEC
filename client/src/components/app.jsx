/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import Overview from './overview/index.jsx';
import QandA from './qa/QandA.jsx';
import RelatedProducts from './relatedItemsAndComparison/RelatedProducts.jsx';
import YourOutfitList from './relatedItemsAndComparison/YourOutfitList.jsx';
import examples from '../examples.js';

function App() {
  const [product, setProduct] = useState(null);
  const [styles, setStyles] = useState(null);
  const [meta, setMeta] = useState(null);
  const [relatedList, setRelatedList] = useState(null);
  const [theme, setTheme] = useState('light');
  // eslint-disable-next-line no-undef
  const initID = document.querySelector('main') ? +document.querySelector('main').getAttribute('pid') : 40344;
  const [pid, setPid] = useState(initID);

  console.log('PID: ----> ', pid);

  if (window.location.href === 'http://localhost:3000/') window.location.href = ('http://localhost:3000/?pid=40349');

  React.useEffect(() => {
    Promise.all([
      axios.get(`http://localhost:3000/products/${pid}`)
        .then((result) => {
          setProduct(result.data);
        }),
      axios.get(`http://localhost:3000/products/${pid}/styles`)
        .then((result) => {
          setStyles(result.data.results);
        }),
      axios.get(`http://localhost:3000/meta/${pid}`)
        .then((result) => {
          setMeta(result.data);
        }),
      axios.get(`/products/${pid}/related`)
        .then((result) => {
          setRelatedList(result.data);
        }),
    ])
      .catch((err) => {
        const errStatus = err.response ? err.response.status : null;
        // eslint-disable-next-line no-console
        console.log(errStatus, err);
        if (errStatus === 500) window.location.href = ('http://localhost:3000/?pid=40349');
      });
  }, [pid]);

  return (
    <div id="app">
      {product && styles && meta && relatedList
        ? (
          <>
            <Overview product={product} styles={styles} setStyles={setStyles} metaData={meta} />
            <RelatedProducts relatedList={relatedList} theme={theme} />
            <YourOutfitList product={product} theme={theme} />
            <QandA product={product} />
          </>
        )
        : null}
    </div>
  );
}

export default App;
