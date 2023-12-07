import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ImageNextToParagraphMoreInfo from "../../components/layout/ImageNextToParagraph.MoreInfo";
import ArrowRightIcon from "@heroicons/react/24/outline/ArrowRightIcon";
import CardsNoBorderContainer from "../../components/layout/CardsNoBorderContainer";

const headerImage = require("../../assets/images/undergraduates admissions - header.jpeg");
const financialAidImage = require("../../assets/images/undergraduates admissions - financial aid.jpeg");
const scholarshipsImage = require("../../assets/images/undergraduates admissions - scholarships.jpeg");
const visitImage = require("../../assets/images/undergraduates admissions - visit.jpeg");

const cardsArr = [
  {
    key: 1,
    title: "Visit",
    text: `We are currently hosting in-person campus tours in accordance with
     CDC and ADPH guidelines. If you are unable to travel to campus for
      a visit, we invite you to view our virtual tour.
       See your visit opportunities.`,
    link: "/tour",
    imageURL: visitImage,
  },
  {
    key: 1,
    title: "Scholarships",
    text: `UD awards significant scholarships to ambitious students building
     their dreams. Learn more and complete your scholarship application today.
    `,
    link: "undergraduates-scholarships",
    imageURL: scholarshipsImage,
  },
  {
    key: 1,
    title: "Financial Aid",
    text: `UD provides comprehensive information and services to help finance
     your education. Financial assistance is available and we have financial
      aid advisors ready to meet with you.`,
    link: "financial-aid",
    imageURL: financialAidImage,
  },
];

const UndergraduatesAdmissionsPage = () => {
  return (
    <>
      <Navbar />
      <ImageNextToParagraphMoreInfo
        title="Leaders. Innovators."
        text={`As a student at The University of Delphis, you'll grow and excel
         in an unrivaled academic environment on our campus, routinely named
          one of the most impressive in the country. Equipped with the
           unmatched opportunities and resources UD can offer, there is no limit
            to what you can dream and achieve.

        `}
        imageLink={headerImage}
        buttonComponent={
          <div className="flex flex-col gap-4">
            <a
              href="/"
              className="text-xs underline-offset-2 hover:underline cursor-pointer font-bold text-vgblue"
            >
              Freshman
              <ArrowRightIcon className="w-4 inline-block" />
            </a>
            <a
              href="/"
              className="text-xs underline-offset-2 hover:underline cursor-pointer font-bold text-vgblue"
            >
              Transfer
              <ArrowRightIcon className="w-4 inline-block" />
            </a>
            <a
              href="/"
              className="text-xs underline-offset-2 hover:underline cursor-pointer font-bold text-vgblue"
            >
              International
              <ArrowRightIcon className="w-4 inline-block" />
            </a>
          </div>
        }
      />
      <CardsNoBorderContainer
        cardsArr={cardsArr}
        title="Resources"
        bgColor="neutral-200"
      />
      <Footer />
    </>
  );
};

export default UndergraduatesAdmissionsPage;
