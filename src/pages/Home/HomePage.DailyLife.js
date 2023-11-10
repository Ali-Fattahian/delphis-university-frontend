import React from "react";
import LinkButtonAlt from "../../components/utilities/LinkButtonAlt";
import CardsNoBorderContainer from "../../components/layout/CardsNoBorderContainer";

const supportImage = require("../../assets/images/homepage - support.jpeg");
const diversityImage = require("../../assets/images/homepage - diversity.jpeg");
const housingImage = require("../../assets/images/homepage - housing.jpeg");

const HomePageDailyLife = () => {
  const cardsArr = [
    {
      title: "Safety & Support",
      text: `Our robust network of security and support professionals work
       to ensure a safe campus for all.`,
      link: "/",
      imageURL: supportImage,
      key: 1,
    },
    {
      title: "Diversity",
      text: `The University of Delphis strives to create an accepting and 
      inclusive campus community.`,
      link: "/",
      imageURL: diversityImage,
      key: 2,
    },
    {
      title: "Student Housing",
      text: `Residential living puts you at the heart of campus life, where you will interact with a diverse community of people.`,
      link: "/",
      imageURL: housingImage,
      key: 3,
    },
  ];

  return (
    <>
      <CardsNoBorderContainer
        cardsArr={cardsArr}
        bgColor={"slate-100"}
        title={"Life at Delphis University"}
        text={`Our community is drawn together by purpose. More than 600 student
         organizations elevate campus culture in academics, service,
          arts and recreation.`}
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
