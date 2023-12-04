import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import useDocumentTitle from "../hooks/useDocumentTitle";
import ChevronDoubleRightIcon from "@heroicons/react/24/outline/ChevronDoubleRightIcon";

const sampleImage = require("../assets/images/about - events.jpeg");

const awardWinners = [
  {
    key: 1,
    id: 1,
    title: "Student Spotlight: Kimberly Daniels",
    text: `Kimberly is earning her bachelor's degree in Commerce and Business Administration 100% online while working full time and raising a family.`,
    imageURL: sampleImage,
  },
  {
    key: 2,
    id: 2,
    title: "Student Spotlight: Kimberly Daniels",
    text: `Kimberly is earning her bachelor's degree in Commerce and Business Administration 100% online while working full time and raising a family.`,
    imageURL: sampleImage,
  },
  {
    key: 3,
    id: 3,
    title: "Student Spotlight: Kimberly Daniels",
    text: `Kimberly is earning her bachelor's degree in Commerce and Business Administration 100% online while working full time and raising a family.`,
    imageURL: sampleImage,
  },
  {
    key: 4,
    id: 4,
    title: "Student Spotlight: Kimberly Daniels",
    text: `Kimberly is earning her bachelor's degree in Commerce and Business Administration 100% online while working full time and raising a family.`,
    imageURL: sampleImage,
  },
];

const OnlineAwardWinnersPage = () => {
  useDocumentTitle("Student Stories - Distant Digrees");
  const [page, setPage] = useState(1);

  return (
    <>
      <Navbar />
      <div className="mt-[36px] min-[720px]:mt-0 p-2">
        <div className="w-full max-w-[800px] mx-auto">
          <h2 className="text-2xl font-bold text-neutral-800 mt-4">
            Student Stories
          </h2>
          <div className="mt-6 flex flex-col gap-4">
            {awardWinners.map((w) => (
              <div
                key={w.key}
                className="flex gap-3 flex-col sm:flex-row border-[1px] border-neutral-400 bg-neutral-100 shadow-sm"
              >
                <img
                  className="object-cover max-h-[300px]"
                  src={w.imageURL}
                  alt={w.title}
                />
                <div className="p-2">
                  <h2 className="text-base font-bold mb-3 sm:mt-0 text-vgskyblue underline">
                    <a href={`online-award-winners/${w.id}`}>{w.title}</a>
                  </h2>
                  <p className="text-sm font-light text-neutral-700 pb-2">
                    {w.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t-[1px] pt-4 w-full px-2 flex justify-center">
            <div className="flex gap-1">
              <button
                onClick={() => setPage(1)}
                className={`text-xs text-center rounded-sm p-2 border-[1px] ${
                  page === 1 ? "bg-vggreen text-white" : "bg-white text-vggreen"
                }`}
              >
                1
              </button>
              <button
                onClick={() => setPage(2)}
                className={`text-xs text-center rounded-sm p-2 border-[1px] ${
                  page === 2 ? "bg-vggreen text-white" : "bg-white text-vggreen"
                }`}
              >
                2
              </button>
              <button
                onClick={() => setPage(3)}
                className={`text-xs text-center rounded-sm p-2 border-[1px] ${
                  page === 3 ? "bg-vggreen text-white" : "bg-white text-vggreen"
                }`}
              >
                3
              </button>
              <button
                onClick={() => setPage(4)}
                className={`text-xs text-center rounded-sm p-2 border-[1px] ${
                  page === 4 ? "bg-vggreen text-white" : "bg-white text-vggreen"
                }`}
              >
                4
              </button>
              <button
                onClick={() => setPage(5)}
                className={`text-xs text-center rounded-sm p-2 border-[1px] ${
                  page === 5 ? "bg-vggreen text-white" : "bg-white text-vggreen"
                }`}
              >
                <ChevronDoubleRightIcon width={16} height={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OnlineAwardWinnersPage;
