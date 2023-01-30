/* eslint-disable no-unused-vars */
import React from 'react';
import Image from './image/index.jsx';
import StarRating from '../sharedComponents/StarRating.jsx';

function Overview({
  product, styles, setStyles, meta,
}) {
  const [style, setStyle] = React.useState(styles[0]);
  const ratings = +meta.recommended.false + +meta.recommended.true;
  let averageRating = 5;

  // eslint-disable-next-line guard-for-in, no-restricted-syntax
  for (const value in meta.ratings) {
    averageRating += (value * meta.ratings[value]);
  }

  averageRating /= ratings;

  return (
    <div id="overview">
      <StarRating rating={averageRating} count={ratings} />
      <Image images={style.photos} />
    </div>
  );
}

export default Overview;
