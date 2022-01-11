import styled from "styled-components";
import { themeColor, themeFontSize } from "../../theme";

export const Wrapper = styled.div`
  overflow-x: hidden;
  width: 100%;
`;

export const FrameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
  background: ${({ bgColor, theme }) => bgColor && theme.colors[bgColor]};
`;

export const StickyStyled = styled.div`
  overflow: hidden;
  .section {
    height: 70vh;
  }
  .sticky,
  .sticky2 {
    height: 100vh;
    width: 100%;
    & .animation,
    .animation2 {
      width: 100%;
      height: 100%;
      position: absolute;
      & svg {
        opacity: 1;
        position: absolute;
        width: 300px;
        height: 300px;
      }
    }
    .heading {
      position: absolute;
      height: 100%;
      width: 100%;
      h2 {
        font-size: 40px;
        position: absolute;
        bottom: 10%;
        left: 10%;
        margin: 0;
      }
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
  left: 50%;
  transform: translateX(-50%);
`;

export const Column = styled.div`
  color: ${themeColor("white")};
  position: absolute;
  width: 310px;
  top: 50%;
  transform: translateY(-50%);
  text-align: left;
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
  top: 10%;
  transform: translateX(-50%);
  z-index: 1;
  box-shadow: 0 4px 30px 6px rgba(25, 29, 58, 0.17);
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
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
  left: ${({ fitness, climbing, woman, man }) =>
    fitness ? "43%" : climbing ? "57%" : woman ? "56%" : man ? "20%" : "0"};
  top: ${({ fitness, climbing, woman, man }) =>
    fitness ? "40.5%" : climbing ? "66%" : woman ? "20%" : man ? "60%" : "0"};
  transform: translateX(-50%);
  width: 300px;
  box-shadow: 4px 4px 20px 0 rgba(25, 29, 58, 0.17);
  border-radius: 10px;
  img {
    width: 100%;
  }
`;
export const ColumnTitle = styled.div`
  font-size: ${themeFontSize("h3")};
  font-family: Poppins, Montserrat, Roboto, "sans-serif";
  font-weight: 600;
`;

export const ColumnText = styled.div`
  font-size: ${themeFontSize("large")};
  font-family: Montserrat, Poppins, Roboto, "sans-serif";
  font-weight: 500;
  margin-top: 14px;
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
  left: 50%;
  transform: translateX(-50%);
  transform-origin: center;
`;
