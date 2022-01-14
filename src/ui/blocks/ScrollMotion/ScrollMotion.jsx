import React from "react";
import { useMediaQuery } from "react-responsive";
import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";
import { theme } from "../../theme/default";
import {
  Circle,
  Column,
  ColumnText,
  ColumnTitle,
  MainTitle,
  PhonePicture,
  PhoneWrapper,
  PictureRow,
  PictureRowsWrapper,
  StickyStyled,
} from "./ScrollMotionStyled";

import firstPhone from "../../../static/pictures/phone.png";
import secondPhone from "../../../static/pictures/phone_2.png";
import thirdPhone from "../../../static/pictures/phone_3.png";
import womanRow from "../../../static/pictures/womanRow.svg";
import manRow from "../../../static/pictures/manRow.svg";
import dateRow from "../../../static/pictures/dateRow.svg";
import timeRow from "../../../static/pictures/timeRow.svg";
import fitnessRow from "../../../static/pictures/fitness_row.svg";
import rockClimbingRow from "../../../static/pictures/rock_climbing_row.svg";

const ScrollMotion = ({ setHeadColor, setHeadSolid }) => {
  const isTablet = useMediaQuery({ query: "(max-width: 1200px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  return (
    <StickyStyled>
      <Controller>
        <Scene triggerHook="onLeave" duration="300%" pin>
          {(progress) => (
            <div className="sticky">
              {/* Title */}
              <Timeline totalProgress={progress} paused>
                <Tween to={{ bottom: "50%" }}>
                  <MainTitle>
                    Learn Something <br /> New Today
                  </MainTitle>
                </Tween>
              </Timeline>
              {/* circle */}
              <Timeline totalProgress={progress} target={<Circle />} paused>
                <Tween
                  to={{
                    width: `${isMobile ? "300vw" : "180vw"}`,
                    height: `${isMobile ? "300vw" : "180vw"}`,
                    bottom: `${isMobile ? "-20%" : "-70%"}`,
                  }}
                  onComplete={() => setHeadColor("white")}
                  onReverseComplete={() => setHeadColor("grey")}
                  duration={0.05}
                  delay={0}
                />
                <Tween
                  to={{ background: theme.colors["pink"], delay: 0.5 }}
                  duration={0.2}
                  onStart={() => setHeadColor("white")}
                  onReverseComplete={() => {
                    setHeadColor("white");
                  }}
                />
                <Tween
                  to={{ background: theme.colors["white"], delay: 1 }}
                  duration={0.5}
                  onComplete={() => {
                    setHeadColor("grey");
                    setHeadSolid(true);
                  }}
                  onReverseComplete={() => {
                    setHeadColor("white");
                    setHeadSolid(false);
                  }}
                />
              </Timeline>
              {/* Rows with images */}
              <Timeline
                totalProgress={progress}
                paused
                target={
                  <>
                    <PictureRowsWrapper>
                      <PictureRow fitness>
                        <img src={fitnessRow} alt="fitness" />
                      </PictureRow>
                      <PictureRow climbing>
                        <img src={rockClimbingRow} alt="climbing" />
                      </PictureRow>
                    </PictureRowsWrapper>
                    <PictureRowsWrapper>
                      <PictureRow woman>
                        <img src={womanRow} alt="woman" />
                      </PictureRow>
                      <PictureRow man>
                        <img src={manRow} alt="man" />
                      </PictureRow>
                    </PictureRowsWrapper>
                    <PictureRowsWrapper>
                      <PictureRow date>
                        <img src={dateRow} alt="date" />
                      </PictureRow>
                      <PictureRow time>
                        <img src={timeRow} alt="time" />
                      </PictureRow>
                    </PictureRowsWrapper>
                  </>
                }
              >
                <Tween
                  from={{ opacity: 0 }}
                  to={{ opacity: 1, delay: 2 }}
                  target={0}
                />
                <Tween to={{ opacity: 0, delay: 2 }} target={0} />
                <Tween to={{ opacity: 1, delay: 1.5 }} target={1} />
                <Tween to={{ opacity: 0, delay: 1 }} target={1} />
                <Tween to={{ opacity: 1, delay: 0.5 }} target={2} />
              </Timeline>
              {/* Text columns */}
              <Timeline
                totalProgress={progress}
                paused
                target={
                  <>
                    <Column right>
                      <ColumnTitle>Choose a class</ColumnTitle>
                      <ColumnText>
                        You will be able to see what <br /> types of classes are
                        available <br /> in your neighborhood
                      </ColumnText>
                    </Column>
                    <Column left>
                      <ColumnTitle>Select an Instructor</ColumnTitle>
                      <ColumnText>
                        See the different instructors <br /> for the type of
                        classes <br /> selected, price and reviews
                      </ColumnText>
                    </Column>
                    <Column right dark>
                      <ColumnTitle>Schedule Class</ColumnTitle>
                      <ColumnText>
                        Select dateand time you want <br /> to takethe class and
                        that’s it!
                      </ColumnText>
                    </Column>
                  </>
                }
              >
                <Tween
                  from={{ opacity: 0 }}
                  to={{ opacity: 1, delay: 2 }}
                  target={0}
                />
                <Tween to={{ opacity: 0, delay: 2 }} target={0} />
                <Tween to={{ opacity: 1, delay: 1.5 }} target={1} />
                <Tween to={{ opacity: 0, delay: 1 }} target={1} />
                <Tween to={{ opacity: 1, delay: 0.5 }} target={2} />
              </Timeline>
              {/* Phone images */}
              <PhoneWrapper>
                <Timeline
                  totalProgress={progress}
                  paused
                  target={
                    <>
                      <PhonePicture first>
                        <img src={firstPhone} alt="phone" />
                      </PhonePicture>
                      <PhonePicture>
                        <img src={secondPhone} alt="phone" />
                      </PhonePicture>
                      <PhonePicture>
                        <img src={thirdPhone} alt="phone" />
                      </PhonePicture>
                    </>
                  }
                >
                  <Tween
                    to={{
                      bottom: `${isMobile ? "-38%" : isTablet ? "15%" : "10%"}`,
                      scale: "1",
                    }}
                    target={0}
                  />
                  <Tween duration="30%" to={{ opacity: 1 }} target={0} />
                  <Tween
                    from={{ opacity: 0 }}
                    to={{ opacity: 1, delay: 0.5 }}
                    target={1}
                  />
                  <Tween
                    from={{ opacity: 0 }}
                    to={{ opacity: 1, delay: 1 }}
                    target={2}
                    duration={1}
                  />
                </Timeline>
              </PhoneWrapper>
            </div>
          )}
        </Scene>
      </Controller>
    </StickyStyled>
  );
};

export default ScrollMotion;
