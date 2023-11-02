import React from "react";
import HomePageCommunityNewsLinks from "./HomePage.CommunityNewsLinks";
const LastestNewsImage = require("../../assets/images/community-news.jpeg");

const HomePageCommunityNews = () => {
  return (
    <div className="flex flex-col gap-6 sm:flex-row justify-center sm:items-center items-start">
      <img
        className="bg-cover sm:w-2/3 sm:flex-2"
        src={LastestNewsImage}
        alt="Set the alt to latest news"
      ></img>
      <div className="flex flex-col sm:flex-1 items-center w-full sm:w-auto">
        <HomePageCommunityNewsLinks
          link="/"
          text="Project Advancing Tools To Remotely Monitor Water Quality"
          category="Research"
        />
        <HomePageCommunityNewsLinks
          link="/"
          text="Project Advancing Tools To Remotely Monitor Water Quality"
          category="Research"
        />
        <HomePageCommunityNewsLinks
          link="/"
          text="Project Advancing Tools To Remotely Monitor Water Quality"
          category="Research"
        />{" "}
        <HomePageCommunityNewsLinks
          link="/"
          text="Project Advancing Tools To Remotely Monitor Water Quality"
          category="Research"
        />{" "}
        <HomePageCommunityNewsLinks
          link="/"
          text="Project Advancing Tools To Remotely Monitor Water Quality"
          category="Research"
        />{" "}
        <HomePageCommunityNewsLinks
          link="/"
          text="Project Advancing Tools To Remotely Monitor Water Quality"
          category="Research" // Remove the border for the last child
        />
      </div>
    </div>
  );
};

export default HomePageCommunityNews;
