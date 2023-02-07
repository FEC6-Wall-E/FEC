/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from '../../components/app.jsx';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  container.remove();
  container = null;
});

it('renders', () => {
  act(() => {
    render(<App />, container);
  });
  expect(container.querySelector("[id='app']")).not.toBe(null);
});
it('contains the overview', () => {
  act(() => {
    render(<App />, container);
  });
  expect(container.querySelector("[id='overview']")).not.toBe(null);
});
it('overview contains children', () => {
  act(() => {
    render(<App />, container);
  });
  expect(container.querySelector("[id='Image']")).not.toBe(null);
  expect(container.querySelector("[id='ProductInfo']")).not.toBe(null);
  expect(container.querySelector("[id='StyleSelector']")).not.toBe(null);
});
