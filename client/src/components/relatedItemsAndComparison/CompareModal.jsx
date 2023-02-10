import React from 'react';
import getAllFeatures from './getAllFeatures.js';

function CompareModal({
  product1, product2, setShowModal, theme,
}) {
  const features = getAllFeatures(product1.features, product2.features);

  return (
    <>
      <div data-testid="compare-modal" id="comparison-modal">
        <div data-testid="compare" className={`comparison-modal-content ${theme}`}>
          <header data-testid="header">Comparing</header>
          {features.length
            ? (
              <div className={`comparison-table ${theme}`}>
                <div className="table-header product1" data-testid="product1-name">{product1.name}</div>
                <div className="table-header" />
                <div className="table-header product2" data-testid="product2-name">{product2.name}</div>
                {features.map((feature, index) => (
                  <div className={`comparison-table-row ${theme}`} key={index}>
                    <div className="product1-feature" data-testid="product1-feature">{feature.value1 ? feature.value1 : ''}</div>
                    <div className="feature" data-testid="feature">{feature.feature}</div>
                    <div className="product2-feature" data-testid="product2-feature">{feature.value2 ? feature.value2 : ''}</div>
                  </div>
                ))}
              </div>
            )
            : <header>Features are not available</header>}

          <button
            data-testid="compare-close-button"
            className={`comparison-modal-button ${theme}`}
            onClick={() => setShowModal(false)}
          >
            &times;
          </button>
        </div>
      </div>
      <div className={`comparison-modal-overlay ${theme}`} onClick={() => setShowModal(false)} />
    </>
  );
}

export default CompareModal;
