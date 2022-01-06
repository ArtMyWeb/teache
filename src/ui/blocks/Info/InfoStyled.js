import styled from "styled-components";
import { themeColor, themeFontSize } from "../../theme";

export const InfoWrapper = styled.div`
  padding: 70px 15px 45px 15px;
`;

export const Row = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 285px;
`;

export const Icon = styled.div`
  svg {
    fill: ${themeColor("blue")};
  }
`;

export const Title = styled.div`
  color: ${themeColor("blue")};
  font-size: ${themeFontSize("large")};
  font-family: Poppins, sans-serif;
  font-weight: 700;
  margin-top: 20px;
`;

export const Text = styled.div`
  color: ${themeColor("black")};
  font-size: ${themeFontSize("medium")};
  font-family: Montserrat, sans-serif;
  margin-top: 15px;
`;
