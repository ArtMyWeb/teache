import React from "react";
import { LogoIcon } from "../../icons";
import { Container } from "../../base/Container";
import {
  Anchor,
  HeaderContent,
  HeaderWrapper,
  Logo,
  Navigation,
} from "./HeaderStyled";
import { Link } from "react-router-dom";
import { routesPath } from "../../../conts/routes";

const Header = ({ solid }) => {
  return (
    <HeaderWrapper solid={solid}>
      <Container>
        <HeaderContent>
          <Logo>
            <Link to={routesPath.main}>
              <LogoIcon />
            </Link>
          </Logo>
          <Navigation>
            <Link to={routesPath.faq}>
              <Anchor solid={solid}>FAQ</Anchor>
            </Link>
            <Anchor solid={solid}>Download</Anchor>
          </Navigation>
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
