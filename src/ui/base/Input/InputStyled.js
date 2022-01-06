import styled from "styled-components";
import { themeColor, themeFontSize } from "../../theme";

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  width: 100%;
  margin-top: 4px;
  position: relative;
`;

export const InputIcon = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 20px;
  width: 27px;
  height: 27px;
  svg {
    width: 100%;
  }
`;

export const InputLabel = styled.label`
  font-size: ${themeFontSize("small")};
  color: ${themeColor("black")};
`;

export const InputStyled = styled.input`
  width: 100%;
  height: 60px;
  padding: ${({ icon }) => (icon ? "20px 20px 20px 60px" : "20px")};
  font-size: ${themeFontSize("regular")};
  border: 1px solid ${themeColor("lightBlue")};
  outline: none;
  border-radius: 10px;
  &::placeholder {
    color: ${themeColor("gray")};
  }
`;
