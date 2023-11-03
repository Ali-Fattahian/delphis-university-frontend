import React from "react";

const imageURL = require("../../assets/images/university.jpeg");

const HomePageCampus = () => {
  return (
    <div className="w-full relative">
      <img
        className="object-cover w-full"
        src={imageURL}
        alt="University Campus"
      />
      <div className="h-full w-full backdrop-blur-md absolute top-0 left-0"></div>
      <div className="w-full h-full p-4 absolute top-0 left-0 text-white text-center">
        <h1 className="text-4xl font-semibold my-10">OUR CAMPUS</h1>
        <div className="w-full flex justify-center">
          <div className="w-full sm:w-1/2 flex flex-col gap-6 m-[right]">
            <p className="font-semibold">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <div className="p-6 flex flex-col gap-4 justify-center items-center max-w-[500px] m-auto">
              <a
                href="/"
                className="px-4 py-3 bg-transparent text-white text-sm font-semibold border-[1px]  transition-colors duration-300 hover:bg-[#ffffff14] min-[270px]:min-w-[200px]"
              >
                SCHEDULE A TOUR
              </a>
              <a
                href="/"
                className="px-4 py-3 bg-transparent text-white text-sm font-semibold border-[1px]  transition-colors duration-300 hover:bg-[#ffffff14] min-[270px]:min-w-[200px]"
              >
                OUR HOMETOWN
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageCampus;
