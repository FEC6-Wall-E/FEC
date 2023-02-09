/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './sharedComponents/Header.jsx';
import Overview from './overview/index.jsx';
import QandA from './qa/QandA.jsx';
import RelatedAndOutfits from './relatedItemsAndComparison/index.jsx';
import examples from '../examples.js';
import backgrounds from '../backgrounds.js';

function App() {
  const [theme, setTheme] = useState('light');
  const [product, setProduct] = useState(null);
  const [styles, setStyles] = useState(null);
  const [meta, setMeta] = useState(null);
  const [relatedList, setRelatedList] = useState(null);
  const initID = document.querySelector('main') ? +document.querySelector('main').getAttribute('pid') : 40344;
  const [pid, setPid] = useState(initID);

  const changeTheme = (newTheme) => {
    document.body.style.backgroundColor = backgrounds[newTheme].color;
    document.body.style.backgroundImage = backgrounds[newTheme].bg;
    setTheme(newTheme);
  };

  if (window.location.href === 'http://localhost:3000/') {
    window.location.href = ('http://localhost:3000/?pid=40349');
  }

  useEffect(() => {
    changeTheme('light');
  }, []);

  useEffect(() => {
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
      });
  }, [pid]);

  return (
    <div id="Page">
      <div id="AppContainer">
        <Header theme={theme} setTheme={changeTheme} />
        <div className={theme} id="app">
          {product && styles && meta
            ? (
              <Overview
                product={product}
                styles={styles}
                setStyles={setStyles}
                metaData={meta}
                theme={theme}
              />
            )
            : null}
          {product && relatedList
            ? (
              <RelatedAndOutfits
                product={product}
                relatedList={relatedList}
                theme={theme}
                setPid={setPid}
              />
            )
            : null}
          {product
            ? <QandA product={product} theme={theme} />
            : null}
        </div>
      </div>
    </div>

  );
}

export default App;
