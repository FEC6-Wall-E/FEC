import React from 'react';
import roundRating from './lib/getNearestRating.js';

function StarRating({ rating, count, link }) {
  if (count === 0) return null;

  let rounded = roundRating(rating);

  const stars = [];

  while (rounded >= 1) {
    stars.push(1);
    rounded--;
  }

  stars.push(rounded);

  while (stars.length < 5) {
    stars.push(0);
  }

  return (
    <div className="starRating">
      {stars.map((star) => <span className={`star val${star * 100}`} />)}
      <p className="reviewCount" href={link}>{`See all ${count} reviews!`}</p>
    </div>
  );
}

export default StarRating;
