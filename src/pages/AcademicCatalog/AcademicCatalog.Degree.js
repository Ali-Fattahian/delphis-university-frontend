import React from "react";

const AcademicCatalogDegree = ({ setDegreeType }) => {
  return (
    <div className="w-full bg-neutral-100 text-neutral-600 flex flex-col px-0 mt-4">
      <p className="text-semibold text-neutral-800 px-4 border-l-vgred border-l-2 py-2">
        Degree Type
      </p>
      <div
        className="flex items-center cursor-pointer gap-2 w-full px-4 py-1 border-l-2 border-l-vgyellow"
        onClick={() => setDegreeType("major")}
      >
        <input
          type="checkbox"
          id="major"
          className="cursor-pointer accent-vgskyblue"
        />
        <label htmlFor="major" className="cursor-pointer text-sm">
          Major
        </label>
      </div>
      <div
        className="flex items-center cursor-pointer gap-2 w-full px-4 py-1 border-l-2 border-l-vgyellow"
        onClick={() => setDegreeType("minor")}
      >
        <input type="checkbox" id="minor" className="cursor-pointer" />
        <label htmlFor="minor" className="cursor-pointer text-sm">
          Minor
        </label>
      </div>
    </div>
  );
};

export default AcademicCatalogDegree;
