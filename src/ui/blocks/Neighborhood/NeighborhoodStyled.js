import styled from "styled-components";
import { themeColor, themeFontSize } from "../../theme";
import { InputWrapper } from "../../base/Input/InputStyled";

export const NeighborhoodWrapper = styled.div`
  margin-top: 23px;
  padding-bottom: 60px;
`;

export const Title = styled.div`
  text-align: center;
  color: ${themeColor("txt")};
  font-size: ${themeFontSize("large")};
  font-family: Montserrat, sans-serif;
  line-height: 1.5;
  max-width: 370px;
  margin: 0 auto;
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 670px;
  width: 100%;
  margin: 50px auto 0;
  ${InputWrapper} {
    margin-right: 20px;
  }
`;
