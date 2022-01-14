import styled from "styled-components";
import { themeColor, themeFontSize } from "../../theme";

export const GalleryWrapper = styled.div`
  margin-bottom: 144px;
  margin-top: 250px;
  @media (max-width: 1300px) {
    padding: 0 40px 60px;
    margin-bottom: 72px;
  }
  @media (max-width: 1000px) {
    padding: 0 0 48px;
    margin-bottom: 0;
  }
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: ${({ mr }) => mr && `${mr}px`};
  @media (max-width: 1000px) {
    margin-right: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ margin }) => (margin ? margin : "0")};
  @media (max-width: 1000px) {
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 30px 0 !important;
    padding: 0 20px;
  }
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
  @media (max-width: 1000px) {
    font-size: ${themeFontSize("h5")};
    line-height: 32px;
    margin-bottom: 16px;
    text-align: center;
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
  @media (max-width: 1000px) {
    font-size: ${({ big, theme }) =>
      big ? theme.fonts.sizes["regular"] : theme.fonts.sizes["small"]};
    line-height: 21px;
    text-align: center;
  }
`;

export const ImageStyled = styled.img`
  position: absolute;
  height: ${({ high }) => (high ? "100%" : "auto")};
  width: ${({ wide }) => (wide ? "100%" : "auto")};
  top: 50%;
  left: 50%;
  transition: all 0.5s ease-in-out;
  transform: translate(-50%, -50%);
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "100%")};
  margin: ${({ margin }) => (margin ? margin : "")};
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: ${themeColor("blue")};
    position: absolute;
    top: 0;
    left: 50%;
    transition: all 0.5s ease-in-out;
    transform: translateX(-50%);
  }
  &.active {
    &:after {
      top: -100%;
    }
  }
  @media (max-width: 1000px) {
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
  }
  @media (max-width: 480px) {
    max-width: 100%;
  }
`;
