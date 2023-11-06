import React from "react";
import Navbar from "../../components/layout/Navbar";
import ResearchPageResources from "./ResearchPage.Resources";
import ResearchPageCenter from "./ResearchPage.Center";
import Footer from "../../components/layout/Footer";

const ResearchPage = () => {
  return (
    <>
      <Navbar />
      <ResearchPageResources />
      <ResearchPageCenter />
      <Footer />
    </>
  );
};

export default ResearchPage;
