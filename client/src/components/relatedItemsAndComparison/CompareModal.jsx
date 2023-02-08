import React from 'react';
import getAllFeatures from './getAllFeatures.js';
import examples from '../../examples.js';

function CompareModal({ product2, setShowModal, theme }) {
  const features = getAllFeatures(examples.product.features, product2.features);

  return (
    <>
      <div data-testid="compare-modal" id="comparison-modal">
        <div data-testid="compare" className={`comparison-modal-content ${theme}`}>
          <header data-testid="header">Comparing</header>
          <div className={`comparison-table ${theme}`}>
            <div data-testid="product1-name">{examples.product.name}</div>
            <div />
            <div data-testid="product2-name">{product2.name}</div>
            {features.map((feature) => (
              <div className={`comparison-table-row ${theme}`}>
                <div data-testid="product1-feature">{feature.value1 ? feature.value1 : ''}</div>
                <div data-testid="feature">{feature.feature}</div>
                <div data-testid="product2-feature">{feature.value2 ? feature.value2 : ''}</div>
              </div>
            ))}
          </div>
          <button
            data-testid="compare-close-button"
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
