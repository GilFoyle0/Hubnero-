import React, { ElementType, FC } from 'react';
import cn from 'classnames';

import './Title.css';

type TitleProps = {
  Component?: ElementType;
  className?: string;
  children: React.ReactNode
}

export const Title: FC<TitleProps> = ({ Component = 'h1', children, className }) => {
  return <Component className={cn('Title', className)}>{children}</Component>;
};
