import React from "react";

const AcademicCalendarCard = ({ active, name, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`transition-all duration-300 p-2 mx-2 font-semibold my-1 w-[140px] text-xs ${
        active
          ? "text-white bg-vgblue border-none shadow-md"
          : "bg-white text-vgblue border-[1px]"
      }`}
    >
      {name}
    </button>
  );
};

export default AcademicCalendarCard;
