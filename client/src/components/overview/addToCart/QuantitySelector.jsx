import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Select from 'react-select';

function QuantitySelector({ currentStyle, currentSku, setQuantity }) {
  const quantityArray = [];
  const totalNum = currentSku ? currentStyle.skus[currentSku].quantity : 0;
  let limit = 15;

  if (totalNum <= 15) {
    limit = totalNum;
  }

  for (let i = 0; i < limit; i++) {
    quantityArray.push(i + 1);
  }

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'red' : 'blue',
      padding: 5,
      margin: 10,
      width: '12vw',
    }),
  };

  if (totalNum === 0) {
    return (
      <span id="QuantitySelector">
        <Select
          defaultValue={{ value: null, label: '-' }}
          className="quantitySelect"
          name="quantity"
          isDisabled
          styles={customStyles}
        />
      </span>
    );
  }

  const options = quantityArray.map((quantity) => ({ value: quantity, label: quantity }));

  return (
    <span id="QuantitySelector">
      <Select
        defaultValue={options[0]}
        key={`my_unique_select_key__${currentStyle.style_id}`}
        styles={customStyles}
        menuPosition="fixed"
        options={options}
        onChange={(e) => setQuantity(e.value)}
        isSearchable={false}
      />
    </span>
  );
}

export default QuantitySelector;
