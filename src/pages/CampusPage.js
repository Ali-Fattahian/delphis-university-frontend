import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import TextOnImage from "../components/layout/TextOnImage";
import CardsNoBorderContainer from "../components/layout/CardsNoBorderContainer";
import ImageNextToParagraphMoreInfo from "../components/layout/ImageNextToParagraph.MoreInfo";
import LinkButtonTransparent from "../components/utilities/LinkButtonTransparent";
import LinkButtonAlt from "../components/utilities/LinkButtonAlt";
import LinkButton from "../components/utilities/LinkButton";

const CampusPage = () => {
  useDocumentTitle("Campus");

  const imageURL = require("../assets/images/apply.jpeg");
  const imageURL2 = require("../assets/images/Hometown.jpeg");
  const imageURL3 = require("../assets/images/Login.jpeg");
  const imageURL4 = require("../assets/images/community-news.jpeg");

  const cardsArr = [
    {
      key: 1,
      title: "Health & Wellbeing",
      text: `Learn how UA promotes a healthy campus environment to enhance student well-being.`,
      link: "/",
      imageURL: imageURL2,
    },
    {
      key: 2,
      title: "Safety & Support",
      text: `The safety and well-being of our students is one of our highest priorities.`,
      link: "/",
      imageURL: imageURL3,
    },
    {
      key: 3,
      title: "University Police",
      text: `UAPD works to provide a safe and secure environment for the UA community.`,
      link: "/",
      imageURL: imageURL4,
    },
  ];

  const cardsArr2 = [
    {
      key: 1,
      title: "Dining",
      text: `See UA's wide variety of on-campus options for nutritious and delicious food.`,
      link: "/",
      imageURL: imageURL2,
    },
    {
      key: 2,
      title: "Crimson Ride",
      text: `Enjoy the convenience of timely and comprehensive on-campus public transportation.`,
      link: "/",
      imageURL: imageURL3,
    },
    {
      key: 3,
      title: "University Police",
      text: `Learn more about yourself as you learn with and through others.`,
      link: "/",
      imageURL: imageURL4,
    },
  ];

  const cardsArr3 = [
    {
      key: 1,
      title: "Commencement",
      text: `Graduation ceremonies and information.`,
      link: "/",
      imageURL: imageURL4,
    },
    {
      key: 2,
      title: "Get on board day",
      text: `Learn about the 600+ student organizations at UA.`,
      link: "/",
      imageURL: imageURL,
    },
    {
      key: 3,
      title: "Weeks of Welcome",
      text: `Programs for first-year and transfer students new to the Capstone.`,
      link: "/",
      imageURL: imageURL3,
    },
  ];

  return (
    <>
      <Navbar />
      <TextOnImage
        title="CAMPUS LIFE"
        text={`Morning run on the Riverwalk. Lunch with friends at the Student Center. Late-night study session at Gorgas. UA is simply unmatched in the quality of student life. Live your best life here.`}
        imageURL={imageURL}
      />
      <CardsNoBorderContainer
        title="LIFE AT UA"
        text={`UA offers a complete educational, cultural and social experience. Whatever your interests, you’ll find a group, an organization, an activity or a program that appeals to you.`}
        cardsArr={cardsArr2}
      />
      <ImageNextToParagraphMoreInfo
        title="ACTIVITIES & INVOLVEMENT"
        text={`UA students are from many backgrounds with differing interests and passions. We want to make sure you have the information, resources and support you need to succeed here and for a lifetime. Whether your interests are intellectual, social, recreational, cultural, multicultural or spiritual in nature, there is a place for you at UA.`}
        textColor="white"
        bgColor="vgblue"
        imageLink={imageURL2}
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
        title="HEALTH & SAFETY"
        text={`Your safety and well-being are one of our highest priorities. UA invests significant resources in activities and initiatives designed to increase both your security on our campus and your ability to make responsible decisions that enhance your well-being.`}
        cardsArr={cardsArr}
      />
      <ImageNextToParagraphMoreInfo
        title="ARTS & CULTURE"
        text={`Enrich your life! Take advantage of a robust and varied schedule of musical, dance and theatre performances, art galleries and exhibitions, museums, lectures and readings by writers, poets and experts on every topic imaginable.`}
        textColor="white"
        bgColor="vggreen"
        imageLink={imageURL4}
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
        title="our Campus"
        text={`Year after year, the UA campus ranks among the very best in the nation. From tulips and cherry blossoms in the spring to cascades of golden leaves in the fall, you’re surrounded by dramatic intersections of classic architecture and modern advancement.`}
        textColor="white"
        bgColor="vgred"
        imageLink={imageURL}
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
