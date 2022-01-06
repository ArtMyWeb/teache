import React, { FC } from "react";
import { TitleStyled } from "./TitleStyled";
import { ColorName, FontSize } from "../../theme";

interface TitleProps {
  color?: ColorName;
  size?: FontSize;
  weight?: string;
  position?: "center" | "left" | "right";
  children: React.ReactNode;
}

export const Title: FC<TitleProps> = (props) => {
  const { color, size, position, weight, children } = props;
  return (
    <TitleStyled color={color} size={size} weight={weight} position={position}>
      {children}
    </TitleStyled>
  );
};
