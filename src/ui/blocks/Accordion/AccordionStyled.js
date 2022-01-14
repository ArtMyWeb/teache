import styled from "styled-components";
import { themeColor, themeFontSize } from "../../theme";

export const AccordionWrapper = styled.div`
  margin-top: 70px;
  padding-bottom: 160px;
  @media (max-width: 1024px) {
    padding: 0 40px 31px 40px;
  }
  @media (max-width: 768px) {
    padding: 0 20px 31px 20px;
  }
  @media (max-width: 640px) {
    margin-top: 45px;
    padding: 0 7px 26px 7px;
  }
`;

export const Title = styled.div`
  font-size: ${themeFontSize("h3")};
  color: ${themeColor("blue")};
  font-weight: 600;
  font-family: Montserrat, sans-serif;
  @media (max-width: 1024px) {
    margin-bottom: 10px;
  }
  @media (max-width: 768px) {
    font-size: 26px;
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 16px;
    text-align: center;
    font-weight: bold;
  }
`;

export const AccordionStyled = styled.div`
  width: 100%;
  height: 100%;
  margin: 68px auto 0;
  @media (max-width: 1024px) {
    margin: 40px auto 0;
  }
  @media (max-width: 768px) {
    margin: 20px auto 0;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Tabs = styled.div`
  display: flex;
  align-items: center;
`;

export const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  cursor: pointer;
  width: 238px;
  padding: 16px;
  font-size: ${themeFontSize("regular")};
  font-weight: 600;
  font-family: Poppins, sans-serif;
  color: ${({ active, theme }) =>
    active ? theme.colors["blue"] : theme.colors["gray"]};
  border-bottom: 3px solid
    ${({ active, theme }) => (active ? theme.colors["blue"] : "transparent")};
  &:hover {
    color: ${themeColor("blue")};
  }
  @media (max-width: 1024px) {
    width: 170px;
    padding: 14px;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    width: 120px;
    padding: 12px;
    font-size: 12px;
  }
`;

export const AccordionItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 30px;
  border: 2px solid ${themeColor("lightBlue2")};
  border-radius: 10px;
  @media (max-width: 768px) {
    padding: 10px 15px;
  }
`;

export const AccordionTitle = styled.div`
  font-size: ${themeFontSize("medium")};
  color: ${themeColor("txt")};
  font-family: Poppins, sans-serif;
  font-weight: 700;
  cursor: pointer;
  padding-right: 40px;
  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const AccordionBody = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  padding-right: 60px;
  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

export const AccordionText = styled.div`
  margin-top: 15px;
  color: ${themeColor("grey")};
  font-family: Montserrat, sans-serif;
  font-size: ${themeFontSize("medium")};
  line-height: 27px;
  @media (max-width: 768px) {
    font-size: 12px;
    margin-top: 11px;
    line-height: 18px;
  }
`;

export const AccordionSwitch = styled.div`
  position: absolute;
  right: 30px;
  top: 30px;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform-origin: center;
  transition: all 0.2s;
  transform: ${({ isOpen }) => isOpen && "scale(1, -1)"};
  @media (max-width: 768px) {
    right: 17px;
    top: 16px;
    width: 30px;
    height: 30px;
  }
`;
