import React from "react";

const DistantProgramPageType = ({ setProgramType }) => {
  return (
    <div className="w-full bg-neutral-100 text-neutral-600 flex flex-col px-0 mt-4">
      <p className="text-semibold text-neutral-800 px-4 border-l-vgred border-l-2 py-2">
        Choose Program Type
      </p>
      <div
        className="flex items-center cursor-pointer gap-2 w-full px-4 py-1 border-l-2 border-l-vgyellow"
        onClick={() => setProgramType("bc")}
      >
        <input
          type="checkbox"
          id="bc"
          className="cursor-pointer accent-vgskyblue"
        />
        <label htmlFor="bc" className="cursor-pointer text-sm">
          Bachelor's Degree
        </label>
      </div>
      <div
        className="flex items-center cursor-pointer gap-2 w-full px-4 py-1 border-l-2 border-l-vgyellow"
        onClick={() => setProgramType("certificate")}
      >
        <input type="checkbox" id="certificate" className="cursor-pointer" />
        <label htmlFor="certificate" className="cursor-pointer text-sm">
          Certificate
        </label>
      </div>
      <div
        className="flex items-center cursor-pointer gap-2 w-full px-4 py-1 border-l-2 border-l-vgyellow"
        onClick={() => setProgramType("doctor")}
      >
        <input type="checkbox" id="doctor" className="cursor-pointer" />
        <label htmlFor="doctor" className="cursor-pointer text-sm">
          Doctoral Degree
        </label>
      </div>
      <div
        className="flex items-center cursor-pointer gap-2 w-full px-4 py-1 border-l-2 border-l-vgyellow"
        onClick={() => setProgramType("eduSpec")}
      >
        <input type="checkbox" id="eduSpec" className="cursor-pointer" />
        <label htmlFor="eduSpec" className="cursor-pointer text-sm">
          Educational Specialist
        </label>
      </div>
      <div
        className="flex items-center cursor-pointer gap-2 w-full px-4 py-1 border-l-2 border-l-vgyellow"
        onClick={() => setProgramType("ms")}
      >
        <input type="checkbox" id="ms" className="cursor-pointer" />
        <label htmlFor="ms" className="cursor-pointer text-sm">
          Master's Degree
        </label>
      </div>
      <div
        className="flex items-center cursor-pointer gap-2 w-full px-4 py-1 border-l-2 border-l-vgyellow"
        onClick={() => setProgramType("minor")}
      >
        <input type="checkbox" id="minor" className="cursor-pointer" />
        <label htmlFor="minor" className="cursor-pointer text-sm">
          Minor
        </label>
      </div>
    </div>
  );
};

export default DistantProgramPageType;
