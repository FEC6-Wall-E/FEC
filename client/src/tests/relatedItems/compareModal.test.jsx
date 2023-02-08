/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import '@testing-library/jest-dom';
import {
  render, screen, cleanup, fireEvent,
} from '@testing-library/react/pure';
import userEvent from '@testing-library/user-event';
// eslint-disable-next-line import/no-unresolved
import CompareModal from '../../components/relatedItemsAndComparison/CompareModal.jsx';

let compareModal = null;

const product2 = {
  id: 40345,
  campus: 'hr-rfp',
  name: 'Bright Future Sunglasses',
  slogan: "You've got to wear shades",
  description: "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
  category: 'Accessories',
  default_price: '69.00',
  created_at: '2021-08-13T14:38:44.509Z',
  updated_at: '2021-08-13T14:38:44.509Z',
  features: [
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
  ],
};

const wait = (t) => new Promise((r) => { setTimeout(r, t); });
const reset = () => {
  compareModal = null;
  cleanup();
};

beforeEach(async () => {
  let user = userEvent.setup();
  if (compareModal === null) {
    compareModal = render(<CompareModal product2={product2} />);
    await wait(3000);
  }
});

describe('Compare modal renders', () => {
  it('should render a compare modal', async () => {
    expect(screen.getAllByTestId('compare')).not.toBe(null);
  });
  it('should render a header', async () => {
    expect(screen.getByTestId('header')).not.toBe(null);
  });
  it('should render product 1 and product 2 names', async () => {
    expect(screen.getByTestId('product1-name')).not.toBe(null);
    expect(screen.getByTestId('product2-name')).not.toBe(null);
  });
  it('should render all the features the products have', async () => {
    expect(screen.getAllByTestId('feature')).not.toBe(null);
    expect(screen.getAllByTestId('feature')).toHaveLength(5);
    expect(screen.getAllByTestId('product1-feature')).toHaveLength(5);
    expect(screen.getAllByTestId('product2-feature')).toHaveLength(5);
  });
  xit('should close the modal when the close button is clicked', async () => {
    const close = screen.getByTestId('compare-close-button');
    fireEvent.click(close);
    await expect(screen.queryByTestId('compare-modal')).not.toBeInTheDocument();
  });
});
