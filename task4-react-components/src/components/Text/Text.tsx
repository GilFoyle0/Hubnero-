import React, { FC } from 'react';
import cn from 'classnames';

import './Text.css';

type TextProps = {
  className?: string;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Text: FC<TextProps> = ({  children, className }) => {
  return <div className={cn('Text', className)}>{children}</div>;
};
