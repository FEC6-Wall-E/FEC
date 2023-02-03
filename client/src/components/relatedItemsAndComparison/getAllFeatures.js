module.exports = (features1, features2) => {
  const allFeatures = features1.map(({feature: feature, value: value1}) => ({
    feature,
    value1,
    value2: undefined
  }));
  features2.forEach((feature2) => {
    let isShared = false;
    features1.forEach((feature1) => {
      if (feature1.feature === feature2.feature) {
        isShared = true;
        feature1.value2 = feature2.value;
      }
    });
    if (!isShared) {
      allFeatures.push({
        feature: feature2.feature,
        value1: undefined,
        value2: feature2.value});
    }
  });
  return allFeatures;
}
