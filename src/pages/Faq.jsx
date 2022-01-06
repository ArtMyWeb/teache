import React from "react";
import { Header } from "../ui/blocks/Header";
import { Footer } from "../ui/blocks/Footer";
import { Search } from "../ui/blocks/Search";
import { Accordion } from "../ui/blocks/Accordion";

const FaqPage = () => {
  return (
    <>
      <Header solid />
      <Search />
      <Accordion />
      <Footer />
    </>
  );
};

export default FaqPage;
