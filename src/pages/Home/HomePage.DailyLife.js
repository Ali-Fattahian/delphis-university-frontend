import React from "react";
import LinkButtonAlt from "../../components/utilities/LinkButtonAlt";
import CardNoBorderContainer from "../../components/layout/CardNoBorderContainer";

const imageURL = require("../../assets/images/pexels-ivan-samkov-5676678.jpeg");

const HomePageDailyLife = () => {
  return (
    <div className="flex flex-col gap-6 mt-10 bg-slate-200 p-6">
      <h1 className="text-4xl cursor-pointer overflow-y-hidden text-center">
        LIFE AT UD
      </h1>
      <p className="mb-4 text-center">
        Research Project Advancing Tools To Remotely Monitor Water Quality
      </p>
      <CardNoBorderContainer
        cardsArr={[
          {
            title: "Safety & Support",
            text: "Research Project Advancing Tools To Remotely Monitor Water Quality",
            link: "/",
            imageURL: imageURL,
          },
          {
            title: "Diversity",
            text: "Research Project Advancing Tools To Remotely Monitor Water Quality",
            link: "/",
            imageURL: imageURL,
          },
          {
            title: "Student Housing",
            text: "Research Project Advancing Tools To Remotely Monitor Water Quality",
            link: "/",
            imageURL: imageURL,
          },
        ]}
      />
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
