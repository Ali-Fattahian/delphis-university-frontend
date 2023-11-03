import React from "react";

const LinkButtonAlt = ({ name, link, classes }) => {
  return (
    <a
      href={link}
      className={`px-4 py-2 bg-vgblue text-white border-[1px] border-white transition-colors duration-300 hover:bg-white hover:border-slate-600 hover:text-vgblue shadow-sm shadow-vgblue ${classes}`}
    >
      {name}
    </a>
  );
};

export default LinkButtonAlt;
