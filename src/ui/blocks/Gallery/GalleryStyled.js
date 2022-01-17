import styled, { css } from "styled-components";
import { themeColor, themeFontSize } from "../../theme";

export const GalleryWrapper = styled.div`
  margin-bottom: 144px;
  margin-top: 300px;
  @media (max-width: 1300px) {
    padding: 0 4vw 6vw;
    margin-bottom: 7.2vw;
    margin-top: 150px;
  }
  @media (max-width: 768px) {
    padding: 0 0 48px;
    margin-bottom: 0;
    margin-top: 100px;
  }
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: ${({ mr }) => mr && mr};
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ title, second, third, four }) =>
    title
      ? "120px 0 50px"
      : second
      ? "20px 0 65px"
      : third
      ? "0 0 140px"
      : four
      ? "140px 0 0"
      : "0"};
  @media (max-width: 1000px) {
    margin: ${({ title, second, third, four }) =>
      title
        ? "4.8vw 0 1.3vw"
        : second
        ? "1.5vw 0 4.2vw"
        : third
        ? "0 0 5.4vw"
        : four
        ? "6.5vw 0 0"
        : "0"};
  }
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 9.375vw 0 !important;
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
    font-size: 3vw;
    line-height: 4vw;
    margin-bottom: 2.5vw;
  }
  @media (max-width: 768px) {
    font-size: 7.5vw;
    line-height: 10vw;
    margin-bottom: 5vw;
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
    font-size: 1.6vw;
    line-height: 2.4vw;
    max-width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
    font-size: ${({ big }) => (big ? "5vw" : "4.375vw")};
    line-height: ${({ big }) => (big ? "7.5vw" : "6.563vw")};
    text-align: center;
    max-width: 100%;
    padding: 0 6.25vw;
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

const styleImages = (horse, volleyball, fight, swords, yoga) => {
  return css`
    width: ${horse
      ? "640px"
      : volleyball
      ? "530px"
      : fight
      ? "470px"
      : swords
      ? "530px"
      : yoga
      ? "100%"
      : ""};
    height: ${horse
      ? "772px"
      : volleyball
      ? "400px"
      : fight
      ? "510px"
      : swords
      ? "480px"
      : yoga
      ? "630px"
      : ""};
    margin: ${({ margin }) => (margin ? margin : "")};
    @media (max-width: 1300px) {
      width: ${horse
        ? "41.2vw"
        : volleyball
        ? "43vw"
        : fight
        ? "31.7vw"
        : swords
        ? "37.4vw"
        : yoga
        ? "100%"
        : ""};
      height: ${horse
        ? "50vw"
        : volleyball
        ? "31.9vw"
        : fight
        ? "34.7vw"
        : swords
        ? "33.9vw"
        : yoga
        ? "44.6vw"
        : ""};
    }
    @media (max-width: 768px) {
      width: 100%;
      height: ${horse
        ? "78.438vw"
        : volleyball
        ? "56.250vw"
        : fight
        ? "95.938vw"
        : swords
        ? "105.938vw"
        : yoga
        ? "83.750vw"
        : ""};
      ${ImageStyled} {
        ${swords && "left: 30%"};
      }
    }
  `;
};

export const ImageWrapper = styled.div`
  overflow: hidden;
  position: relative;
  ${({ horse, volleyball, fight, swords, yoga }) =>
    styleImages(horse, volleyball, fight, swords, yoga)};
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
  @media (max-width: 480px) {
    max-width: 100%;
  }
`;
