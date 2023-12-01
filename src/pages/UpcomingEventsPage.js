import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const sampleImage = require("../assets/images/International Transfer - header.jpeg");

const cardsArr = [
  // Should come from the backend
  {
    key: 1,
    title: "The Jingle Bar",
    location: "HOTEL CAPSTONE",
    googleMapsLink:
      "https://maps.google.com/?daddr=320%20Paul%20Bryant%20Drive%20Tuscaloosa%20AL",
    imageURL: sampleImage,
    date: "DEC 1",
  },
  {
    key: 2,
    title: "The Jingle Bar",
    location: "HOTEL CAPSTONE",
    googleMapsLink:
      "https://maps.google.com/?daddr=320%20Paul%20Bryant%20Drive%20Tuscaloosa%20AL",
    imageURL: sampleImage,
    date: "DEC 1, DEC 24",
  },
  {
    key: 3,
    title: "The Jingle Bar",
    location: "HOTEL CAPSTONE",
    googleMapsLink:
      "https://maps.google.com/?daddr=320%20Paul%20Bryant%20Drive%20Tuscaloosa%20AL",
    imageURL: sampleImage,
    date: "DEC 1, JAN 15",
  },
  {
    key: 4,
    title: "The Jingle Bar",
    location: "HOTEL CAPSTONE",
    googleMapsLink:
      "https://maps.google.com/?daddr=320%20Paul%20Bryant%20Drive%20Tuscaloosa%20AL",
    imageURL: sampleImage,
    date: "DEC 1",
  },
  {
    key: 5,
    title: "The Jingle Bar",
    location: "HOTEL CAPSTONE",
    googleMapsLink:
      "https://maps.google.com/?daddr=320%20Paul%20Bryant%20Drive%20Tuscaloosa%20AL",
    imageURL: sampleImage,
    date: "DEC 1, DEC 3",
  },
];

const UpcomingEventsPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full bg-neutral-100 p-2 mt-[36px] min-[720px]:mt-0">
        <div className="w-full max-w-[1200px] m-auto">
          <h1 className="text-2xl font-bold text-center mt-4">
            Upcoming Events
          </h1>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
            {cardsArr.map((event) => (
              <div className="flex flex-col bg-white shadow-sm" key={event.key}>
                <img
                  className="object-cover aspect-square"
                  src={event.imageURL}
                  alt={event.title}
                />
                <p className="text-sm font-semibold p-2">{event.title}</p>
                <a
                  className="text-xs font-light cursor-pointer p-2"
                  href={event.googleMapsLink}
                  target="_blank"
                >
                  {event.location}
                </a>
                <div className="mt-4 flex justify-center">
                  <p className="text-sm font-semibold bg-vgblue rounded-t-md text-white p-2">
                    {event.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UpcomingEventsPage;
