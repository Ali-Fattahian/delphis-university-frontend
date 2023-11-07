import React from "react";
import Navbar from "../../components/layout/Navbar";
import CardsNoBorderContainer from "../../components/layout/CardsNoBorderContainer";
import FacultyPageServices from "./FacultyPage.Services";
import FacultyPageGovernance from "./FacultyPage.Governance";
import LinkButtonWithIcon from "../../components/utilities/LinkButtonWithIcon";
import ShieldExclamationIcon from "@heroicons/react/24/outline/ShieldExclamationIcon";
import BellAlertIcon from "@heroicons/react/24/outline/BellAlertIcon";
import BuildingOffice2Icon from "@heroicons/react/24/outline/BuildingOffice2Icon";
import Footer from "../../components/layout/Footer";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const imageURL = require("../../assets/images/apply.jpeg");
const imageURL2 = require("../../assets/images/pexels-suzy-hazelwood-1887609.jpeg");

const FacultyPage = () => {
  useDocumentTitle("Faculty & Staff");

  const cardsArr = [
    {
      key: 1,
      imageURL: imageURL2,
      title: "Human Resources",
      text: "Access information on compensation, benefits and professional development.",
    },
    {
      key: 2,
      imageURL: imageURL2,
      title: "Directory",
      text: "Find contact information for current faculty, staff and students.",
    },
    {
      key: 3,
      imageURL: imageURL2,
      title: "Handbooks and Policies",
      text: "Information for faculty and staff on UA policies and employee procedures.",
    },
  ];

  const buttonsClasses =
    "text-sm font-bold hover:text-vgred hover:bg-slate-50 w-full";

  return (
    <>
      <Navbar />
      <div className="relative w-full">
        <img src={imageURL} alt="Faculty & Staff" />
        <div className="absolute w-full h-full top-0 left-0 bg-[#00000038]"></div>
        <div className="w-full absolute left-0 bottom-0 flex flex-col gap-6 p-6 sm:w-3/4">
          <h1 className="text-neutral-300 font-bold text-4xl sm:text-5xl overflow-hidden">
            FACULTY AND STAFF
          </h1>
          <p className="text-neutral-300 font-bold">
            Resources and information for navigating your career at the
            Capstone.
          </p>
        </div>
      </div>
      <CardsNoBorderContainer
        cardsArr={cardsArr}
        bgColor={"white"}
        title={"EMPLOYEE RESOURCES"}
        text={"Commonly used employee tools and guides."}
      />
      <FacultyPageServices />
      <FacultyPageGovernance />
      <div className="p-6 my-10">
        <h1 className="text-3xl sm:text-5xl mb-6 text-center overflow-hidden">
          Campus Safety
        </h1>
        <p className="text-center mb-6">
          Safety on campus and in the workplace is a priority, and UA is
          committed to providing a safe environment for all members of our
          community.
        </p>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-4 justify-center">
          <LinkButtonWithIcon
            color="vggreen"
            name="University Police"
            link="/"
            classes={buttonsClasses}
            icon={<ShieldExclamationIcon className="w-5" />}
          />
          <LinkButtonWithIcon
            color="vggreen"
            name="Office of Emergency Management"
            link="/"
            classes={buttonsClasses}
            icon={<BellAlertIcon className="w-5" />}
          />
          <LinkButtonWithIcon
            color="vggreen"
            name="Environmental Health and Safety"
            link="/"
            classes={buttonsClasses}
            icon={<BuildingOffice2Icon className="w-5" />}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FacultyPage;
