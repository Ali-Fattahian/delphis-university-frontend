import React from "react";

const DistantProgramPageFormat = ({ setProgramFormat }) => {
  return (
    <div className="w-full bg-neutral-100 text-neutral-600 flex flex-col px-0 mt-4">
      <p className="text-semibold text-neutral-800 px-4 border-l-vgred border-l-2 py-2">
        Choose Program Format
      </p>
      <div
        className="flex items-center cursor-pointer gap-2 w-full px-4 py-1 border-l-2 border-l-vgyellow"
        onClick={() => setProgramFormat("online")}
      >
        <input
          type="checkbox"
          id="online"
          className="cursor-pointer accent-vgskyblue"
        />
        <label htmlFor="online" className="cursor-pointer text-sm">
          Online Only
        </label>
      </div>
      <div
        className="flex items-center cursor-pointer gap-2 w-full px-4 py-1 border-l-2 border-l-vgyellow"
        onClick={() => setProgramFormat("prOnline")}
      >
        <input
          type="checkbox"
          id="prOnline"
          className="cursor-pointer accent-vgskyblue"
        />
        <label htmlFor="prOnline" className="cursor-pointer text-sm">
          Primariy Online
        </label>
      </div>
      <div
        className="flex items-center cursor-pointer gap-2 w-full px-4 py-1 border-l-2 border-l-vgyellow"
        onClick={() => setProgramFormat("hybrid")}
      >
        <input
          type="checkbox"
          id="hybrid"
          className="cursor-pointer accent-vgskyblue"
        />
        <label htmlFor="hybrid" className="cursor-pointer text-sm">
          Hybrid
        </label>
      </div>
      <div
        className="flex items-center cursor-pointer gap-2 w-full px-4 py-1 border-l-2 border-l-vgyellow"
        onClick={() => setProgramFormat("any")}
      >
        <input
          type="checkbox"
          id="any"
          className="cursor-pointer accent-vgskyblue"
        />
        <label htmlFor="any" className="cursor-pointer text-sm">
          Any Format
        </label>
      </div>
    </div>
  );
};

export default DistantProgramPageFormat;
