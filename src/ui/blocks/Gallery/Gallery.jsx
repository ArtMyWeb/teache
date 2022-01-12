import React from "react";
import {
  Col,
  Content,
  GalleryWrapper,
  ImageStyled,
  ImageWrapper,
  Row,
  Text,
  Title,
} from "./GalleryStyled";
import { Container } from "../../base/Container";

import horsePic from "../../../static/pictures/horse.jpeg";
import volleyballPic from "../../../static/pictures/voleyball.jpeg";
import fightPic from "../../../static/pictures/fight.jpeg";
import swordsPic from "../../../static/pictures/swords.jpeg";
import yogaPic from "../../../static/pictures/yoga.jpeg";

const Gallery = () => {
  return (
    <GalleryWrapper>
      <Container>
        <Row>
          <Col>
            <ImageWrapper width={640} height={772}>
              <ImageStyled high="true" src={horsePic} alt="horse" />
            </ImageWrapper>
            <Content style={{ marginBottom: 65, marginTop: 20 }}>
              <Text width={340}>
                Choose your own locations for your class, your home, public
                park, anywhere you can teach
              </Text>
            </Content>
          </Col>
          <Col>
            <Content style={{ marginBottom: 120, marginTop: 50 }}>
              <Title>Share Your Talents  & Become a Teacher</Title>
              <Text>
                Join our instructors' network and give classes in your
                neighborhood
              </Text>
            </Content>
            <ImageWrapper width={530} height={400}>
              <ImageStyled high="true" src={volleyballPic} alt="volleyball" />
            </ImageWrapper>
          </Col>
        </Row>
        <Row>
          <Col>
            <ImageWrapper width={470} height={510} style={{ marginLeft: 60 }}>
              <ImageStyled wide="true" src={fightPic} alt="fight" />
            </ImageWrapper>
            <Content style={{ marginTop: 140 }}>
              <Text>
                Receive payments through the app and keep track of your revenue
              </Text>
            </Content>
          </Col>
          <Col>
            <Content style={{ marginBottom: 140 }}>
              <Text>
                Manage your own schedule and give classes whenever you feel to
              </Text>
            </Content>
            <ImageWrapper width={530} height={480}>
              <ImageStyled high="true" src={swordsPic} alt="swords" />
            </ImageWrapper>
          </Col>
        </Row>
        <Row>
          <ImageWrapper height={630} style={{ marginTop: 85 }}>
            <ImageStyled wide="true" src={yogaPic} alt="yoga" />
          </ImageWrapper>
        </Row>
      </Container>
    </GalleryWrapper>
  );
};

export default Gallery;
