import React from "react";

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
import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";

import firstPhone from "../../../static/pictures/phone.png";
import secondPhone from "../../../static/pictures/phone_2.png";
import thirdPhone from "../../../static/pictures/phone_3.png";
import womanRow from "../../../static/pictures/womanRow.svg";
import manRow from "../../../static/pictures/manRow.svg";
import fitnessRow from "../../../static/pictures/fitness_row.svg";
import rockClimbingRow from "../../../static/pictures/rock_climbing_row.svg";
import { theme } from "../../theme/default";

const ScrollMotion = () => {
  return (
    <StickyStyled>
      <Controller>
        <div>
          <Scene triggerHook="onLeave" duration={1500} pin>
            {(progress) => (
              <div className="sticky">
                <Timeline
                  totalProgress={progress}
                  paused
                  target={
                    <MainTitle>
                      Learn Something <br /> New Today
                    </MainTitle>
                  }
                >
                  <Tween from={{ top: "20%" }} to={{ top: "-50%" }} />
                </Timeline>
                {/* phone */}
                <PhoneWrapper>
                  <Timeline
                    totalProgress={progress}
                    paused
                    target={
                      <>
                        <PhonePicture>
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
                      from={{ top: "50%", scale: 1.15 }}
                      to={{ top: "10%", scale: "1" }}
                      target={0}
                    />
                    <Tween to={{ opacity: 0 }} target={0} duration={200} />
                    <Tween
                      from={{ opacity: 0 }}
                      to={{ opacity: 1 }}
                      target={1}
                    />
                    <Tween to={{ opacity: 0 }} target={1} duration={200} />
                    <Tween
                      from={{ opacity: 0 }}
                      to={{ opacity: 1 }}
                      target={2}
                    />
                    <Tween to={{ opacity: 0 }} target={2} duration={200} />
                  </Timeline>
                </PhoneWrapper>
                {/* FIRST ROWS */}
                {/*<div>*/}
                {/*  <Timeline*/}
                {/*    totalProgress={progress}*/}
                {/*    paused*/}
                {/*    target={*/}
                {/*      <PictureRowsWrapper>*/}
                {/*        <PictureRow fitness>*/}
                {/*          <img src={fitnessRow} alt="fitness" />*/}
                {/*        </PictureRow>*/}
                {/*        <PictureRow climbing>*/}
                {/*          <img src={rockClimbingRow} alt="climbing" />*/}
                {/*        </PictureRow>*/}
                {/*      </PictureRowsWrapper>*/}
                {/*    }*/}
                {/*  >*/}
                {/*    <Tween*/}
                {/*      from={{ opacity: 0 }}*/}
                {/*      to={{ opacity: 1 }}*/}
                {/*      duration={150}*/}
                {/*      delay={100}*/}
                {/*    />*/}
                {/*    <Tween to={{ opacity: 0 }} duration={150} delay={100} />*/}
                {/*  </Timeline>*/}
                {/*  /!* FIRST TEXT *!/*/}
                {/*  <Timeline*/}
                {/*    totalProgress={progress}*/}
                {/*    paused*/}
                {/*    target={*/}
                {/*      <Column>*/}
                {/*        <ColumnTitle>Choose a class</ColumnTitle>*/}
                {/*        <ColumnText>*/}
                {/*          You will be able to see what <br /> types of*/}
                {/*          classes are available <br /> in your neighborthood*/}
                {/*        </ColumnText>*/}
                {/*      </Column>*/}
                {/*    }*/}
                {/*  >*/}
                {/*    <Tween*/}
                {/*      from={{ left: "100%" }}*/}
                {/*      to={{ left: "70%" }}*/}
                {/*      duration={150}*/}
                {/*      delay={100}*/}
                {/*    />*/}
                {/*    <Tween*/}
                {/*      to={{ left: "100%" }}*/}
                {/*      duration={150}*/}
                {/*      delay={100}*/}
                {/*    />*/}
                {/*  </Timeline>*/}
                {/*  /!* SECOND PHONE *!/*/}
                {/*  <Timeline*/}
                {/*    totalProgress={progress}*/}
                {/*    paused*/}
                {/*    target={*/}
                {/*      <PhonePicture>*/}
                {/*        <img src={secondPhone} alt="phone" />*/}
                {/*      </PhonePicture>*/}
                {/*    }*/}
                {/*  >*/}
                {/*    <Tween*/}
                {/*      from={{ opacity: 0 }}*/}
                {/*      to={{ opacity: 1 }}*/}
                {/*      delay={1000}*/}
                {/*      duration={500}*/}
                {/*    />*/}
                {/*    <Tween to={{ opacity: 0 }} delay={1300} />*/}
                {/*  </Timeline>*/}
                {/*  <Timeline*/}
                {/*    totalProgress={progress}*/}
                {/*    paused*/}
                {/*    target={*/}
                {/*      <PhonePicture>*/}
                {/*        <img src={thirdPhone} alt="phone" />*/}
                {/*      </PhonePicture>*/}
                {/*    }*/}
                {/*  >*/}
                {/*    <Tween*/}
                {/*      from={{ opacity: 0 }}*/}
                {/*      to={{ opacity: 1 }}*/}
                {/*      delay={2000}*/}
                {/*      duration={500}*/}
                {/*    />*/}
                {/*  </Timeline>*/}
                {/*</div>*/}
                {/* circle */}
                <Timeline totalProgress={progress} target={<Circle />} paused>
                  <Tween
                    from={{ width: "776px", height: "776px", top: "55%" }}
                    to={{ width: "2600px", height: "2600px", top: "-80%" }}
                    duration={200}
                  />
                  <Tween
                    to={{ background: theme.colors["pink"] }}
                    delay={1500}
                    duration={200}
                  />
                </Timeline>
              </div>
            )}
          </Scene>
        </div>
      </Controller>
    </StickyStyled>
  );
};

export default ScrollMotion;
