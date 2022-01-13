import styled from "styled-components";
import { themeColor, themeFontSize } from "../../theme";

export const GalleryWrapper = styled.div`
  margin-top: 23px;
  padding-bottom: 60px;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  &:first-child {
    margin-right: 130px;
  }
  @media (max-width: 1600px) {
    &:first-child {
      margin-right: 58px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ margin }) => (margin ? margin : "0")};
`;

export const Title = styled.div`
  font-family: Poppins, sans-serif;
  color: ${themeColor("txt")};
  font-size: ${themeFontSize("h2")};
  font-weight: 600;
  line-height: 60px;
  margin-bottom: 40px;
`;

export const Text = styled.div`
  font-size: ${themeFontSize("big")};
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  color: ${themeColor("black")};
  max-width: ${({ width }) => (width ? `${width}px` : "355px")};
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  position: relative;
  background-color: ${themeColor("blue")};
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "100%")};
  margin: ${({ margin }) => (margin ? margin : "0 auto")};
`;

export const ImageStyled = styled.img`
  position: absolute;
  height: ${({ high }) => (high ? "100%" : "auto")};
  width: ${({ wide }) => (wide ? "100%" : "auto")};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
