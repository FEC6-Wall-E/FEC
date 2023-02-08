/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react/pure';
import userEvent from '@testing-library/user-event';
// eslint-disable-next-line import/no-unresolved
import YourOutfitList from '../../components/relatedItemsAndComparison/YourOutfitList.jsx';

let outfitList = null;

const items = [
  40348,
  40352,
  40350,
];

const wait = (t) => new Promise((r) => { setTimeout(r, t); });
const reset = () => {
  outfitList = null;
  cleanup();
};

let user;

beforeEach(async () => {
  user = userEvent.setup();
  if (outfitList === null) {
    outfitList = render(<YourOutfitList />);
    await wait(3000);
  }
});

describe('Your outfit list renders', () => {
  it('should render a section with outfit list', async () => {
    expect(screen.getByTestId('outfitList')).not.toBe(null);
  });
});
