import React from "react";
import { ClockIcon, MapPinIcon } from "@heroicons/react/24/outline";

const Card = ({ imageURL, month, day, year, title, time, location, link }) => {
  return (
    <div className="flex flex-col border-[1px] w-full max-w-[380px] pb-4 m-auto">
      {imageURL && (
        <img src={imageURL} className="object-cover mb-3" alt={title}></img>
      )}
      <div className="flex flex-col w-fit border-b-[1px] mt-4 pb-3 px-2">
        <span className="uppercase text-sm font-semibold">{month}</span>
        <div className="flex gap-2 items-end">
          <span className="text-2xl text-vgyellow">{day}</span>
          <span className=" text-xs text-neutral-500">{year}</span>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-1 px-2">
        <p className="text-xs font-bold truncate">{title}</p>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <div className="flex gap-2 mb-2">
              <ClockIcon className="w-4" />
              <p className="text-xs text-slate-800">{`${time[0]} - ${time[1]}`}</p>
            </div>
            <div className="flex gap-2">
              <MapPinIcon className="w-4" />
              <p className="text-xs text-slate-800">{location}</p>
            </div>
          </div>
          {link && (
            <a
              href={link}
              className="-translate-x-2 translate-y-3 transition-all duration-400 hover:underline hover:opacity-100 opacity-70 text-sm font-bold"
            >
              more
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
