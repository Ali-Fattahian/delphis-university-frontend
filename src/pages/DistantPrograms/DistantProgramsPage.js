import React, { useState } from "react";
import ChevronDownIcon from "@heroicons/react/24/outline/ChevronDownIcon";
import ArrowPathIcon from "@heroicons/react/24/outline/ArrowPathIcon";
import AcademicCatalogPrograms from "../AcademicCatalog/AcademicCatalog.Programs";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import DistantProgramPageType from "./DistantProgramPage.Type";
import DistantProgramPageInterests from "./DistantProgramPage.Interests";
import DistantProgramPageFormat from "./DistantProgramPage.Format";
import TextOnImage from "../../components/layout/TextOnImage";

const headerImage = require("../../assets/images/distant programs - header.jpeg");
const image = require("../../assets/images/programs-sample.jpeg");

const DistantProgramsPage = () => {
  useDocumentTitle("Programs - Distant Degrees");

  const defaultPrograms = [
    {
      key: 1,
      title: "Accounting, BS",
      image: image,
      link: "/",
    },
    {
      key: 2,
      title: "Accounting, BS",
      image: image,
      link: "/",
    },
    {
      key: 3,
      title: "Accounting, BS",
      image: image,
      link: "/",
    },
    {
      key: 4,
      title: "Accounting, BS",
      image: image,
      link: "/",
    },
    {
      key: 5,
      title: "Accounting, BS",
      image: image,
      link: "/",
    },
    {
      key: 6,
      title: "Accounting, BS",
      image: image,
      link: "/",
    },
    {
      key: 7,
      title: "Accounting, BS",
      image: image,
      link: "/",
    },
    {
      key: 8,
      title: "Accounting, BS",
      image: image,
      link: "/",
    },
  ];

  const [programs, setPrograms] = useState(defaultPrograms);
  const [interests, setInterests] = useState("");
  const [programFormat, setProgramFormat] = useState("");
  const [programType, setProgramType] = useState("");

  return (
    <>
      <Navbar />
      <TextOnImage title="Degree Program Listing" imageURL={headerImage} />
      <div className="w-full mt-[24px]">
        <div className="w-full bg-neutral-100 p-3">
          <p className="text-neutral-700 text-base">Find Your Program</p>
        </div>
        <div className="grid grid-cols-1 w-full p-2 max-w-[1200px] m-auto md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr] md:gap-2">
          <div className="w-full max-w-[1200px] mx-auto px-4">
            <div className="grid divide-y divide-neutral-200 mx-auto">
              <div className="pb-5 pt-4">
                <details className="group">
                  <summary className="flex justify-between items-center bg-neutral-200 p-3 font-medium cursor-pointer list-none">
                    <span className="text-sm">Options</span>
                    <span className="transition group-open:rotate-180">
                      <ChevronDownIcon height={16} width={16} />
                    </span>
                  </summary>
                  <div className="mt-3 group-open:animate-fadeIn w-full">
                    <div className="w-full bg-neutral-100 text-neutral-600 flex gap-2 items-center p-2 cursor-pointer">
                      <ArrowPathIcon width={16} height={16} />
                      <p className="text-sm">Reset</p>
                    </div>
                    <DistantProgramPageType setProgramType={setProgramType} />
                    <DistantProgramPageInterests setInterests={setInterests} />
                    <DistantProgramPageFormat
                      setProgramFormat={setProgramFormat}
                    />
                  </div>
                </details>
              </div>
            </div>
          </div>
          <div>
            <AcademicCatalogPrograms programs={programs} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DistantProgramsPage;
