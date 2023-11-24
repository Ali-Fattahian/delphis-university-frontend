import React from "react";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import CalendarDaysIcon from "@heroicons/react/24/outline/CalendarDaysIcon";
import CubeIcon from "@heroicons/react/24/outline/CubeIcon";
import TruckIcon from "@heroicons/react/24/outline/TruckIcon";
import HomeModernIcon from "@heroicons/react/24/outline/HomeModernIcon";
import HandRaisedIcon from "@heroicons/react/24/outline/HandRaisedIcon";

const ApplyCampusPageMoveIn = ({ setShow }) => {
  useDocumentTitle("Move-In");

  return (
    <div className="w-full max-w-[1200px] mx-auto p-2 text-sm">
      <p className="text-neutral-600">
        Once your housing assignment is made, HRC notifies you through your
        Crimson email to sign up for a Move-In time starting mid-June. We assign
        a time for students who do not sign up for a Move-In time and notify
        them through their Crimson email.
      </p>
      <p className="text-neutral-600 mt-3">
        We assign all students living on campus during the Summer II school
        session a Move-In time to transition to their fall assignment prior to
        the start of the official Move-In.
      </p>
      <div
        className="w-full max-w-[615px] cursor-pointer flex flex-col justify-center gap-2 items-center p-4 bg-white mx-auto mt-3 border-[1px] border-neutral-300 hover:shadow-md transition-all duration-300"
        onClick={() => setShow(11)}
      >
        <CalendarDaysIcon
          width={54}
          height={54}
          className="text-white bg-vgyellow rounded-full p-1"
        />
        <p className="text-base font-semibold text-vgblue">Move-In Schedule</p>
      </div>
      <div
        className="w-full max-w-[615px] cursor-pointer flex flex-col justify-center gap-2 items-center p-4 bg-white mx-auto mt-3 border-[1px] border-neutral-300 hover:shadow-md transition-all duration-300"
        onClick={() => setShow(12)}
      >
        <CubeIcon
          width={54}
          height={54}
          className="text-white bg-vgyellow rounded-full p-1"
        />
        <p className="text-base font-semibold text-vgblue">
          Packing for Move-In
        </p>
      </div>
      <div
        className="w-full max-w-[615px] cursor-pointer flex flex-col justify-center gap-2 items-center p-4 bg-white mx-auto mt-3 border-[1px] border-neutral-300 hover:shadow-md transition-all duration-300"
        onClick={() => setShow(13)}
      >
        <TruckIcon
          width={54}
          height={54}
          className="text-white bg-vgyellow rounded-full p-1"
        />
        <p className="text-base font-semibold text-vgblue">Move-In Day</p>
      </div>
      <div
        className="w-full max-w-[615px] cursor-pointer flex flex-col justify-center gap-2 items-center p-4 bg-white mx-auto mt-3 border-[1px] border-neutral-300 hover:shadow-md transition-all duration-300"
        onClick={() => setShow(14)}
      >
        <HomeModernIcon
          width={54}
          height={54}
          className="text-white bg-vgyellow rounded-full p-1"
        />
        <p className="text-base font-semibold text-vgblue">Room Setup</p>
      </div>
      <div
        className="w-full max-w-[615px] cursor-pointer flex flex-col justify-center gap-2 items-center p-4 bg-white mx-auto mt-3 border-[1px] border-neutral-300 hover:shadow-md transition-all duration-300"
        onClick={() => setShow(15)}
      >
        <HandRaisedIcon
          width={54}
          height={54}
          className="text-white bg-vgyellow rounded-full p-1"
        />
        <p className="text-base font-semibold text-vgblue">
          Move-In Volunteer to Help
        </p>
      </div>
    </div>
  );
};

export default ApplyCampusPageMoveIn;
