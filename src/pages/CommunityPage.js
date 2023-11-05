import React from "react";
import Navbar from "../components/layout/Navbar";
import ImageNextToParagraphMoreInfo from "../components/layout/ImageNextToParagraph.MoreInfo";
import LinkButtonTransparent from "../components/utilities/LinkButtonTransparent";
import CardNoBorderContainer from "../components/layout/CardNoBorderContainer";
import Footer from "../components/layout/Footer";

const imageURL = require("../assets/images/community-news.jpeg");
const imageURL2 = require("../assets/images/pexels-ivan-samkov-5676678.jpeg");
const imageURL3 = require("../assets/images/pexels-christina-morillo-1181534.jpeg");
const imageURL4 = require("../assets/images/pexels-pavel-danilyuk-7942550.jpeg");

const CommunityPage = () => {
  const cardsArr = [
    {
      key: 1,
      imageURL: imageURL3,
      title: "Council on Community Based Partnerships",
      text: `All academic disciplines are represented on a Council comprised of students, faculty, and community members`,
    },
    {
      key: 2,
      imageURL: imageURL3,
      title: "Council on Community Based Partnerships",
      text: `All academic disciplines are represented on a Council comprised of students, faculty, and community members`,
    },
    {
      key: 3,
      imageURL: imageURL3,
      title: "Council on Community Based Partnerships",
      text: `All academic disciplines are represented on a Council comprised of students, faculty, and community members`,
    },
  ];

  const cardsArr2 = [
    {
      key: 4,
      imageURL: imageURL4,
      title: "UA Early College",
      text: `Earn up to 30 hours of college credit during high school`,
    },
    {
      key: 5,
      imageURL: imageURL4,
      title: "UA Early College",
      text: `Earn up to 30 hours of college credit during high school`,
    },
    {
      key: 6,
      imageURL: imageURL4,
      title: "UA Early College",
      text: `Earn up to 30 hours of college credit during high school`,
    },
    {
      key: 7,
      imageURL: imageURL4,
      title: "UA Early College",
      text: `Earn up to 30 hours of college credit during high school`,
    },
    {
      key: 8,
      imageURL: imageURL4,
      title: "UA Early College",
      text: `Earn up to 30 hours of college credit during high school`,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="relative">
        <img
          src={imageURL}
          alt="Community Engagement"
          className="w-full object-cover"
        />
        <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-[#0000] to-[#0000006a]"></div>
        <div className="absolute bottom-0 left-0 flex flex-col gap-4 p-4 w-full md:w-3/4">
          <h1 className="text-1xl min-[335px]:text-2xl font-semibold text-white overflow-hidden sm:text-4xl md:text-5xl text">
            COMMUNITY ENGAGEMENT
          </h1>
          <p className="text-white text-xs sm:text-sm md:text-base md:font-semibold">
            The University of Alabama’s community engagement efforts reflect its
            core mission to improve the quality of life for the citizens of
            Alabama and beyond through innovative programs in teaching, research
            and service.
          </p>
        </div>
      </div>
      <ImageNextToParagraphMoreInfo
        bgColor="vgblue"
        textColor="white"
        reverse={false}
        classes={{ marginTop: "0" }}
        title="COMMUNITY ENGAGEMENT AT UD"
        text={`The Division of Community Affairs helps the University fulfill its mission to advance the intellectual and social condition of the people of Alabama through innovative programs that connect teaching, research and service in ways that improve the quality of life for individuals and communities.
        Since 2008, The University of Alabama has held the Carnegie Foundation's Elective Classification for Community Engagement, a distinction for higher education institutions that are committed to community engagement and whose work represents best practices in the field.
        `}
        subTitle={`UA prepares students to become productive, civic-minded citizens who serve their communities both now and in the future.`}
        imageLink={imageURL}
        buttonComponent={
          <LinkButtonTransparent
            name="Diversity of Community Affairs"
            link="/"
          />
        }
      />
      <div className="p-6 mt-4">
        <h1 className="text-3xl sm:text-5xl mb-6 text-center overflow-hidden">
          ENGAGED SCHOLARSHIP
        </h1>
        <p className="text-center mb-6">
          UA establishes partnerships that combine academic and community-based
          knowledge to improve the quality of life for all.
        </p>
        <CardNoBorderContainer cardsArr={cardsArr} />
      </div>
      <ImageNextToParagraphMoreInfo
        bgColor="vggreen"
        textColor="white"
        reverse={false}
        classes={{ marginTop: "0" }}
        title="OMMUNITY-ENGAGED LEARNING"
        text={`THigh-impact teaching introduces field-based learning to give students direct experience with issues they are studying in the classroom. Students are provided opportunities to apply what they have learned in real-world settings and reflect critically on their service experiences.`}
        subTitle={`Engaged learning encourages diverse perspectives and student investment in their own education.`}
        imageLink={imageURL2}
        buttonComponent={
          <div className="w-full">
            <div className="flex flex-col gap-4 justify-center items-center w-full max-w-[400px] m-auto">
              <LinkButtonTransparent
                name="center for service & Leadership"
                link="/"
                width={"100%"}
              />
              <LinkButtonTransparent
                name="Student Community Engagement Center"
                link="/"
                width={"100%"}
              />
            </div>
          </div>
        }
      />
      <div className="p-6 mt-4">
        <h1 className="text-3xl sm:text-5xl mb-6 text-center overflow-hidden">
          COMMUNITY EDUCATION
        </h1>
        <p className="text-center mb-6">
          Our faculty, staff and students are committed to making a positive
          impact on Alabama's children and the future of our state and region.
        </p>
        <CardNoBorderContainer cardsArr={cardsArr2} />
      </div>
      <Footer />
    </>
  );
};

export default CommunityPage;
