import React from 'react';
import RelatedProducts from './RelatedProducts.jsx';
import YourOutfitList from './YourOutfitList.jsx';
import handleInteraction from '../../handleInteraction.js';

function RelatedAndOutfits({
  product, relatedList, theme, setPid,
}) {
  return (
    <div id="related-and-outfits">
      <RelatedProducts
        product={product}
        relatedList={relatedList}
        theme={theme}
        setPid={setPid}
        onClick={(e) => handleInteraction(e, 'RELATED')}
      />
      <YourOutfitList
        product={product}
        theme={theme}
        onClick={(e) => handleInteraction(e, 'RELATED')}
      />
    </div>
  );
}

export default RelatedAndOutfits;
