import React from "react";

const DistantProgramPageInterests = ({ setInterests }) => {
  return (
    <div className="w-full bg-neutral-100 text-neutral-600 flex flex-col px-0 mt-4">
      <p className="text-semibold text-neutral-800 px-4 border-l-vgred border-l-2 py-2">
        Choose Area of Interest
      </p>
      <div
        className="flex items-center cursor-pointer gap-2 w-full px-4 py-1 border-l-2 border-l-vgyellow"
        onClick={() => setInterests("business")}
      >
        <input
          type="checkbox"
          id="business"
          className="cursor-pointer accent-vgskyblue"
        />
        <label htmlFor="business" className="cursor-pointer text-sm">
          Business
        </label>
      </div>
      <div
        className="flex items-center cursor-pointer gap-2 w-full px-4 py-1 border-l-2 border-l-vgyellow"
        onClick={() => setInterests("childDev")}
      >
        <input
          type="checkbox"
          id="childDev"
          className="cursor-pointer accent-vgskyblue"
        />
        <label htmlFor="childDev" className="cursor-pointer text-sm">
          Child Development
        </label>
      </div>
      <div
        className="flex items-center cursor-pointer gap-2 w-full px-4 py-1 border-l-2 border-l-vgyellow"
        onClick={() => setInterests("communication")}
      >
        <input
          type="checkbox"
          id="communication"
          className="cursor-pointer accent-vgskyblue"
        />
        <label htmlFor="communication" className="cursor-pointer text-sm">
          Communication
        </label>
      </div>
      <div
        className="flex items-center cursor-pointer gap-2 w-full px-4 py-1 border-l-2 border-l-vgyellow"
        onClick={() => setInterests("comHealthSc")}
      >
        <input
          type="checkbox"
          id="comHealthSc"
          className="cursor-pointer accent-vgskyblue"
        />
        <label htmlFor="comHealthSc" className="cursor-pointer text-sm">
          Community Health Science
        </label>
      </div>
      <div
        className="flex items-center cursor-pointer gap-2 w-full px-4 py-1 border-l-2 border-l-vgyellow"
        onClick={() => setInterests("conflictRes")}
      >
        <input
          type="checkbox"
          id="conflictRes"
          className="cursor-pointer accent-vgskyblue"
        />
        <label htmlFor="conflictRes" className="cursor-pointer text-sm">
          Conflict Resolution
        </label>
      </div>
      <div
        className="flex items-center cursor-pointer gap-2 w-full px-4 py-1 border-l-2 border-l-vgyellow"
        onClick={() => setInterests("consumerEng")}
      >
        <input
          type="checkbox"
          id="consumerEng"
          className="cursor-pointer accent-vgskyblue"
        />
        <label htmlFor="consumerEng" className="cursor-pointer text-sm">
          Consumer Engagement
        </label>
      </div>
      <div
        className="flex items-center cursor-pointer gap-2 w-full px-4 py-1 border-l-2 border-l-vgyellow"
        onClick={() => setInterests("criminalJus")}
      >
        <input
          type="checkbox"
          id="criminalJus"
          className="cursor-pointer accent-vgskyblue"
        />
        <label htmlFor="criminalJus" className="cursor-pointer text-sm">
          Criminal Justice
        </label>
      </div>
      <div
        className="flex items-center cursor-pointer gap-2 w-full px-4 py-1 border-l-2 border-l-vgyellow"
        onClick={() => setInterests("edu")}
      >
        <input
          type="checkbox"
          id="edu"
          className="cursor-pointer accent-vgskyblue"
        />
        <label htmlFor="edu" className="cursor-pointer text-sm">
          Education
        </label>
      </div>
      <div
        className="flex items-center cursor-pointer gap-2 w-full px-4 py-1 border-l-2 border-l-vgyellow"
        onClick={() => setInterests("eng")}
      >
        <input
          type="checkbox"
          id="eng"
          className="cursor-pointer accent-vgskyblue"
        />
        <label htmlFor="eng" className="cursor-pointer text-sm">
          Engineering
        </label>
      </div>
    </div>
  );
};

export default DistantProgramPageInterests;
