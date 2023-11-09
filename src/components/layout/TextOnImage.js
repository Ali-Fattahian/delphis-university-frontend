import React from "react";

const TextOnImage = ({ title, text, imageURL }) => {
  return (
    <div className="relative w-full">
      <img
        src={imageURL}
        alt="Admissions"
        className="object-cover w-full max-h-[92vh]"
      />
      <div className="absolute w-full h-full top-0 left-0 bg-[#00000038]"></div>
      <div className="w-full absolute left-0 bottom-0 flex flex-col gap-6 p-6 sm:w-3/4">
        <h1 className="text-white font-bold text-4xl sm:text-5xl overflow-hidden">
          {title}
        </h1>
        <p className="text-white font-bold">{text}</p>
      </div>
    </div>
  );
};

export default TextOnImage;
