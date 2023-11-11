import React from "react";

const LinkButton = ({ name, link, classes }) => {
  return (
    <a
      href={link}
      className={`px-4 py-2 bg-vgyellow  text-white border-2 border-white shadow-sm hover:shadow-[inset_0_0_10px_rgba(201,157,45,0.8)] shadow-vgyellow ${classes}`}
    >
      {name}
    </a>
  );
};

export default LinkButton;
