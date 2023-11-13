import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CardsNoBorderContainer from "../components/layout/CardsNoBorderContainer";
import useDocumentTitle from "../hooks/useDocumentTitle";

const headerImage = require("../assets/images/student life - header.jpeg");
const image2 = require("../assets/images/about - events.jpeg");

const cardsArr = [
  {
    key: 1,
    title: "From Corpse to Capstone",
    text: `See how the Office of Veteran and Military Affairs helps students in unique situations like Wade and several more.`,
    imageURL: image2,
  },
  {
    key: 2,
    title: "From Corpse to Capstone",
    text: `See how the Office of Veteran and Military Affairs helps students in unique situations like Wade and several more.`,
    imageURL: image2,
  },
  {
    key: 3,
    title: "From Corpse to Capstone",
    text: `See how the Office of Veteran and Military Affairs helps students in unique situations like Wade and several more.`,
    imageURL: image2,
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
