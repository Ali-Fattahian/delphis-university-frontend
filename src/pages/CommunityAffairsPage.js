import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Slider from "../components/utilities/Slider";
import MapPinIcon from "@heroicons/react/24/outline/MapPinIcon";
import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon";
import PhoneIcon from "@heroicons/react/24/outline/MapPinIcon";
import EnvelopeIcon from "@heroicons/react/24/outline/EnvelopeIcon";

const headerImage = require("../assets/images/community affairs - header.jpeg");
const vicePresidentImage = require("../assets/images/community affairs - vice president.jpeg");
const sampleImage = require("../assets/images/Tour - eating.jpeg");

const news = [
  {
    key: 1,
    title: "BLAST Academy Helps K–8 Students Build Confidence and Knowledge",
    date: "September 5, 2023",
    id: 1,
    imageURL: sampleImage,
  },
  {
    key: 2,
    title: "BLAST Academy Helps K–8 Students Build Confidence and Knowledge",
    date: "September 5, 2023",
    id: 2,
    imageURL: sampleImage,
  },
  {
    key: 3,
    title: "BLAST Academy Helps K–8 Students Build Confidence and Knowledge",
    date: "September 5, 2023",
    id: 3,
    imageURL: sampleImage,
  },
  {
    key: 4,
    title: "BLAST Academy Helps K–8 Students Build Confidence and Knowledge",
    date: "September 5, 2023",
    id: 4,
    imageURL: sampleImage,
  },
  {
    key: 5,
    title: "BLAST Academy Helps K–8 Students Build Confidence and Knowledge",
    date: "September 5, 2023",
    id: 5,
    imageURL: sampleImage,
  },
  {
    key: 6,
    title: "BLAST Academy Helps K–8 Students Build Confidence and Knowledge",
    date: "September 5, 2023",
    id: 6,
    imageURL: sampleImage,
  },
];

const CommunityAffairsPage = () => {
  useDocumentTitle("Division of Community Affairs");

  return (
    <>
      <Navbar />
      <div className="w-full mt-9 min-[720px]:mt-0 bg-neutral-100 p-2">
        <div className="w-full max-w-[732px] m-auto px-2">
          <h3 className="text-3xl font-semibold text-slate-800 my-4">
            Division of Community Affairs
          </h3>
          <img
            className="object-cover w-full max-h-[15rem]"
            src={headerImage}
            alt="Community Affairs"
          />
          <h4 className="text-xl font-bold text-vgblue mt-8 mb-4">
            Community Affairs News
          </h4>
          <div className="w-full [&>div]:mx-4">
            <Slider elements={news} />
          </div>
          <div className="bg-white mt-10 border-[1px] shadow-sm text-neutral-700 w-full flex flex-col gap-10 text-center justify-center p-8">
            <div>
              <h5 className="text-base font-semibold">Excellence</h5>
              <p className="text-sm font-light">
                Since 2006, the Council on Community-Based Partnerships has been
                recognizing innovation in community engagement at the
                <span className="ml-1 font-bold">
                  Annual Excellence in Community Engagement Awards.
                </span>
              </p>
            </div>
            <div>
              <h5 className="text-base font-semibold">Innovation</h5>
              <p className="text-sm font-light">
                The
                <span className="mx-1 font-bold">
                  Student Community Engagement Center houses student
                  organizations from all UD colleges and schools
                </span>
                that have demonstrated an interest in connecting their efforts
                to community engagement.
              </p>
            </div>
            <div>
              <h5 className="text-base font-semibold">Expertise</h5>
              <p className="text-sm font-light">
                Dr. Joe T. Oliver has been named
                <span className="ml-1 font-bold">
                  president of the Board of Directors for the Engagement
                  Scholarship Consortium
                </span>
                , an international group of universities that promote engaged
                scholarship.
              </p>
            </div>
          </div>
          <div className="w-full mt-8 border-[1px] border-neutral-400 shadow-sm bg-neutral-300 text-neutral-700 flex flex-col items-center gap-6 justify-center p-8">
            <img
              src={vicePresidentImage}
              className="max-w-[250px] aspect-square rounded-full"
              alt="Vice President"
            />
            <h5 className="text-base font-bold">
              A Message from the Vice President
            </h5>
            <p className="text-sm font-light">
              This message is intended for our friends and partners both on and
              off campus. We hope you will visit the site often, for it is our
              most important communication tool in our dual role as UD’s leader
              in engaged scholarship and intercultural relations.
            </p>
            <p className="text-xs font-light -translate-y-2">
              While the terms “scholarship of engagement” or “engaged
              scholarship” — the terms are interchangeable — has been around for
              years, they may not be familiar to everyone. First used by Ernest
              Boyer in a 1996 article published in the Journal of Higher
              Education Outreach and Engagement, Boyer sought nothing less than
              to redefine the role of higher education. He advocated a move away
              from scholarship as the “application of academic expertise” to a
              scholarship that creates partnerships between higher education and
              communities. He further argued that engaged scholarship integrates
              the often-conflicting faculty roles of teaching, research and
              service, seeing them instead as different aspects of a common
              purpose. Since Boyer, engaged scholarship has come to mean
              collaboration between knowledge professionals on campuses and the
              lay public for mutual benefit.
            </p>
          </div>
          <div className="w-full mt-8 bg-white border-[1px] shadow-sm flex flex-col gap-5 p-6 text-neutral-700">
            <h3 className="text-xl font-bold">Community Affairs</h3>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center">
                <MapPinIcon width={16} height={16} className="text-vgred" />
                <p className="text-xs">250 Shelton Administration</p>
              </div>
              <div className="flex gap-1 items-center">
                <InboxArrowDownIcon
                  width={16}
                  height={16}
                  className="text-vgred"
                />
                <p className="text-xs">Box 245113</p>
              </div>
              <div className="flex gap-1 items-center">
                <PhoneIcon width={16} height={16} className="text-vgred" />
                <p className="text-xs">(219) 372-5152</p>
              </div>
              <div className="flex gap-1 items-center">
                <EnvelopeIcon width={16} height={16} className="text-vgred" />
                <p className="text-xs">community.affairs@ud.edu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CommunityAffairsPage;
