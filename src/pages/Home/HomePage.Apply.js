import React from "react";
import LinkButton from "../../components/utilities/LinkButton";

const imageURL = require("../../assets/images/apply.jpeg");

const HomePageApply = () => {
  return (
    <div className="relative">
      <img src={imageURL} alt="Apply now" className="object-cover" />
      <div className="absolute w-full top-0 left-0 flex flex-col gap-6 justify-center items-center right-0 bottom-0">
        <h1 className="text-4xl text-center font-bold text-white sm:text-5xl [text-shadow:_0_1px_0_rgb(0_0_0_/_100%)]">
          Take The Next <span className="text-vgyellow">Step</span>
        </h1>
        <LinkButton
          name="Apply"
          link="/"
          classes="min-w-[100px] max-w-[300px] text-center w-1/4"
        />
      </div>
    </div>
  );
};

export default HomePageApply;
