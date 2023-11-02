import React, { useState } from "react";
import HomePageCommunityNews from "../../components/HomePage/HomePage.CommunityNews";
import HomePageCommunityEvents from "../../components/HomePage/HomePage.CommunityEvents";

const HomePageCommunity = () => {
  const [show, setShow] = useState(0);
  return (
    <div className="p-4">
      <div className="my-10 flex-row flex gap-10 justify-center">
        <div className="flex flex-col group">
          <h1
            className="text-4xl cursor-pointer overflow-y-hidden"
            onClick={() => setShow(0)}
          >
            NEWS
          </h1>
          <div className="transition-all duration-300 w-full h-[2px] bg-vgyellow scale-0 group-hover:scale-100"></div>
        </div>
        <div className="flex flex-col group">
          <h1
            className="text-4xl cursor-pointer overflow-y-hidden"
            onClick={() => setShow(1)}
          >
            EVENTS
          </h1>
          <div className="transition-all duration-300 w-full h-[2px] bg-vgyellow scale-0 group-hover:scale-100"></div>
        </div>
      </div>
      {show === 0 && <HomePageCommunityNews />}
      {show === 1 && <HomePageCommunityEvents />}
    </div>
  );
};

export default HomePageCommunity;
