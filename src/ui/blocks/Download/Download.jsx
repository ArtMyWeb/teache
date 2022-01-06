import React from "react";
import { AppleIcon, GoogleIcon } from "../../icons";
import { Container } from "../../base/Container";
import { Button } from "../../base/Button";
import { ButtonRow, InfoWrapper, Title } from "./DownloadStyled";

const Download = () => {
  return (
    <InfoWrapper>
      <Container>
        <Title>Download the App</Title>
        <ButtonRow>
          <Button icon={<AppleIcon />} background="blue" width={180}>
            Apple Store
          </Button>
          <Button icon={<GoogleIcon />} background="blue" width={180}>
            Google play
          </Button>
        </ButtonRow>
      </Container>
    </InfoWrapper>
  );
};

export default Download;
