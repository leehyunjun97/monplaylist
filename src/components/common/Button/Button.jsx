import React from 'react';

const Button = ({ text, className, onClick, icon }) => {
  return (
    <button className={className} onClick={onClick}>
      {icon}
      {text}
    </button>
  );
};

export default Button;
