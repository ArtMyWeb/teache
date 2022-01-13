import React from "react";
import { AppleIcon, GoogleIcon } from "../../icons";
import { Container } from "../../base/Container";
import { Button } from "../../base/Button";
import { ButtonRow, DownloadWrapper, Title } from "./DownloadStyled";

const Download = () => {
  return (
    <DownloadWrapper>
      <Container>
        <Title>Download the App</Title>
        <ButtonRow>
          <Button icon={<AppleIcon />} background="blue">
            Apple Store
          </Button>
          <Button icon={<GoogleIcon />} background="blue">
            Google play
          </Button>
        </ButtonRow>
      </Container>
    </DownloadWrapper>
  );
};

export default Download;
