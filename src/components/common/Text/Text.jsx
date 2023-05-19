import React from 'react';

const Text = ({ children, className, style, fontSize, color, fontWeight }) => {
  return (
    <p className={className} style={{ ...style, fontSize, color, fontWeight }}>
      {children}
    </p>
  );
};

Text.Title = ({ children, className, style, fontSize, color, fontWeight }) => {
  return (
    <h3 className={className} style={{ ...style, fontSize, color, fontWeight }}>
      {children}
    </h3>
  );
};

export default Text;
