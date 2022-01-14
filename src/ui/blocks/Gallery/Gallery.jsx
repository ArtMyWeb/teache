import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

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
import { useMediaQuery } from "react-responsive";

const Gallery = () => {
  const horsePicRef = useRef();
  const volleyballPicRef = useRef();
  const fightPicRef = useRef();
  const swordsPicRef = useRef();
  const yogaPicRef = useRef();

  const isTablet = useMediaQuery({ query: "(max-width: 1300px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  useEffect(() => {
    const images = [];
    images.push(horsePicRef.current);
    images.push(volleyballPicRef.current);
    images.push(fightPicRef.current);
    images.push(swordsPicRef.current);
    images.push(yogaPicRef.current);
    images.forEach((image) => {
      gsap.from(image, {
        scrollTrigger: {
          trigger: image,
          start: "20% 90%",
          toggleClass: "active",
          toggleActions: "play none play none",
        },
      });
    });
  }, []);

  return (
    <GalleryWrapper>
      <Container>
        <Row>
          <Col mr={isTablet ? 78 : 130}>
            <ImageWrapper
              ref={horsePicRef}
              width={isTablet ? 412 : 640}
              height={isTablet ? 500 : isMobile ? 251 : 772}
            >
              <ImageStyled high="true" src={horsePic} alt="horse" />
            </ImageWrapper>
            {!isMobile && (
              <Content
                style={{
                  marginBottom: isTablet ? 42 : 65,
                  marginTop: isTablet ? 15 : 20,
                }}
              >
                <Text width={340}>
                  Choose your own locations for your class, your home, public
                  park, anywhere you can teach
                </Text>
              </Content>
            )}
          </Col>
          <Col>
            {!isMobile && (
              <Content
                style={{
                  marginBottom: isTablet ? 48 : 120,
                  marginTop: isTablet ? 13 : 50,
                }}
              >
                <Title>Share Your Talents  & Become a Teacher</Title>
                <Text>
                  Join our instructors' network and give classes in your
                  neighborhood
                </Text>
              </Content>
            )}
            <ImageWrapper
              ref={volleyballPicRef}
              width={isTablet ? 430 : 530}
              height={isTablet ? 319 : isMobile ? 251 : 400}
            >
              <ImageStyled
                high={!isMobile}
                wide={isMobile}
                src={volleyballPic}
                alt="volleyball"
              />
            </ImageWrapper>
          </Col>
        </Row>
        <Row>
          <Col mr={isTablet ? 58 : 130}>
            <ImageWrapper
              ref={fightPicRef}
              width={isTablet ? 317 : 470}
              height={isTablet ? 347 : isMobile ? 307 : 510}
              style={!isMobile ? { marginLeft: 60 } : {}}
            >
              <ImageStyled wide="true" src={fightPic} alt="fight" />
            </ImageWrapper>
            {!isMobile && (
              <Content style={{ marginTop: isTablet ? 65 : 140 }}>
                <Text>
                  Receive payments through the app and keep track of your
                  revenue
                </Text>
              </Content>
            )}
          </Col>
          <Col>
            {!isMobile && (
              <Content style={{ marginBottom: isTablet ? 54 : 140 }}>
                <Text>
                  Manage your own schedule and give classes whenever you feel to
                </Text>
              </Content>
            )}
            <ImageWrapper
              ref={swordsPicRef}
              width={isTablet ? 374 : 530}
              height={isTablet ? 339 : isMobile ? 339 : 480}
            >
              <ImageStyled
                high={!isMobile}
                wide={isMobile}
                src={swordsPic}
                alt="swords"
              />
            </ImageWrapper>
          </Col>
        </Row>
        <Row>
          <ImageWrapper
            ref={yogaPicRef}
            height={isTablet ? 446 : isMobile ? 268 : 630}
            style={{ marginTop: isTablet ? 55 : 85 }}
          >
            <ImageStyled wide="true" src={yogaPic} alt="yoga" />
          </ImageWrapper>
        </Row>
      </Container>
    </GalleryWrapper>
  );
};

export default Gallery;
