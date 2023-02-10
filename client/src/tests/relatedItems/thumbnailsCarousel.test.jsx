/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import '@testing-library/jest-dom';
import {
  render, screen, cleanup, fireEvent,
} from '@testing-library/react/pure';
import userEvent from '@testing-library/user-event';
// eslint-disable-next-line import/no-unresolved
import Carousel from '../../components/relatedItemsAndComparison/Carousel.jsx';

let carousel = null;

const items = [
  {
    thumbnail_url: 'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    url: 'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
  },
  {
    thumbnail_url: 'https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
    url: 'https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
  },
  {
    thumbnail_url: 'https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    url: 'https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
  },
  {
    thumbnail_url: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    url: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80',
  },
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
    carousel = render(<Carousel items={items} classname="thumbnail" />);
    await wait(3000);
  }
});

describe('Thumbnails carousel renders', () => {
  it('should render a slider with thumbnails', async () => {
    expect(screen.getAllByTestId('slider')).not.toBe(null);
    expect(screen.getAllByTestId('thumbnail')).toHaveLength(items.length);
  });
  xit('should update what the active thumbnail is when next or previous button is clicked', async () => {
    const active = screen.getByTestId('thumbnail');
    expect(active.toHaveClass('active'));
    const activeBefore = Object.values(active)[1].src;
    await fireEvent.click(active);
    expect(screen.getByTestId('thumbnail')).toHaveAttribute('src', items[0].thumbnail_url);
    return user.click(screen.getByTestId('next-button'))
      .then(() => {
        expect(screen.getByTestId('thumbnail').toHaveClass('active'));
        expect(screen.getByTestId('thumbnail')).toHaveAttribute('src', items[1].url);
      });
  });
  it('should call setMainImg when a thumbnail is clicked', async () => {
    const handleClick = jest.fn();
    fireEvent.click(screen.getByTestId('main-image'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
