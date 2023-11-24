import React from "react";
import useDocumentTitle from "./../../../hooks/useDocumentTitle";

const headerImage = require("../../../assets/images/apply campus - header.jpeg");

const ApplyCampusPageHeader = () => {
  useDocumentTitle("Apply for Campus");

  return (
    <div className="mt-[36px] min-[720px]:mt-0 w-full relative">
      <div className="absolute top-0 left-0 bg-[#00000038] w-full">
        <div className="p-3 bg-vgblue block sm:hidden">
          <div className="flex flex-col">
            <span className="text-white tracking-[.5px] text-sm">
              THE UNIVERSITY OF
            </span>
            <span className="text-2xl tracking-[7.5px] text-wide font-semibold text-white">
              DELPHIS
            </span>
          </div>
        </div>
        <div className="w-full max-w-[1200px] m-auto flex justify-between items-center px-3 py-2">
          <div className="hidden sm:flex sm:flex-col">
            <span className="text-white tracking-[.5px] text-sm">
              THE UNIVERSITY OF
            </span>
            <span className="text-2xl tracking-[7.5px] font-semibold text-white">
              DELPHIS
            </span>
          </div>
          <p className="text-white tracking-wide text-xl">Apply for Campus</p>
        </div>
      </div>
      <img
        src={headerImage}
        alt="Apply Campus"
        className="w-full object-cover max-h-[92vh]"
      />
    </div>
  );
};

export default ApplyCampusPageHeader;
