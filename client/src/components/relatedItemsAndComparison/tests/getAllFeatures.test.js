import { describe, expect, test } from '@jest/globals';

const getAllFeatures = require('../getAllFeatures.js');

describe('getAllFeatures module', () => {
  const features1 = [
    {
      feature: 'Fabric',
      value: '100% Cotton',
    },
    {
      feature: 'Cut',
      value: 'Skinny',
    },
    {
      feature: 'Lenses',
      value: 'Ultrasheen',
    },
  ];

  const features2 = [
    {
      feature: 'Lenses',
      value: 'Ultrasheen',
    },
    {
      feature: 'UV Protection',
      value: null,
    },
    {
      feature: 'Frames',
      value: 'LightCompose',
    },
  ];

  const allFeatures = [
    {
      feature: 'Fabric',
      value1: '100% Cotton',
      value2: undefined,
    },
    {
      feature: 'Cut',
      value1: 'Skinny',
      value2: undefined,
    },
    {
      feature: 'Lenses',
      value1: 'Ultrasheen',
      value2: 'Ultrasheen',
    },
    {
      feature: 'UV Protection',
      value1: undefined,
      value2: null,
    },
    {
      feature: 'Frames',
      value1: undefined,
      value2: 'LightCompose',
    },
  ];

  const foundFeatures = getAllFeatures(features1, features2);

  test('if one product does not have features that the other product does, the first product\'s value for that feature in the result array would be undefined', () => {
    expect(foundFeatures[0].value2).toBeUndefined(allFeatures[0].value2);
  });

  test('if both products share the same feature, it will appear only once in the result array', () => {
    const sharedFeature = {
      feature: 'Lenses',
      value1: 'Ultrasheen',
      value2: 'Ultrasheen',
    };
    expect(foundFeatures).toContainEqual(sharedFeature);
    expect(foundFeatures.length).toBe(allFeatures.length);
    expect(foundFeatures).toEqual(allFeatures);
  });
});
