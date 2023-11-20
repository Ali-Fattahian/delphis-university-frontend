import React, { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import AcademicCalenderCard from "./AcademicCalenderCard";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import AcademicCalenderPageTable from "./AcademicCalenderPage.Table";

const AcademicCalenderPage = () => {
  useDocumentTitle("Academic Calender");

  const [activeDate, setActiveDate] = useState(1);
  const [semesterType, setSemesterType] = useState(1);
  const [eventType, setEventType] = useState(1);

  const dates = [
    {
      key: 1,
      name: "Summer 2019",
    },
    {
      key: 2,
      name: "Fall 2020",
    },
    {
      key: 3,
      name: "Spring 2020",
    },
    {
      key: 4,
      name: "Summer 2020",
    },
    {
      key: 5,
      name: "Fall 2021",
    },
    {
      key: 6,
      name: "Spring 2021",
    },
    {
      key: 7,
      name: "Summer 2021",
    },
    {
      key: 8,
      name: "Fall 2022",
    },
    {
      key: 9,
      name: "Spring 2022",
    },
    {
      key: 10,
      name: "Summer 2022",
    },
    {
      key: 11,
      name: "Fall 2023",
    },
    {
      key: 12,
      name: "Spring 2023",
    },
    {
      key: 13,
      name: "Summer 2023",
    },
    {
      key: 14,
      name: "Fall 2024",
    },
    {
      key: 15,
      name: "Spring 2024",
    },
    {
      key: 16,
      name: "Summer 2024",
    },
    {
      key: 17,
      name: "Spring 2025",
    },
  ];

  const semesters = [
    {
      key: 1,
      name: "Full Terms",
    },
    {
      key: 2,
      name: "Fall 2",
    },
    {
      key: 3,
      name: "Law - Fall Session",
    },
    {
      key: 4,
      name: "Law - Special 1",
    },
    {
      key: 5,
      name: "Law - Special 2",
    },
    {
      key: 6,
      name: "Law - Special 4",
    },
    {
      key: 7,
      name: "ElI - Fall 1",
    },
    {
      key: 8,
      name: "ELI - Fall 2",
    },
  ];

  const events = [
    {
      key: 1,
      name: "All Events",
    },
    {
      key: 2,
      name: "Registration",
    },
    {
      key: 3,
      name: "Graduation",
    },
    {
      key: 4,
      name: "Grading",
    },
    {
      key: 5,
      name: "Final Exams",
    },
    {
      key: 6,
      name: "Events / Holidays",
    },
    {
      key: 7,
      name: "Graduate School",
    },
    {
      key: 8,
      name: "Student Accounts",
    },
  ];

  const tableDates = [
    {
      key: 1,
      year: 2023,
      month: "March",
      events: [
        {
          key: 1,
          day: 6,
          title: "Degree Application Available",
          description:
            "The online degree application in myBama becomes available for Graduate & Undergraduate students.",
        },
        {
          key: 2,
          day: 27,
          title: "Registration for Summer and Fall 2023 begins",
          description:
            "Summer and Fall 2023 registration time assignments are now available.",
        },
      ],
    },
    {
      key: 2,
      year: 2023,
      month: "March",
      events: [
        {
          key: 1,
          day: 6,
          title: "Degree Application Available",
          description:
            "The online degree application in myBama becomes available for Graduate & Undergraduate students.",
        },
        {
          key: 2,
          day: 27,
          title: "Registration for Summer and Fall 2023 begins",
          description:
            "Summer and Fall 2023 registration time assignments are now available.",
        },
      ],
    },
    {
      key: 3,
      year: 2023,
      month: "March",
      events: [
        {
          key: 1,
          day: 6,
          title: "Degree Application Available",
          description:
            "The online degree application in myBama becomes available for Graduate & Undergraduate students.",
        },
        {
          key: 2,
          day: 27,
          title: "Registration for Summer and Fall 2023 begins",
          description:
            "Summer and Fall 2023 registration time assignments are now available.",
        },
      ],
    },
  ];

  const changeDate = (key) => {
    setActiveDate(key);
  };

  const changeSemester = (key) => {
    setSemesterType(key);
  };

  const changeEvent = (key) => {
    setEventType(key);
  };

  return (
    <>
      <Navbar />
      <div className="mt-[36px] min-[720px]:mt-0 w-full bg-neutral-100">
        <div className="w-full bg-neutral-200 p-3 border-b-[1px] border-neutral-50">
          <h1 className="text-neutral-800 text-2xl font-light">
            Academic Calender
          </h1>
        </div>
        <div className="w-full max-w-[800px] m-auto px-4 py-6 border-b-[1px] border-neutral-400">
          {dates.map((date) => (
            <AcademicCalenderCard
              name={date.name}
              key={date.key}
              active={date.key === activeDate}
              onClick={() => changeDate(date.key)}
            />
          ))}
        </div>
        <div className="w-full max-w-[800px] m-auto px-4 py-6 border-b-[1px] border-neutral-400">
          {semesters.map((semester) => (
            <AcademicCalenderCard
              name={semester.name}
              key={semester.key}
              active={semester.key === semesterType}
              onClick={() => changeSemester(semester.key)}
            />
          ))}
        </div>
        <div className="w-full max-w-[800px] m-auto px-4 py-6 border-b-[1px] border-neutral-400">
          {events.map((event) => (
            <AcademicCalenderCard
              name={event.name}
              key={event.key}
              active={event.key === eventType}
              onClick={() => changeEvent(event.key)}
            />
          ))}
        </div>
        <div className="w-full max-w-[800px] m-auto px-6 py-2">
          <AcademicCalenderPageTable info={tableDates} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AcademicCalenderPage;
