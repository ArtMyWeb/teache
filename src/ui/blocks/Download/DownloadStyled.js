import styled from "styled-components";
import { themeColor, themeFontSize } from "../../theme";
import { ButtonStyled } from "../../base/Button/ButtonStyled";

export const InfoWrapper = styled.div`
  padding: 70px 15px 45px 15px;
`;
export const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${ButtonStyled} {
    margin: 0 10px;
  }
`;

export const Title = styled.div`
  color: ${themeColor("txt")};
  font-size: ${themeFontSize("h2")};
  font-family: Poppins, sans-serif;
  font-weight: 700;
  margin-bottom: 30px;
  text-align: center;
`;
