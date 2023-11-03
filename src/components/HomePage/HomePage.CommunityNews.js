import React from "react";
import HomePageCommunityNewsLinks from "./HomePage.CommunityNewsLinks";
const LastestNewsImage = require("../../assets/images/community-news.jpeg");

const HomePageCommunityNews = () => {
  return (
    <div className="flex flex-col gap-6 sm:flex-row justify-center sm:items-center items-start">
      <div className="sm:w-2/3 sm:flex-2 relative">
        <img
          className="bg-cover"
          src={LastestNewsImage}
          alt="Set the alt to latest news"
        ></img>
        <a
          href="/"
          className="p-3 hover:underline bg-vgyellow opacity-80 w-full absolute bottom-0 left-0"
        >
          <span>Research</span>
          <p>Project Advancing Tools To Remotely Monitor Water Quality</p>
        </a>
      </div>
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
