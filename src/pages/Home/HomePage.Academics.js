import React from "react";
import LinkButtonAlt from "../../components/utilities/LinkButtonAlt";
import CardNoBorder from "../../components/layout/CardNoBorder";

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
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 justify-center">
        <CardNoBorder
          imageURL={imageURL}
          title="Undergraduate"
          text="Research Project Advancing Tools To Remotely Monitor Water Quality"
          maxWidth={400}
        />
        <CardNoBorder
          imageURL={imageURL}
          title="Graduate"
          text="Research Project Advancing Tools To Remotely Monitor Water Quality"
          maxWidth={400}
        />
        <CardNoBorder
          imageURL={imageURL}
          title="UD Online"
          text="Research Project Advancing Tools To Remotely Monitor Water Quality"
          maxWidth={400}
        />
      </div>
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
