import React from 'react';
import NavbarLink from './NavbarLink';

const NavbarMainLinks = () => {
  return (
    <ul className='w-full max-w-3xl m-auto list-none flex justify-center'>
      <li>
        <NavbarLink name={'About'} link={'/'} />
      </li>
      <li>
        <NavbarLink name={'Academics'} link={'/'} />
      </li>
      <li>
        <NavbarLink name={'Admissions'} link={'/'} />
      </li>
      <li>
        <NavbarLink name={'Athletics'} link={'/'} />
      </li>
      <li>
        <NavbarLink name={'Campus Life'} link={'/'} />
      </li>
      <li>
        <NavbarLink name={'Community'} link={'/'} />
      </li>
      <li>
        <NavbarLink name={'Research'} link={'/'} />
      </li>
    </ul>
  );
};

export default NavbarMainLinks;
