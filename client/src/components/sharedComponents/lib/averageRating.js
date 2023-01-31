module.exports = (metaData) => {
  const ratings = +metaData.recommended.false + +metaData.recommended.true;
  let averageRating = 5;

  // eslint-disable-next-line guard-for-in, no-restricted-syntax
  for (const value in metaData.ratings) {
    averageRating += (value * metaData.ratings[value]);
  }

  averageRating /= ratings;

  return { averageRating, ratings };
};
