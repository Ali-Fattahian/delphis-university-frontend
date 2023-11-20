import React, { useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import EventsCalenderPageCard from "./EventsCalenderPage.Card";

const EventsCalenderPage = () => {
  useDocumentTitle("Events Calender");
  const [show, setShow] = useState(0);
  const image = require("../../assets/images/Tour - eating.jpeg");

  const events = [
    {
      key: 1,
      title: "Thanksgiving Week - Classes Dismissed",
      date: "Mon, Nov 20, 2023",
      tags: [
        {
          key: 1,
          title: "Academic Dates & Deadlines",
        },
      ],
      free: false,
      virtual: false,
      imageURL: image,
      link: "/",
      location: "Gorgas Library, 2nd Floor , Quad Entrance/Foyer",
      isVirtual: false,
    },
    {
      key: 2,
      title: "The Northern Edge of the Gulf of Mexico",
      date: "Mon, Nov 20, 2023",
      tags: false,
      free: false,
      virtual: false,
      imageURL: image,
      link: "/",
      isVirtual: true,
    },
    {
      key: 3,
      title: "Thanksgiving Week - Classes Dismissed",
      date: "Mon, Nov 20, 2023",
      tags: false,
      free: true,
      virtual: false,
      imageURL: image,
      link: "/",
      isVirtual: true,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="w-full mt-[36px] min-[720px]:mt-0 bg-neutral-100">
        <div className="w-full max-w-[1200px] m-auto p-4">
          <div className="border-b-[1px] border-neutral-300">
            <h2 className="text-2xl font-semibold p-2">Events</h2>
          </div>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 text-center gap-4 max-w-[800px] mx-auto justify-center text-vgblue shadow-sm px-2 py-4">
            <div className="flex flex-col group">
              <h3
                className="text-1xl cursor-pointer overflow-y-hidden"
                onClick={() => setShow(0)}
              >
                By Date
              </h3>
              <div className="transition-all duration-300 w-full h-[1px] bg-vgblue scale-0 group-hover:scale-100"></div>
            </div>
            <div className="flex flex-col group">
              <h3
                className="text-1xl cursor-pointer overflow-y-hidden"
                onClick={() => setShow(1)}
              >
                Trending
              </h3>
              <div className="transition-all duration-300 w-full h-[1px] bg-vgblue scale-0 group-hover:scale-100"></div>
            </div>
            <div className="flex flex-col group">
              <h3
                className="text-1xl cursor-pointer overflow-y-hidden"
                onClick={() => setShow(2)}
              >
                Academic Calender
              </h3>
              <div className="transition-all duration-300 w-full h-[1px] bg-vgblue scale-0 group-hover:scale-100"></div>
            </div>
            <div className="flex flex-col group">
              <h3
                className="text-1xl cursor-pointer overflow-y-hidden"
                onClick={() => setShow(3)}
              >
                Student Events
              </h3>
              <div className="transition-all duration-300 w-full h-[1px] bg-vgblue scale-0 group-hover:scale-100"></div>
            </div>
          </div>
          {show === 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center w-full max-w-[800px] mx-auto my-6">
              {events.map((event) => (
                <EventsCalenderPageCard
                  key={event.key}
                  imageURL={event.imageURL}
                  title={event.title}
                  tags={event.tags}
                  date={event.date}
                  location={event.location}
                  isFree={event.free}
                  link={event.link}
                  isVirtual={event.isVirtual}
                />
              ))}
            </div>
          )}
          {show === 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center w-full max-w-[800px] mx-auto my-6">
              {events.map((event) => (
                <EventsCalenderPageCard
                  key={event.key}
                  imageURL={event.imageURL}
                  title={event.title}
                  tags={event.tags}
                  date={event.date}
                  location={event.location}
                  isFree={event.free}
                  link={event.link}
                  isVirtual={event.isVirtual}
                />
              ))}
            </div>
          )}
          {show === 2 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center w-full max-w-[800px] mx-auto my-6">
              {events.map((event) => (
                <EventsCalenderPageCard
                  key={event.key}
                  imageURL={event.imageURL}
                  title={event.title}
                  tags={event.tags}
                  date={event.date}
                  location={event.location}
                  isFree={event.free}
                  link={event.link}
                  isVirtual={event.isVirtual}
                />
              ))}
            </div>
          )}
          {show === 3 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center w-full max-w-[800px] mx-auto my-6">
              {events.map((event) => (
                <EventsCalenderPageCard
                  key={event.key}
                  imageURL={event.imageURL}
                  title={event.title}
                  tags={event.tags}
                  date={event.date}
                  location={event.location}
                  isFree={event.free}
                  link={event.link}
                  isVirtual={event.isVirtual}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventsCalenderPage;
