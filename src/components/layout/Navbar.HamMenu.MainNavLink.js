import React from "react";

const NavbarHamMenuMainNavLink = ({ link, name }) => {
  return (
    <a
      href={link}
      className="transition-all text-white opacity-90 hover:opacity-100 duration-300 text-sm"
    >
      {name}
    </a>
  );
};

export default NavbarHamMenuMainNavLink;
