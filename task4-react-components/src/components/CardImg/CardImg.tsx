import React, { FC } from "react";
import cn from "classnames";

import "./CardImg.css";

type CardImgProps = {
  className?: string;
} & React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>

export const CardImg: FC<CardImgProps> = ({
  children,
  alt,
  src,
  className,
  ...props
}) => {
  return (
    <div className="Card">
      <div className="Card__img">
        <img src={src} alt={alt} {...props}/>
      </div>
      <div className="Card__content">
       <div className="Card__text">{children}</div>
      </div>
    </div>
  );
};
