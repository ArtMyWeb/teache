import styled from "styled-components";
import { themeColor, themeFontSize } from "../../theme";

export const PrivacyPolicyWrapper = styled.div`
  padding-top: 214px;
  width: 100%;
`;

export const Body = styled.div`
  display: flex;
  padding-bottom: 160px;
  margin-top: 100px;
  @media (max-width: 1024px) {
    margin-top: 66px;
    padding-bottom: 72px;
  }
`;

export const Content = styled.div`
  margin-left: 60px;
  text-align: justify;
  font-family: Montserrat, sans-serif;
  @media (max-width: 1024px) {
    margin-left: 40px;
  }
  p {
    font-size: ${themeFontSize("medium")};
    color: ${themeColor("black")};
    font-weight: 400;
    line-height: 27px;
    @media (max-width: 1024px) {
      line-height: 23px;
    }
  }
  strong {
    font-size: ${themeFontSize("h5")};
    line-height: 36px;
    font-weight: 600;
    @media (max-width: 1024px) {
      font-size: 18px;
      line-height: 34px;
    }
  }
`;

export const Title = styled.div`
  font-size: ${themeFontSize("h2")};
  color: ${themeColor("txt")};
  font-weight: 600;
  font-family: Poppins, sans-serif;
  @media (max-width: 1024px) {
    font-size: 36px;
  }
`;

export const SideBar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  @media (max-width: 1024px) {
    min-width: 282px;
  }
`;

export const SideBarItem = styled.div`
  cursor: pointer;
  height: 85px;
  width: 280px;
  position: relative;
  display: flex;
  align-items: center;
  font-family: Poppins, sans-serif;
  font-weight: 600;
  font-size: ${themeFontSize("h5")};
  color: ${({ active, theme }) =>
    active ? theme.colors["blue"] : theme.colors["txt"]};
  border-radius: 0 10px 10px 0;
  ${({ active, theme }) =>
    active && `border-right: 15px solid ${theme.colors["blue"]}`};
  &:before {
    content: "";
    background-color: ${({ active, theme }) =>
      active ? theme.colors["lightBlue2"] : "transparent"};
    position: absolute;
    right: 0;
    top: 0;
    height: 85px;
    width: 100vw;
    z-index: -1;
  }
  @media (max-width: 1024px) {
    width: 100%;
    height: 69px;
    font-size: 18px;
    padding-left: 30px;
    margin-bottom: 20px;
    &:before {
      height: 69px;
    }
  }
`;
