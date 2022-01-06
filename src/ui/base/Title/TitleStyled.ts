import styled from "styled-components";
import { ColorName, FontSize } from "../../theme";

interface TitleStyledProps {
  color?: ColorName;
  size?: FontSize;
  weight?: string;
  position?: "center" | "left" | "right";
}

export const TitleStyled = styled.div<TitleStyledProps>`
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.black};
  font-size: ${({ theme, size }) =>
    size ? theme.fonts.sizes[size] : theme.fonts.sizes.big};
  text-align: ${({ position }) => (position ? position : "center")};
  font-weight: ${({ weight }) => (weight ? weight : "bold")};
`;
