import React from "react";
import LinkButtonAlt from "../../components/utilities/LinkButtonAlt";
import CardsNoBorderContainer from "../../components/layout/CardsNoBorderContainer";

const imageURL = require("../../assets/images/pexels-ivan-samkov-5676678.jpeg");

const HomePageDailyLife = () => {
  const cardsArr = [
    {
      title: "Safety & Support",
      text: "Research Project Advancing Tools To Remotely Monitor Water Quality",
      link: "/",
      imageURL: imageURL,
      key: 1,
    },
    {
      title: "Diversity",
      text: "Research Project Advancing Tools To Remotely Monitor Water Quality",
      link: "/",
      imageURL: imageURL,
      key: 2,
    },
    {
      title: "Student Housing",
      text: "Research Project Advancing Tools To Remotely Monitor Water Quality",
      link: "/",
      imageURL: imageURL,
      key: 3,
    },
  ];

  return (
    <>
      <CardsNoBorderContainer
        cardsArr={cardsArr}
        bgColor={"slate-100"}
        title={"LIFE AT UD"}
        text={
          "Research Project Advancing Tools To Remotely Monitor Water Quality"
        }
      />
      <div className="w-full flex text-center justify-center items-center pb-4 bg-slate-100">
        <LinkButtonAlt
          name="EXPLORE CAMPUS LIFE"
          classes="w-[279px]"
          link="/"
        />
      </div>
    </>
  );
};

export default HomePageDailyLife;
