import React from "react";
import LinkButtonAlt from "../../components/utilities/LinkButtonAlt";
import CardsNoBorderContainer from "../../components/layout/CardsNoBorderContainer";

const undergraduatesImage = require("../../assets/images/homepage - undergraduates.jpeg");
const graduatesImage = require("../../assets/images/homepage - graduates.jpeg");

const HomePageAcademics = () => {
  const cardsArr = [
    {
      title: "Graduates",
      text: `The training and experience you'll acquire at the master's or
       doctoral level at the University of Delphis will give you tools to
        drive change and excel in virtually any industry — whether you go on 
        to teach and do research at a university, take a role in government,
         start a private enterprise, or embark on a professional career.`,
      link: "/academic-catalog?academic-level=graduates&degree-type=major",
      imageURL: graduatesImage,
      key: 1,
    },
    {
      title: "Undergraduates",
      text: `Leave your mark on the world and start studying for an
       undergraduate degree from a university that educates, equips
        and encourages you to forge a better future.`,
      link: "/academic-catalog?academic-level=undergraduates&degree-type=major",
      imageURL: undergraduatesImage,
      key: 2,
    },
  ];

  return (
    <>
      <CardsNoBorderContainer
        cardsArr={cardsArr}
        bgColor={"white"}
        title={"Academics"}
        text={`The University of Delphis's academic offerings empower
         our students to explore their passions, build their dreams
          and transform the world.`}
      />
      <div className="w-full flex flex-col gap-3 text-center justify-center items-center min-[620px]:flex-row mb-4">
        <LinkButtonAlt
          name="Find Courses and Programs"
          classes="w-[279px]"
          link="/general-catalog"
        />
        <LinkButtonAlt
          name="Academic Calendar"
          link="/academic-calendar"
          classes="w-[279px]"
        />
      </div>
    </>
  );
};

export default HomePageAcademics;
