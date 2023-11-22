import React, { useState } from "react";
import dayjs from "dayjs";
import {
  generateDate,
  months,
  events,
  eventsDescription,
} from "../../components/utilities/calendar";
import cn from "../../components/utilities/cn";
import ChevronLeftIcon from "@heroicons/react/24/outline/ChevronLeftIcon";
import ChevronRightIcon from "@heroicons/react/24/outline/ChevronRightIcon";

const CampusVisitPageCalendar = () => {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);

  return (
    <div className="flex gap-5 justify-center mx-auto items-center flex-col p-4">
      <div className="w-full overflow-hidden">
        <div className="flex justify-between items-center flex-col min-[380px]:flex-row min-[380px]:gap-0 gap-3 min-[380px]:mb-0 mb-3">
          <h1 className="select-none font-semibold">
            {months[today.month()]}, {today.year()}
          </h1>
          <div className="flex gap-10 items-center ">
            <ChevronLeftIcon
              className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(today.month(today.month() - 1));
              }}
            />
            <h1
              className="cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(currentDate);
              }}
            >
              Today
            </h1>
            <ChevronRightIcon
              className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(today.month(today.month() + 1));
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-7">
          {days.map((day, index) => {
            return (
              <p
                key={index}
                className="text-sm text-center h-14 w-14 grid place-content-center text-gray-500 select-none"
              >
                {day}
              </p>
            );
          })}
        </div>

        <div className=" grid grid-cols-7 ">
          {generateDate(today.month(), today.year()).map(
            ({ date, currentMonth, today }, index) => {
              return (
                <div
                  key={index}
                  className="p-2 text-center h-14 grid place-content-center text-sm border-t overflow-hidden"
                >
                  <p
                    className={cn(
                      currentMonth ? "" : "text-gray-400",
                      today ? "bg-vgskyblue text-white" : "",
                      selectDate.toDate().toDateString() ===
                        date.toDate().toDateString()
                        ? "bg-black text-white"
                        : "",
                      `${
                        events[date.toDate().getMonth()].includes(
                          date.date()
                        ) && "bg-vggreen text-white"
                      } h-10 w-10 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none`
                    )}
                    onClick={() => {
                      setSelectDate(date);
                    }}
                  >
                    {date.date()}
                  </p>
                </div>
              );
            }
          )}
        </div>
      </div>
      <div className="w-full flex flex-col gap-2">
        <p className="text-xs font-bold">Legend:</p>
        <div className="w-full flex gap-2">
          <div className="w-4 h-4 bg-vgskyblue ml-2"></div>
          <p className="text-gray-600 text-xs">Today</p>
        </div>
        <div className="w-full flex gap-2">
          <div className="w-4 h-4 bg-vggreen ml-2"></div>
          <p className="text-gray-600 text-xs">Available</p>
        </div>
      </div>
      <div className="w-full sm:px-5">
        <p className="font-semibold text-sm">
          Schedule for {selectDate.toDate().toDateString()}
        </p>
        <div className="grid grid-cols-1 justify-start sm:grid-cols-2 sm:justify-start p-2">
          {events[selectDate.toDate().getMonth()].includes(
            selectDate.toDate().getDate() // Checking if the date has a schedule
          ) ? (
            eventsDescription[selectDate.toDate().getMonth()][
              events[selectDate.toDate().getMonth()].indexOf(
                selectDate.toDate().getDate()
              ) // Extract the schedule of the day in the month
            ].map((event) => (
              <div className="flex flex-col gap-2 py-2" key={event.key}>
                <div className="w-full flex gap-2">
                  <div className="w-4 h-4 bg-vggreen"></div>
                  <p className="text-gray-600 text-xs">{event.title}</p>
                </div>
                <p className="text-gray-500 text-xs">{event.date}</p>
                <p className="text-gray-500 text-xs">{event.text}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No Scheduled</p> // Show this if the day doesn't have any schedule
          )}
        </div>
      </div>
    </div>
  );
};

export default CampusVisitPageCalendar;
