import React from 'react';
import getAllFeatures from './getAllFeatures.js';
import examples from '../../examples.js';

function CompareModal({ product2, setShowModal, theme }) {
  const features = getAllFeatures(examples.product.features, product2.features);

  return (
    <>
      <div id="comparison-modal">
        <div className={`comparison-modal-content ${theme}`}>
          <header>Comparing</header>
          <div className={`comparison-table ${theme}`}>
            <div>{examples.product.name}</div>
            <div />
            <div>{product2.name}</div>
            {features.map((feature) => (
              <div className={`comparison-table-row ${theme}`}>
                <div>{feature.value1 ? feature.value1 : ''}</div>
                <div>{feature.feature}</div>
                <div>{feature.value2 ? feature.value2 : ''}</div>
              </div>
            ))}
          </div>
          <button
            className={`comparison-modal-button ${theme}`}
            onClick={() => setShowModal(false)}
          >
            &times;
          </button>
        </div>
      </div>
      <div className={`comparison-modal-overlay ${theme}`} />
    </>
  );
}

export default CompareModal;
