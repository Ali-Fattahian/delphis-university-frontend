import React, { useState } from 'react';
import { MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/outline';
import NavbarMainLinks from './NavbarMainLinks';
import NavbarhamMenu from './Navbar.hamMenu';

const Navbar = () => {
  const [hideHamMenu, setHideHamMenu] = useState(true);

  return (
    <>
      <NavbarhamMenu hideHamMenu={hideHamMenu} />
      <nav className='w-full bg-vgyellow flex justify-between min-[720px]:flex-row items-center'>
        <h1 className='text-1xl/6 flex-2 pl-2 text-left font-sans leading-3 font-bold text-slate-800 z-10'>
          THE UNIVERSITY OF DELPHIS
        </h1>
        <ul className='w-full max-w-3xl m-auto list-none min-[720px]:flex flex-1 justify-end pr-4 hidden'>
          <li className='transition-all duration-300 hover:bg-white'>
            <a
              href='/'
              className='py-5 px-3 align-sub transition-all duration-300 hover:text-vggreen text-white text-sm'
            >
              Apply
            </a>
          </li>
          <li className='transition-all duration-300 hover:bg-white'>
            <a
              href='/'
              className='py-5 px-3 transition-all align-sub duration-300 hover:text-vggreen text-white text-sm'
            >
              Tour
            </a>
          </li>
          <li className='transition-all duration-300 hover:bg-white py-2 group'>
            <MagnifyingGlassIcon className='h-5 w-5 stroke-slate-100 cursor-pointer group-hover:stroke-vggreen mx-2' />
          </li>
        </ul>
        <Bars3Icon
          className='stroke-vgblue h-5 w-5 mx-1 cursor-pointer opacity-90 hover:opacity-100 inline-block min-[720px]:hidden m-2 z-10'
          onClick={() => setHideHamMenu((prevState) => !prevState)}
        />
      </nav>
      <nav className='w-full px-4 py-3 bg-gradient-to-r hidden min-[720px]:block from-vgblue via-[#252874] to-blue-900'>
        <NavbarMainLinks />
      </nav>
    </>
  );
};

export default Navbar;
