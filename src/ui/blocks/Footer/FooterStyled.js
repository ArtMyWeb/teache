import styled from "styled-components";
import { themeColor, themeFontSize } from "../../theme";
import { ButtonStyled } from "../../base/Button/ButtonStyled";

export const FooterWrapper = styled.div`
  height: 100px;
  border-top: 2px solid ${themeColor("lightBlue2")};
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const Col = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 70px;
`;

export const SocialItem = styled.a`
  cursor: pointer;
  margin: 0 15px;
  width: 25px;
  height: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Poppins, sans-serif;
  a {
    margin: 0 25px;
    font-size: ${themeFontSize("medium")};
    color: ${themeColor("txt")};
  }
`;

export const Text = styled.div`
  font-size: ${themeFontSize("regular")};
  text-align: center;
  color: ${themeColor("gray")};
  font-family: Poppins, sans-serif;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${ButtonStyled} {
    &:first-child {
      margin-right: 20px;
    }
  }
`;
