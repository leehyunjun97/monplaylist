import React from 'react';

interface IInputProps {
  placeholder: string;
  className: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
}

interface IRangeProps {
  className: string;
  min: number;
  max: number;
  step: number;
  value: number;
  color: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({
  placeholder,
  className,
  value,
  onChange,
  onKeyDown,
}: IInputProps) => {
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

Input.Range = ({
  className,
  min,
  max,
  step,
  value,
  color,
  onChange,
}: IRangeProps) => {
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
