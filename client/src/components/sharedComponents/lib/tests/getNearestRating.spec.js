// eslint-disable-next-line import/no-extraneous-dependencies
import { describe, expect, test } from '@jest/globals';

const getNearestRating = require('../getNearestRating');

describe('getNearestRating test ', () => {
  test('correct rating for 3.97', () => {
    expect(getNearestRating(3.97)).toBe(3.75);
  });
  test('correct rating for 4.69', () => {
    expect(getNearestRating(4.69)).toBe(4.50);
  });
  test('correct rating for 2.33', () => {
    expect(getNearestRating(2.33)).toBe(2.25);
  });
  test('correct rating for 1.20', () => {
    expect(getNearestRating(1.20)).toBe(1);
  });
  test('correct rating for 0', () => {
    expect(getNearestRating(0)).toBe(0);
  });
  test('correct rating for 4', () => {
    expect(getNearestRating(4)).toBe(4);
  });
});
