import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ImageNextToParagraphMoreInfo from "../components/layout/ImageNextToParagraph.MoreInfo";
import LinkButtonAlt from "../components/utilities/LinkButtonAlt";
import Card from "../components/layout/Card";
import LinkButton from "../components/utilities/LinkButton";
import CardsNoBorderContainer from "../components/layout/CardsNoBorderContainer";
import useDocumentTitle from "../hooks/useDocumentTitle";

const tourImage = require("../assets/images/Tour - header.jpeg");
const eventsImage = require("../assets/images/Tour - events.jpeg");
const eatingImage = require("../assets/images/Tour - eating.jpeg");
const hometownImage = require("../assets/images/Tour - hometown.jpeg");

const TourPage = () => {
  useDocumentTitle("Tour");

  const campusEvents = [
    {
      key: 1,
      month: "November",
      day: "6",
      year: "2023",
      title:
        "The Northern Edge of the Gulf of Mexico: Visual Representations of Alabama during the Age of European Exploration and Settlement, c. 1592 - 1819",
      time: "All Day",
      location: "Quad Entrance/Foyer , Gorgas Library, 2nd Floor",
    },
    {
      key: 2,
      month: "November",
      day: "6",
      year: "2023",
      title:
        "The Northern Edge of the Gulf of Mexico: Visual Representations of Alabama during the Age of European Exploration and Settlement, c. 1592 - 1819",
      time: "All Day",
      location: "Quad Entrance/Foyer , Gorgas Library, 2nd Floor",
    },
    {
      key: 3,
      month: "November",
      day: "6",
      year: "2023",
      title:
        "The Northern Edge of the Gulf of Mexico: Visual Representations of Alabama during the Age of European Exploration and Settlement, c. 1592 - 1819",
      time: "All Day",
      location: "Quad Entrance/Foyer , Gorgas Library, 2nd Floor",
    },
  ];

  const homeTown = [
    {
      key: 1,
      title: "Events",
      text: `There are always new and exciting ways to experience Delphis
       City while you are here.`,
      imageURL: eventsImage,
      link: "/",
    },
    {
      key: 2,
      title: "Eat",
      text: `Delphis City is home to some of the best
       restaurants in the Southeast.`,
      imageURL: eatingImage,
      link: "/",
    },
    {
      key: 3,
      title: "Hometown",
      text: `Delphis City is so much more than a college town.`,
      imageURL: hometownImage,
      link: "/",
    },
  ];

  return (
    <>
      <Navbar />
      <ImageNextToParagraphMoreInfo
        imageLink={tourImage}
        text={`The best way to find your place at The University of Delphis is
         to visit campus. Our student-guided campus tour gives you and your
          family a first-hand campus experience. Learn about 
          Delphis University's history as you discover today's many
           opportunities the University offers through stellar academics
           , research possibilities and exciting student life.
            We currently offer both walking-only tours of campus
             and a combination bus/walking tour. All campus tours
              include an Undergraduate Admissions Information session
               and descriptions of each tour are provided on the
                registration page.`}
        title="Tour The University of Delphis"
        textColor="black"
        bgColor="white"
        reverse={false}
        buttonComponent={
          <LinkButtonAlt
            name="Schedule a tour"
            classes="text-center"
            link="/"
          />
        }
      />
      <div className="bg-slate-100 p-10 flex flex-col justify-center gap-6">
        <h1 className="text-3xl sm:text-5xl text-center overflow-hidden">
          Events on Campus
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-6 justify-center">
          {campusEvents.map((e) => (
            <Card
              key={e.key}
              title={e.title}
              year={e.year}
              month={e.month}
              day={e.day}
              time={e.time}
              location={e.location}
            />
          ))}
        </div>
        <LinkButton
          name="Calendar"
          link="/"
          classes="max-w-[400px] min-w-[200px] text-center self-center"
        />
      </div>
      <CardsNoBorderContainer
        cardsArr={homeTown}
        bgColor={"white"}
        title={"Our Beautiful Home Delphis City"}
        text={
          "Our exciting downtown and small-city atmosphere make our home one of the best places to live in the world."
        }
      />
      <Footer />
    </>
  );
};

export default TourPage;
