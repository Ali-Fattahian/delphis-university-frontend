import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const cardsArr = [
  {
    key: 1,
    title: "Heating Things UP",
    month: "November",
    day: "28",
    weekDay: "Tuesday",
    time: "11:00 AM",
    link: `event-calender/${1}`,
  },
  {
    key: 2,
    title: "Intuitive Eating Tuesdays",
    month: "November",
    day: "28",
    weekDay: "Tuesday",
    time: "12:00 PM",
    link: `event-calender/${2}`,
  },
  {
    key: 3,
    title: "Organization Transition 101 Workshop",
    month: "November",
    day: "28",
    weekDay: "Tuesday",
    time: "12:30 PM",
    link: `event-calender/${3}`,
  },
  {
    key: 4,
    title: "Organization Transition 101 Workshop",
    month: "November",
    day: "28",
    weekDay: "Tuesday",
    time: "4:30 PM",
    link: `event-calender/${4}`,
  },
];

const StudentEventsPage = () => {
  return (
    <>
      <Navbar />
      <div className="mt-[36px] min-[720px]:mt-0 text-neutral-600 p-4">
        <div className="w-full max-w-[800px] mx-auto">
          <p className="mt-4 text-xs">
            The nomination period opens on September 1, 2023. The deadline for
            nominations is 11:59 p.m. on November 1, 2023. All members of the UA
            community may nominate qualified students, faculty and staff.
          </p>
          <h2 className="mt-4 font-semibold text-base border-b-[1px] border-vgyellow border-spacing-1">
            Nominations/Letters of Reference
          </h2>
          <div className="grid grid-cols-1 min-[420px]:grid-cols-2 sm:grid-cols-3">
            {cardsArr.map((card) => (
              <div
                key={card.key}
                className="max-w-[320px] flex items-center gap-2 p-2"
              >
                <div className="h-full items-center bg-nuetral-300 flex flex-col text-sm bg-neutral-200 border-[1px] border-neutral-300 rounded-sm px-2">
                  <p className="font-semibold">{card.day}</p>
                  <p>{card.month.slice(0, 3).toUpperCase()}</p>
                </div>
                <div className="text-xs text-neutral-600 flex flex-col gap-2 justify-center h-full flex-2">
                  <a
                    href={card.link}
                    className="text-vggreen underline cursor-pointer"
                  >
                    {card.title}
                  </a>
                  <div className="flex gap-1">
                    <p>{card.weekDay}</p>
                    <p>-</p>
                    <p>{card.month}</p>
                  </div>
                  <div className="flex gap-1">
                    <p>{card.day}</p>
                    <p>@</p>
                    <p>{card.time}</p>
                  </div>
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

export default StudentEventsPage;
