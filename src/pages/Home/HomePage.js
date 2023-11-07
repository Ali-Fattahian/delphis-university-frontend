import React from "react";
import HomePageHeader from "./HomePage.Header";
import HomePageCommunity from "./HomePage.Community";
import HomePageAcademics from "./HomePage.Academics";
import HomePageDailyLife from "./HomePage.DailyLife";
import HomePageApply from "./HomePage.Apply";
import Footer from "../../components/layout/Footer";
import HomePageCampus from "./HomePage.Campus";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const HomePage = () => {
  useDocumentTitle("Home");

  return (
    <div>
      <HomePageHeader />
      <HomePageCommunity />
      <HomePageAcademics />
      <HomePageDailyLife />
      <HomePageCampus />
      <HomePageApply />
      <Footer />
    </div>
  );
};

export default HomePage;
