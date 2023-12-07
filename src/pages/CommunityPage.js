import React from "react";
import Navbar from "../components/layout/Navbar";
import ImageNextToParagraphMoreInfo from "../components/layout/ImageNextToParagraph.MoreInfo";
import LinkButtonTransparent from "../components/utilities/LinkButtonTransparent";
import CardsNoBorderContainer from "../components/layout/CardsNoBorderContainer";
import Footer from "../components/layout/Footer";
import useDocumentTitle from "../hooks/useDocumentTitle";
import TextOnImage from "../components/layout/TextOnImage";

const communityEngagementImage = require("../assets/images/community - community egagement.jpeg");
const communityEngagementAtUniImage = require("../assets/images/community - engagement at uni.jpeg");
const communityLearningImage = require("../assets/images/community - engaged learning.jpeg");

const councilImage = require("../assets/images/community - council.jpeg");
const researchImage = require("../assets/images/community - research.jpeg");
const facultyImage = require("../assets/images/community - faculty engagement.jpeg");

// const earlyCollegeImage = require("../assets/images/community - early college.jpeg");
// const honorsActionImage = require("../assets/images/community - honors action.jpeg");
// const parentTeacherImage = require("../assets/images/community - parent teacher.jpeg");

const CommunityPage = () => {
  useDocumentTitle("Community");

  const cardsArr = [
    {
      key: 1,
      imageURL: councilImage,
      title: "Council on Community Based Partnerships",
      text: `All academic disciplines are represented on a Council comprised of students, faculty, and community members`,
      link: "/council-community-partnerships",
    },
    {
      key: 2,
      imageURL: researchImage,
      title: "Research and Publications",
      text: `Support for students and faculty involved in community-engaged scholarship`,
      link: "/research-publications",
    },
    {
      key: 3,
      imageURL: facultyImage,
      title: "New Faculty Community Engagement Tour",
      text: `Annual tour of West Delphis to connect faculty and students with community members`,
      link: "/community-engagement-tour",
    },
  ];

  // const cardsArr2 = [
  //   {
  //     key: 1,
  //     imageURL: earlyCollegeImage,
  //     title: "Delphis Early College",
  //     text: `Earn up to 30 hours of college credit during high school`,
  //   },
  //   {
  //     key: 2,
  //     imageURL: honorsActionImage,
  //     title: "Honors Action",
  //     text: `Incoming Honors College freshmen participate in service-learning programs`,
  //   },
  //   {
  //     key: 3,
  //     imageURL: parentTeacherImage,
  //     title: "Parent Teacher Leadership Academy",
  //     text: `Develops parents and teachers as leaders within their school communities`,
  //   },
  // ];

  return (
    <>
      <Navbar />
      <TextOnImage
        title="Community Engagement"
        text={`Delphis students, faculty and staff challenge and support each other within a respectful and diverse campus community.`}
        imageURL={communityEngagementImage}
      />
      <ImageNextToParagraphMoreInfo
        bgColor="vgblue"
        textColor="white"
        reverse={false}
        classes={{ marginTop: "0" }}
        title="Community Engagement at Delphis"
        text={`The Division of Community Affairs helps the University fulfill its mission to advance the intellectual and social condition of the people of Delphis through innovative programs that connect teaching, research and service in ways that improve the quality of life for individuals and communities.
        Since 2008, The University of Delphis has held the Carnegie Foundation's Elective Classification for Community Engagement, a distinction for higher education institutions that are committed to community engagement and whose work represents best practices in the field.
        `}
        subTitle={`Delphis prepares students to become productive, civic-minded citizens who serve their communities both now and in the future.`}
        imageLink={communityEngagementAtUniImage}
        buttonComponent={
          <LinkButtonTransparent
            name="Diversity of Community Affairs"
            link="/community-affairs"
          />
        }
      />
      <CardsNoBorderContainer
        cardsArr={cardsArr}
        bgColor={"white"}
        title={"Engagement Scholarship"}
        text={
          "The university of Delphis establishes partnerships that combine academic and community-based knowledge to improve the quality of life for all."
        }
      />
      <ImageNextToParagraphMoreInfo
        bgColor="vggreen"
        textColor="white"
        reverse={false}
        classes={{ marginTop: "0" }}
        title="Community-Engaged Learning"
        text={`High-impact teaching introduces field-based learning to give students direct experience with issues they are studying in the classroom. Students are provided opportunities to apply what they have learned in real-world settings and reflect critically on their service experiences.`}
        subTitle={`Engaged learning encourages diverse perspectives and student investment in their own education.`}
        imageLink={communityLearningImage}
        buttonComponent={
          <div className="w-full">
            <div className="flex gap-4 justify-center items-center w-full max-w-[400px] m-auto">
              <LinkButtonTransparent
                name="Student Community Engagement Center"
                link="/student-community-engagement"
                width={"100%"}
              />
            </div>
          </div>
        }
      />
      {/* <CardsNoBorderContainer
        cardsArr={cardsArr2}
        bgColor={"white"}
        title={"Community Education"}
        text={
          "Our faculty, staff and students are committed to making a positive impact on the local children and the future of our state and region."
        }
      /> */}
      <Footer />
    </>
  );
};

export default CommunityPage;
