import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

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
import { ScrollTrigger, Timeline, Tween } from "react-gsap";

import firstPhone from "../../../static/pictures/phone.png";
import secondPhone from "../../../static/pictures/phone_2.png";
import thirdPhone from "../../../static/pictures/phone_3.png";
import womanRow from "../../../static/pictures/womanRow.svg";
import manRow from "../../../static/pictures/manRow.svg";
import dateRow from "../../../static/pictures/dateRow.svg";
import timeRow from "../../../static/pictures/timeRow.svg";
import fitnessRow from "../../../static/pictures/fitness_row.svg";
import rockClimbingRow from "../../../static/pictures/rock_climbing_row.svg";
import { theme } from "../../theme/default";

const ScrollMotion = () => {
  const triggerRef = useRef(null);
  const progressCount = useRef(0);
  const [trigger, setTrigger] = useState(triggerRef.current);

  useEffect(() => {
    setTrigger(triggerRef.current);
  }, []);

  return (
    <StickyStyled>
      <Controller>
        <Scene
          triggerHook="onLeave"
          duration="300%"
          pin
          indicators={true}
          end="top center"
        >
          {(progress) => (
            <div className="sticky">
              <Timeline
                totalProgress={progress}
                paused
                duretion="10%"
                target={
                  <MainTitle>
                    Learn Something <br /> New Today
                  </MainTitle>
                }
              >
                <Tween from={{ top: "20%" }} to={{ top: "-50%" }} />
              </Timeline>
              {/* circle */}
              <Timeline
                totalProgress={progress}
                target={<Circle ref={triggerRef} />}
                paused
              >
                <Tween
                  from={{ width: "776px", height: "776px", top: "55%" }}
                  to={{ width: "200vw", height: "200vw", top: "-80%" }}
                  duration={0.05}
                />
                <Tween
                  to={{ background: theme.colors["pink"], delay: 0.5 }}
                  duration={0.05}
                />
                <Tween
                  to={{ background: theme.colors["white"], delay: 0 }}
                  duration={0.05}
                />
              </Timeline>
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
                      <PictureRow fitness>
                        <img src={womanRow} alt="woman" />
                      </PictureRow>
                      <PictureRow climbing>
                        <img src={manRow} alt="man" />
                      </PictureRow>
                    </PictureRowsWrapper>
                    <PictureRowsWrapper>
                      <PictureRow fitness>
                        <img src={dateRow} alt="date" />
                      </PictureRow>
                      <PictureRow climbing>
                        <img src={timeRow} alt="time" />
                      </PictureRow>
                    </PictureRowsWrapper>
                  </>
                }
              >
                <Tween
                  from={{ opacity: 0 }}
                  to={{ opacity: 1, delay: 0.2 }}
                  duration={1}
                  target={0}
                />
                <Tween
                  to={{ opacity: 0, delay: 0.5 }}
                  target={0}
                  duration={0.5}
                />
                <Tween
                  from={{ opacity: 0 }}
                  to={{ opacity: 1, delay: 0.5 }}
                  duration={1}
                  target={1}
                />
                <Tween
                  to={{ opacity: 0, delay: 1.5 }}
                  target={1}
                  duration={1}
                />
                <Tween
                  from={{ opacity: 0 }}
                  to={{ opacity: 1, delay: 0.5 }}
                  duration={1}
                  target={2}
                />
                <Tween
                  to={{ opacity: 0, delay: 0.2 }}
                  target={2}
                  duration={0.5}
                />
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
                  <Tween duration="30%" to={{ opacity: 1 }} target={0} />
                  <Tween
                    to={{ opacity: 0, delay: 2 }}
                    target={0}
                    duration="10%"
                  />
                  <Tween
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                    off
                    target={1}
                  />
                  <Tween to={{ opacity: 0, delay: 2 }} target={1} />
                  <Tween
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                    target={2}
                    duration={1}
                  />
                </Timeline>
              </PhoneWrapper>
              {/* FIRST ROWS */}
              {/*<div>*/}
              {/* FIRST TEXT */}
              {/*<Timeline*/}
              {/*  totalProgress={progress}*/}
              {/*  paused*/}
              {/*  target={*/}
              {/*    <Column>*/}
              {/*      <ColumnTitle>Choose a class</ColumnTitle>*/}
              {/*      <ColumnText>*/}
              {/*        You will be able to see what <br /> types of classes are*/}
              {/*        available <br /> in your neighborhood*/}
              {/*      </ColumnText>*/}
              {/*    </Column>*/}
              {/*  }*/}
              {/*>*/}
              {/*  <Tween*/}
              {/*    from={{ left: "100%" }}*/}
              {/*    to={{ left: "70%" }}*/}
              {/*    duration={150}*/}
              {/*    delay={100}*/}
              {/*  />*/}
              {/*  <Tween to={{ left: "100%" }} duration={150} delay={100} />*/}
              {/*</Timeline>*/}
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
            </div>
          )}
        </Scene>
      </Controller>
    </StickyStyled>
  );
};

export default ScrollMotion;
