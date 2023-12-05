import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ImageNextToParagraphMoreInfo from "../components/layout/ImageNextToParagraph.MoreInfo";
import CardsNoBorderContainer from "../components/layout/CardsNoBorderContainer";
import LinkButtonTransparent from "../components/utilities/LinkButtonTransparent";
import LinkButton from "../components/utilities/LinkButton";
import LinkButtonAlt from "../components/utilities/LinkButtonAlt";
import useDocumentTitle from "../hooks/useDocumentTitle";
import TextOnImage from "../components/layout/TextOnImage";

const admissionsImage = require("../assets/images/admissions.jpeg");
const applyImage = require("../assets/images/admissions - apply.jpeg");
// const requestInfoImage = require("../assets/images/admissions - request information.jpeg");
const scheduleVisitImage = require("../assets/images/admissions - schedule visit.jpeg");
const internationalAdmissionsImage = require("../assets/images/admissions - international.jpeg");
const recruiterImage = require("../assets/images/admissions - recruiter.jpeg");
const graduateAdmissionsImage = require("../assets/images/admissions - graduate.jpeg");
const internationalGradsImage = require("../assets/images/admissions - international graduates.jpeg");
const gradsProgramsImage = require("../assets/images/admissions - graduate programs.jpeg");
const financialAidImage = require("../assets/images/admissions - financial aid .jpeg");
const transferImage = require("../assets/images/admissions - transfer.jpeg");
const distanceImage = require("../assets/images/admissions - distance education.jpeg");

const AdmissionsPage = () => {
  useDocumentTitle("Admissions");

  const undergraduates = [
    {
      key: 1,
      title: "Apply Now",
      text: "Apply for admission.",
      imageURL: applyImage,
      link: "/apply",
    },
    // {
    //   key: 2,
    //   title: "Request Information",
    //   text: "Contact admissions or request printed materials.",
    //   imageURL: requestInfoImage,
    //   link: "/",
    // },
    {
      key: 3,
      title: "Schedule a Visit",
      text: "Guided tours of campus options.",
      imageURL: scheduleVisitImage,
      link: "/tour",
    },
    {
      key: 4,
      title: "International Admissions",
      text: "Connect with a regional recruiter in your area.",
      imageURL: internationalAdmissionsImage,
      link: "/international-admissions",
    },
    {
      key: 5,
      title: "Find Your Recruiter",
      text: "Admissions for international students who are entering freshmen.",
      imageURL: recruiterImage,
      link: "/find-recruiter",
    },
  ];

  const graduates = [
    {
      key: 1,
      title: "Graduate Admissions",
      text: "Learn admissions requirements and apply for graduate school.",
      imageURL: graduateAdmissionsImage,
      link: "/apply-graduates",
    },
    {
      key: 2,
      title: "Graduate International Admissions",
      text: "Admissions for international students who wish to continue their graduate education.",
      imageURL: internationalGradsImage,
      link: "/international/graduates-admissions",
    },
    {
      key: 3,
      title: "Graduate Programs",
      text: "Explore the master's, educational specialist and doctoral degree programs.",
      imageURL: gradsProgramsImage,
      link: "/academic-catalog?academic-level=graduates&degree-type=major",
    },
  ];

  return (
    <>
      <Navbar />
      <TextOnImage
        title="Admissions"
        text={`Expand Your Boundaries. Explore Your Passion. Build Your Dream.
            Become a Legend.`}
        imageURL={admissionsImage}
      />
      <CardsNoBorderContainer
        cardsArr={undergraduates}
        bgColor="neutral-100"
        title={"Undergraduate Admissions"}
        text={
          "The highest-achieving students are drawn to Delphis university for its transformative opportunities — their impact limited only by your ambition."
        }
      />
      {/* <ImageNextToParagraphMoreInfo
        reverse={false}
        bgColor="vgblue"
        classes={{ marginTop: "0" }}
        textColor="white"
        imageLink={financialAidImage}
        text={`Delphis is committed to being financially accessible to students from all backgrounds and from around the world. All financial aid is need-based to ensure that talented students can afford a Delphis education, regardless of their economic resources.`}
        title="Financial aid & Scholarships"
        buttonComponent={
          <div className="w-full max-w-[400px] justify-center items-center flex flex-col gap-4 m-auto">
            <LinkButtonTransparent width="100%" name="Financial aid" link="/" />
            <LinkButtonTransparent width="100%" name="Scholarships" link="/" />
          </div>
        }
      /> */}
      <CardsNoBorderContainer
        cardsArr={graduates}
        bgColor={"white"}
        title={"Graduate Admissions"}
        text={
          "Choose from graduate programs to launch your professional and academic career to the highest levels of achievement."
        }
      />
      {/* <ImageNextToParagraphMoreInfo
        reverse={true}
        bgColor="vggreen"
        textColor="white"
        classes={{ marginTop: "0" }}
        imageLink={transferImage}
        text={
          "We welcome transfer students to Delphis from two-year and four-year institutions. Here are the resources you need to make the process work for you.          "
        }
        title="Transferring to Delphis University"
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
      /> */}
      <div className="bg-neutral-100 p-10 flex flex-col justify-center gap-6">
        <h1 className="text-3xl sm:text-5xl text-center overflow-hidden">
          Cost of Attendance
        </h1>
        <p className="text-center">
          Resources to help determine your budget as you prepare to attend The
          University of Delphis in the coming academic year.
        </p>
        <div className="w-full max-w-[400px] justify-center items-center flex m-auto">
          <LinkButtonAlt
            classes="w-full text-center"
            name="Cost of Attendance Info"
            link="/cost-info"
          />
        </div>
      </div>
      <ImageNextToParagraphMoreInfo
        reverse={false}
        bgColor="vgskyblue"
        textColor="white"
        classes={{ marginTop: "0" }}
        imageLink={distanceImage}
        text={`Delphis University is committed to improving the world today and for future generations through outstanding education. Delphis Online brings access to our professors, programs and courses to a range of people around the world, including career changers, life-long learners, educators, and high school and college students.
          `}
        title="Distance Education"
        buttonComponent={
          <div className="w-full max-w-[400px] justify-center items-center flex gap-4 m-auto">
            <LinkButtonTransparent
              width="100%"
              name="Delphis Online"
              link="/delphis-online"
            />
          </div>
        }
      />

      <Footer />
    </>
  );
};

export default AdmissionsPage;
