import React from "react";
import { Header } from "../ui/blocks/Header";
import { ScrollMotion } from "../ui/blocks/ScrollMotion";
import { Info } from "../ui/blocks/Info";
import { Download } from "../ui/blocks/Download";
import { Neighborhood } from "../ui/blocks/Neighborhood";
import { Gallery } from "../ui/blocks/Gallery";
import Footer from "../ui/blocks/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <ScrollMotion />
      <Info />
      <Download />
      <Neighborhood />
      <Gallery />
      <Footer />
    </>
  );
};

export default HomePage;
