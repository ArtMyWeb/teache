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
              <Link to={routesPath.privacy}>Privacy</Link>
              <Link to={routesPath.privacy}>Terms</Link>
            </Links>
          </Col>
          <Col>
            <Text>Copyright © 2021 Teache. All rights reserved</Text>
          </Col>
          <Col>
            <Buttons>
              <Button icon={<AppleIcon />} background="blue">
                Apple Store
              </Button>
              <Button icon={<GoogleIcon />} background="blue">
                Google play
              </Button>
            </Buttons>
          </Col>
        </Row>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
