import React from "react";
import { Header } from "../ui/blocks/Header";
import Footer from "../ui/blocks/Footer/Footer";
import PrivacyPolicy from "../ui/blocks/PrivacyPolicy/PrivacyPolicy";

const PolicyPage = () => {
  return (
    <>
      <Header solid />
      <PrivacyPolicy />
      <Footer />
    </>
  );
};

export default PolicyPage;
