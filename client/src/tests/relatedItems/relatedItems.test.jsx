/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react/pure';
import userEvent from '@testing-library/user-event';
// eslint-disable-next-line import/no-unresolved
import RelatedProducts from '../../components/relatedItemsAndComparison/RelatedProducts.jsx';

let relatedItems = null;

const relatedList = [
  40348,
  40352,
  40350,
];

const wait = (t) => new Promise((r) => { setTimeout(r, t); });
const reset = () => {
  relatedItems = null;
  cleanup();
};

let user;

beforeEach(async () => {
  user = userEvent.setup();
  if (relatedItems === null) {
    relatedItems = render(<RelatedProducts relatedList={relatedList} />);
    await wait(3000);
  }
});

describe('Related Items', () => {
  it('should render related products section', async () => {
    expect(screen.getByTestId('related-products')).not.toBe(null);
  });
  it('should render a heading', async () => {
    expect(screen.getByTestId('heading')).not.toBe(null);
  });
  it('should render a carousel with all product cards', async () => {
    expect(screen.getAllByTestId('slider-product-card')).not.toBe(null);
    expect(screen.getAllByTestId('slider-product-card')).toHaveLength(relatedList.length);
  });
  xit('should render a loading message when the data is not available', async () => {
    expect(screen.getByTestId('loading')).not.toBe(null);
  });
});
