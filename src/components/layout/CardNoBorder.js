import React from "react";

const CardNoBorder = ({ maxWidth, imageURL, title, text, link }) => {
  return (
    <div
      className="flex flex-col gap-4 items-center mx-auto group"
      style={{ maxWidth: maxWidth + "px" }}
    >
      <img
        className="object-cover aspect-square transition-transform duration-300 group-hover:scale-105 border-2 border-vgred border-double group-hover:border-0"
        src={imageURL}
        alt={title}
      />
      <a
        className="p-2 text-vgyellow hover:underline cursor-pointer w-full"
        href={link}
      >
        {title}
      </a>
      <p className="px-2 pb-2 text-sm text-slate-800 w-full">{text}</p>
    </div>
  );
};

export default CardNoBorder;
