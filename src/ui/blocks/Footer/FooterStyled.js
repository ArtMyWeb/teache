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
  @media (max-width: 1200px) {
    margin-right: 45px;
  }
`;

export const SocialItem = styled.a`
  cursor: pointer;
  margin: 0 15px;
  width: 25px;
  height: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1200px) {
    margin: 0 0 0 19px;
  }
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
  @media (max-width: 1200px) {
    justify-content: flex-start;
    a {
      font-size: ${themeFontSize("regular")};
      margin: 0 11px;
    }
  }
`;

export const Text = styled.div`
  font-size: ${themeFontSize("regular")};
  text-align: center;
  color: ${themeColor("gray")};
  font-family: Poppins, sans-serif;
  @media (max-width: 1200px) {
    font-size: ${themeFontSize("extraSmall")};
  }
  @media (max-width: 998px) {
    padding: 0 10px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${ButtonStyled} {
    width: 180px;
    &:first-child {
      margin-right: 20px;
    }

    @media (max-width: 1200px) {
      font-size: ${themeFontSize("extraSmall")};
      font-weight: bold;
      height: 44px;
      width: 135px;

      &:first-child {
        margin-right: 10px;
      }
    }
  }
`;
