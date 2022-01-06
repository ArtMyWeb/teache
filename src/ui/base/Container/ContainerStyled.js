import styled from "styled-components";

export const ContainerStyled = styled.div`
  max-width: ${({ wide }) => (wide ? "1590px" : "1330px")};
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  height: 100%;
`;
