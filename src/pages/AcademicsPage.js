import React from "react";
import Navbar from "../components/layout/Navbar";
import useDocumentTitle from "../hooks/useDocumentTitle";

const AcademicsPage = () => {
  useDocumentTitle("Academics");

  const imageURL = require("../assets/images/Hometown.jpeg");

  return (
    <>
      <Navbar />
      <div className="relative w-full">
        <img src={imageURL} alt="Admissions" />
        <div className="absolute w-full h-full top-0 left-0 bg-[#00000038]"></div>
        <div className="w-full absolute left-0 bottom-0 flex flex-col gap-6 p-6 sm:w-3/4">
          <h1 className="text-white font-bold text-4xl sm:text-5xl overflow-hidden">
            Academics
          </h1>
          <p className="text-white font-bold">
            At The University of Alabama, you will be surrounded by expert
            mentors and dedicated faculty as you pursue your interests and forge
            your legend through hands-on research and learning.
          </p>
        </div>
      </div>
    </>
  );
};

export default AcademicsPage;
