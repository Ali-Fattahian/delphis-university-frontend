import React from "react";
import LinkButtonAlt from "../../components/utilities/LinkButtonAlt";
import CardsNoBorderContainer from "../../components/layout/CardsNoBorderContainer";

const supportImage = require("../../assets/images/homepage - support.jpeg");
const diversityImage = require("../../assets/images/homepage - diversity.jpeg");
const lifeImage = require("../../assets/images/homepage - student life.jpeg");

const HomePageDailyLife = () => {
  const cardsArr = [
    {
      title: "Student Life",
      text: `The Division of Student Life provides programs and support services that make our student experience one of the best in the world.`,
      link: "/student-life",
      imageURL: lifeImage,
      key: 1,
    },
    {
      title: "Safety & Support",
      text: `Our robust network of security and support professionals work
       to ensure a safe campus for all.`,
      link: "/safety-support",
      imageURL: supportImage,
      key: 2,
    },
    {
      title: "Diversity",
      text: `The University of Delphis strives to create an accepting and 
      inclusive campus community.`,
      link: "/diversity",
      imageURL: diversityImage,
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
          link="/campus-life"
        />
      </div>
    </>
  );
};

export default HomePageDailyLife;
