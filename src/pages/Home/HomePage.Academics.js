import React from "react";
import LinkButtonAlt from "../../components/utilities/LinkButtonAlt";

const ImageURL = require("../../assets/images/pexels-artem-podrez-5715850.jpeg");

const HomePageAcademics = () => {
  return (
    <div className="p-6 flex flex-col gap-6 mt-10">
      <h1 className="text-4xl cursor-pointer overflow-y-hidden text-center m-4">
        ACADEMICS
      </h1>
      <p className="m-4 text-center">
        Research Project Advancing Tools To Remotely Monitor Water Quality
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="flex flex-col gap-4">
          <img
            className="object-cover max-h-[400px] aspect-square"
            src={ImageURL}
            alt="Alternative text"
          />
          <p className="text-vgyellow">Undergraduates</p>
          <p className="text-sm text-slate-800">
            Research Project Advancing Tools To Remotely Monitor Water Quality
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <img
            className="object-cover max-h-[400px] aspect-square"
            src={ImageURL}
            alt="Alternative text"
          />
          <p className="text-vgyellow">Undergraduates</p>
          <p className="text-sm text-slate-800">
            Research Project Advancing Tools To Remotely Monitor Water Quality
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <img
            className="object-cover max-h-[400px] aspect-square"
            src={ImageURL}
            alt="Alternative text"
          />
          <p className="text-vgyellow">Undergraduates</p>
          <p className="text-sm text-slate-800">
            Research Project Advancing Tools To Remotely Monitor Water Quality
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3 text-center justify-center items-center min-[620px]:flex-row mt-12">
        <LinkButtonAlt
          name="FIND COURSES AND PROGRAMS"
          classes="w-[279px]"
          link="/"
        />
        <LinkButtonAlt name="ACADEMIC CALENDER" link="/" classes="w-[279px]" />
      </div>
    </div>
  );
};

export default HomePageAcademics;
