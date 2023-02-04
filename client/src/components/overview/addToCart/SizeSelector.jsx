import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Select from 'react-select';

const SizeSelector = React.forwardRef(({
  currentStyle, setSku, sizes, size,
}, ref) => {
  const sizeToSku = (sizeToConvert) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const sku in currentStyle.skus) {
      if (currentStyle.skus[sku].size === sizeToConvert) {
        setSku(sku);
        return;
      }
    }
  };

  if (size) sizeToSku(size);

  const options = [
    { value: null, label: 'Select Size' },
  ];
  sizes.forEach((option) => options.push({ value: option, label: option }));

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'red' : 'blue',
      padding: 5,
      margin: 20,
      width: '20%',
    }),
  };

  return sizes.length === 0 ? (
    <span id="SizeSelector">
      <Select
        defaultValue={{ value: null, label: 'OUT OF STOCK' }}
        styles={customStyles}
        name="size"
        isDisabled
      />
    </span>
  ) : (
    <span id="SizeSelector">
      <Select
        key={`my_unique_select_key__${currentStyle.style_id}`}
        defaultValue={options[0]}
        classNamePrefix="sizeSelect"
        styles={customStyles}
        menuPosition="fixed"
        openMenuOnFocus
        ref={ref}
        options={options}
        onChange={(e) => sizeToSku(e.value)}
        isSearchable={false}
      />
    </span>
  );
});

export default SizeSelector;
