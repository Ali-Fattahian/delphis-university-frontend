import React from 'react';

const NavbarLink = ({ link, name }) => {
  return (
    <a
      href={link}
      className='pb-2 px-3 transition-all duration-300 hover:opacity-100 text-white opacity-90'
    >
      {name}
    </a>
  );
};

export default NavbarLink;
