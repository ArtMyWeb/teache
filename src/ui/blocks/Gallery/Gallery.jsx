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
import { theme } from "../../theme/default";

const Gallery = () => {
  const firstRowRef = useRef();
  const secondRowRef = useRef();
  const thirdRowRef = useRef();
  const horsePicRef = useRef();
  const volleyballPicRef = useRef();
  const fightPicRef = useRef();
  const swordsPicRef = useRef();
  const yogaPicRef = useRef();

  const isTablet = useMediaQuery({ query: "(max-width: 1400px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    const images = [];
    const rows = [];
    images.push(horsePicRef.current);
    images.push(volleyballPicRef.current);
    images.push(fightPicRef.current);
    images.push(swordsPicRef.current);
    images.push(yogaPicRef.current);
    rows.push(firstRowRef.current);
    rows.push(secondRowRef.current);
    rows.push(thirdRowRef.current);
    images.forEach((image) => {
      gsap.from(image, {
        scrollTrigger: {
          trigger: image,
          start: "50% 60%",
          end: "bottom top",
          toggleClass: "light",
          toggleActions: "play none play none",
        },
      });
    });
    rows.forEach((row) => {
      gsap.from(row, {
        scrollTrigger: {
          trigger: row,
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
        <Row ref={firstRowRef}>
          <Col mr={isTablet ? "7.8vw" : "130px"}>
            {isMobile && (
              <Content title={1}>
                <Title>
                  Share Your Talents <br />& Become a Teacher
                </Title>
                <Text>
                  Join our instructors' network and give classes in your
                  neighborhood
                </Text>
              </Content>
            )}
            <ImageWrapper ref={horsePicRef} horse>
              <ImageStyled high={1} src={horsePic} alt="horse" />
            </ImageWrapper>
            {!isMobile && (
              <Content second>
                <Text width={340}>
                  Choose your own locations for your class, your home, public
                  park, anywhere you can teach
                </Text>
              </Content>
            )}
          </Col>
          <Col>
            {!isMobile && (
              <Content title>
                <Title>
                  Share Your Talents <br />& Become a Teacher
                </Title>
                <Text width={365}>
                  Join our instructors' network and give classes in your
                  neighborhood
                </Text>
              </Content>
            )}
            <ImageWrapper ref={volleyballPicRef} volleyball>
              <ImageStyled
                high={!isMobile ? 1 : 0}
                wide={isMobile ? 1 : 0}
                src={volleyballPic}
                alt="volleyball"
              />
            </ImageWrapper>
          </Col>
        </Row>
        <Row ref={secondRowRef}>
          <Col mr={isTablet ? "5.8vw" : "130px"}>
            {isMobile && (
              <Content second>
                <Text width={340}>
                  Choose your own locations for your class, your home, public
                  park, anywhere you can teach
                </Text>
              </Content>
            )}
            <ImageWrapper
              ref={fightPicRef}
              style={!isMobile ? { marginLeft: 60 } : {}}
              fight
            >
              <ImageStyled wide={1} src={fightPic} alt="fight" />
            </ImageWrapper>
            {!isMobile ? (
              <Content four>
                <Text width={365}>
                  Receive payments through the app and keep track of your
                  revenue
                </Text>
              </Content>
            ) : (
              <Content third>
                <Text big>
                  Manage your own schedule and give classes whenever you feel to
                </Text>
              </Content>
            )}
          </Col>
          <Col>
            {!isMobile && (
              <Content third>
                <Text
                  style={isMobile ? { fontSize: theme.fonts["regular"] } : {}}
                >
                  Manage your own schedule and give classes whenever you feel to
                </Text>
              </Content>
            )}
            <ImageWrapper ref={swordsPicRef} swords>
              <ImageStyled high={1} src={swordsPic} alt="swords" />
            </ImageWrapper>
          </Col>
        </Row>
        <Row ref={thirdRowRef}>
          {isMobile && (
            <Content four>
              <Text big>
                Receive payments through the app and keep track of your revenue
              </Text>
            </Content>
          )}
          <ImageWrapper
            ref={yogaPicRef}
            style={{ marginTop: isMobile ? 0 : isTablet ? 55 : 85 }}
            yoga
          >
            <ImageStyled
              high={isMobile ? 1 : 0}
              wide={!isMobile ? 1 : 0}
              src={yogaPic}
              alt="yoga"
            />
          </ImageWrapper>
        </Row>
      </Container>
    </GalleryWrapper>
  );
};

export default Gallery;
