import React from "react";

const Overlay = ({ setOverlayClicked }) => {
  return (
    <div
      className="w-screen h-screen bg-[#00000096] fixed top-0 left-0 z-[5]"
      onClick={() => setOverlayClicked()}
    ></div>
  );
};

export default Overlay;
