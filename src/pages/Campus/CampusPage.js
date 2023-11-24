import React from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import TextOnImage from "../../components/layout/TextOnImage";
import CardsNoBorderContainer from "../../components/layout/CardsNoBorderContainer";
import ImageNextToParagraphMoreInfo from "../../components/layout/ImageNextToParagraph.MoreInfo";
import LinkButtonTransparent from "../../components/utilities/LinkButtonTransparent";
import LinkButtonAlt from "../../components/utilities/LinkButtonAlt";
import LinkButton from "../../components/utilities/LinkButton";

const CampusPage = () => {
  useDocumentTitle("Campus");

  const healthImage = require("../../assets/images/campus - health.jpeg");
  const supportImage = require("../../assets/images/campus - support.jpeg");
  const securityImage = require("../../assets/images/campus - security.jpeg");
  const rideImage = require("../../assets/images/campus - ride.jpeg");
  const diningImage = require("../../assets/images/campus - dining.jpeg");
  const diversityImage = require("../../assets/images/campus - diversity.jpeg");
  const ArtImage = require("../../assets/images/campus - art.jpeg");
  const commencementImage = require("../../assets/images/campus - commencement.jpeg");
  const getOnBoardImage = require("../../assets/images/campus - get on board.jpeg");
  const weeksOfWelcomeImage = require("../../assets/images/campus - weeks of welcome.jpeg");
  const ourCampusImage = require("../../assets/images/campus - our campus.jpeg");
  const involvementImage = require("../../assets/images/campus - involvement.jpeg");
  const campusLifeImage = require("../../assets/images/campus - campus life.jpeg");

  const cardsArr = [
    {
      key: 1,
      title: "Health & Wellbeing",
      text: `Learn how The University of Delphis promotes a healthy campus environment to enhance student well-being.`,
      link: "/",
      imageURL: healthImage,
    },
    {
      key: 2,
      title: "Safety & Support",
      text: `The safety and well-being of our students is one of our highest priorities.`,
      link: "/",
      imageURL: supportImage,
    },
    {
      key: 3,
      title: "University Police",
      text: `UAPD works to provide a safe and secure environment for the Delphis University community.`,
      link: "/",
      imageURL: securityImage,
    },
  ];

  const cardsArr2 = [
    {
      key: 1,
      title: "Dining",
      text: `See UD's wide variety of on-campus options for nutritious and delicious food.`,
      link: "/",
      imageURL: diningImage,
    },
    {
      key: 2,
      title: "Crimson Ride",
      text: `Enjoy the convenience of timely and comprehensive on-campus public transportation.`,
      link: "/",
      imageURL: rideImage,
    },
    {
      key: 3,
      title: "Diversity",
      text: `Learn more about yourself as you learn with and through others.`,
      link: "/diversity",
      imageURL: diversityImage,
    },
  ];

  const cardsArr3 = [
    {
      key: 1,
      title: "Commencement",
      text: `Graduation ceremonies and information.`,
      link: "/",
      imageURL: commencementImage,
    },
    {
      key: 2,
      title: "Get on board day",
      text: `Learn about the student organizations at the university of Delphis.`,
      link: "/",
      imageURL: getOnBoardImage,
    },
    {
      key: 3,
      title: "Weeks of Welcome",
      text: `Programs for first-year and transfer students new to the Capstone.`,
      link: "/",
      imageURL: weeksOfWelcomeImage,
    },
  ];

  return (
    <>
      <Navbar />
      <TextOnImage
        title="Campus Life"
        text={`With exceptional dining options and residential halls, a bounty of social, cultural and academic activities, sporting venues, an easy-to-traverse campus with shuttle service and a myriad of parking options, the University of Miami is home away from home, a place where students who live on or commute to campus can stretch their comfort zones and expand their horizons.`}
        imageURL={campusLifeImage}
      />
      <CardsNoBorderContainer
        title="Life At Delphis"
        text={`The University of Delphis offers a complete educational, cultural and social experience. Whatever your interests, you'll find a group, an organization, an activity or a program that appeals to you.`}
        cardsArr={cardsArr2}
      />
      <ImageNextToParagraphMoreInfo
        title="Activities & Involvement"
        text={`Delphis University students are from many backgrounds with differing interests and passions. We want to make sure you have the information, resources and support you need to succeed here and for a lifetime. Whether your interests are intellectual, social, recreational, cultural, multicultural or spiritual in nature, there is a place for you here.`}
        textColor="white"
        bgColor="vgblue"
        imageLink={involvementImage}
        reverse={true}
        buttonComponent={
          <div className="w-full max-w-[400px] justify-center items-center flex gap-4 m-auto">
            <LinkButtonTransparent
              classes="w-full text-center"
              name="Some Origin Story"
              link="/"
            />
          </div>
        }
      />
      <CardsNoBorderContainer
        title="Health & Safety"
        text={`Your safety and well-being are one of our highest priorities.The university of Delphis invests significant resources in activities and initiatives designed to increase both your security on our campus and your ability to make responsible decisions that enhance your well-being.`}
        cardsArr={cardsArr}
      />
      <ImageNextToParagraphMoreInfo
        title="Arts & Culture"
        text={`Enrich your life! Take advantage of a robust and varied schedule of musical, dance and theatre performances, art galleries and exhibitions, museums, lectures and readings by writers, poets and experts on every topic imaginable.`}
        textColor="white"
        bgColor="vggreen"
        imageLink={ArtImage}
        reverse={false}
        buttonComponent={
          <div className="w-full">
            <div className="flex flex-col gap-4 justify-center items-center w-full max-w-[400px] m-auto">
              <LinkButton name="Art" link="/" classes="w-full text-center" />
              <LinkButton
                name="Creative Campus"
                link="/"
                classes="w-full text-center"
              />
            </div>
          </div>
        }
      />
      <CardsNoBorderContainer
        title="Student Events"
        text={`The student experience here is rich in opportunities to expand your horizons and immerse yourself in a campus unlike any other.`}
        cardsArr={cardsArr3}
      />
      <ImageNextToParagraphMoreInfo
        title="Our Campus"
        text={`Year after year, the university of Delphis's campus ranks among the very best in the world. From tulips and cherry blossoms in the spring to cascades of golden leaves in the fall, you're surrounded by dramatic intersections of classic architecture and modern advancement.`}
        textColor="white"
        bgColor="vgred"
        imageLink={ourCampusImage}
        reverse={true}
        buttonComponent={
          <div className="w-full">
            <div className="flex flex-col gap-4 justify-center items-center w-full max-w-[400px] m-auto">
              <LinkButtonAlt
                name="Schedule a Tour"
                link="/"
                classes="w-full text-center"
              />
              <LinkButtonAlt
                name="Somewhere Our Home Town"
                link="/"
                classes="w-full text-center"
              />
            </div>
          </div>
        }
      />
      <Footer />
    </>
  );
};

export default CampusPage;
