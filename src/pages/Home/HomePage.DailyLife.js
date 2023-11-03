import React from "react";
import LinkButtonAlt from "../../components/utilities/LinkButtonAlt";
import CardNoBorder from "../../components/layout/CardNoBorder";

const imageURL = require("../../assets/images/pexels-ivan-samkov-5676678.jpeg");

const HomePageDailyLife = () => {
  return (
    <div className="flex flex-col gap-6 mt-10 bg-slate-50 p-6">
      <h1 className="text-4xl cursor-pointer overflow-y-hidden text-center">
        LIFE AT UD
      </h1>
      <p className="mb-4 text-center">
        Research Project Advancing Tools To Remotely Monitor Water Quality
      </p>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 justify-center">
        <CardNoBorder
          imageURL={imageURL}
          title="Student Life"
          text="Research Project Advancing Tools To Remotely Monitor Water Quality"
          maxWidth={400}
        />
        <CardNoBorder
          imageURL={imageURL}
          title="Safety & Support"
          text="Research Project Advancing Tools To Remotely Monitor Water Quality"
          maxWidth={400}
        />
        <CardNoBorder
          imageURL={imageURL}
          title="Diversity"
          text="Research Project Advancing Tools To Remotely Monitor Water Quality"
          maxWidth={400}
        />
        <CardNoBorder
          imageURL={imageURL}
          title="Student Housing"
          text="Research Project Advancing Tools To Remotely Monitor Water Quality"
          maxWidth={400}
        />
      </div>
      <div className="w-full flex text-center justify-center items-center mt-12">
        <LinkButtonAlt
          name="EXPLORE CAMPUS LIFE"
          classes="w-[279px]"
          link="/"
        />
      </div>
    </div>
  );
};

export default HomePageDailyLife;
