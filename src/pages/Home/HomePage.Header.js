import React from "react";
import Navbar from "../../components/layout/Navbar";
import LinkButton from "../../components/utilities/LinkButton";
const headerImage = require("../../assets/images/header.jpeg");

const HomePageHeader = () => {
  return (
    <>
      <Navbar />
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat text-center"
        style={{ backgroundImage: `url(${headerImage})`, height: "600px" }}
      >
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-fixed w-full h-full bg-[#00000038]">
          <div className="flex w-full h-full flex-col gap-10 items-center justify-center">
            <h1 className="text-neutral-300 text-5xl overflow-y-hidden [text-shadow:_0_1px_0_rgb(0_0_0_/_100%)]">
              Make The World <span className="text-vgyellow">Proud</span>
            </h1>
            <LinkButton
              name="What our students say"
              link="/student-endorsement"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageHeader;
