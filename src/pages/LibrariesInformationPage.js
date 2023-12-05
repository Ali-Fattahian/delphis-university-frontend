import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import useDocumentTitle from "../hooks/useDocumentTitle";

const librariesInfo = [
  {
    key: 1,
    name: "Bruno Business Library",
    hours: "7:30 am - 1 am",
    status: "open",
  },
  {
    key: 2,
    name: "Hoole Special Collections",
    hours: "9 am - 8 pm",
    status: "opening soon",
  },
  {
    key: 3,
    name: "Rodgers Library",
    hours: "Open 24hrs",
    status: "closed",
  },
];

const latestEvents = [
  {
    key: 1,
    title: "The Northern Edge of the Gulf of Mexico: Visual Representations...",
    text: `Special Collections Exhibit On Display in Gorgas Library Until February of 2024 
    In The Northern Edge of the Gulf of Mexico: Visual Representations of...`,
    date: [25, "Sep"],
    id: 1,
  },
  {
    key: 2,
    title: "The Northern Edge of the Gulf of Mexico: Visual Representations...",
    text: `Special Collections Exhibit On Display in Gorgas Library Until February of 2024 
    In The Northern Edge of the Gulf of Mexico: Visual Representations of...`,
    date: [28, "Sep"],
    id: 2,
  },
  {
    key: 3,
    title: "The Northern Edge of the Gulf of Mexico: Visual Representations...",
    text: `Special Collections Exhibit On Display in Gorgas Library Until February of 2024 
    In The Northern Edge of the Gulf of Mexico: Visual Representations of...`,
    date: [30, "Sep"],
    id: 3,
  },
];

const latestNews = [
  {
    key: 1,
    title: "Angelo Bruno Business Library Receives National Recognition...",
    text: `Angelo Bruno Business Library Receives National Recognition 
    University Libraries is proud to announce that the Angelo Bruno Business Library is...`,
    date: ["Sep", 25, 2023],
    id: 1,
  },
  {
    key: 2,
    title: "Angelo Bruno Business Library Receives National Recognition...",
    text: `Angelo Bruno Business Library Receives National Recognition 
    University Libraries is proud to announce that the Angelo Bruno Business Library is...`,
    date: ["Sep", 25, 2023],
    id: 2,
  },
  {
    key: 3,
    title: "Angelo Bruno Business Library Receives National Recognition...",
    text: `Angelo Bruno Business Library Receives National Recognition 
    University Libraries is proud to announce that the Angelo Bruno Business Library is...`,
    date: ["Sep", 25, 2023],
    id: 3,
  },
];

const LibrariesInformationPage = () => {
  useDocumentTitle("Libraries Information");

  return (
    <>
      <Navbar />
      <div className="mt-[36px] min-[720px]:mt-0 p-6 bg-neutral-100">
        <div className="max-w-[1200px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
          <div className="p-3 bg-white border-[1px] shadow-sm">
            <div className="flex gap-1 items-center">
              <h3 className="text-xl font-semibold -translate-y-1">Hours</h3>
              <p className="text-xs font-light">Today</p>
            </div>
            <div className="flex flex-col mt-3">
              {librariesInfo.map((l) => (
                <div
                  key={l.key}
                  className="flex gap-2 justify-between text-xs tracking-wide p-1"
                >
                  <p className="font-semibold text-vgblue">{l.name}</p>
                  <p className="font-light text-neutral-600">{l.hours}</p>
                  <p
                    className={`text-center p-1 rounded-sm font-bold text-neutral-200 ${
                      l.status.length > 6 && "bg-neutral-700"
                    } ${l.status === "open" && "bg-vggreen"} ${
                      l.status === "closed" && "bg-vgred"
                    }`}
                  >
                    {l.status}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="p-3 bg-white border-[1px] shadow-sm">
            <h3 className="text-xl font-semibold">Events</h3>
            <div className="flex flex-col mt-3 pb-1">
              {latestEvents.map((e) => (
                <a
                  className="p-2  grid-cols-10 gap-3 items-start transition-all hover:shadow-md"
                  key={e.key}
                  href={`/event-calendar/${e.id}`}
                >
                  <div className="w-2/12 max-w-[40px] align-top inline-block mb-1 mr-2 flex-col justify-center text-center text-[12px] font-semibold">
                    <small className="w-full block bg-vgred px-2 text-white rounded-t-sm">
                      {e.date[1]}
                    </small>
                    <p className="text-black px-2 w-full border-[1px]">
                      {e.date[0]}
                    </p>
                  </div>
                  <div className="text-left w-10/12 inline-block -translate-y-1">
                    <h4 className="text-vgblue font-bold">{e.title}</h4>
                    <p className="text-neutral-700 font-light">{e.text}</p>
                  </div>
                </a>
              ))}
            </div>
            <div className="w-full justify-center text-center">
              <a
                className="text-sm font-semibold text-vggreen hover:underline"
                href="/events-calendar"
              >
                More Events
              </a>
            </div>
          </div>
          <div className="p-3 bg-white border-[1px] shadow-sm">
            <h3 className="text-xl font-semibold">News</h3>
            <div className="flex flex-col mt-3">
              {latestNews.map((n) => (
                <a
                  className="flex flex-col gap-1 border-b-[1px] border-neutral-100 p-2 transition-all hover:bg-neutral-100"
                  key={n.key}
                  href={`/news-center/${n.id}`}
                >
                  <h4 className="text-base font-semibold text-vgblue">
                    {n.title}
                  </h4>
                  <small className="text-xs text-vgyellow">
                    <span className="mr-1">{n.date[0]}</span>
                    <span className="mr-1">{n.date[1]},</span>
                    <span>{n.date[2]}</span>
                  </small>
                  <p className="text-sm text-neutral-600">{n.text}</p>
                </a>
              ))}
            </div>
            <div className="w-full justify-center text-center mt-1">
              <a
                className="text-sm font-semibold text-vggreen hover:underline"
                href="/general-news-center"
              >
                More News
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LibrariesInformationPage;
