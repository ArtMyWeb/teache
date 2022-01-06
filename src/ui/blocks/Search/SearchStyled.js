import styled from "styled-components";
import { themeColor, themeFontSize } from "../../theme";
import { InputWrapper } from "../../base/Input/InputStyled";

export const SearchWrapper = styled.div`
  padding-top: 214px;
`;

export const Title = styled.div`
  font-size: ${themeFontSize("h2")};
  color: ${themeColor("txt")};
  font-weight: 600;
  font-family: Poppins, sans-serif;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  width: 800px;
  ${InputWrapper} {
    margin-right: 20px;
  }
`;
