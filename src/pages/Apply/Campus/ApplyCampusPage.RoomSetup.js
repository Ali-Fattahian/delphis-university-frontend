import React from "react";
import useDocumentTitle from "../../../hooks/useDocumentTitle";

const ApplyCampusPageRoomSetup = () => {
  useDocumentTitle("Room Setup");

  return (
    <div className="w-full max-w-[1200px] mx-auto p-2 text-xs">
      <h2 className="text-neutral-800 font-semibold border-spacing-1 mt-3 border-b-[1px] border-vgyellow text-base">
        Hangin Items on Walls
      </h2>
      <p className="text-neutral-600 text-sm mt-2">
        When hanging items on the walls, please use the method listed for your
        building in order to avoid potential damage charges.
      </p>
      <ul className="list-disc list-inside [&>li]:my-1 p-2">
        <li className="font-semibold">
          Nails or push pin holes (no wall anchors) - max 10
        </li>
        <li>
          Blount, Bryant, Bryce Lawn, Highlands, John England Jr., Lakeside,
          Paty, Presidential Village, Ridgecrest, Riverside and Tutwiler
        </li>
        <li className="font-semibold">3M Command Strips</li>
        <li>Burke and Parham</li>
        <li>
          Mounting televisions and screw anchors are
          <span className="mx-1 font-semibold">not</span>permitted in any
          buildings.
        </li>
      </ul>
      <h2 className="text-neutral-800 font-semibold border-spacing-1 mt-3 border-b-[1px] border-vgyellow text-base">
        Bed Heights
      </h2>
      <p className="text-neutral-600 text-sm mt-2">
        Beds in most halls are adjustable with the maximum height listed under
        each building page's specifications. Set beds heights on Move-In Day
        vary by each room.
      </p>
      <p className="text-neutral-600 text-sm mt-2">
        In order to have your bed set to your preferred height prior to Move-In
        and/or request bed rails, complete a work order by July 5. If you are
        wanting to fit your dresser underneath your bed, make sure to include
        this information in the work order. Bed height requests submitted after
        July 5 will be completed after classes start.
      </p>
      <p className="text-neutral-600 text-base mt-3 font-semibold">
        Bed Risers
      </p>
      <ul className="list-disc list-inside [&>li]:my-1 p-2">
        <li>
          Risers Bed risers that are 7” or shorter, purpose-built and set up
          following manufacturer's instructions are allowed.
        </li>
        <li>
          Loft kits that are manufactured commercially are allowed as installed
          by a reputable local company.
        </li>
      </ul>
      <p className="text-neutral-600 mt-2">
        HRC does not provide risers or loft kits. If desired and allowed in the
        specific building, it is the student's responsibility to bring their own
        risers or loft kits.
      </p>
      <p className="text-neutral-600 mt-2 text-sm">
        Risers and/or lofts are not permitted for Bryant, Paty, Presidential I,
        Presidential II, and Ridgecrest South.
        <span className="mx-1 font-semibold">
          Handmade or constructed risers or lofts, or items not specifically
          built as risers (i.e. cinderblocks) are not permitted.
        </span>
      </p>
    </div>
  );
};

export default ApplyCampusPageRoomSetup;
