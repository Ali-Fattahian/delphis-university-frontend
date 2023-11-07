import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import TextOnImage from "../components/layout/TextOnImage";
import ImageNextToParagraph from "../components/layout/ImageNextToParagraph.MoreInfo";
import LinkButtonTransparent from "../components/utilities/LinkButtonTransparent";
import CardsNoBorderContainer from "../components/layout/CardsNoBorderContainer";
import LinkButtonAlt from "../components/utilities/LinkButtonAlt";
import LinkButton from "../components/utilities/LinkButton";

const AthleticsPage = () => {
  useDocumentTitle("Athletics");

  const imageURL = require("../assets/images/Login.jpeg");
  const imageURL2 = require("../assets/images/Future.jpeg");
  const imageURL3 = require("../assets/images/Tour.jpeg");
  const imageURL4 = require("../assets/images/header.jpeg");

  const cardsArr = [
    {
      key: 1,
      title: "Tickets",
      text: `Buy individual or season tickets to athletic events`,
      imageURL: imageURL3,
      link: "/",
    },
    {
      key: 1,
      title: "Bryant Museum",
      text: `Visit to learn about UA's rich tradition of athletic excellence`,
      imageURL: imageURL2,
      link: "/",
    },
    {
      key: 1,
      title: "UA Gameday",
      text: "Information on traffic, parking, tailgating and activities",
      imageURL: imageURL,
      link: "/",
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
        title="INTERCOLLEGIATE ATHLETICS"
        text={`The Crimson Tide is one of the most legendary names in all of sports. If you love watching or participating in championship sports, or revel in a unique gameday atmosphere, then you belong at The University of Alabama.`}
        cardsArr={cardsArr}
        bgColor="white"
        textColor="black"
      />
      <ImageNextToParagraph
        imageLink={imageURL2}
        text={`Recreational sports at The University of Alabama offer a large variety of activities and recreational pursuits. Clubs can be competitive, recreational, instructional or a combination of these elements. Participate in organized competitions against other schools' sport club teams, or play on intramural teams who compete against each other within the Alabama community. You can also enjoy guided outdoor trips, indoor climbing facilities and rent outdoor equipment and bicycles.`}
        title="RECREATION"
        textColor="white"
        bgColor="vgblue"
        buttonComponent={
          <div className="w-full max-w-[400px] justify-center items-center flex gap-4 m-auto">
            <LinkButtonTransparent
              width="100%"
              name="Visit University Recreation"
              link="/"
            />
          </div>
        }
        reverse={false}
        classes={{ marginTop: "0" }}
      />
      <ImageNextToParagraph
        imageLink={imageURL4}
        text={`Recreational sports at The University of Alabama offer a large variety of activities and recreational pursuits. Clubs can be competitive, recreational, instructional or a combination of these elements. Participate in organized competitions against other schools' sport club teams, or play on intramural teams who compete against each other within the Alabama community. You can also enjoy guided outdoor trips, indoor climbing facilities and rent outdoor equipment and bicycles.`}
        title="ADAPTED ATHLETICS"
        subTitle={`For a combined 13 national championships, UA’s Adapted Athletics program includes men’s and women’s wheelchair basketball and wheelchair tennis. In addition, UA students with disabilities can participate in noncompetitive sporting options designed to improve the recreation experience on campus for all students.`}
        textColor="black"
        bgColor="white"
        buttonComponent={
          <div className="w-full max-w-[400px] justify-center items-center flex gap-4 m-auto">
            <LinkButtonAlt
              classes="w-full text-center"
              name="Visit University Recreation"
              link="/"
            />
          </div>
        }
        reverse={true}
        classes={{ marginTop: "0" }}
      />
      <ImageNextToParagraph
        imageLink={imageURL4}
        text={`Tradition comes to life at The University of Alabama. The pulse of the University can be seen at any athletic event as students, alumni and supporters exude their passion and desire for excellence as the Crimson Tide prepares for battle. UD's timeless traditions connect generations to their experience at the Capstone. While it’s normal to hear a friendly “Roll Tide” on game day in Tuscaloosa, it’s just as common to hear it throughout the nation and world when crimson-clad supporters cross paths. As these traditions continue to enrich the legacy of UA athletics, they also enhance campus life and unite all who love The University of Alabama to cheer on the Crimson Tide to another victory.`}
        title="Traditions"
        textColor="white"
        bgColor="vggreen"
        buttonComponent={
          <div className="w-full max-w-[400px] justify-center items-center flex gap-4 m-auto">
            <LinkButton
              classes="w-full text-center"
              name="Some Origin Story"
              link="/"
            />
          </div>
        }
        reverse={false}
        classes={{ marginTop: "0" }}
      />
      <Footer />
    </>
  );
};

export default AthleticsPage;
