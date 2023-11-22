import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import UsersIcon from "@heroicons/react/24/outline/UsersIcon";
import ArrowRightOnRectangleIcon from "@heroicons/react/24/outline/ArrowRightOnRectangleIcon";
import CalendarIcon from "@heroicons/react/24/outline/CalendarIcon";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const eventDetilsImage = require("../../assets/images/events-details.png");

const eventDetails = {
  title: "Thanksgiving Week - Classes Dismissed",
  date: "Wednesday, November 22, 2023",
  eventType: "Academic Dates & Deadlines",
  targetAudience: [
    {
      key: 1,
      title: "Students",
    },
    {
      key: 2,
      title: "Faculty & Staff",
    },
  ],
  topic: "Academic",
  department: "Academic Dates & Deadlines",
};

const CalendarDetailsPage = () => {
  useDocumentTitle("Event Detail Title");

  return (
    <>
      <Navbar />
      <div className="w-full mt-[36px] min-[720px]:mt-0 bg-neutral-100">
        <div className="w-full bg-vgblue">
          <div className="w-full max-w-[1200px] p-3 flex m-auto justify-between">
            <div className="flex flex-col">
              <span className="text-white tracking-[.5px] text-sm">
                THE UNIVERSITY OF
              </span>
              <span className="text-2xl tracking-[7.5px] text-wide font-semibold text-white">
                DELPHIS
              </span>
            </div>
            <div className="grid grid-cols-1 min-[410px]:grid-cols-2 justify-center gap-2 items-center">
              <a
                href="/login"
                className="transition-all duration-300 px-2 py-1 h-fit border-[1px] border-neutral-100 justify-center flex items-center hover:opacity-80"
              >
                <p className="flex items-center gap-2 text-white">
                  <UsersIcon
                    width={16}
                    height={16}
                    className="text-white inline-block"
                  />
                  Login
                </p>
              </a>
              <a
                href="/register"
                className="transition-all duration-300 px-2 py-1 h-fit border-[1px] border-neutral-100 flex items-center justify-center hover:opacity-80"
              >
                <p className="flex items-center gap-2 text-white">
                  <ArrowRightOnRectangleIcon
                    width={16}
                    height={16}
                    className="text-white inline-block"
                  />
                  Register
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[1200px] mx-auto p-6 border-b-[1px] border-b-neutral-300">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="p-4 flex flex-col gap-3 order-2 sm:order-1">
              <h2 className="text-xl font-semibold">{eventDetails.title}</h2>
              <p className="text-neutral-600 text-sm flex items-center">
                <CalendarIcon
                  width={15}
                  height={15}
                  className="inline-block mr-2"
                />
                {eventDetails.date}
              </p>
            </div>
            <img
              src={eventDetilsImage}
              alt={eventDetails.title}
              className="aspect-square object-cover w-full order-1 sm:order-2"
            />
          </div>
        </div>
        <div className="w-full max-w-[1200px] mx-auto my-6 p-4">
          <h2 className="text-xl font-semibold">Event Details</h2>
          <div className="mt-4 bg-white shadow-md p-3 grid grid-cols-2 sm:grid-cols-4 justify-center gap-4">
            <div className="inline-block">
              <p className="font-semibold text-sm text-vgred mb-2">
                Event Type
              </p>
              <p className="text-xs bg-vgskyblue text-white px-2 py-1 text-center">
                {eventDetails.eventType}
              </p>
            </div>
            <div className="inline-block">
              <p className="font-semibold text-sm text-vgred mb-2">
                Target Audience
              </p>
              {eventDetails.targetAudience.map((t) => (
                <p
                  className="text-xs bg-vgskyblue text-white mb-1 px-2 py-1 text-center"
                  key={t.key}
                >
                  {t.title}
                </p>
              ))}
            </div>
            <div className="inline-block">
              <p className="font-semibold text-sm text-vgred mb-2">Topic</p>
              <p className="text-xs bg-vgskyblue text-white px-2 py-1 text-center">
                {eventDetails.topic}
              </p>
            </div>
            <div className="inline-block">
              <p className="font-semibold text-sm text-vgred mb-2">
                Department
              </p>
              <p className="text-xs bg-vgskyblue text-white  px-2 py-1 text-center">
                {eventDetails.department}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CalendarDetailsPage;
