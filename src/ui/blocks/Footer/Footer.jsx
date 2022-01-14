import React from "react";
import {
  AppleIcon,
  GoogleIcon,
  SocFacebookIcon,
  SocInstIcon,
  SocTwitterIcon,
} from "../../icons";
import { Button } from "../../base/Button";
import {
  Buttons,
  Col,
  FooterWrapper,
  Links,
  Row,
  Social,
  SocialItem,
  Text,
  ColText,
  ColBtn,
} from "./FooterStyled";
import { Container } from "../../base/Container";
import { routesPath } from "../../../conts/routes";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container wide>
        <Row>
          <Col>
            <Social>
              <SocialItem>
                <SocInstIcon />
              </SocialItem>
              <SocialItem>
                <SocFacebookIcon />
              </SocialItem>
              <SocialItem>
                <SocTwitterIcon />
              </SocialItem>
            </Social>
            <Links>
              <Link to={`${routesPath.privacy}?tab=privacy`}>Privacy</Link>
              <Link to={`${routesPath.privacy}?tab=terms`}>Terms</Link>
            </Links>
          </Col>
          <ColText>
            <Text>Copyright © 2021 Teache. All rights reserved</Text>
          </ColText>
          <ColBtn>
            <Buttons>
              <Button icon={<AppleIcon />} background="blue">
                Apple Store
              </Button>
              <Button icon={<GoogleIcon />} background="blue">
                Google play
              </Button>
            </Buttons>
          </ColBtn>
        </Row>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
