import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface IBtnProps {
  text?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface IIconBtnProps extends IBtnProps {
  icon: IconProp;
  iconClassName?: string;
  size?: SizeProp;
}

const Button = ({ text, className, onClick }: IBtnProps) => {
  return (
    <button className={className} onClick={onClick}>
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
}: IIconBtnProps) => {
  return (
    <button className={className} onClick={onClick}>
      <FontAwesomeIcon icon={icon} className={iconClassName} size={size} />
      {text}
    </button>
  );
};

export default Button;
