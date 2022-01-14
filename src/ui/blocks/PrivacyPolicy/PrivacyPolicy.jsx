import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Body,
  Content,
  PrivacyPolicyWrapper,
  SideBar,
  SideBarItem,
  Title,
} from "./PrivacyPolicyStyled";
import { Container } from "../../base/Container";
import { routesPath } from "../../../conts/routes";
import { privacy_policy } from "./privacy_policy";
import Terms from "./Terms";

const PrivacyPolicy = () => {
  const [active, setActive] = useState({ policy: true, terms: false });

  const navigate = useNavigate();
  const location = useLocation();
  const { tab } = queryString.parse(location.search);

  const handleSelectPrivacy = () => {
    setActive({ policy: true, terms: false });
    navigate(`${routesPath.privacy}?tab=privacy`, { replace: true });
  };

  const handleSelectTerms = () => {
    setActive({ policy: false, terms: true });
    navigate(`${routesPath.privacy}?tab=terms`, { replace: true });
  };

  useEffect(() => {
    if (tab === "privacy") {
      setActive({ policy: true, terms: false });
    } else {
      setActive({ policy: false, terms: true });
    }
  }, [tab]);

  return (
    <PrivacyPolicyWrapper>
      <Container>
        <Title>{active.policy ? "Privacy Policy" : "Terms"}</Title>
        <Body>
          <SideBar>
            <SideBarItem onClick={handleSelectPrivacy} active={active.policy}>
              Privacy Policy
            </SideBarItem>
            <SideBarItem onClick={handleSelectTerms} active={active.terms}>
              Terms of Use
            </SideBarItem>
          </SideBar>
          <Content>
            {active.policy && privacy_policy()}
            {active.terms && <Terms />}
          </Content>
        </Body>
      </Container>
    </PrivacyPolicyWrapper>
  );
};

export default PrivacyPolicy;
