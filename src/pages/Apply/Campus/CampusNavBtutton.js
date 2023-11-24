import React from "react";

const CampusNavBtutton = ({ name, onClick, active }) => {
  return (
    <button
      onClick={onClick}
      className={`relative inline-flex items-center justify-center px-4 py-2 text-sm overflow-hidden tracking-tighter text-white bg-vgblue rounded-lg group/btn`}
    >
      <span
        className={`absolute w-0 h-0 transition-all duration-500 ease-out bg-vgskyblue rounded-full ${
          active && "w-56 h-56"
        } group-hover/btn:w-56 group-hover/btn:h-56`}
      ></span>
      <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-vgblue"></span>
      <span className="relative">{name}</span>
    </button>
  );
};

export default CampusNavBtutton;
