import React from "react";

const LinkButton = ({ name, link, classes }) => {
  return (
    <a
      href={link}
      className={`px-4 py-2 bg-vgyellow text-vgred border-2 border-white transition-colors duration-300 hover:bg-white shadow-sm shadow-vgyellow ${classes}`}
    >
      {name}
    </a>
  );
};

export default LinkButton;
