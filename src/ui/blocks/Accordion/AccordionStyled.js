import styled from "styled-components";
import { themeColor, themeFontSize } from "../../theme";

export const AccordionWrapper = styled.div`
  margin-top: 70px;
  padding-bottom: 160px;
`;

export const Title = styled.div`
  font-size: ${themeFontSize("h5")};
  color: ${themeColor("blue")};
  font-weight: 700;
`;

export const AccordionStyled = styled.div`
  width: 100%;
  height: 100%;
  margin: 20px auto 0;
`;

export const AccordionItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 30px;
  border: 2px solid ${themeColor("lightBlue2")};
  border-radius: 10px;
`;

export const AccordionTitle = styled.div`
  font-size: ${themeFontSize("medium")};
  color: ${themeColor("txt")};
  font-family: Poppins, sans-serif;
  font-weight: 700;
  cursor: pointer;
  padding-right: 40px;
`;

export const AccordionBody = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  max-width: 520px;
`;

export const AccordionText = styled.div`
  margin-top: 15px;
  color: ${themeColor("grey")};
  font-family: Montserrat, sans-serif;
  font-size: ${themeFontSize("medium")};
  line-height: 27px;
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
`;
