import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Button = ({ text, className, onClick, icon }: any) => {
  return (
    <button className={className} onClick={onClick}>
      {icon}
      {text}
    </button>
  );
};

Button.IconBtn = ({
  text,
  className,
  onClick,
  icon,
  iconClassName,
  size,
}: any) => {
  return (
    <button className={className} onClick={onClick}>
      <FontAwesomeIcon icon={icon} className={iconClassName} size={size} />
      {text}
    </button>
  );
};

export default Button;
