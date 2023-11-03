import React from "react";

const HomePageCommunityNewsLinks = ({ link, category, text }) => {
  return (
    <a
      href={link}
      className="hover:underline text-vgblue py-4 border-b-[1px] border-opacity-50 border-slate-80"
    >
      <span className="text-neutral-700">{category}</span>
      <p>{text}</p>
    </a>
  );
};

export default HomePageCommunityNewsLinks;
