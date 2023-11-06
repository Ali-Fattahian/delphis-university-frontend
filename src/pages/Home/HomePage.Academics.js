import React from "react";
import LinkButtonAlt from "../../components/utilities/LinkButtonAlt";
import CardsNoBorderContainer from "../../components/layout/CardsNoBorderContainer";

const imageURL = require("../../assets/images/pexels-artem-podrez-5715850.jpeg");

const HomePageAcademics = () => {
  const cardsArr = [
    {
      title: "Graduate",
      text: "Research Project Advancing Tools To Remotely Monitor Water Quality",
      link: "/",
      imageURL: imageURL,
      key: 1,
    },
    {
      title: "Undergraduate",
      text: "Research Project Advancing Tools To Remotely Monitor Water Quality",
      link: "/",
      imageURL: imageURL,
      key: 2,
    },
    {
      title: "UD Online",
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
        bgColor={"white"}
        title={"ACADEMICS"}
        text={
          "Research Project Advancing Tools To Remotely Monitor Water Quality"
        }
      />
      <div className="w-full flex flex-col gap-3 text-center justify-center items-center min-[620px]:flex-row mb-4">
        <LinkButtonAlt
          name="FIND COURSES AND PROGRAMS"
          classes="w-[279px]"
          link="/"
        />
        <LinkButtonAlt name="ACADEMIC CALENDER" link="/" classes="w-[279px]" />
      </div>
    </>
  );
};

export default HomePageAcademics;
