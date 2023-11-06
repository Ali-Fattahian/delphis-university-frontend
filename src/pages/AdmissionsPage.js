import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ImageNextToParagraphMoreInfo from "../components/layout/ImageNextToParagraph.MoreInfo";
import CardsNoBorderContainer from "../components/layout/CardsNoBorderContainer";
import LinkButtonTransparent from "../components/utilities/LinkButtonTransparent";
import LinkButton from "../components/utilities/LinkButton";
import LinkButtonAlt from "../components/utilities/LinkButtonAlt";

const imageURL = require("../assets/images/Future.jpeg");

const imageURL1 = require("../assets/images/apply.jpeg");
const imageURL2 = require("../assets/images/Hometown.jpeg");
const imageURL3 = require("../assets/images/pexels-artem-podrez-5715850.jpeg");

const AdmissionsPage = () => {
  const undergraduates = [
    {
      key: 1,
      title: "Apply Now",
      text: "Apply for admission.",
      imageURL: imageURL1,
      link: "/",
    },
    {
      key: 2,
      title: "Request Information",
      text: "Contact admissions or request printed materials.",
      imageURL: imageURL1,
      link: "/",
    },
    {
      key: 3,
      title: "Schedule a Visit",
      text: "Guided tours of campus options.",
      imageURL: imageURL1,
      link: "/",
    },
    {
      key: 4,
      title: "International Admissions",
      text: "Connect with a regional recruiter in your area.",
      imageURL: imageURL1,
      link: "/",
    },
    {
      key: 5,
      title: "Find Your Recruiter",
      text: "Admissions for international students who are entering freshmen.",
      imageURL: imageURL1,
      link: "/",
    },
  ];

  const graduates = [
    {
      key: 1,
      title: "Graduate Admissions",
      text: "Learn admissions requirements and apply for graduate school.",
      imageURL: imageURL3,
      link: "/",
    },
    {
      key: 2,
      title: "International Graduate Admissions",
      text: "Admissions for international students who wish to continue their graduate education.",
      imageURL: imageURL3,
      link: "/",
    },
    {
      key: 3,
      title: "Graduate Programs",
      text: "Explore more than 150 master's, educational specialist and doctoral degree programs.",
      imageURL: imageURL3,
      link: "/",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="relative w-full">
        <img src={imageURL} alt="Admissions" />
        <div className="absolute w-full h-full top-0 left-0 bg-[#00000038]"></div>
        <div className="w-full absolute left-0 bottom-0 flex flex-col gap-6 p-6 sm:w-3/4">
          <h1 className="text-white font-bold text-4xl sm:text-5xl overflow-hidden">
            Admissions
          </h1>
          <p className="text-white font-bold">
            Expand Your Boundaries. Explore Your Passion. Build Your Dream.
            Become a Legend.
          </p>
        </div>
      </div>
      <CardsNoBorderContainer
        cardsArr={undergraduates}
        bgColor={"white"}
        title={"Undergraduate Admissions"}
        text={
          "The highest-achieving students are drawn to UA for its transformative opportunities — their impact limited only by your ambition."
        }
      />
      <ImageNextToParagraphMoreInfo
        reverse={false}
        bgColor="vgblue"
        classes={{ marginTop: "0" }}
        textColor="white"
        imageLink={imageURL2}
        text={
          "Find the information and assistance you need to finance the cost of an education at The University of Alabama.The financial aid staff is dedicated to making the financial aid process as straightforward as possible whether you are applying for grants, loans, work study or student employment."
        }
        title="FINANCIAL AID & SCHOLARSHIPS"
        buttonComponent={
          <div className="w-full max-w-[400px] justify-center items-center flex flex-col gap-4 m-auto">
            <LinkButtonTransparent width="100%" name="Financial aid" link="/" />
            <LinkButtonTransparent width="100%" name="Scholarships" link="/" />
          </div>
        }
      />
      <CardsNoBorderContainer
        cardsArr={graduates}
        bgColor={"white"}
        title={"Graduate Admissions"}
        text={
          "Choose from over 150 graduate programs to launch your professional and academic career to the highest levels of achievement."
        }
      />
      <ImageNextToParagraphMoreInfo
        reverse={true}
        bgColor="vggreen"
        textColor="white"
        classes={{ marginTop: "0" }}
        imageLink={imageURL2}
        text={
          "We welcome transfer students to UA from two-year and four-year institutions. Here are the resources you need to make the process work for you.          "
        }
        title="TRANSFERRING TO UD"
        buttonComponent={
          <div className="w-full max-w-[400px] justify-center items-center flex flex-col gap-4 m-auto">
            <LinkButton
              classes="w-full text-center"
              name="Transfer Admissions"
              link="/"
            />
            <LinkButton
              classes="w-full text-center"
              name="Transfer FAQs"
              link="/"
            />
          </div>
        }
      />
      <div className="bg-white p-10 flex flex-col justify-center gap-6">
        <h1 className="text-3xl sm:text-5xl text-center overflow-hidden">
          COST OF ATTENDANCE
        </h1>
        <p className="text-center">
          Resources to help determine your budget as you prepare to attend The
          University of Alabama in the coming academic year.
        </p>
        <div className="w-full max-w-[400px] justify-center items-center flex flex-col gap-4 m-auto">
          <LinkButtonAlt
            classes="w-full text-center"
            name="Transfer Admissions"
            link="/"
          />
          <LinkButtonAlt
            classes="w-full text-center"
            name="Transfer FAQs"
            link="/"
          />
        </div>
      </div>
      <ImageNextToParagraphMoreInfo
        reverse={false}
        bgColor="vgskyblue"
        textColor="white"
        classes={{ marginTop: "0" }}
        imageLink={imageURL2}
        text={
          "Start your career or chart a new path with one of the top schools in the country through The University of Alabama Online. Complete courses around your own schedule from any location. From our prestigious faculty to our extensive alumni network, a degree from The University of Alabama carries a distinguished worldwide reputation.          "
        }
        title="DISTANCE EDUCATION"
        buttonComponent={
          <div className="w-full max-w-[400px] justify-center items-center flex gap-4 m-auto">
            <LinkButtonTransparent width="100%" name="UD Online" link="/" />
          </div>
        }
      />

      <Footer />
    </>
  );
};

export default AdmissionsPage;
