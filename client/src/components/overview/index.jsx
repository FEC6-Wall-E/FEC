/* eslint-disable no-unused-vars */
import React from 'react';
import Image from './image/index.jsx';
import StarRating from '../sharedComponents/StarRating.jsx';
import getRatingData from '../sharedComponents/lib/averageRating.js';

function Overview({
  product, styles, setStyles, metaData,
}) {
  const [style, setStyle] = React.useState(styles[0]);
  const ratingData = getRatingData(metaData);

  return (
    <div id="overview">
      <StarRating count={ratingData.ratings} rating={ratingData.averageRating} />
      <Image images={style.photos} />
    </div>
  );
}

export default Overview;
