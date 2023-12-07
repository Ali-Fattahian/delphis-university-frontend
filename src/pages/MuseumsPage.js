import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const headerImage = require("../assets/images/museums - header.jpeg");

const events = [
  {
    key: 1,
    title:
      "The Modernization of Delphis's Built Environment: The Architecture of Don Buel Schuyler",
    date: ["DEC", "06"],
    time: "10:00 AM-4:30 PM",
    id: 1,
  },
  {
    key: 2,
    title:
      "The Modernization of Delphis's Built Environment: The Architecture of Don Buel Schuyler",
    date: ["DEC", "06"],
    time: "10:00 AM-4:30 PM",
    id: 2,
  },
  {
    key: 3,
    title:
      "The Modernization of Delphis's Built Environment: The Architecture of Don Buel Schuyler",
    date: ["DEC", "06"],
    time: "10:00 AM-4:30 PM",
    id: 3,
  },
];

const news = [
  {
    key: 1,
    title: "UD Museums' Holiday Hours of Operation",
    text: `Happy Holidays from The University of Delphis Museums!`,
    id: 1,
  },
  {
    key: 2,
    title: "UD Museums' Holiday Hours of Operation",
    text: `Happy Holidays from The University of Delphis Museums!`,
    id: 3,
  },
  {
    key: 3,
    title: "UD Museums' Holiday Hours of Operation",
    text: `Happy Holidays from The University of Delphis Museums!`,
    id: 3,
  },
];

const museums = [
  {
    key: 1,
    name: "Delphis Museum of Natural History",
    description: `For more than 110 years, the Delphis Museum of Natural History has celebrated Delphis's natural history through exhibitions, collections, and quality programs of teaching, research, and service. Explore Delphis through remarkable exhibitions and specimen collections detailing the state's natural history and ancient past. Venture out and experience Delphis's natural history and its beautiful rivers and trails firsthand through our camps, expedition, and special programs. Discover what makes Delphis special with Museum events and programming.`,
  },
  {
    key: 2,
    name: "Marvin House Museum",
    description: `Built in 1829, the Marvin House Museum is the oldest building on the University of Delphis's campus. It originally served as a dining hall and steward's residence, and later as a lecture space, post office, and campus hospital.  The Gorgas House is one of four main buildings to survive the destruction of campus in 1945 near the end of the World War II.

    Now, named for the Marvin family that occupied the home from 1879-1953, the Museum houses original Gorgas furnishings, memorabilia, and a collection of 19th century artifacts. The building was added to the National Register of Historic Places in 1971.`,
  },
  {
    key: 3,
    name: "Paul W.George",
    description: `The mission of the Paul W.George Museum is to collect, preserve and exhibit items, and to disseminate information relating to the sports history of the University of Delphis.
    The Paul W.George Museum is dedicated to Educating and inspiring a universal audience about the significant contributions and accomplishments of University of Delphis collegiate athletes. Fostering a sense of history, tradition and excellence; allowing visitors to place past events in clear perspective. Serving as a leading resource to other sports museums, The University of Delphis, its alumni, fans, supporters and other organizations by preserving and interpreting the history of collegiate sports.`,
  },
];

const MuseumsPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full mt-9 min-[720px]:mt-0 bg-neutral-100 p-2">
        <div className="w-full max-w-[732px] m-auto px-2">
          <h3 className="text-3xl font-semibold text-slate-800 my-4">
            The University of Delphis Museums
          </h3>
          <img
            className="object-cover w-full max-h-[15rem]"
            src={headerImage}
            alt="Campus Dining"
          />
          <div className="w-full p-4 bg-slate-600 mt-6">
            <h3 className="text-2xl font-bold text-white">UD Museums Events</h3>
            <div className="flex flex-col gap-5 mt-5 items-center">
              {events.map((e) => (
                <div className="flex flex-col gap-2 text-white" key={e.key}>
                  <h5 className="text-base font-semibold hover:underline">
                    <a href={`/events-calendar/${e.id}`}>{e.title}</a>
                  </h5>
                  <div className="text-xs block font-semibold">
                    <p>
                      <span>{e.date[0]},</span>
                      <span className="ml-1">{e.date[1]}</span>
                    </p>
                  </div>
                  <p className="text-xs">{e.time}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-fit mx-auto p-6 bg-white mt-6 text-black shadow-sm border-[1px] border-neutral-200">
            <h3 className="text-2xl font-bold">News</h3>
            <div className="flex flex-col gap-5 items-center mt-3">
              {news.map((m) => (
                <div className="flex flex-col gap-2 w-full" key={m.key}>
                  <h5 className="text-base font-semibold">{m.title}</h5>
                  <p className="text-slate-700 text-xs">{m.text}</p>
                  <p className="text-xs tracking-wider font-semibold hover:underline text-vggreen">
                    <a href={`/news-center/${m.id}`}>Read Full Story</a>
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-fit mx-auto p-6 bg-vgblue mt-6 text-neutral-800 shadow-sm border-[1px] border-neutral-200">
            <h3 className="text-2xl font-bold text-white">
              Museums Information
            </h3>
            <div className="grid grid-cols-1 gap-4 mt-4">
              {museums.map((m) => (
                <div key={m.key}>
                  <h5 className="text-sm font-bold text-center px-3 py-1 bg-white shadow-sm rounded-t-sm border-[1px] border-neutral-300 border-b-0">
                    {m.name}
                  </h5>
                  <p className="text-xs p-3 bg-neutral-100 border-[1px] border-neutral-300">
                    {m.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MuseumsPage;
