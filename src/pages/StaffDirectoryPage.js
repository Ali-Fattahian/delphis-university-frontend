import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BuildingLibraryIcon from "@heroicons/react/24/outline/BuildingLibraryIcon";
import BuildingOfficeIcon from "@heroicons/react/24/outline/BuildingOfficeIcon";
import EnvelopeIcon from "@heroicons/react/24/outline/EnvelopeIcon";
import ArrowLeftIcon from "@heroicons/react/24/outline/ArrowLeftIcon";
import ArrowRightIcon from "@heroicons/react/24/outline/ArrowRightIcon";
import useDocumentTitle from "../hooks/useDocumentTitle";

const tempSearchResults = [
  {
    key: 1,
    title: "24-hour Emergency Line",
    department: "Security Office",
    room: "SU103",
    email: "aaliyah.shaikh.4@ud.edu",
  },
  {
    key: 2,
    title: "24-hour Emergency Line",
    department: "Security Office",
    room: "SU103",
    email: "aaliyah.shaikh.4@ud.edu",
  },
  {
    key: 3,
    title: "24-hour Emergency Line",
    department: "Security Office",
    room: "SU103",
    email: "aaliyah.shaikh.4@ud.edu",
  },
  {
    key: 4,
    title: "24-hour Emergency Line",
    department: "Security Office",
    room: "SU103",
    email: "aaliyah.shaikh.4@ud.edu",
  },
];

const StaffDirectoryPage = () => {
  useDocumentTitle("Staff Directory");
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState(tempSearchResults);

  //   const getListings = () => {
  //     null; // Send async request with search value, setSearchResults
  //   };

  return (
    <>
      <Navbar />
      <div className="w-full bg-neutral-100 p-2 mt-[36px] min-[720px]:mt-0">
        <div className="w-full max-w-[1000px] m-auto">
          <h1 className="text-2xl font-bold text-center mt-6">
            Staff Directory
          </h1>
          <form
            method="POST"
            className="mt-8 w-full pb-6 border-neutral-200 border-b-[1px] flex justify-center"
          >
            <input
              type="search"
              placeholder="Search listings"
              value={search}
              className="text-sm w-full px-3 py-1 border-[1px] max-w-[800px] mx-auto outline-none shadow-sm rounded-sm"
              onChange={(e) => {
                setSearch(e.target.value);
                // getListings();
              }}
            />
          </form>
          <div className="my-6 flex flex-col gap-4 justify-center">
            {searchResults.map((r) => (
              <div
                key={r.key}
                className="flex gap-3 flex-col w-11/12 sm:w-9/12 max-w-[600px] p-3 bg-white mx-auto shadow-sm"
              >
                <div>
                  <h2 className="text-base font-bold my-3">{r.title}</h2>
                  <div className="flex flex-row gap-2 text-xs">
                    <BuildingOfficeIcon
                      width={16}
                      height={16}
                      className="text-vgskyblue"
                    />
                    <p>Department: {r.department}</p>
                  </div>
                  <div className="flex flex-row gap-2 text-xs mt-2">
                    <BuildingLibraryIcon
                      width={16}
                      height={16}
                      className="text-vgskyblue"
                    />
                    <p>Room: {r.room}</p>
                  </div>
                  <div className="flex flex-row gap-2 text-xs mt-2">
                    <EnvelopeIcon
                      width={16}
                      height={16}
                      className="text-vgskyblue"
                    />
                    <p>Email: {r.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t-[1px] border-neutral-200 pb-2">
            <div className="flex justify-center pt-2">
              <div className="flex flex-row gap-2">
                <button className="p-2 bg-white text-neutral-600 hover:bg-neutral-100 hover:text-black transition-all border-[1px] border-neutral-300">
                  <ArrowLeftIcon width={16} height={16} />
                </button>
                <button className="p-2 bg-white text-neutral-600 hover:bg-neutral-100 hover:text-black transition-all border-[1px] border-neutral-300">
                  1
                </button>
                <button className="p-2 bg-white text-neutral-600 hover:bg-neutral-100 hover:text-black transition-all border-[1px] border-neutral-300">
                  2
                </button>
                <button className="p-2 bg-white text-neutral-600 hover:bg-neutral-100 hover:text-black transition-all border-[1px] border-neutral-300">
                  3
                </button>
                <button className="p-2 bg-white text-neutral-600 hover:bg-neutral-100 hover:text-black transition-all border-[1px] border-neutral-300">
                  <ArrowRightIcon width={16} height={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StaffDirectoryPage;
