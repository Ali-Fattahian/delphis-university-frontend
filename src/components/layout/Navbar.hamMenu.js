import React from "react";
import NavbarHamMenuMainNavLink from "./Navbar.HamMenu.MainNavLink";

const NavbarhamMenu = ({ hideHamMenu }) => {
  return (
    <div
      className={`h-vh h-screen z-[9] flex min-[720px]:hidden flex-row-reverse fixed right-0 top-0 transition-all ease-in-out duration-500 bg-vgyellow pt-9 ${
        hideHamMenu && "hide-navbar"
      }`}
    >
      <ul className="flex flex-col gap-4 p-3 bg-gradient-to-t from-[#ffc816] via-[#e3dc1d] to-vgyellow">
        <li>
          <a
            href="/apply"
            className="transition-all text-white font-bold duration-300 text-sm p-4"
          >
            Apply
          </a>
        </li>
        <li>
          <a
            href="/tour"
            className="transition-all text-white font-bold duration-300 text-sm p-4"
          >
            Tour
          </a>
        </li>
        <li>
          <a
            href="/about"
            className="transition-all text-white font-bold duration-300 text-sm p-4"
          >
            About
          </a>
        </li>
      </ul>
      <ul className="flex flex-col gap-4 p-3 bg-gradient-to-t from-vgblue via-[#252874] to-blue-900">
        <li>
          <NavbarHamMenuMainNavLink
            name="Faculty & Staff"
            link="/faculty-staff"
          />
        </li>
        <li>
          <NavbarHamMenuMainNavLink name="Academics" link="/academics" />
        </li>
        <li>
          <NavbarHamMenuMainNavLink name="Admissions" link="/admissions" />
        </li>
        <li>
          <NavbarHamMenuMainNavLink name="Campus Life" link="/campus-life" />
        </li>
        <li>
          <NavbarHamMenuMainNavLink name="Community" link="/community" />
        </li>
        {/* <li>
          <NavbarHamMenuMainNavLink name="Research" link="research" />
        </li> */}
      </ul>
    </div>
  );
};

export default NavbarhamMenu;
