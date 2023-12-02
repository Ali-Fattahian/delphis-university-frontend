import React, { useState } from "react";

const ExtraInfoButton = ({ name, text, bg, color, icon, classes }) => {
  const [textHidden, setTextHidden] = useState(true);

  return (
    <div className="w-full overflow-hidden">
      <button
        onClick={() => setTextHidden((prevState) => !prevState)}
        className={`w-full ${classes} cursor-pointer flex gap-2 items-center border-[1px] bg-${bg} px-2 py-1 text-${color} transition-all duration-300`}
      >
        {icon}
        {name}
      </button>
      <div
        className={`p-2 text-sm transition-all duration-300 ${
          textHidden ? "hidden" : "block"
        } text-slate-500 text-left border-[1px]`}
      >
        {text}
      </div>
    </div>
  );
};

export default ExtraInfoButton;
