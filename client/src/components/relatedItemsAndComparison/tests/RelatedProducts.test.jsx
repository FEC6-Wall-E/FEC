/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import RelatedProducts from '../RelatedProducts.jsx';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('section');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  container.remove();
  container = null;
});

it('renders', () => {
  act(() => {
    render(<RelatedProducts />, container);
  });
  expect(container.querySelector("[id='related-products']")).not.toBe(null);
});
it('RelatedProducts contains children', () => {
  act(() => {
    render(<RelatedProducts />, container);
  });
  expect(container.querySelector("[class='slider-container']")).not.toBe(null);
});
