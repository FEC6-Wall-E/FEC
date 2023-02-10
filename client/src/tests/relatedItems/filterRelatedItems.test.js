import { describe, expect, test } from '@jest/globals';

const filterRelatedItems = require('../../components/relatedItemsAndComparison/filterRelatedItems.js');

describe('filterRelatedItems module', () => {
  const pid = 40344;
  const relatedList1 = [
    40349,
    40349,
    40351,
    40346,
    40352,
    40346,
    40346,
  ];
  const relatedList2 = [
    40349,
    40349,
    40351,
    40346,
    40352,
    40346,
    40344,
    40346,
  ];
  const filteredItems = [
    40349,
    40351,
    40352,
    40346,
  ];

  test('should filter values that appear more than once', () => {
    expect(filterRelatedItems(relatedList1, pid).sort()).toEqual(filteredItems.sort());
  });
  test('should filter values that appear more than once and exclude the pid value', () => {
    expect(filterRelatedItems(relatedList2, pid).sort()).toEqual(filteredItems.sort());
  });
});
