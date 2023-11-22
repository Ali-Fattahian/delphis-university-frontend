import ComputerDesktopIcon from "@heroicons/react/24/outline/ComputerDesktopIcon";
import MapPinIcon from "@heroicons/react/24/outline/MapPinIcon";
import React from "react";

const EventsCalendarPageCard = ({
  imageURL,
  title,
  tags,
  date,
  location,
  isFree,
  link,
  isVirtual,
}) => {
  return (
    <div className="flex flex-col gap-1 items-center mx-auto relative max-w-[260px] bg-white pb-3 transition-all duration-300 hover:shadow-md">
      <img className="object-cover aspect-square" src={imageURL} alt={title} />
      {tags && (
        <div className="absolute top-0 left-0 p-2">
          {tags.map((tag) => (
            <p key={tag.key} className="bg-vggreen p-1 text-xs text-white">
              {tag.title}
            </p>
          ))}
        </div>
      )}
      <a
        className="pt-1 px-2 text-vgyellow hover:underline cursor-pointer w-full"
        href={link}
      >
        {title}
      </a>
      <p className="pt-2 px-2 text-xs text-slate-800 w-full">{date}</p>
      {location && (
        <p className="pt-2 px-2 text-xs text-slate-800 w-full">
          <MapPinIcon
            width={16}
            height={16}
            className="mr-1 mb-1 inline-block text-vgred"
          />
          {location}
        </p>
      )}
      {isVirtual && (
        <p className="pt-1 px-2 text-xs text-slate-800 w-full">
          <ComputerDesktopIcon
            width={16}
            height={16}
            className="mr-1 mb-1 inline-block text-vgred"
          />
          Virtual Event
        </p>
      )}
      {isFree && (
        <p className="pt-1 px-2 text-xs text-slate-800 w-full">Free</p>
      )}
    </div>
  );
};

export default EventsCalendarPageCard;
