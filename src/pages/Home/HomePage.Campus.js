import React from "react";
import LinkButtonTransparent from "../../components/utilities/LinkButtonTransparent";

const campusImage = require("../../assets/images/homepage - campus.jpeg");

const HomePageCampus = () => {
  return (
    <div className="w-full relative">
      <img
        className="object-cover w-full max-h-[92vh]"
        src={campusImage}
        alt="University Campus"
      />
      <div className="h-full w-full backdrop-blur-md absolute top-0 left-0"></div>
      <div className="w-full h-full p-4 absolute top-0 left-0 text-white text-center">
        <h1 className="text-4xl font-semibold my-10">Our Campus</h1>
        <div className="w-full flex justify-center">
          <div className="w-full sm:w-1/2 flex flex-col gap-6 m-[right]">
            <p className="font-semibold">
              With some of the most prestigious architecture and beautiful green
              space, The University of Delphis offers an extraordinary
              environment in which to learn and work. We are situated in one of
              the world's most vibrant urban environments. Surrounding Areas of
              the campus are dynamic, inviting areas with something for
              everyone. From sports teams to cultural happenings, festivals to
              street fairs, there is something for everyone.
            </p>
            <div className="p-6 flex flex-col gap-4 justify-center items-center max-w-[500px] m-auto">
              <LinkButtonTransparent name="Schedule a Tour" link="/" />
              <LinkButtonTransparent name="Our Hometown" link="/" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageCampus;
