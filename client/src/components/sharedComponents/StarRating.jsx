import React from 'react';
import roundRating from './lib/getNearestRating.js';
import Star from './Star.jsx';

function StarRating({ rating, count, link }) {
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
      {stars.map((star) => <Star value={star} />)}
      <p className="reviewCount" href={link}>{`See all ${count} reviews!`}</p>
    </div>
  );
}

export default StarRating;
