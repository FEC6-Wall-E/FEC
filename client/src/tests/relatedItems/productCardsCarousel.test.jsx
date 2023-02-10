/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import '@testing-library/jest-dom';
import {
  render, screen, cleanup, act, fireEvent,
} from '@testing-library/react/pure';
import userEvent from '@testing-library/user-event';
// eslint-disable-next-line import/no-unresolved
import Carousel from '../../components/relatedItemsAndComparison/Carousel.jsx';

let carousel = null;

const items = [
  40348,
  40352,
  40350,
];

const wait = (t) => new Promise((r) => { setTimeout(r, t); });
const reset = () => {
  carousel = null;
  cleanup();
};

let user;

beforeEach(async () => {
  user = userEvent.setup();
  if (carousel === null) {
    carousel = render(<Carousel items={items} classname="product-card" />);
    await wait(3000);
  }
});

describe('Product cards carousel renders 3 product cards', () => {
  it('should render a slider with product cards', async () => {
    expect(screen.getAllByTestId('slider')).not.toBe(null);
    expect(screen.getAllByTestId('slider-product-card')).toHaveLength(items.length);
  });

  it('should render next slider button when the related products load and there are more than 1 related products', async () => {
    expect(screen.findAllByTestId('product-card-next-button')).not.toBe(null);
  });

  it('should not render prev slider button when the related products load for the first time', async () => {
    expect(screen.queryByTestId('product-card-prev-button')).not.toBeInTheDocument();
  });

  it('should render prev slider button when next button was clicked at least once', async () => {
    act(() => {
      // eslint-disable-next-line func-names
      window.HTMLElement.prototype.scrollIntoView = function () {};
      fireEvent.click(screen.getByTestId('product-card-next-button'));
    });
    await expect(screen.findAllByTestId('product-card-prev-button')).not.toBe(null);
  });

  it('should render comparison buttons on every product card, but not render the comparison modal', async () => {
    expect(screen.getAllByTestId('open-compare')).toHaveLength(items.length);
    expect(screen.queryByTestId('compare')).not.toBeInTheDocument();
  });
});
