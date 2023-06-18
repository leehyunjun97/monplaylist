import React from 'react';

interface ITextProps {
  children: React.ReactNode | string;
  className?: string;
  style?: object;
  fontSize?: string | number;
  color?: string;
  fontWeight?: string | number;
}

const Text = ({
  children,
  className,
  style,
  fontSize,
  color,
  fontWeight,
}: ITextProps) => {
  return (
    <p className={className} style={{ ...style, fontSize, color, fontWeight }}>
      {children}
    </p>
  );
};

Text.Title = ({
  children,
  className,
  style,
  fontSize,
  color,
  fontWeight,
}: ITextProps) => {
  return (
    <h3 className={className} style={{ ...style, fontSize, color, fontWeight }}>
      {children}
    </h3>
  );
};

export default Text;
