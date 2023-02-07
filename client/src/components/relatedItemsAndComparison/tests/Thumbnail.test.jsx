/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Thumbnail from '../Thumbnail.jsx';

afterEach(cleanup);

it('should render Thumbnail component', () => {
  render(<Thumbnail />);
  const thumbnail = screen.getByTestId('thumbnail');
  expect(thumbnail).toBeInTheDocument();
});
