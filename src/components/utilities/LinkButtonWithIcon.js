import React from "react";

const LinkButtonWithIcon = ({ name, link, bg, color, icon, classes }) => {
  return (
    <a
      href={link}
      className={`w-full ${classes} cursor-pointer flex gap-2 items-center border-[1px] bg-${bg} px-2 py-1 text-${color} transition-all duration-300`}
    >
      {icon}
      {name}
    </a>
  );
};

export default LinkButtonWithIcon;
