import React, { FC } from 'react';
import cn from 'classnames';

import './Button.css';

type ButtonProps = {
  className?: string;
  variant?: "green" | "red" | "blue"
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button: FC<ButtonProps> = ({  children, className, variant = 'green', ...props }) => {
  return <button className={cn('Button', className, variant)} {...props}>{children}</button>;
};
