import React from "react";
import Card from "../layout/Card";

const imageURL = require("../../assets/images/Events.jpeg");

const HomePageCommunityEvents = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 justify-center items-center w-full m-auto">
      <Card
        imageURL={imageURL}
        title={`SomeThing VeRy Unimportant is happening in your moma's house right
          now`}
        year="2023"
        month="november"
        day="12"
        time={["7:30 p.m.", "9:30 p.m."]}
        location="DP Campus"
        link="/"
      />
      <Card
        imageURL={imageURL}
        title={`SomeThing VeRy Unimportant is happening in your moma's house right
          now`}
        year="2023"
        month="november"
        day="12"
        time={["7:30 p.m.", "9:30 p.m."]}
        location="DP Campus"
        link="/"
      />
      <Card
        imageURL={imageURL}
        title={`SomeThing VeRy Unimportant is happening in your moma's house right
          now`}
        year="2023"
        month="november"
        day="12"
        time={["7:30 p.m.", "9:30 p.m."]}
        location="DP Campus"
        link="/"
      />
    </div>
  );
};

export default HomePageCommunityEvents;
