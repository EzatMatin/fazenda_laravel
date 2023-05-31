import React, { useState } from 'react';

const Datalist = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onSelect(value);
  };

  return (
    <select value={selectedOption} onChange={handleSelect}>
      <option value="">Select an option</option>
      {options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </select>
  );
};

export default Datalist;

