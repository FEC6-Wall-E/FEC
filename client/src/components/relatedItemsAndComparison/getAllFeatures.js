module.exports = (features1, features2) => {
  const allFeatures = features1.map(({ feature, value: value1 }) => ({
    feature,
    value1,
    value2: undefined,
  }));
  features2.forEach((feature2) => {
    let isShared = false;
    for (let i = 0; i < features1.length; i++) {
      if (features1[i].feature === feature2.feature) {
        isShared = true;
        allFeatures[i].value2 = feature2.value;
      }
    }
    if (!isShared) {
      allFeatures.push({
        feature: feature2.feature,
        value1: undefined,
        value2: feature2.value,
      });
    }
  });
  return allFeatures;
};
