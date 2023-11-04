import React from "react";
import LinkButtonAlt from "../../components/utilities/LinkButtonAlt";
import CardNoBorderContainer from "../../components/layout/CardNoBorderContainer";

const imageURL = require("../../assets/images/pexels-artem-podrez-5715850.jpeg");

const HomePageAcademics = () => {
  return (
    <div className="p-6 flex flex-col gap-6 mt-10">
      <h1 className="text-4xl cursor-pointer overflow-y-hidden text-center m-4">
        ACADEMICS
      </h1>
      <p className="m-4 text-center">
        Research Project Advancing Tools To Remotely Monitor Water Quality
      </p>
      <CardNoBorderContainer
        cardsArr={[
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
        ]}
      />
      <div className="w-full flex flex-col gap-3 text-center justify-center items-center min-[620px]:flex-row mt-12">
        <LinkButtonAlt
          name="FIND COURSES AND PROGRAMS"
          classes="w-[279px]"
          link="/"
        />
        <LinkButtonAlt name="ACADEMIC CALENDER" link="/" classes="w-[279px]" />
      </div>
    </div>
  );
};

export default HomePageAcademics;
