import React, { FC } from 'react';
import cn from 'classnames';

import './Container.css';

type ContainerProps = {
  className?: string;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Container: FC<ContainerProps> = ({  children, className }) => {
  return <div className={cn('Container', className)}>{children}</div>;
};
