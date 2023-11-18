import React from "react";

const AcademicCatalogLevel = ({ setAcademicLevel, academicLevel }) => {
  return (
    <div className="w-full bg-neutral-100 text-neutral-600 flex flex-col px-0 mt-4">
      <p className="text-semibold text-neutral-800 px-4 border-l-vgred border-l-2 py-2">
        Academic Level
      </p>
      <div
        className="flex items-center cursor-pointer gap-2 w-full px-4 py-1 border-l-2 border-l-vgyellow"
        onClick={() => setAcademicLevel("graduate")}
      >
        <input
          type="checkbox"
          id="graduate"
          className="cursor-pointer accent-vgskyblue"
        />
        <label htmlFor="graduate" className="cursor-pointer text-sm">
          Graduate
        </label>
      </div>
      <div
        className="flex items-center cursor-pointer gap-2 w-full px-4 py-1 border-l-2 border-l-vgyellow"
        onClick={() => setAcademicLevel("law")}
      >
        <input
          type="checkbox"
          id="law"
          className="cursor-pointer accent-vgskyblue"
        />
        <label htmlFor="law" className="cursor-pointer text-sm">
          Law
        </label>
      </div>
      <div
        className="flex items-center cursor-pointer gap-2 w-full px-4 py-1 border-l-2 border-l-vgyellow"
        onClick={() => setAcademicLevel("undergraduate")}
      >
        <input
          type="checkbox"
          id="undergraduate"
          className="cursor-pointer accent-vgskyblue"
        />
        <label htmlFor="undergraduate" className="cursor-pointer text-sm">
          Undergraduate
        </label>
      </div>
    </div>
  );
};

export default AcademicCatalogLevel;
