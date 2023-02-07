/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react/pure';
import userEvent from '@testing-library/user-event';
// eslint-disable-next-line import/no-unresolved
import App from '../../components/App.jsx';

let app = null;
let overview = null;
let overviewMain = null;
let overviewDetails = null;
let features = null;
let sloganDesc = null;
let left = null;
let right = null;
let productInfo = null;
let styleSelector = null;
let addToCart = null;
let starRating = null;
let price = null;
let shareButtons = null;
let cartButton = null;
let leftMain = null;
let image = null;
let mainImage = null;
let imagePicker = null;
let imageLeftButton = null;
let imageRightButton = null;
let modal = {
  main: null,
  image: null,
  bg: null,
  left: null,
  right: null,
  indicators: null,
};

screen.logTestingPlaygroundURL();

const wait = (t) => new Promise((r) => { setTimeout(r, t); });
const reset = () => {
  app = null;
  modal = {};
  cleanup();
};

let user;

beforeEach(async () => {
  user = userEvent.setup();

  if (app === null) {
    app = render(<App />);
    await wait(1000);
  }
});

describe('Overview Renders', () => {
  it('renders app', async () => {
    expect(app).not.toBe(null);
  });
  it('renders overview container', async () => {
    overview = screen.getByTestId('OVERVIEW');
    expect(overview).not.toBe(null);
  });
  it('renders overview details', async () => {
    overviewDetails = screen.getByTestId('OVERVIEW_DETAILS');
    expect(overviewDetails).not.toBe(null);
  });
  it('renders overview main', async () => {
    overviewMain = screen.getByTestId('OVERVIEW_MAIN');
    expect(overviewMain).not.toBe(null);
  });
  it('renders features, slogan, and description', async () => {
    features = await overviewDetails.querySelector('#ProductDetails > div:nth-child(2)');
    expect(features).not.toBe(null);

    sloganDesc = await overviewDetails.querySelector('#ProductDetails > div:nth-child(1)');
    expect(sloganDesc).not.toBe(null);
  });
  it('renders left and right', async () => {
    left = await overviewMain.querySelector('#overview > div:nth-child(1)');
    right = await overviewMain.querySelector('#overview > div:nth-child(2)');
    expect(left).not.toBe(null);
    expect(right).not.toBe(null);
  });
  it('renders right components', async () => {
    productInfo = await right.querySelector('#ProductInfo');
    styleSelector = await right.querySelector('#StyleSelector');
    addToCart = await right.querySelector('#AddToCart');
    expect(productInfo).not.toBe(null);
    expect(styleSelector).not.toBe(null);
    expect(addToCart).not.toBe(null);
  });
  it('renders product info components', async () => {
    starRating = productInfo.querySelector('#ProductInfo > div:nth-child(1)');
    expect(starRating).not.toBe(null);
    price = screen.getByTestId('PRICE');
    expect(price).not.toBe(null);
    shareButtons = productInfo.querySelector('#shareButtons');
    expect(shareButtons).not.toBe(null);
  });
  it('renders add to cart components', async () => {
    cartButton = screen.getByRole('button', {
      name: /add to cart/i,
    });
    expect(cartButton).not.toBe(null);
  });
  it('renders left component', async () => {
    leftMain = screen.getByTestId('IMAGE_MAIN');
    expect(leftMain).not.toBe(null);
  });
  it('renders image component', async () => {
    image = screen.getByTestId('OVERVIEW_IMAGE');
    expect(image).not.toBe(null);
  });
  it('renders image buttons and picker', async () => {
    mainImage = screen.getByTestId('OVERVIEW_IMAGE_SCROLL');
    imagePicker = screen.getByTestId('OVERVIEW_IMAGE_PICKER');
    imageLeftButton = screen.getByTestId('OVERVIEW_IMAGE_BUTTON_LEFT');
    imageRightButton = screen.getByTestId('OVERVIEW_IMAGE_BUTTON_RIGHT');
    expect(mainImage).not.toBe(null);
    expect(imagePicker).not.toBe(null);
    expect(imageLeftButton).not.toBe(null);
    expect(imageRightButton).not.toBe(null);
  });
});
describe('Image Modal', () => {
  it('renders when mainImage is clicked', async () => {
    await user.click(screen.getByTestId('OVERVIEW_IMAGE_SCROLL_0'));
    modal.main = screen.getByTestId('IMAGE_MODAL');
    modal.bg = modal.main.querySelector('#ImageModal > div');
    expect(modal.main).not.toBe(null);
    expect(modal.bg).not.toBe(null);
  });
  it('renders controls', async () => {
    modal.left = screen.getByRole('button', {
      name: /</i,
    });
    modal.right = screen.getByRole('button', {
      name: />/i,
    });
    modal.indicators = modal.main.querySelector('#indicatorsContainer');

    expect(modal.left).not.toBe(null);
    expect(modal.right).not.toBe(null);
    expect(modal.indicators).not.toBe(null);
  });
  it('changes index when indicator is clicked', async () => {
    const indicator = modal.main.querySelector('#indicatorsContainer > span:nth-child(3)');
    const oldClass = indicator.getAttribute('class').split(' ');
    expect(oldClass.length).toBe(1);
    await user.click(indicator);
    const newClass = indicator.getAttribute('class').split(' ');
    expect(newClass.length).toBe(2);
  });
  it('changes index to the last from the first when the left button is clicked', async () => {
    await user.click(modal.main.querySelector('#indicatorsContainer > span:nth-child(1)'));
    expect(modal.main.querySelector('#indicatorsContainer > span:nth-child(1)').getAttribute('class').split(' ').length).toBe(2);
    await user.click(modal.left);
    expect(modal.main.querySelector('#indicatorsContainer > span:last-child').getAttribute('class').split(' ').length).toBe(2);
  });
  it('changes index to the first from the last when the left button is clicked', async () => {
    await user.click(modal.right);
    expect(modal.main.querySelector('#indicatorsContainer > span:nth-child(1)').getAttribute('class').split(' ').length).toBe(2);
  });
  it('changes index to the right when the right button is clicked', async () => {
    await user.click(modal.right);
    expect(modal.main.querySelector('#indicatorsContainer > span:nth-child(2)').getAttribute('class').split(' ').length).toBe(2);
  });
  it('changes index to the left when the left button is clicked', async () => {
    await user.click(modal.left);
    expect(modal.main.querySelector('#indicatorsContainer > span:nth-child(1)').getAttribute('class').split(' ').length).toBe(2);
  });
  it('can zoom', async () => {
    modal.image = screen.getByRole('figure');
    expect(modal.image).not.toBe(null);
    await user.click(modal.image);
    await user.click(modal.image);
  });
  it('closes when the background is clicked', async () => {
    await user.click(modal.bg);
    expect(screen.queryByTestId('IMAGE_MODAL')).toBeNull();
  });
});
