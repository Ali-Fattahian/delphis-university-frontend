import React from "react";
import Navbar from "../components/layout/Navbar";
import useDocumentTitle from "../hooks/useDocumentTitle";
import TextOnImage from "../components/layout/TextOnImage";
import CardsNoBorderContainer from "../components/layout/CardsNoBorderContainer";
import ImageNextToParagraphMoreInfo from "../components/layout/ImageNextToParagraph.MoreInfo";
import LinkButtonTransparent from "../components/utilities/LinkButtonTransparent";
import Footer from "../components/layout/Footer";

const AcademicsPage = () => {
  const academics = require("../assets/images/academics.jpeg");
  const undergraduatesImage = require("../assets/images/academics - undergraduates.jpeg");
  const graduatesImage = require("../assets/images/academics - graduates.jpeg");
  const onlineImage = require("../assets/images/academics - online.jpeg");
  const librariesImage = require("../assets/images/academics - library.jpeg");
  const informationTechnology = require("../assets/images/academics information technology.jpeg");
  const instructionalTechnology = require("../assets/images/academics -instructional technology.jpeg");
  const accounts = require("../assets/images/Academics - Accounts.jpeg");

  const programs = [
    {
      key: 1,
      imageURL: undergraduatesImage,
      title: "Undergraduate Majors",
      text: `Delphis provides a liberal arts education that fosters intellectual curiosity, independent thinking, and leadership skills.`,
      link: "/academic-catalog?academic-level=undergraduates&degree-type=major",
    },
    {
      key: 2,
      imageURL: graduatesImage,
      title: "Graduate Programs",
      text: `Our advanced degree programs are close-knit communities with access to vast resources.`,
      link: "/academic-catalog?academic-level=graduates&degree-type=major",
    },
    {
      key: 3,
      imageURL: onlineImage,
      title: "UD Online",
      text: `Step inside a virtual Delphis classroom and learn from some of our most renowned faculty members.`,
      link: "/delphis-online",
    },
  ];

  const technology = [
    {
      key: 1,
      imageURL: informationTechnology,
      title: "Office of Information Technology",
      text: `Information technology services for all of the University community`,
    },
    {
      key: 2,
      imageURL: instructionalTechnology,
      title: "Center for Instructional Technology",
      text: `Tools and services for teaching, learning and collaboration`,
    },
    {
      key: 3,
      imageURL: accounts,
      title: "Accounts",
      text: `Log in to view grades, accounts, employee information and more`,
    },
  ];

  useDocumentTitle("Academics");

  return (
    <>
      <Navbar />
      <TextOnImage
        text={`We encourage our students to explore the academic landscape, venturing into unfamiliar fields of knowledge and, perhaps, discovering new passions that will take them in a different direction altogether.`}
        title="Academics"
        imageURL={academics}
      />
      <CardsNoBorderContainer
        cardsArr={programs}
        bgColor={"white"}
        title={"Programs of Study"}
        text={
          "Delphis's academics are boosted by its inherent culture and ecosystem of innovation. You name it, if it's cutting-edge, the University's faculty—and students—have their hands in it."
        }
      />
      <ImageNextToParagraphMoreInfo
        bgColor="vgblue"
        textColor="white"
        reverse={false}
        classes={{ marginTop: "0" }}
        title="Libraries"
        text={`More than just a place to study, Delphis's Libraries are widely recognized for their innovative services and quality reference materials. Choose from a number of impressive facilities to conduct your research and enhance your educational experience.`}
        imageLink={librariesImage}
        buttonComponent={
          <div className="w-full max-w-[400px] justify-center items-center flex gap-4 m-auto">
            <LinkButtonTransparent
              classes="w-full text-center"
              name="University Libraries"
              link="/"
            />
          </div>
        }
      />
      <CardsNoBorderContainer
        cardsArr={technology}
        bgColor={"slate-100"}
        title={"Technology"}
        text={
          "The University of Alabama emphasizes leading-edge technology to keep the campus connected and provides computer and web-based classroom and distance education opportunities for students, faculty and staff."
        }
      />
      <Footer />
    </>
  );
};

export default AcademicsPage;
