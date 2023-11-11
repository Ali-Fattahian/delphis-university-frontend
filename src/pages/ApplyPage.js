import React from "react";
import Navbar from "../components/layout/Navbar";
import CardsNoBorderContainer from "../components/layout/CardsNoBorderContainer";
import LinkButtonAlt from "../components/utilities/LinkButtonAlt";
import ImageNextToParagraphMoreInfo from "../components/layout/ImageNextToParagraph.MoreInfo";
import Footer from "../components/layout/Footer";
import useDocumentTitle from "../hooks/useDocumentTitle";

const applyImage = require("../assets/images/apply - header.jpeg");
const undergraduatesImage = require("../assets/images/apply - undergraduates.jpeg");
const graduatesImage = require("../assets/images/apply - graduates.jpeg");
const lawSchoolImage = require("../assets/images/apply - law school.jpeg");
const housingImage = require("../assets/images/apply - housing.jpeg");
const financialAidImage = require("../assets/images/apply - financial aid.jpeg");
const freshMenImage = require("../assets/images/apply - freshmen.jpeg");
const scholarSchipsImage = require("../assets/images/apply - scholarships.jpeg");

const ApplyPage = () => {
  useDocumentTitle("Apply");

  const cardsArr = [
    {
      key: 1,
      imageURL: undergraduatesImage,
      title: "Apply for undergraduate admission",
      text: "Application for all undergraduate students - domestic, international and transfer",
    },
    {
      key: 2,
      imageURL: graduatesImage,
      title: "Apply for graduate admission",
      text: "Application for all graduate students - domestic and international - pursuing advanced degrees",
    },
    {
      key: 3,
      imageURL: lawSchoolImage,
      title: "Apply for law school admission",
      text: "Application for all students - domestic and international - pursuing professional degrees in law",
    },
  ];

  const cardsArr2 = [
    {
      key: 1,
      imageURL: financialAidImage,
      title: "Apply for financial aid",
      text: "Learn more about opportunities to finance your education",
    },
    {
      key: 2,
      imageURL: freshMenImage,
      title: "Scholarships for freshmen and transfer students",
      text: "Scholarship opportunities for incoming freshmen and transfer students",
    },
    {
      key: 3,
      imageURL: scholarSchipsImage,
      title: "Schorlarships for current students",
      text: "Scholarship application for students currently attending UD",
    },
  ];

  return (
    <>
      <Navbar />
      <img
        src={applyImage}
        alt="Apply now"
        className="object-cover translate-y-9 min-[720px]:translate-y-0 max-h-[92vh] w-full"
      />
      <CardsNoBorderContainer
        cardsArr={cardsArr}
        bgColor={"white"}
        title={"Make The World Proud"}
        text={
          "UA establishes partnerships that combine academic and community-based knowledge to improve the quality of life for all."
        }
        classes="mt-8 min-[720px]:mt-0"
      />
      <ImageNextToParagraphMoreInfo
        classes={{ marginTop: "0" }}
        imageLink={housingImage}
        bgColor="vgblue"
        textColor="white"
        title="Housing"
        text={`Residential living puts you at the heart of campus life, where you will interact with a diverse community of people.

        With up to 8,400 residents on campus in 34 residence halls, we are dedicated to propelling residents to a successful transition to life on campus with the aid of our 236 resident advisors as well as our 19 graduate community directors.`}
        reverse={true}
        buttonComponent={
          <LinkButtonAlt
            name="Apply for an on-campus housing"
            link="/"
            classes="text-center"
          />
        }
      />
      <CardsNoBorderContainer
        cardsArr={cardsArr2}
        bgColor={"white"}
        title={"Scholarships & Financial Aid"}
        text={"Financial resources for incoming and current students."}
      />
      <Footer />
    </>
  );
};

export default ApplyPage;
