import React from "react";
import ImageNextToParagraphMoreInfo from "../../components/layout/ImageNextToParagraph.MoreInfo";
import LinkButtonTransparent from "../../components/utilities/LinkButtonTransparent";
import CardsNoBorderContainer from "../../components/layout/CardsNoBorderContainer";

const imageURL = require("../../assets/images/pexels-christina-morillo-1181534.jpeg");
const imageURL2 = require("../../assets/images/pexels-roxanne-minnish-4514045.jpeg");

const ResearchPageResources = () => {
  const cardsArr = [
    {
      imageURL: imageURL2,
      title: "Undergraduate Research",
      text: "The Office for Undergraduate Research offers resources that can enrich a student's experience by offering an opportunity to actively engage in learning outside of the classroom.",
      link: "/",
      key: 1,
    },
    {
      imageURL: imageURL2,
      title: "Undergraduate Research",
      text: "The Emerging Scholars Program provides opportunities for students to take part in cutting-edge research and work with award-winning faculty members.",
      link: "/",
      key: 2,
    },
    {
      imageURL: imageURL2,
      title: "Undergraduate Research",
      text: "The Undergraduate Research & Creative Activity Conference is a University-wide conference for students to highlight their research and creative activities.",
      link: "/",
      key: 3,
    },
  ];

  return (
    <>
      <ImageNextToParagraphMoreInfo
        title="Research Resources"
        text="The University of Alabama celebrates the ongoing efforts of faculty and staff to engage students in innovative research and entrepreneurship. The University is committed to providing faculty and students with the resources and staff support that turn imagination and inspiration into reality."
        imageLink={imageURL}
        bgColor="white"
        textColor="black"
      />
      <ImageNextToParagraphMoreInfo
        title="Resources for Faculty"
        text="The Office for Research & Economic Development has the important role of creating and sustaining a strong research environment at The University of Alabama. The research environment is comprised of critical components including culture, facilitation, communication, trust, transparency, infrastructure, and partnerships. ORED provides resources for our faculty to further investigate research interests in a collaborative environment."
        reverse={true}
        imageLink={imageURL}
        bgColor="vgblue"
        textColor="white"
        buttonComponent={
          <div className="flex flex-col gap-4 justify-center items-center">
            <LinkButtonTransparent name="Training" link="/" />
            <LinkButtonTransparent name="Forms & Templates" link="/" />
          </div>
        }
      />

      <CardsNoBorderContainer
        cardsArr={cardsArr}
        bgColor={"white"}
        title={"RESOURCES FOR STUDENTS"}
        text={
          "programs and resources provided can help empower all student researchers at the Capstone in order to engage in research during their academic careers."
        }
      />

      <ImageNextToParagraphMoreInfo
        title="Resources for Industry"
        text="The University of Alabama Office for Research & Economic Development has dedicated resources to support the success of strategic projects with industry partners. These resources support the collaboration process and further the University’s goal of empowering transformative research and innovation to develop a better workforce economy.."
        imageLink={imageURL}
        bgColor="vgyellow"
        textColor="black"
        buttonComponent={
          <div className="flex flex-col gap-4 justify-center items-center">
            <LinkButtonTransparent
              name="Economic & Business Engagement"
              link="/"
              width="266px"
              classes="text-black border-black"
            />
            <LinkButtonTransparent
              name="Innovation & Commercialization"
              link="/"
              width="266px"
              classes="text-black border-black"
            />
          </div>
        }
      />
    </>
  );
};

export default ResearchPageResources;