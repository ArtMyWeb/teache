import React, { useState } from "react";
import { Header } from "../ui/blocks/Header";
import { Footer } from "../ui/blocks/Footer";
import { Search } from "../ui/blocks/Search";
import { Accordion } from "../ui/blocks/Accordion";

const FaqPage = () => {
  const [searchData, setSearchData] = useState([]);
  const handleSearch = (val) => setSearchData(val.split(" "));

  return (
    <>
      <Header solid />
      <Search onSearchSubmit={(val) => handleSearch(val)} />
      <Accordion filterBySearch={searchData} />
      <Footer />
    </>
  );
};

export default FaqPage;
