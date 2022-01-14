import styled, { css } from "styled-components";
import { themeColor } from "../../theme";

const rowsStyles = (fitness, climbing, woman, man, date, time) => {
  return css`
    left: ${fitness
      ? "-42%"
      : climbing
      ? "51.5%"
      : woman
      ? "51%"
      : man
      ? "-51.5%"
      : date
      ? "-34.5%"
      : time
      ? "47%"
      : "0"};
    bottom: ${fitness
      ? "48.5%"
      : climbing
      ? "13.5%"
      : woman
      ? "58.5%"
      : man
      ? "14%"
      : date
      ? "72%"
      : time
      ? "17%"
      : "0"};
    width: ${fitness || climbing
      ? "15.625vw"
      : woman
      ? "22.396vw"
      : man
      ? "19.271vw"
      : date
      ? "13.750vw"
      : time
      ? "18.438vw"
      : "0"};
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
      bottom: ${fitness
        ? "48.5%"
        : climbing
        ? "14%"
        : woman
        ? "58%"
        : man
        ? "13%"
        : date
        ? "71.5%"
        : time
        ? "16.5%"
        : "0"};
      left: ${fitness
        ? "-40%"
        : climbing
        ? "49%"
        : woman
        ? "50.5%"
        : man
        ? "-52%"
        : date
        ? "-33%"
        : time
        ? "47%"
        : "0"};
    }
    @media (max-width: 640px) {
      width: ${time ? "69.3vw" : "50vw"};
      bottom: ${fitness
        ? "48.5%"
        : climbing
        ? "24%"
        : woman
        ? "65%"
        : man
        ? "34%"
        : date
        ? "72%"
        : time
        ? "22%"
        : "0"};
      left: ${fitness
        ? "-32%"
        : climbing
        ? "39%"
        : woman
        ? "38%"
        : man
        ? "-33%"
        : date
        ? "-29%"
        : time
        ? "5%"
        : "0"};
    }
  `;
};

export const StickyStyled = styled.div`
  overflow: hidden;
  .sticky {
    height: 100vh;
    width: 100%;
  }
`;

export const MainTitle = styled.div`
  color: ${themeColor("txt")};
  font-size: 3.333vw;
  text-align: center;
  font-family: Poppins, Montserrat, sans-serif;
  font-weight: 600;
  line-height: 4.167vw;
  position: absolute;
  width: 100%;
  bottom: 70%;
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: 1200px) {
    font-size: 4.8vw;
    line-height: 5.5vw;
    bottom: 70%;
  }
  @media (max-width: 640px) {
    font-size: 7.5vw;
    line-height: 10vw;
    bottom: 0;
    transform: translate(-50%, -490%);
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
  width: 17.188vw;
  height: 37.083vw;
  box-sizing: border-box;
  overflow: hidden;
  position: absolute;
  left: 50%;
  bottom: ${({ first }) => (first ? "-25%" : "10%")};
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
    bottom: ${({ first }) => (first ? "-30%" : "15%")};
  }
  @media (max-width: 640px) {
    width: 53.125vw;
    height: 115vw;
    bottom: 0;
    transform: ${({ first }) =>
      first ? "translate(-50%, 34%) scale(1.15)" : "translate(-50%, 22%)"};
  }
`;

export const PictureRowsWrapper = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 17.188vw;
  height: 37.083vw;
  z-index: 3;
  opacity: 0;

  @media (max-width: 1200px) {
    width: 20.8vw;
    height: 44.8vw;
    bottom: 15%;
  }
  @media (max-width: 640px) {
    width: 53.125vw;
    height: 115vw;
    bottom: 0;
    transform: translate(-50%, 22%);
  }
`;

export const PictureRow = styled.div`
  position: absolute;
  z-index: 2;
  ${({ fitness, climbing, woman, man, date, time }) =>
    rowsStyles(fitness, climbing, woman, man, date, time)}
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
  width: 16.146vw;
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
    top: auto;
    bottom: 0;
    left: ${({ right }) => (right ? "5%" : "auto")};
    right: ${({ left }) => (left ? "5%" : "auto")};
    transform: translateY(-400%);
  }
`;

export const ColumnTitle = styled.div`
  font-size: 1.563vw;
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
  font-size: 1.042vw;
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
  width: 40.417vw;
  height: 40.417vw;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  margin: 0 auto;
  position: absolute;
  bottom: -30%;
  left: 50%;
  transform: translateX(-50%);
  transform-origin: center;
  @media (max-width: 1200px) {
    width: 40.417vw;
    height: 40.417vw;
    bottom: -30%;
  }
  @media (max-width: 640px) {
    width: 126.25vw;
    height: 126.25vw;
    bottom: 0;
    transform: translate(-50%, 40%);
  }
`;
