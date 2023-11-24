import React from "react";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import UserGroupIcon from "@heroicons/react/24/outline/UserGroupIcon";

const ApplyCampusPageRoommates = ({ setShow }) => {
  useDocumentTitle("Roommates");

  return (
    <div className="w-full max-w-[1200px] mx-auto p-2 text-sm">
      <p className="text-neutral-600 mt-3">
        My College Roomie (MCR) is a tool to help incoming residents make
        friends and find a compatible roommate, so they can expect a great
        first-year college experience. Incoming freshmen can select one
        roommate, if they choose. Students who do not select a roommate will
        still have one or more through either staff assignment or room
        selection.
      </p>
      <p className="text-neutral-600 mt-3">
        Within MCR, students can create a profile; complete a compatibility
        questionnaire; view potential roommate matches; and reach out to
        communicate with matches. MCR is a tool for students; HRC staff do not
        use profiles or questionnaires to match students when making room
        assignments. Admitted students who have completed their housing
        applications have access to MCR beginning Friday, December 1. More
        information regarding MCR will be emailed to students with a housing
        application later this fall. Incoming freshmen can form a roommate pair
        with one other person, for a total of two people in their pair.
      </p>
      <p className="text-neutral-600 mt-3">
        <span className="font-semibold mx-1">
          If students find a roommate and want to form a roommate pair, they
          will do so in their myHousing portal (not MCR).
        </span>{" "}
        To create a roommate pair, students will go to the portal; click on
        myRoomie; click on “Go to the Roommate Group Section;” click on “Create
        Group,” and click on “Invite,” entering their intended roommate's first
        and last name.
        <span className="font-semibold mx-1">
          Admitted freshmen have until 8am Central on Monday, May 6 to complete
          a roommate pair.
        </span>
      </p>
      <div className="w-full max-w-[615px] flex flex-col gap-2 items-center sm:flex-row sm:justify-between sm:items-start p-4 bg-white mx-auto mt-3 border-[1px] border-neutral-300">
        <UserGroupIcon
          width={54}
          height={54}
          className="text-white bg-vgyellow rounded-full p-1"
        />
        <div>
          <a
            className="text-base underline underline-offset-1 font-semibold cursor-pointer"
            href="/"
          >
            Roommate Pairs
          </a>
          <p className="text-xs mt-3">
            Find out more about how to form roommate pairs and accept roommate
            requests.
          </p>
        </div>
      </div>
      <p className="w-full max-w-[615px] mx-auto text-xs mt-3 bg-vgskyblue bg-opacity-50 p-3 border-l-2 border-vgblue border-opacity-50">
        A confirmed roommate pair created in the myHousing portal will identify
        the student who initiated the group as the “leader,” however, this isn't
        relevant for online room selection. In online room selection, either
        student in the roommate pair can select a room online, dependent on
        their individual room selection date/time.
      </p>
      <p className="mt-3">
        Participating in online room selection does not guarantee your choice of
        a specific residence hall, room type or roommate. For students who
        applied for housing after Feb. 1, HRC staff consider building
        preferences as listed on the application and prioritize assigning
        roommates together, as space permits. However, we cannot guarantee any
        building, room type or roommate.
      </p>
      <button
        className="cursor-pointer underline text-vggreen mt-3 text-xs"
        onClick={() => setShow(9)}
      >
        Learn more about trying to fill a 4-person suite with 2 roommate pairs.
      </button>
    </div>
  );
};

export default ApplyCampusPageRoommates;
