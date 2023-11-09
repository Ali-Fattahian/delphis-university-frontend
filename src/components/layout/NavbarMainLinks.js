import React from "react";
import NavbarLink from "./NavbarLink";

const NavbarMainLinks = () => {
  return (
    <ul className="w-full max-w-3xl m-auto list-none flex justify-center">
      <li>
        <NavbarLink name={"Faculty & Staff"} link={"/faculty-staff"} />
      </li>
      <li>
        <NavbarLink name={"Academics"} link={"/academics"} />
      </li>
      <li>
        <NavbarLink name={"Admissions"} link={"/admissions"} />
      </li>
      <li>
        <NavbarLink name={"Athletics"} link={"/athletics"} />
      </li>
      <li>
        <NavbarLink name={"Campus Life"} link={"/campus-life"} />
      </li>
      <li>
        <NavbarLink name={"Community"} link={"/community"} />
      </li>
      <li>
        <NavbarLink name={"Research"} link={"/research"} />
      </li>
    </ul>
  );
};

export default NavbarMainLinks;
