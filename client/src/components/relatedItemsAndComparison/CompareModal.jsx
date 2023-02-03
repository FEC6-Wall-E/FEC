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
          <th>{examples.product.name}</th>
          <th></th>
          <th>{product2.name}</th>
        </tr>
        {features.map((feature) => (
          <tr>
            <td>{feature.value1 ? feature.value1 : ''}</td>
            <td>{feature.feature}</td>
            <td>{feature.value2 ? feature.value2 : ''}</td>
          </tr>
        ))}
      </table>
      <button onClick={() => setShowModal(false)}>Close</button>
    </div>
  )
}

export default CompareModal;