import React from "react";
import Navbar from "../components/layout/Navbar";
import useDocumentTitle from "../hooks/useDocumentTitle";
import TextOnImage from "../components/layout/TextOnImage";
import CardsNoBorderContainer from "../components/layout/CardsNoBorderContainer";
import ImageNextToParagraphMoreInfo from "../components/layout/ImageNextToParagraph.MoreInfo";
import LinkButtonTransparent from "../components/utilities/LinkButtonTransparent";

const AcademicsPage = () => {
  const imageURL = require("../assets/images/Hometown.jpeg");
  const imageURL2 = require("../assets/images/community-news.jpeg");
  const imageURL3 = require("../assets/images/Login.jpeg");
  const imageURL4 = require("../assets/images/Tour.jpeg");

  const cardsArr = [
    {
      key: 1,
      imageURL: imageURL2,
      title: "Undergraduate Majors",
      text: `Over 70 undergraduate programs across 12 colleges and schools`,
    },
    {
      key: 2,
      imageURL: imageURL3,
      title: "Graduate Programs",
      text: `Over 120 master's, educational specialist and doctoral degree programs`,
    },
    {
      key: 3,
      imageURL: imageURL4,
      title: "UD Online",
      text: `Advanced degrees at any time, from any where`,
    },
  ];

  const cardsArr2 = [
    {
      key: 1,
      imageURL: imageURL4,
      title: "Office of Information Technology",
      text: `Information technology services for all of the University community`,
    },
    {
      key: 2,
      imageURL: imageURL,
      title: "Center for Instructional Technology",
      text: `Tools and services for teaching, learning and collaboration`,
    },
    {
      key: 3,
      imageURL: imageURL2,
      title: "Accounts",
      text: `Log in to view grades, accounts, employee information and more`,
    },
  ];

  useDocumentTitle("Academics");

  return (
    <>
      <Navbar />
      <TextOnImage
        text={`At The University of Alabama, you will be surrounded by expert
            mentors and dedicated faculty as you pursue your interests and forge
            your legend through hands-on research and learning.`}
        title="Academics"
        imageURL={imageURL}
      />
      <CardsNoBorderContainer
        cardsArr={cardsArr}
        bgColor={"white"}
        title={"PROGRAMS OF STUDY"}
        text={
          "Experience the overall excellence of our academic programs. UA offers bachelor’s, master’s and doctoral degrees in nearly 200 degree programs, with a student/faculty ratio that averages 23:1. Professional programs include law and rural medicine."
        }
      />
      <ImageNextToParagraphMoreInfo
        bgColor="vgblue"
        textColor="white"
        reverse={false}
        classes={{ marginTop: "0" }}
        title="Libraries"
        text={`More than just a place to study, UA Libraries are widely recognized for their innovative services and quality reference materials. Choose from a number of impressive facilities to conduct your research and enhance your educational experience.`}
        imageLink={imageURL2}
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
        cardsArr={cardsArr2}
        bgColor={"slate-100"}
        title={"Technology"}
        text={
          "The University of Alabama emphasizes leading-edge technology to keep the campus connected and provides computer and web-based classroom and distance education opportunities for students, faculty and staff."
        }
      />
    </>
  );
};

export default AcademicsPage;
