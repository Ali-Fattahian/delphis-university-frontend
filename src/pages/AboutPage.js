import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CardsNoBorderContainer from "../components/layout/CardsNoBorderContainer";
import ImageNextToParagraphMoreInfo from "../components/layout/ImageNextToParagraph.MoreInfo";
import LinkButtonTransparent from "../components/utilities/LinkButtonTransparent";
import useDocumentTitle from "../hooks/useDocumentTitle";
import TextOnImage from "../components/layout/TextOnImage";

const AboutPage = () => {
  const imageURL = require("../assets/images/Events.jpeg");
  const imageURL2 = require("../assets/images/Future.jpeg");
  const imageURL3 = require("../assets/images/Tour.jpeg");
  const imageURL4 = require("../assets/images/pexels-suzy-hazelwood-1887609.jpeg");
  const imageURL5 = require("../assets/images/apply - university.jpeg");

  useDocumentTitle("About");

  const cardsArr = [
    {
      key: 1,
      title: "Administration",
      text: `The University's leadership and structure`,
      imageURL: imageURL2,
    },
    {
      key: 2,
      title: "History",
      text: `Key events in the University's history`,
      imageURL: imageURL3,
    },
    {
      key: 3,
      title: "Missions & Objectives",
      text: `Teaching, research and service`,
      imageURL: imageURL4,
    },
    {
      key: 4,
      title: "Policies",
      text: `Ensuring UA's mission.`,
      imageURL: imageURL2,
    },
  ];

  return (
    <>
      <Navbar />
      <TextOnImage
        title="ABOUT UD"
        text={`Founded in 1831 as the state's flagship university, The University
            of Alabama has always focused on being the best. This is Where
            Legends Are Made.`}
        imageURL={imageURL}
      />
      <CardsNoBorderContainer
        title="ABOUT THE UNIVERSITY"
        text="We are dedicated to excellence in teaching, research and service. We provide a robust campus environment where our students can reach their greatest potential while learning from the best and brightest faculty and making a positive difference in the community, the state and the world.        "
        bgColor="white"
        textColor="black"
        cardsArr={cardsArr}
      />
      <ImageNextToParagraphMoreInfo
        imageLink={imageURL5}
        title="EXPLORE UA"
        text={`Our beautiful, 1,200-acre campus has everything you need to be successful during your college years. Be energized through leading-edge research initiatives and state-of-the-art labs. Be inspired by professors who are experts in their fields of study. Be active in campus life through one of more than 600 student organizations. Be involved in a wide range of volunteer opportunities and internships. Connect with what's important to you.`}
        bgColor="vgblue"
        textColor="white"
        reverse={true}
        classes={{ marginTop: 0 }}
      />
      <ImageNextToParagraphMoreInfo
        imageLink={imageURL3}
        title="NEWS AND EVENTS"
        text={`Find out what our students, faculty, staff and alumni are doing to make a positive difference on our campus, in our community and state, and around the world.`}
        bgColor="vggreen"
        textColor="white"
        reverse={false}
        classes={{ marginTop: 0 }}
        buttonComponent={
          <div className="w-full">
            <div className="flex flex-col gap-4 justify-center items-center w-full max-w-[400px] m-auto">
              <LinkButtonTransparent name="UD News" link="/" width={"100%"} />
              <LinkButtonTransparent
                name="Campus Events Calender"
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
