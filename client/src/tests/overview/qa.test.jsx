/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from '../../components/App.jsx';

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

it('renders Q and A widget', () => {
  act(() => {
    render(<App />, container);
  });
  expect(container.querySelector("[id='QandA']")).not.toBe(null);
});
// it's not much but it do be a test
