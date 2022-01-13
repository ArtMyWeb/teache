import styled, { css } from "styled-components";
import { themeColor, themeFontSize } from "../../theme";

const rowsStyles = (fitness, climbing, woman, man, date, time) => {
  return css`
    left: ${fitness
      ? "43%"
      : climbing
      ? "57%"
      : woman
      ? "61%"
      : man
      ? "43%"
      : date
      ? "40%"
      : time
      ? "62%"
      : "0"};
    top: ${fitness
      ? "46.5%"
      : climbing
      ? "72%"
      : woman
      ? "30.5%"
      : man
      ? "65%"
      : date
      ? "25.5%"
      : time
      ? "62%"
      : "0"};
    width: ${fitness || climbing
      ? "300px"
      : woman
      ? "430px"
      : man
      ? "370px"
      : date
      ? "264px"
      : time
      ? "354px"
      : "300px"};
    @media (max-width: 1200px) {
      width: ${fitness || climbing
        ? "19vw"
        : woman
        ? "27vw"
        : man
        ? "23.2vw"
        : date
        ? "16.6vw"
        : time
        ? "22.2vw"
        : "19vw"};
      top: ${fitness
        ? "55%"
        : climbing
        ? "75%"
        : woman
        ? "46%"
        : man
        ? "73.5%"
        : date
        ? "42%"
        : time
        ? "72%"
        : "0"};
      left: ${fitness
        ? "40%"
        : climbing
        ? "60%"
        : woman
        ? "63.5%"
        : man
        ? "42%"
        : date
        ? "34%"
        : time
        ? "60%"
        : "0"};
    }
    @media (max-width: 640px) {
      width: ${time ? "69.3vw" : "50vw"};
      top: ${fitness
        ? "76.5%"
        : climbing
        ? "92%"
        : woman
        ? "65%"
        : man
        ? "86%"
        : date
        ? "63%"
        : time
        ? "84%"
        : "0"};
      left: ${fitness
        ? "33%"
        : climbing
        ? "65%"
        : woman
        ? "68%"
        : man
        ? "31%"
        : date
        ? "34%"
        : time
        ? "60%"
        : "0"};
    }
  `;
};

export const StickyStyled = styled.div`
  overflow: hidden;
  .sticky {
    height: 950px;
    width: 100%;
    @media (max-width: 1200px) {
      height: 100vh;
    }
  }
`;

export const MainTitle = styled.div`
  color: ${themeColor("txt")};
  font-size: ${themeFontSize("h1")};
  text-align: center;
  font-family: Poppins, Montserrat, sans-serif;
  font-weight: 600;
  line-height: 80px;
  position: absolute;
  width: 100%;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: 1200px) {
    font-size: 4.8vw;
    line-height: 5.5vw;
  }
  @media (max-width: 640px) {
    font-size: 7.5vw;
    line-height: 10vw;
  }
`;

export const PhoneWrapper = styled.div`
  margin: 0 auto;
  position: relative;
  height: 100%;
`;

export const PhonePicture = styled.div`
  border: 5px solid ${themeColor("txt")};
  border-radius: 20px;
  width: 330px;
  height: 712px;
  box-sizing: border-box;
  overflow: hidden;
  position: absolute;
  left: 50%;
  top: ${({ first }) => (first ? "50%" : "10%")};
  transform: translateX(-50%) ${({ first }) => first && "scale(1.15)"};
  z-index: 1;
  box-shadow: 0 4px 30px 6px rgba(25, 29, 58, 0.17);
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  @media (max-width: 1200px) {
    width: 20.8vw;
    height: 44.8vw;
    top: ${({ first }) => (first ? "60%" : "30%")};
  }
  @media (max-width: 640px) {
    width: 53.125vw;
    height: 115vw;
    top: ${({ first }) => (first ? "60%" : "50%")};
  }
`;

export const PictureRowsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  opacity: 0;
`;

export const PictureRow = styled.div`
  position: absolute;
  z-index: 2;
  ${({ fitness, climbing, woman, man, date, time }) =>
    rowsStyles(fitness, climbing, woman, man, date, time)}
  transform: translateX(-50%);
  box-shadow: 4px 4px 20px 0 rgba(25, 29, 58, 0.17);
  border-radius: 10px;
  img {
    width: 100%;
  }
`;

export const Column = styled.div`
  color: ${({ dark, theme }) =>
    dark ? theme.colors["txt"] : theme.colors["white"]};
  position: absolute;
  width: 310px;
  top: 50%;
  left: ${({ left }) => (left ? "16%" : "auto")};
  right: ${({ right }) => (right ? "16%" : "auto")};
  transform: translateY(-50%);
  text-align: left;
  opacity: 0;
  @media (max-width: 1600px) {
    left: ${({ left }) => (left ? "8%" : "auto")};
    right: ${({ right }) => (right ? "8%" : "auto")};
  }
  @media (max-width: 1200px) {
    width: 26.5vw;
  }
  @media (max-width: 640px) {
    width: 56.25vw;
    top: 30%;
    left: ${({ right }) => (right ? "5%" : "auto")};
    right: ${({ left }) => (left ? "5%" : "auto")};
  }
`;

export const ColumnTitle = styled.div`
  font-size: ${themeFontSize("h3")};
  font-family: Poppins, Montserrat, Roboto, "sans-serif";
  font-weight: 600;
  @media (max-width: 1200px) {
    font-size: 2.4vw;
  }
  @media (max-width: 640px) {
    font-size: 5.625vw;
  }
`;

export const ColumnText = styled.div`
  font-size: ${themeFontSize("big")};
  font-family: Montserrat, Poppins, Roboto, "sans-serif";
  font-weight: 500;
  margin-top: 14px;
  @media (max-width: 1200px) {
    font-size: 1.8vw;
    margin-top: 0.79vw;
  }
  @media (max-width: 640px) {
    font-size: 3.75vw;
    margin-top: 1.5vw;
  }
`;

export const Circle = styled.div`
  background-color: ${themeColor("txt")};
  width: 776px;
  height: 776px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  margin: 0 auto;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translateX(-50%);
  transform-origin: center;
  @media (max-width: 1200px) {
    width: 40.417vw;
    height: 40.417vw;
    top: 60%;
  }
  @media (max-width: 640px) {
    width: 126.25vw;
    height: 126.25vw;
  }
`;
