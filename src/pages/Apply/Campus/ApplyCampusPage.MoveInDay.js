import React from "react";
import useDocumentTitle from "../../../hooks/useDocumentTitle";

const ApplyCampusPageMoveInDay = () => {
  useDocumentTitle("Move-In Day");

  return (
    <div className="w-full max-w-[1200px] mx-auto p-2 text-xs">
      <h2 className="text-neutral-800 font-semibold border-spacing-1 mt-3 border-b-[1px] border-vgyellow text-base">
        What to Expect
      </h2>
      <ul className="mt-1 list-disc list-inside [&>li]:my-1 px-2">
        <li>
          Arrive at your building at your scheduled Move-In time and date.
          Scheduling is set up to prevent traffic jams and long elevator waits.
          If you arrive outside of your scheduled time, our staff will direct
          you to a waiting area.
        </li>
        <li>
          Upon arrival, you will receive a washable mark on the driver's side of
          the front windshield of your vehicle(s) (max. 2 vehicles/ resident, no
          moving trucks or trailers) which gives you access to the unloading
          zone.
        </li>
        <li>
          When you pull into the loading zone, our staff will unload your
          vehicle into carts and then meet you at your room to unload all
          belongings (except in Bryce Lawn and Highlands). Label your belongings
          with your last name and room number for extra security. In Ridgecrest
          South, designate North or South Tower. In Burke, designate East or
          West.
          <span className="mx-1 font-semibold">
            Please note, you do not have to have HRC staff or volunteers unload
            all of your items. If you have belongings that you do not want HRC
            staff/volunteers to unload, please tell staff when you first arrive
            and carry those items or place them in a cart by yourself.
          </span>
        </li>
        <li>
          While our staff is unloading the vehicle, the resident will start the
          check-in process to receive their keys. Action Card and CWID are
          required to complete check-in. The resident or one party member must
          accompany the belongings to the room.
        </li>
        <li>
          Once your vehicles are unloaded, our staff will direct you to park all
          vehicles in the designated parking area. Residents who arrive alone
          will be provided temporary parking accommodations to allow them to
          unload belongings before parking. Depending on proximity to the
          building, shuttles are provided to bring you back to the building.
        </li>
        <li>Meet up at the resident's room and let the unpacking begin!</li>
      </ul>
      <p className="text-neutral-600 text-base mt-3">Tips:</p>
      <ul className="list-disc list-inside [&>li]:my-1 px-2">
        <li>
          Due to limited space in elevators, over-sized items (42″ W x 24″ D x
          72″ H or greater) are not allowed during scheduled Move-In hours. You
          can unload these items into the building's monitored storage area and
          move them in after scheduled Move-In hours that day. Staff will
          provide further instructions for these types of items during
          unloading.
        </li>
        <li>
          Pack belongings into easily transportable containers (suitcases,
          moving boxes, etc.).
        </li>
        <li>
          Our staff transport carts to and from rooms and empty them, but do not
          assist with unpacking, arranging furnishings, etc.
        </li>
        <li>Wear comfortable clothing and closed-toe shoes!</li>
      </ul>
    </div>
  );
};

export default ApplyCampusPageMoveInDay;
