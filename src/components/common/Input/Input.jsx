import React from 'react';

const Input = ({ placeholder, className, value, onChange, onKeyDown }) => {
  return (
    <input
      placeholder={placeholder}
      className={className}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      type='text'
    />
  );
};

Input.Range = ({ className, min, max, step, value, color, onChange }) => {
  return (
    <input
      type='range'
      className={className}
      min={min}
      max={max}
      step={step}
      value={value}
      color={color}
      onChange={onChange}
    />
  );
};

export default Input;
