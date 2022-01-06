import React from "react";
import { ButtonStyled } from "./ButtonStyled";

export const Button = (props) => {
  const {
    color,
    background,
    size,
    icon,
    transparent,
    center,
    width,
    children,
  } = props;
  return (
    <ButtonStyled
      center={center}
      color={color}
      background={background}
      size={size}
      transparent={transparent}
      width={width}
    >
      {icon && icon}
      {children}
    </ButtonStyled>
  );
};
