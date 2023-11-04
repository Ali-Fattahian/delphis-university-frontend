import React from "react";

const LinkButtonTransparent = ({ name, link, width }) => {
  return (
    <a
      href={link}
      className="px-4 py-3 bg-transparent text-white text-sm font-semibold border-[1px]  transition-colors duration-300 hover:bg-[#ffffff14] min-[270px]:min-w-[200px] text-center"
      style={{ width: width }}
    >
      {name}
    </a>
  );
};

export default LinkButtonTransparent;
