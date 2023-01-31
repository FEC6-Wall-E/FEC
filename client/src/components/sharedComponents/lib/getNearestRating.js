module.exports = (rating) => {
  let near = 0;

  while (rating >= 1) {
    // eslint-disable-next-line no-param-reassign
    rating--;
    near++;
  }

  if (rating >= 0.75) {
    near += 0.75;
  } else if (rating >= 0.5) {
    near += 0.50;
  } else if (rating >= 0.25) {
    near += 0.25;
  }
  return near;
};
