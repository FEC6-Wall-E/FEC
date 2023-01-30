/* eslint-disable no-unused-vars */
import React from 'react';
import Image from './image/index.jsx';
import StarRating from '../sharedComponents/StarRating.jsx';

function Overview({ product, styles, setStyles }) {
  const [style, setStyle] = React.useState(styles[0]);

  return (
    <div id="overview">
      <StarRating rating={3.69} />
      <Image images={style.photos} />
    </div>
  );
}

export default Overview;
