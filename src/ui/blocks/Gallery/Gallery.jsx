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
              <ImageStyled src={horsePic} alt="horse" />
            </ImageWrapper>
            <Content>
              <Text>
                Choose your own locations for your class, your home, public
                park, anywhere you can teach
              </Text>
            </Content>
          </Col>
          <Col>
            <Content>
              <Title>Share Your Talents  & Become a Teacher</Title>
              <Text>
                Join our instructors' network and give classes in your
                neighborhood
              </Text>
            </Content>
            <ImageWrapper width={530} height={400}>
              <ImageStyled src={volleyballPic} alt="volleyball" />
            </ImageWrapper>
          </Col>
        </Row>
        <Row>
          <Col>
            <ImageWrapper width={470} height={510}>
              <ImageStyled src={fightPic} alt="fight" />
            </ImageWrapper>
            <Content>
              <Text>
                Receive payments through the app and keep track of your revenue
              </Text>
            </Content>
          </Col>
          <Col>
            <Content>
              <Text>
                Manage your own schedule and give classes whenever you feel to
              </Text>
            </Content>
            <ImageWrapper width={530} height={480}>
              <ImageStyled src={swordsPic} alt="swords" />
            </ImageWrapper>
          </Col>
        </Row>
        <Row>
          <ImageWrapper height={630}>
            <ImageStyled src={yogaPic} alt="yoga" />
          </ImageWrapper>
        </Row>
      </Container>
    </GalleryWrapper>
  );
};

export default Gallery;
