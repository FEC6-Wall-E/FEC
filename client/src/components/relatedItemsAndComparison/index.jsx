import React from 'react';
import RelatedProducts from './RelatedProducts.jsx';
import YourOutfitList from './YourOutfitList.jsx';

function RelatedAndOutfits({
  product, relatedList, theme, setPid,
}) {
  return (
    <div id="related-and-outfits">
      <RelatedProducts relatedList={relatedList} theme={theme} setPid={setPid} />
      <YourOutfitList product={product} theme={theme} />
    </div>
  );
}

export default RelatedAndOutfits;
