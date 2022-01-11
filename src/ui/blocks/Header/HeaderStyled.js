import styled from "styled-components";
import { themeColor, themeFontSize } from "../../theme";

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0 4px 10px 2px #00000008;
  background-color: ${({ solid, theme }) =>
    solid ? theme.colors["white"] : "transparent"};
  z-index: 99;
`;
export const Logo = styled.div`
  fill: white;
`;
export const Navigation = styled.div``;
export const Anchor = styled.div`
  cursor: pointer;
  display: inline-flex;
  font-size: ${themeFontSize("medium")};
  color: ${({ solid, theme }) =>
    solid ? theme.colors["txt"] : theme.colors["white"]};
  transition: color 0.2s;
  &:first-child {
    margin-right: 70px;
  }
  &:hover {
    color: ${themeColor("blue")};
  }
`;
export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 87px;
`;
