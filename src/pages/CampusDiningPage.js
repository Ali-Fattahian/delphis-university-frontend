import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BuildingLibraryIcon from "@heroicons/react/24/outline/BuildingLibraryIcon";
import CreditCardIcon from "@heroicons/react/24/outline/CreditCardIcon";
import ClockIcon from "@heroicons/react/24/outline/ClockIcon";

const headerImage = require("../assets/images/campus dining - header.jpeg");

const diningOptions = [
  {
    key: 1,
    name: "Burge Market Place",
    location: "Burge Residence Hall",
    openHour: "12:00am",
  },
  {
    key: 2,
    name: "Catlett Market Place",
    location: "Catlett Residence Hall",
    openHour: "12:00am",
  },
  {
    key: 3,
    name: "Hillcrest Market Place",
    location: "Hillcrest Residence Hall",
    openHour: "11:30pm",
  },
];

const CampusDiningPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full mt-9 min-[720px]:mt-0 bg-neutral-100 p-2">
        <div className="w-full max-w-[900px] m-auto px-2">
          <h3 className="text-3xl font-semibold text-slate-800 my-4">
            Locations all across campus for a wealth of dining options
          </h3>
          <img
            className="object-cover w-full max-h-[15rem]"
            src={headerImage}
            alt="Campus Dining"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {diningOptions.map((o) => (
              <div
                key={o.key}
                className="rounded-sm w-full max-w-[284px] mx-auto"
              >
                <h4 className="text-sm font-bold bg-vgblue p-2 text-center text-white">
                  {o.name}
                </h4>
                <div className="flex flex-col gap-3 text-xs shadow-sm bg-white p-3">
                  <div className="flex gap-2">
                    <BuildingLibraryIcon
                      className="text-neutral-600 inline-block"
                      height={16}
                      width={16}
                    />
                    <p className="text-neutral-700 inline-block">
                      {o.location}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <CreditCardIcon
                      className="text-neutral-600 inline-block"
                      height={16}
                      width={16}
                    />
                    <p className="ml-1 text-neutral-700 inline-block">
                      Flex swipes are accepted here.
                    </p>
                  </div>
                  <div className="flex gap-2 overflow-visible">
                    <ClockIcon
                      className="text-neutral-600 inline-block"
                      height={16}
                      width={16}
                    />
                    <p className="text-neutral-700 inline-block overflow-visible">
                      <span className="text-white p-1 rounded-sm bg-vggreen mr-1 font-semibold">
                        Open
                      </span>
                      until {o.openHour}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h4 className="text-xl font-semibold mt-10">Special notes</h4>
          <p className="mt-6 text-xs">
            <span className="font-bold">Please note</span>: not all dining
            locations will be open during fall break (Nov. 18-26). Market places
            close at 2 p.m. on Friday, Nov. 17. All dining locations are closed
            Thursday, Nov. 23 through Saturday, Nov. 26.
          </p>
          <ul className="mt-3 list-inside list-disc [&>li]:py-1 text-xs pb-4">
            <li>
              Union Station will be open 8 a.m. to 3 p.m., Monday, Nov. 20
              through Wednesday, Nov. 22.
            </li>
            <li>
              Power Café will open at 10 a.m. closing at 8 p.m. Saturday, Nov.
              18 through Tuesday, Nov. 21. and Sunday, Nov. 26, closing at 4
              p.m. on Wednesday, Nov. 22.
            </li>
            <li>
              The Filling Station in the Dental Science Building will be open
              from 7 a.m. to 3 p.m., Monday, Nov. 20 through Wednesday, Nov. 22.
            </li>
            <li>
              The EMRB Café in the Eckstein Medical Research Building will be
              open from 7:30 a.m. to 4 p.m., Monday, Nov. 20 through Wednesday,
              Nov. 22.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CampusDiningPage;
