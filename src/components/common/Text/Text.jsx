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
    <h2 className={className} style={{ ...style, fontSize, color, fontWeight }}>
      {children}
    </h2>
  );
};

export default Text;
