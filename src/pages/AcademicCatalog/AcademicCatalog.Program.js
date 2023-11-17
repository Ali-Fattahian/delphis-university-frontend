import React from "react";

const AcademicCatalogProgram = ({ image, title, link }) => {
  return (
    <a
      className={`bg-neutral-100 transition-all relative group block cursor-pointer`}
      href={link}
    >
      <img
        src={image}
        alt={title}
        className={`object-cover w-full aspect-square opacity-0 group-hover:animate-fadeIn`}
      />
      <div
        className={`absolute top-0 left-0 w-full h-full bg-[#02385759] opacity-0 group-hover:animate-fadeIn`}
      ></div>
      <p
        className={`text-vgred p-3 font-semibold absolute bottom-0 left-0 group-hover:animate-fadeOut`}
      >
        {title}
      </p>
      <p
        className={`text-white p-3 font-semibold absolute bottom-0 left-0 opacity-0 group-hover:animate-fadeIn`}
      >
        {title}
      </p>
    </a>
  );
};

export default AcademicCatalogProgram;
