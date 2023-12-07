import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CardsNoBorderContainer from "../components/layout/CardsNoBorderContainer";
import useDocumentTitle from "../hooks/useDocumentTitle";

const headerImage = require("../assets/images/student life - header.jpeg");
const awardsImage = require("../assets/images/student life - awards.jpeg");
const eventsImage = require("../assets/images/student life - events.jpeg");

const cardsArr = [
  {
    key: 1,
    title: "Premier Awards",
    text: `UD is now accepting nominations and applications for Premier Awards! These recognize exemplary students, faculty or staff members for their achievements and contributions toward the Capstone. Nominations are due Nov. 1 and student applications are due Nov. 15.`,
    imageURL: awardsImage,
    link: "/premier-awards",
  },
  {
    key: 2,
    title: "Upcoming Events",
    text: `See all upcoming Student Life events.`,
    imageURL: eventsImage,
    link: "student-events",
  },
];

const StudentLifePage = () => {
  useDocumentTitle("Student Life");

  return (
    <>
      <Navbar />
      <div className="w-full mb-10 mt-20 min-[720px]:mt-10">
        <div className="w-full max-w-[900px] m-auto">
          <img
            className="object-cover w-full max-h-[15rem] px-2"
            src={headerImage}
            alt="Student Life"
          />
          <p className="text-slate-500 mt-4 p-4">
            Student Life empowers and supports students in maximizing their
            University learning experiences by cultivating an inclusive campus
            culture that promotes equitable opportunities for engaged learning,
            holistic wellness, and student success.
          </p>
          <CardsNoBorderContainer cardsArr={cardsArr} classes="mt-0 pt-0" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudentLifePage;
