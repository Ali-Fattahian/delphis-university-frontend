import React, { useState } from "react";
import { MagnifyingGlassIcon, Bars3Icon } from "@heroicons/react/24/outline";
import NavbarMainLinks from "./NavbarMainLinks";
import NavbarhamMenu from "./Navbar.hamMenu";
import Overlay from "../Overlay";
import SearchField from "../SearchField";

const Navbar = () => {
  const [hideHamMenu, setHideHamMenu] = useState(true);
  const [hideSearchBar, setHideSearchBar] = useState(true);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const setOverlayClicked = () => {
    setOverlayVisible(false);
    setHideHamMenu(true);
    setHideSearchBar(true);
  };

  return (
    <>
      <NavbarhamMenu hideHamMenu={hideHamMenu} />
      {!hideSearchBar && <SearchField />}
      {overlayVisible && <Overlay setOverlayClicked={setOverlayClicked} />}
      <nav className="w-full bg-vgyellow flex justify-between min-[720px]:flex-row items-center">
        <h1 className="text-1xl/6 flex-2 pl-2 text-left font-sans leading-3 font-bold text-slate-800 z-10 hidden min-[720px]:inline-block">
          THE UNIVERSITY OF DELPHIS
        </h1>
        <ul className="w-full max-w-3xl m-auto list-none min-[720px]:flex flex-1 justify-end pr-4 hidden">
          <li className="transition-all duration-300 hover:bg-white">
            <a
              href="/apply"
              className="py-2 px-3 inline-block align-sub transition-all duration-300 hover:text-vggreen text-white text-sm"
            >
              Apply
            </a>
          </li>
          <li className="transition-all duration-300 hover:bg-white">
            <a
              href="/tour"
              className="py-2 px-3 inline-block transition-all align-sub duration-300 hover:text-vggreen text-white text-sm"
            >
              Tour
            </a>
          </li>
          <li className="transition-all duration-300 hover:bg-white">
            <a
              href="/about"
              className="py-2 inline-block px-3 transition-all align-sub duration-300 hover:text-vggreen text-white text-sm"
            >
              About
            </a>
          </li>
          <li
            className="transition-all duration-300 hover:bg-white py-2 group"
            onClick={() => {
              setHideSearchBar((prevState) => !prevState);
              setOverlayVisible((prevState) => !prevState);
            }}
          >
            <MagnifyingGlassIcon className="h-5 w-5 stroke-slate-100 cursor-pointer group-hover:stroke-vggreen mx-2" />
          </li>
        </ul>
        <div className="z-10 fixed top-0 right-0 w-full bg-vgyellow flex justify-between min-[720px]:hidden">
          <h1 className="text-1xl/6 flex-2 pl-2 text-left font-sans leading-3 font-bold text-slate-800 z-10 p-3 cursor-pointer">
            <a href="/">THE UNIVERSITY OF DELPHIS</a>
          </h1>
          <div className="flex gap-2 items-center pr-3">
            <MagnifyingGlassIcon
              onClick={() => {
                setHideSearchBar((prevState) => !prevState);
                setOverlayVisible(hideSearchBar);
                setHideHamMenu(true);
              }}
              className="h-5 w-5 min-w-[20px] stroke-black cursor-pointer group-hover:stroke-vggreen mx-2"
            />
            <Bars3Icon
              className="stroke-black h-5 w-5 min-w-[20px] cursor-pointer opacity-90 hover:opacity-100 inline-block"
              onClick={() => {
                setHideHamMenu((prevState) => !prevState);
                setOverlayVisible(hideHamMenu);
                setHideSearchBar(true);
              }}
            />
          </div>
        </div>
      </nav>
      <nav className="w-full px-4 py-3 bg-gradient-to-r hidden min-[720px]:block from-vgblue via-[#252874] to-blue-900">
        <NavbarMainLinks />
      </nav>
    </>
  );
};

export default Navbar;
