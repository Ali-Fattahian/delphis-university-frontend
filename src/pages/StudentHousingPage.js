import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CardsNoBorderContainer from "../components/layout/CardsNoBorderContainer";
import useDocumentTitle from "../hooks/useDocumentTitle";

const headerImage = require("../assets/images/student housing - header.jpeg");
const tempImage = require("../assets/images/research - scholars.jpeg");

const cardsArr = [
  {
    key: 1,
    title: "Submit a Work Order",
    text: `Having facility related issues? Learn about the next steps to submit a work order and have our facilities staff address your issue.`,
    imageURL: tempImage,
  },
  {
    key: 2,
    title: "Submit a Work Order",
    text: `Having facility related issues? Learn about the next steps to submit a work order and have our facilities staff address your issue.`,
    imageURL: tempImage,
  },
  {
    key: 3,
    title: "Submit a Work Order",
    text: `Having facility related issues? Learn about the next steps to submit a work order and have our facilities staff address your issue.`,
    imageURL: tempImage,
  },
  {
    key: 4,
    title: "Submit a Work Order",
    text: `Having facility related issues? Learn about the next steps to submit a work order and have our facilities staff address your issue.`,
    imageURL: tempImage,
  },
  {
    key: 5,
    title: "Submit a Work Order",
    text: `Having facility related issues? Learn about the next steps to submit a work order and have our facilities staff address your issue.`,
    imageURL: tempImage,
  },
];

const StudentHousingPage = () => {
  useDocumentTitle("Student Housing");

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
            Living on campus is the key to a great start at The University of
            Alabama. Residential living puts you at the heart of campus life,
            where you will interact with a diverse community of people.
          </p>
          <p className="text-slate-500 mt-2 px-4 text-xs font-semibold">
            With more than 9,000 residents on campus in 34 residence halls, we
            are dedicated to propelling residents to a successful transition to
            life on campus with the aid of our 248 resident advisors as well as
            our 21 graduate community directors. It is our mission to support
            students' development, learning, and engagement through
            intentionally designed environments, programs, and services.
          </p>
          <CardsNoBorderContainer cardsArr={cardsArr} classes="mt-0 pt-0" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudentHousingPage;
