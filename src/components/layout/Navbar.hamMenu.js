import React from "react";
import NavbarHamMenuMainNavLink from "./Navbar.HamMenu.MainNavLink";

const NavbarhamMenu = ({ hideHamMenu }) => {
  return (
    <div
      className={`h-vh h-screen flex min-[720px]:hidden flex-row-reverse fixed z-[5] right-0 top-0 transition-all ease-in-out duration-500 bg-vgyellow pt-9 ${
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
            href="/"
            className="transition-all text-white font-bold duration-300 text-sm p-4"
          >
            Tour
          </a>
        </li>
        <li>
          <a
            href="/"
            className="transition-all text-white font-bold duration-300 text-sm p-4"
          >
            About
          </a>
        </li>
      </ul>
      <ul className="flex flex-col gap-4 p-3 bg-gradient-to-t from-vgblue via-[#252874] to-blue-900">
        <li>
          <NavbarHamMenuMainNavLink name="Faculty" link="/faculty" />
        </li>
        <li>
          <NavbarHamMenuMainNavLink name="Academics" link="/" />
        </li>
        <li>
          <NavbarHamMenuMainNavLink name="Admissions" link="/" />
        </li>
        <li>
          <NavbarHamMenuMainNavLink name="Athletics" link="/" />
        </li>
        <li>
          <NavbarHamMenuMainNavLink name="Campus Life" link="/" />
        </li>
        <li>
          <NavbarHamMenuMainNavLink name="Community" link="/" />
        </li>
        <li>
          <NavbarHamMenuMainNavLink name="Research" link="research-resources" />
        </li>
      </ul>
    </div>
  );
};

export default NavbarhamMenu;
