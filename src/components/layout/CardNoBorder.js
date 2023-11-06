import React from "react";

const CardNoBorder = ({ maxWidth, imageURL, title, text, link }) => {
  return (
    <div
      className="flex flex-col gap-4 items-center m-auto"
      style={{ maxWidth: maxWidth + "px" }}
    >
      <img className="object-cover aspect-square" src={imageURL} alt={title} />
      <a
        className="text-vgyellow hover:underline cursor-pointer w-full"
        href={link}
      >
        {title}
      </a>
      <p className="text-sm text-slate-800 w-full">{text}</p>
    </div>
  );
};

export default CardNoBorder;
