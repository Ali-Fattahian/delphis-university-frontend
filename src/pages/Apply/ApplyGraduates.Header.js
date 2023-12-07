import React from "react";

const headerImage = require("../../assets/images/apply graduates - header.jpeg");

const ApplyGraduatesHeader = () => {
  return (
    <div className="mt-[36px] min-[720px]:mt-0 w-full relative">
      <div className="absolute top-0 left-0 bg-[#00000038] w-full">
        <div className="p-3 bg-vgblue block sm:hidden">
          <div className="flex flex-col">
            <span className="text-white tracking-[.5px] text-sm">
              The University of
            </span>
            <span className="text-2xl tracking-[7.5px] text-wide font-semibold text-white">
              Delphis
            </span>
          </div>
        </div>
        <div className="w-full max-w-[1200px] m-auto flex justify-between items-center px-3 py-2">
          <div className="hidden sm:flex sm:flex-col">
            <span className="text-white tracking-[.5px] text-sm">
              The University of
            </span>
            <span className="text-2xl tracking-[7.5px] font-semibold text-white">
              Delphis
            </span>
          </div>
          <p className="text-white tracking-wide text-xl">Graduate School</p>
        </div>
      </div>
      <img
        src={headerImage}
        alt="Catalog"
        className="w-full object-cover max-h-[92vh]"
      />
      <div
        className="text-xl absolute text-center font-semibold text-white p-4 left-0 right-0 
    bottom-0 min-[400px]:bottom-[20%] sm:bottom-[30%]  md:bottom-[40%] lg:bottom-[50%] max-w-[540px] m-auto bg-transparent backdrop-blur-sm"
      >
        <p>The Future is Yours.</p>
        <p>The Place is Delphis.</p>
      </div>
    </div>
  );
};

export default ApplyGraduatesHeader;
