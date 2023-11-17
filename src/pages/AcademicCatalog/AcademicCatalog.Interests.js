import React from "react";

const AcademicCatalogInterests = ({ setInterests }) => {
  return (
    <div className="w-full bg-neutral-100 text-neutral-600 flex flex-col px-0 mt-4">
      <p className="text-semibold text-neutral-800 px-4 border-l-vgred border-l-2 py-2">
        Interests
      </p>
      <div
        className="flex items-center cursor-pointer gap-2 w-full px-4 py-1 border-l-2 border-l-vgyellow"
        onClick={() => setInterests("architecture")}
      >
        <input
          type="checkbox"
          id="architecture"
          className="cursor-pointer accent-vgskyblue"
        />
        <label htmlFor="architecture" className="cursor-pointer text-sm">
          Architecture
        </label>
      </div>
      <div
        className="flex items-center cursor-pointer gap-2 w-full px-4 py-1 border-l-2 border-l-vgyellow"
        onClick={() => setInterests("art")}
      >
        <input
          type="checkbox"
          id="art"
          className="cursor-pointer accent-vgskyblue"
        />
        <label htmlFor="art" className="cursor-pointer text-sm">
          Art
        </label>
      </div>
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
        onClick={() => setInterests("education")}
      >
        <input
          type="checkbox"
          id="education"
          className="cursor-pointer accent-vgskyblue"
        />
        <label htmlFor="education" className="cursor-pointer text-sm">
          Education
        </label>
      </div>
      <div
        className="flex items-center cursor-pointer gap-2 w-full px-4 py-1 border-l-2 border-l-vgyellow"
        onClick={() => setInterests("eventPlanning")}
      >
        <input
          type="checkbox"
          id="eventPlanning"
          className="cursor-pointer accent-vgskyblue"
        />
        <label htmlFor="eventPlanning" className="cursor-pointer text-sm">
          Event Planning
        </label>
      </div>
      <div
        className="flex items-center cursor-pointer gap-2 w-full px-4 py-1 border-l-2 border-l-vgyellow"
        onClick={() => setInterests("fashion")}
      >
        <input
          type="checkbox"
          id="fashion"
          className="cursor-pointer accent-vgskyblue"
        />
        <label htmlFor="fashion" className="cursor-pointer text-sm">
          Fashion
        </label>
      </div>
      <div
        className="flex items-center cursor-pointer gap-2 w-full px-4 py-1 border-l-2 border-l-vgyellow"
        onClick={() => setInterests("healthNutrition")}
      >
        <input
          type="checkbox"
          id="healthNutrition"
          className="cursor-pointer accent-vgskyblue"
        />
        <label htmlFor="healthNutrition" className="cursor-pointer text-sm">
          Health & Nutrition
        </label>
      </div>
      <div
        className="flex items-center cursor-pointer gap-2 w-full px-4 py-1 border-l-2 border-l-vgyellow"
        onClick={() => setInterests("history")}
      >
        <input
          type="checkbox"
          id="history"
          className="cursor-pointer accent-vgskyblue"
        />
        <label htmlFor="history" className="cursor-pointer text-sm">
          History
        </label>
      </div>
      <div
        className="flex items-center cursor-pointer gap-2 w-full px-4 py-1 border-l-2 border-l-vgyellow"
        onClick={() => setInterests("law")}
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
        onClick={() => setInterests("libraryStudies")}
      >
        <input
          type="checkbox"
          id="libraryStudies"
          className="cursor-pointer accent-vgskyblue"
        />
        <label htmlFor="libraryStudies" className="cursor-pointer text-sm">
          Library Studies
        </label>
      </div>
      <div
        className="flex items-center cursor-pointer gap-2 w-full px-4 py-1 border-l-2 border-l-vgyellow"
        onClick={() => setInterests("mathematics")}
      >
        <input
          type="checkbox"
          id="mathematics"
          className="cursor-pointer accent-vgskyblue"
        />
        <label htmlFor="mathematics" className="cursor-pointer text-sm">
          Mathematics
        </label>
      </div>
      <div
        className="flex items-center cursor-pointer gap-2 w-full px-4 py-1 border-l-2 border-l-vgyellow"
        onClick={() => setInterests("mechanicalDesign")}
      >
        <input
          type="checkbox"
          id="mechanicalDesign"
          className="cursor-pointer accent-vgskyblue"
        />
        <label htmlFor="mechanicalDesign" className="cursor-pointer text-sm">
          Mechanical Design
        </label>
      </div>
      <div
        className="flex items-center cursor-pointer gap-2 w-full px-4 py-1 border-l-2 border-l-vgyellow"
        onClick={() => setInterests("mediaPerformance")}
      >
        <input
          type="checkbox"
          id="mediaPerformance"
          className="cursor-pointer accent-vgskyblue"
        />
        <label htmlFor="mediaPerformance" className="cursor-pointer text-sm">
          Media & Performance
        </label>
      </div>
      <div
        className="flex items-center cursor-pointer gap-2 w-full px-4 py-1 border-l-2 border-l-vgyellow"
        onClick={() => setInterests("music")}
      >
        <input
          type="checkbox"
          id="music"
          className="cursor-pointer accent-vgskyblue"
        />
        <label htmlFor="music" className="cursor-pointer text-sm">
          Music
        </label>
      </div>
      <div
        className="flex items-center cursor-pointer gap-2 w-full px-4 py-1 border-l-2 border-l-vgyellow"
        onClick={() => setInterests("politicsEvents")}
      >
        <input
          type="checkbox"
          id="politicsEvents"
          className="cursor-pointer accent-vgskyblue"
        />
        <label htmlFor="politicsEvents" className="cursor-pointer text-sm">
          Politics & Current Events
        </label>
      </div>
      <div
        className="flex items-center cursor-pointer gap-2 w-full px-4 py-1 border-l-2 border-l-vgyellow"
        onClick={() => setInterests("readingWriting")}
      >
        <input
          type="checkbox"
          id="readingWriting"
          className="cursor-pointer accent-vgskyblue"
        />
        <label htmlFor="readingWriting" className="cursor-pointer text-sm">
          Reading & Creative Writing
        </label>
      </div>
      <div
        className="flex items-center cursor-pointer gap-2 w-full px-4 py-1 border-l-2 border-l-vgyellow"
        onClick={() => setInterests("religion")}
      >
        <input
          type="checkbox"
          id="religion"
          className="cursor-pointer accent-vgskyblue"
        />
        <label htmlFor="religion" className="cursor-pointer text-sm">
          Religion
        </label>
      </div>
      <div
        className="flex items-center cursor-pointer gap-2 w-full px-4 py-1 border-l-2 border-l-vgyellow"
        onClick={() => setInterests("scienceTech")}
      >
        <input
          type="checkbox"
          id="scienceTech"
          className="cursor-pointer accent-vgskyblue"
        />
        <label htmlFor="scienceTech" className="cursor-pointer text-sm">
          Science & Technology
        </label>
      </div>
      <div
        className="flex items-center cursor-pointer gap-2 w-full px-4 py-1 border-l-2 border-l-vgyellow"
        onClick={() => setInterests("serviceOutreach")}
      >
        <input
          type="checkbox"
          id="serviceOutreach"
          className="cursor-pointer accent-vgskyblue"
        />
        <label htmlFor="serviceOutreach" className="cursor-pointer text-sm">
          Service & Outreach
        </label>
      </div>
      <div
        className="flex items-center cursor-pointer gap-2 w-full px-4 py-1 border-l-2 border-l-vgyellow"
        onClick={() => setInterests("languages")}
      >
        <input
          type="checkbox"
          id="languages"
          className="cursor-pointer accent-vgskyblue"
        />
        <label htmlFor="languages" className="cursor-pointer text-sm">
          World Languages & Outlooks
        </label>
      </div>
    </div>
  );
};

export default AcademicCatalogInterests;
