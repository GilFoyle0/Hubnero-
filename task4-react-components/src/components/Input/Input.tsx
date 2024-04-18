import React, { FC } from 'react';
import cn from 'classnames';

import './Input.css';

type InputProps = {
  className?: string;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const Input: FC<InputProps> = ({  children, className, ...props}) => {
  return <input className={cn('Input', className)} {...props}>{children}</input>;
};
