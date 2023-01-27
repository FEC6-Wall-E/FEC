import React from 'react';
import Overview from './overview/index.jsx';
import QandA from './qa/QandA.jsx';
import RelatedProducts from './relatedItemsAndComparison/RelatedProducts.jsx';
import YourOutfitList from './relatedItemsAndComparison/YourOutfitList.jsx';


function App() {
  const test = { name: 'test ' };
  return (
    <div>
      <Overview product={test} />
      <RelatedProducts />
      <YourOutfitList />
      <QandA />
    </div>
  );
}

export default App;