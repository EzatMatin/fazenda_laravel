import React, { useState } from 'react';
import pimentao from "./pimentao.jpg";
import tomate from "./tomate.jpg";
import batata from "./batata.jpg";


const Datalist = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedImage, setSelectedImage] = useState('');

  const handleSelect = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    setSelectedImage(getImageForOption(value));
    onSelect(value);
  };

  const getImageForOption = (option) => {
    // Replace with your own logic to determine the image URL based on the option
    switch (option) {
      case 'Pimentao':
        return pimentao;
      case 'Tomate':
        return tomate;
      case 'Batata':
        return batata;
      default:
        return '';
    }
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleSelect}>
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
      {selectedImage && (
        <img src={selectedImage} alt="Selected Option" />
      )}
    </div>
  );
};

const ProductChanger = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedImage, setSelectedImage] = useState('');

  const handleOptionSelect = (value) => {
    setSelectedOption(value);
    setSelectedImage(getImageForOption(value));
  };

  const getImageForOption = (option) => {
    // Replace with your own logic to determine the image URL based on the option
    switch (option) {
      case 'Pimentao':
        return pimentao;
      case 'Tomate':
        return tomate;
      case 'Batata':
        return batata;
      default:
        return '';
    }
  };

  return (
    <div>
      {/* {selectedImage && (
        <img src={selectedImage} alt="Selected Option" />
      )} */}
      <h1>Product Changer</h1>
      <Datalist
        options = {['Pimentao', 'Tomate', 'Batata']}
        onSelect={handleOptionSelect}
      />
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
};

export default ProductChanger;


