import React, { useState } from "react";

const headerImage = require("../../assets/images/catalog general - header.jpeg");

const CatalogGeneralInfoHeader = () => {
  const [search, setSearch] = useState("");

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
          <p className="text-white tracking-wide text-xl">
            2023 - 2024 Academic Catalog
          </p>
        </div>
      </div>
      <img
        src={headerImage}
        alt="Catalog"
        className="w-full object-cover max-h-[92vh]"
      />
      <form
        method="post"
        className="absolute p-4 left-0 right-0 
      bottom-0 min-[400px]:bottom-[20%] sm:bottom-[30%]  md:bottom-[40%] lg:bottom-[50%] w-full max-w-[540px] m-auto bg-transparent backdrop-blur-sm"
      >
        <div className="w-full">
          <label
            className="block mb-1 font-semibold text-sm text-white"
            htmlFor="search-programs"
          >
            Search Programs
          </label>
          <div className="flex">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full text-slate-800 px-3 py-1 text-sm font-bold outline-none focus-within:bg-slate-100 rounded-l-sm"
              type="text"
              id="search-programs"
              placeholder="Search..."
            />
            <button
              type="submit"
              className="py-2 px-5 transition-opacity  rounded-r-sm opacity-80  text-sm font-semibold text-white hover:opacity-100 duration-300 bg-vggreen"
            >
              Find
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CatalogGeneralInfoHeader;
