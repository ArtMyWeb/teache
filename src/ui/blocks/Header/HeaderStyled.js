import styled from "styled-components";
import { themeColor, themeFontSize } from "../../theme";

export const Anchor = styled.div`
  cursor: pointer;
  display: inline-flex;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: ${themeFontSize("medium")};
  color: ${({ color, theme }) =>
    color ? theme.colors[color] : theme.colors["txt"]};
  transition: color 0.2s;
  &:first-child {
    margin-right: 70px;
  }
  &:hover {
    color: ${themeColor("blue")};
  }

  @media (max-width: 1200px) {
    font-size: ${themeFontSize("regular")};
  }
  @media (max-width: 640px) {
    font-size: ${themeFontSize("small")};
    &:first-child {
      margin-right: 20px;
    }
  }
`;

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: ${({ solid }) => (solid ? "0 4px 10px 2px #00000008" : "none")};
  background-color: ${({ solid, theme }) =>
    solid ? theme.colors["white"] : "transparent"};
  z-index: 99;
  @media (max-width: 1200px) {
    padding: 0 40px;
    box-shadow: none;
  }
  @media (max-width: 640px) {
    padding: 0 20px;
  }
`;

export const Logo = styled.div`
  width: 220px;
  svg {
    width: 100%;
  }
  @media (max-width: 1200px) {
    width: 170px;
  }
  @media (max-width: 640px) {
    width: 115px;
  }
`;

export const Navigation = styled.div``;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 87px;
  @media (max-width: 1200px) {
    height: 70px;
  }
`;
