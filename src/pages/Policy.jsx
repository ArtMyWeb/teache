import React from "react";
import { Header } from "../ui/blocks/Header";
import Footer from "../ui/blocks/Footer/Footer";
import PrivacyPolicy from "../ui/blocks/PrivacyPolicy/PrivacyPolicy";
import { ScrollToTop } from "../ui/base/ScrollToTop";

const PolicyPage = () => {
  return (
    <ScrollToTop>
      <Header solid />
      <PrivacyPolicy />
      <Footer />
    </ScrollToTop>
  );
};

export default PolicyPage;
