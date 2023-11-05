import React from "react";
import Navbar from "../components/layout/Navbar";
import CardNoBorderContainer from "../components/layout/CardNoBorderContainer";
import LinkButtonAlt from "../components/utilities/LinkButtonAlt";
import ImageNextToParagraphMoreInfo from "../components/layout/ImageNextToParagraph.MoreInfo";
import Footer from "../components/layout/Footer";

const imageURL = require("../assets/images/university.jpeg");
const imageURL2 = require("../assets/images/pexels-pavel-danilyuk-7942550.jpeg");

const ApplyPage = () => {
  const cardsArr = [
    {
      key: 1,
      imageURL: imageURL2,
      title: "Apply for undergraduate admission",
      text: "Application for all undergraduate students - domestic, international and transfer",
    },
    {
      key: 2,
      imageURL: imageURL2,
      title: "Apply for graduate admission",
      text: "Application for all graduate students - domestic and international - pursuing advanced degrees",
    },
    {
      key: 3,
      imageURL: imageURL2,
      title: "Apply for law school admission",
      text: "Application for all students - domestic and international - pursuing professional degrees in law",
    },
  ];

  const cardsArr2 = [
    {
      key: 1,
      imageURL: imageURL2,
      title: "Apply for financial aid",
      text: "Learn more about opportunities to finance your education",
    },
    {
      key: 2,
      imageURL: imageURL2,
      title: "Scholarships for freshmen and transfer students",
      text: "Scholarship opportunities for incoming freshmen and transfer students",
    },
    {
      key: 3,
      imageURL: imageURL2,
      title: "Schorlarships for current students",
      text: "Scholarship application for students currently attending UD",
    },
  ];

  return (
    <>
      <Navbar />
      <img
        src={imageURL}
        alt="Apply now"
        className="object-cover translate-y-9 min-[720px]:translate-y-0"
      />
      <div className="p-6 mt-10 text-left">
        <h1 className="text-3xl sm:text-5xl mb-6 text-center overflow-hidden">
          MAKE THE WORLD PROUD
        </h1>
        <p className="text-center mb-6">
          UA establishes partnerships that combine academic and community-based
          knowledge to improve the quality of life for all.
        </p>
        <CardNoBorderContainer cardsArr={cardsArr} />
      </div>
      <ImageNextToParagraphMoreInfo
        classes={{ marginTop: "0" }}
        imageLink={imageURL2}
        bgColor="vgblue"
        textColor="white"
        title="HOUSING"
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
      <div className="p-6 mt-10 text-left">
        <h1 className="text-3xl sm:text-5xl mb-6 text-center overflow-hidden">
          SCHOLARSHIPS & FINANCIAL AID
        </h1>
        <p className="text-center mb-6">
          Financial resources for incoming and current students.
        </p>
        <CardNoBorderContainer cardsArr={cardsArr2} />
      </div>
      <Footer />
    </>
  );
};

export default ApplyPage;
