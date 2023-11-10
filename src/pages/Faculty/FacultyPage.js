import React from "react";
import Navbar from "../../components/layout/Navbar";
import CardsNoBorderContainer from "../../components/layout/CardsNoBorderContainer";
import FacultyPageServices from "./FacultyPage.Services";
import FacultyPageGovernance from "./FacultyPage.Governance";
import ShieldExclamationIcon from "@heroicons/react/24/outline/ShieldExclamationIcon";
import BellAlertIcon from "@heroicons/react/24/outline/BellAlertIcon";
import BuildingOffice2Icon from "@heroicons/react/24/outline/BuildingOffice2Icon";
import Footer from "../../components/layout/Footer";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import TextOnImage from "../../components/layout/TextOnImage";
import ExtraInfoButton from "../../components/utilities/ExtraInfoButton";

const facultyAndStaffImage = require("../../assets/images/faculty & staff.jpeg");
const HRImage = require("../../assets/images/faculty & staff - HR.jpeg");
const directoryImage = require("../../assets/images/faculty & staff - directory.jpeg");
const policiesImage = require("../../assets/images/faculty & staff - policies.jpeg");

const FacultyPage = () => {
  useDocumentTitle("Faculty & Staff");

  const cardsArr = [
    {
      key: 1,
      imageURL: HRImage,
      title: "Human Resources",
      text: "Access information on compensation, benefits and professional development.",
    },
    {
      key: 2,
      imageURL: directoryImage,
      title: "Directory",
      text: "Find contact information for current faculty, staff and students.",
    },
    {
      key: 3,
      imageURL: policiesImage,
      title: "Handbooks and Policies",
      text: "Information for faculty and staff on UA policies and employee procedures.",
    },
  ];

  const buttonsClasses =
    "text-sm font-bold hover:text-vgred hover:bg-slate-50 w-full";

  return (
    <>
      <Navbar />
      <TextOnImage
        title="FACULTY AND STAFF"
        text={`Resources and information for navigating your career at the
            Capstone.`}
        imageURL={facultyAndStaffImage}
      />
      <CardsNoBorderContainer
        cardsArr={cardsArr}
        bgColor={"white"}
        title={"EMPLOYEE RESOURCES"}
        classes={"mt-8"}
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
        <div className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-4 justify-center max-w-[1600px] m-auto">
          <ExtraInfoButton
            color="vggreen"
            name="University Police"
            text={`The Delphis University Police Department is committed to
             a comprehensive approach in providing a safe and inclusive
              community where students, faculty, staff and visitors may 
              experience a sense of security and belonging. The UPD is
               comprised of professionally trained police officers,
                security officers, communications officers, and support
                 staff. The primary concern of the department is to
                  protect and assist the campus community.`}
            classes={buttonsClasses}
            icon={<ShieldExclamationIcon className="w-5" />}
          />
          <ExtraInfoButton
            color="vggreen"
            name="Office of Emergency Management"
            text={`The University of Delphis Office of Emergency Management
             (OEM) works collaboratively to plan and prepare the campus
              for emergencies, educate about preparedness, and coordinate
               response and recovery.`}
            classes={buttonsClasses}
            icon={<BellAlertIcon className="w-5" />}
          />
          <ExtraInfoButton
            color="vggreen"
            name="Environmental Health and Safety"
            text={`Environmental Health & Safety (EHS), a part of Compliance
             and Risk Services, at The University of Delphis (University)
              ensures the safety of all stakeholders: faculty, staff,students,
               alumni and visitors. EHS is responsible for the assessment,
                development, implementation and review of strategies,
                 policies and programs dedicated to safety. EHS focuses
                  on risk avoidance measures, internal safety and environmental
                   assessment systems.  EHS ensures compliance with University
                    policies, regulatory requirements (local, state and federal)
                     and best practices.`}
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
