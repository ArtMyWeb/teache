import styled from "styled-components";
import { themeColor, themeFontSize } from "../../theme";

export const GalleryWrapper = styled.div`
  margin-top: 23px;
  padding-bottom: 60px;
  @media (max-width: 1300px) {
    padding: 0 40px 60px;
  }
  @media (max-width: 640px) {
    padding: 0 0 48px;
  }
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: ${({ mr }) => mr && `${mr}px`};
  @media (max-width: 640px) {
    margin-right: 0;
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
  @media (max-width: 1300px) {
    font-size: ${themeFontSize("h3")};
    line-height: 40px;
    margin-bottom: 25px;
  }
  @media (max-width: 640px) {
    font-size: ${themeFontSize("h5")};
    line-height: 32px;
    margin-bottom: 16px;
  }
`;

export const Text = styled.div`
  font-size: ${themeFontSize("big")};
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  color: ${themeColor("black")};
  max-width: ${({ width }) => (width ? `${width}px` : "355px")};
  @media (max-width: 1300px) {
    font-size: ${themeFontSize("regular")};
    line-height: 24px;
  }
  @media (max-width: 640px) {
    font-size: ${themeFontSize("small")};
    line-height: 21px;
  }
`;

export const ImageStyled = styled.img`
  position: absolute;
  height: ${({ high }) => (high ? "100%" : "auto")};
  width: ${({ wide }) => (wide ? "100%" : "auto")};
  top: 150%;
  left: 50%;
  transition: all 0.5s ease-in-out;
  transform: translate(-50%, -50%);
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  position: relative;
  background-color: ${themeColor("blue")};
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "100%")};
  margin: ${({ margin }) => (margin ? margin : "")};

  &.active {
    ${ImageStyled} {
      top: 50%;
    }
  }
  @media (max-width: 640px) {
    width: 100%;
  }
`;
