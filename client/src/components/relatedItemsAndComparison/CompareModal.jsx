import React, {useState, useEffect} from 'react';
import axios from 'axios';
import getAllFeatures from './getAllFeatures.js';
import examples from '../.././examples.js';

function CompareModal({ product2, setShowModal }) {
  const features = getAllFeatures(examples.product.features, product2.features);

  return (
    <div id="comparison-modal">
      <table>
        <tr>
          <th>Product 1 name</th>
          <th></th>
          <th>Product 2 name</th>
        </tr>
        <tr>Feature value for product 1</tr>
        <tr>Feature name</tr>
        <tr>Feature value for product 2</tr>
      </table>
      <button onClick={() => setShowModal(false)}>Close</button>
    </div>
  )
}

export default CompareModal;