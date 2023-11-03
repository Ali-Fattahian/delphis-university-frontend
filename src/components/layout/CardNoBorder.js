import React from "react";

const CardNoBorder = ({ maxWidth, imageURL, title, text, link }) => {
  return (
    <div
      className="flex flex-col gap-4 items-center m-auto"
      style={{ maxWidth: maxWidth + "px" }}
    >
      <img
        className="object-cover aspect-square"
        src={imageURL}
        alt="Alternative text"
      />
      <a className="text-vgyellow hover:underline cursor-pointer" href={link}>
        {title}
      </a>
      <p className="text-sm text-slate-800">{text}</p>
    </div>
  );
};

export default CardNoBorder;
