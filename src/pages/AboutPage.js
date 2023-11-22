import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CardsNoBorderContainer from "../components/layout/CardsNoBorderContainer";
import ImageNextToParagraphMoreInfo from "../components/layout/ImageNextToParagraph.MoreInfo";
import LinkButtonTransparent from "../components/utilities/LinkButtonTransparent";
import useDocumentTitle from "../hooks/useDocumentTitle";
import TextOnImage from "../components/layout/TextOnImage";

const AboutPage = () => {
  const headerImage = require("../assets/images/about - header.jpeg");
  const historyImage = require("../assets/images/about- history.jpeg");
  const exploreImage = require("../assets/images/about - explore.jpeg");
  const administrationImage = require("../assets/images/about - administration.jpeg");
  const policiesImage = require("../assets/images/about - policies.jpeg");
  const missionsImage = require("../assets/images/about - missions.jpeg");
  const eventsImage = require("../assets/images/about - events.jpeg");

  useDocumentTitle("About");

  const cardsArr = [
    {
      key: 1,
      title: "Administration",
      text: `The University's leadership and structure`,
      imageURL: administrationImage,
    },
    {
      key: 2,
      title: "History",
      text: `Key events in the University's history`,
      imageURL: historyImage,
    },
    {
      key: 3,
      title: "Missions & Objectives",
      text: `Teaching, research and service`,
      imageURL: missionsImage,
    },
    {
      key: 4,
      title: "Policies",
      text: `Ensuring The UD's mission.`,
      imageURL: policiesImage,
    },
  ];

  return (
    <>
      <Navbar />
      <TextOnImage
        title="The Facts"
        text={`The University of Delphis is a large research university with
         a wide array of programs, departments, schools, centers,
          museums, and many affiliated organizations.`}
        imageURL={headerImage}
      />
      <CardsNoBorderContainer
        title="About The University"
        text={`We are dedicated to excellence in teaching, research and service.
         We provide a robust campus environment where our students can reach
          their greatest potential while learning from the best and brightest
           faculty and making a positive difference in the community, 
           the state and the world.`}
        bgColor="white"
        textColor="black"
        cardsArr={cardsArr}
      />
      <ImageNextToParagraphMoreInfo
        imageLink={exploreImage}
        title="Explore The UD"
        text={`Our beautiful, 1,200-acre campus has everything you need
         to be successful during your college years. Be energized through
          leading-edge research initiatives and state-of-the-art labs.
           Be inspired by professors who are experts in their fields of study.
            Be active in campus life through one of more than 600 student 
            organizations. Be involved in a wide range of volunteer
             opportunities and internships. Connect with what's important
              to you.`}
        bgColor="vgblue"
        textColor="white"
        reverse={true}
        classes={{ marginTop: 0 }}
      />
      <ImageNextToParagraphMoreInfo
        imageLink={eventsImage}
        title="News & Events"
        text={`Find out what our students, faculty, staff and alumni are
         doing to make a positive difference on our campus,
          in our community and state, and around the world.`}
        bgColor="vggreen"
        textColor="white"
        reverse={false}
        classes={{ marginTop: 0 }}
        buttonComponent={
          <div className="w-full">
            <div className="flex flex-col gap-4 justify-center items-center w-full max-w-[400px] m-auto">
              <LinkButtonTransparent
                name="The University News"
                link="/"
                width={"100%"}
              />
              <LinkButtonTransparent
                name="Campus Events Calendar"
                link="/"
                width={"100%"}
              />
            </div>
          </div>
        }
      />
      <Footer />
    </>
  );
};

export default AboutPage;
