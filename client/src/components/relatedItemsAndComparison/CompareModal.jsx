import React, {useState, useEffect} from 'react';
import axios from 'axios';
import getAllFeatures from './getAllFeatures.js';
import examples from '../.././examples.js';

function CompareModal({ product2, setShowModal }) {
  const features = getAllFeatures(examples.product.features, product2.features);

  return (
    <>
      <div id="comparison-modal">
        <div className="comparison-modal-content">
          <header>Comparing</header>
          <div className="comparison-table">
            <div>{examples.product.name}</div>
            <div></div>
            <div>{product2.name}</div>
            {features.map((feature) => (
              <div className="comparison-table-row">
                <div>{feature.value1 ? feature.value1 : ''}</div>
                <div>{feature.feature}</div>
                <div>{feature.value2 ? feature.value2 : ''}</div>
              </div>
            ))}
          </div>
          <button
            className="comparison-modal-button"
            onClick={() => setShowModal(false)}
            >
          &times;
          </button>
        </div>
      </div>
      <div className="comparison-modal-overlay">
      </div>
    </>
  )
}

export default CompareModal;