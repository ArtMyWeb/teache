import React, { useState } from "react";
import {
  Body,
  Content,
  PrivacyPolicyWrapper,
  SideBar,
  SideBarItem,
  Title,
} from "./PrivacyPolicyStyled";
import { Container } from "../../base/Container";

const PrivacyPolicy = () => {
  const [active, setActive] = useState({ policy: true, terms: false });
  return (
    <PrivacyPolicyWrapper>
      <Container>
        <Title>{active.policy ? "Privacy Policy" : "Terms"}</Title>
        <Body>
          <SideBar>
            <SideBarItem
              onClick={() => setActive({ policy: true, terms: false })}
              active={active.policy}
            >
              Privacy Policy
            </SideBarItem>
            <SideBarItem
              onClick={() => setActive({ policy: false, terms: true })}
              active={active.terms}
            >
              Terms of Use
            </SideBarItem>
          </SideBar>
          <Content>
            {active.policy && (
              <>
                <p>
                  This Privacy Policy applies only to our online activities and
                  is valid for visitors to our website with regards to the
                  information that they shared and/or collect in peaq. This
                  policy is not applicable to any information collected offline
                  or via channels other than this website.
                </p>
                <br />
                <br />
                <strong>Consent</strong>
                <p>
                  By using our website, you hereby consent to our Privacy Policy
                  and agree to its terms.
                </p>
                <br />
                <br />
                <p>
                  Information we collect <br />
                  The personal information that you are asked to provide, and
                  the reasons why you are asked to provide it, will be made
                  clear to you at the point we ask you to provide your personal
                  information.
                  <br />
                  If you contact us directly, we may receive additional
                  information about you such as your name, email address, phone
                  number, the contents of the message and/or attachments you may
                  send us, and any other information you may choose to provide.
                </p>
                <br />
                <br />
                <p>
                  Communicate with you, either directly or through one of our
                  partners, including for customer service, to provide you with
                  updates and other information relating to the webste, and for
                  marketing and promotional purposes Send you emails <br />
                  Find and prevent fraud
                </p>
                <br />
                <br />
                <strong>Log Files</strong>
                <p>
                  peaq follows a standard procedure of using log files. These
                  files log visitors when they visit websites. All hosting
                  companies do this and a part of hosting services' analytics.
                  The information collected by log files include internet
                  protocol (IP) addresses, browser type, Internet Service
                  Provider (ISP), date and time stamp, referring/exit pages, and
                  possibly the number of clicks. These are not linked to any
                  information that is personally identifiable. The purpose of
                  the information is for analyzing trends, administering the
                  site, tracking users' movement on the website, and gathering
                  demographic information. Our Privacy Policy was created with
                  the help of the Privacy Policy Generator and the Disclaimer
                  Generator.
                </p>
                <br />
                <br />
                <strong>Cookies</strong>
                <p>
                  Like any other website, peaq uses 'cookies'. These cookies are
                  used to store information including visitors' preferences, and
                  the pages on the website that the visitor accessed or visited.
                  The information is used to optimize the users' experience by
                  customizing our web page content based on visitors' browser
                  type and/or other information.
                  <br /> For more general information on cookies, please read
                  "What Are Cookies".
                </p>
                <br />
                <br />
                <strong>Advertising Partners Privacy Policies</strong>
                <p>
                  Third-party ad servers or ad networks use technologies like
                  cookies, JavaScript, or Web Beacons that are used in their
                  respective advertisements and links that appear on peaq ,
                  which are sent directly to users' browsers. They automatically
                  receive your IP address when this occurs. These technologies
                  are used to measure the effectiveness of their advertising
                  campaigns and/or to personalize the advertising content that
                  you see on websites that you visit.
                  <br /> Note that peaq has no access to or control over these
                  cookies that are used by third-party advertisers.
                </p>
                <br />
                <br />
                <strong>Third Party Privacy Policies</strong>
                <p>
                  peaq's Privacy Policy does not apply to other advertisers or
                  websites. Thus, we are advising you to consult the respective
                  Privacy Policies of these third-party ad servers for more
                  detailed information. It may include their practices and
                  instructions about how to opt-out of certain options.
                </p>
                <br />
                <br />
                <p>
                  You can choose to disable cookies through your individual
                  browser options. To know more detailed information about
                  cookie management with specific web browsers, it can be found
                  at the browsers' respective websites.
                </p>
              </>
            )}
            {active.terms && (
              <>
                <strong>Log Files</strong>
                <p>
                  peaq follows a standard procedure of using log files. These
                  files log visitors when they visit websites. All hosting
                  companies do this and a part of hosting services' analytics.
                  The information collected by log files include internet
                  protocol (IP) addresses, browser type, Internet Service
                  Provider (ISP), date and time stamp, referring/exit pages, and
                  possibly the number of clicks. These are not linked to any
                  information that is personally identifiable. The purpose of
                  the information is for analyzing trends, administering the
                  site, tracking users' movement on the website, and gathering
                  demographic information. Our Privacy Policy was created with
                  the help of the Privacy Policy Generator and the Disclaimer
                  Generator.
                </p>
                <br />
                <br />
                <strong>Cookies</strong>
                <p>
                  Like any other website, peaq uses 'cookies'. These cookies are
                  used to store information including visitors' preferences, and
                  the pages on the website that the visitor accessed or visited.
                  The information is used to optimize the users' experience by
                  customizing our web page content based on visitors' browser
                  type and/or other information.
                  <br /> For more general information on cookies, please read
                  "What Are Cookies".
                </p>
                <br />
                <br />
                <strong>Consent</strong>
                <p>
                  By using our website, you hereby consent to our Privacy Policy
                  and agree to its terms.
                </p>
                <br />
                <br />
                <p>
                  Information we collect <br />
                  The personal information that you are asked to provide, and
                  the reasons why you are asked to provide it, will be made
                  clear to you at the point we ask you to provide your personal
                  information.
                  <br />
                  If you contact us directly, we may receive additional
                  information about you such as your name, email address, phone
                  number, the contents of the message and/or attachments you may
                  send us, and any other information you may choose to provide.
                </p>
                <br />
                <br />
                <p>
                  Communicate with you, either directly or through one of our
                  partners, including for customer service, to provide you with
                  updates and other information relating to the webste, and for
                  marketing and promotional purposes Send you emails <br />
                  Find and prevent fraud
                </p>
                <br />
                <br />
                <strong>Advertising Partners Privacy Policies</strong>
                <p>
                  Third-party ad servers or ad networks use technologies like
                  cookies, JavaScript, or Web Beacons that are used in their
                  respective advertisements and links that appear on peaq ,
                  which are sent directly to users' browsers. They automatically
                  receive your IP address when this occurs. These technologies
                  are used to measure the effectiveness of their advertising
                  campaigns and/or to personalize the advertising content that
                  you see on websites that you visit.
                  <br /> Note that peaq has no access to or control over these
                  cookies that are used by third-party advertisers.
                </p>
                <br />
                <br />
                <strong>Third Party Privacy Policies</strong>
                <p>
                  peaq's Privacy Policy does not apply to other advertisers or
                  websites. Thus, we are advising you to consult the respective
                  Privacy Policies of these third-party ad servers for more
                  detailed information. It may include their practices and
                  instructions about how to opt-out of certain options.
                </p>
                <br />
                <br />
                <p>
                  You can choose to disable cookies through your individual
                  browser options. To know more detailed information about
                  cookie management with specific web browsers, it can be found
                  at the browsers' respective websites.
                </p>
              </>
            )}
          </Content>
        </Body>
      </Container>
    </PrivacyPolicyWrapper>
  );
};

export default PrivacyPolicy;
