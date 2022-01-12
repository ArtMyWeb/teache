import React, { useState } from "react";
import { Header } from "../ui/blocks/Header";
import { Info } from "../ui/blocks/Info";
import { Download } from "../ui/blocks/Download";
import { Neighborhood } from "../ui/blocks/Neighborhood";
import { Gallery } from "../ui/blocks/Gallery";
import { Footer } from "../ui/blocks/Footer";
import ScrollMotion from "../ui/blocks/ScrollMotion/ScrollMotion";

const HomePage = () => {
  const [headColor, setHeadColor] = useState();
  const [headSolid, setHeadSolid] = useState(false);
  return (
    <>
      <Header color={headColor} solid={headSolid} />
      <ScrollMotion setHeadColor={setHeadColor} setHeadSolid={setHeadSolid} />
      <Info />
      <Download />
      <Neighborhood />
      <Gallery />
      <Footer />
    </>
  );
};

export default HomePage;
