import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import useDocumentTitle from "../hooks/useDocumentTitle";

const headerImage = require("../assets/images/faculty community engagement tour - header.jpeg");

const days = [
  // Comes from backend
  {
    key: 1,
    weekday: "Wednesday",
    date: "May 10, 2023",
    locations: [
      {
        key: 1,
        title: "Jasper",
      },
      {
        key: 2,
        title: "Walker County",
      },
      {
        key: 3,
        title: "Gordo",
      },
      {
        key: 4,
        title: "Pickens County",
      },
      {
        key: 5,
        title: "Alberta",
      },
      {
        key: 6,
        title: "Delphis County",
      },
    ],
  },
  {
    key: 2,
    weekday: "Wednesday",
    date: "May 10, 2023",
    locations: [
      {
        key: 1,
        title: "Jasper",
      },
      {
        key: 2,
        title: "Walker County",
      },
      {
        key: 3,
        title: "Gordo",
      },
      {
        key: 4,
        title: "Pickens County",
      },
      {
        key: 5,
        title: "Alberta",
      },
      {
        key: 6,
        title: "Delphis County",
      },
    ],
  },
  {
    key: 3,
    weekday: "Wednesday",
    date: "May 10, 2023",
    locations: [
      {
        key: 1,
        title: "Jasper",
      },
      {
        key: 2,
        title: "Walker County",
      },
      {
        key: 3,
        title: "Gordo",
      },
      {
        key: 4,
        title: "Pickens County",
      },
      {
        key: 5,
        title: "Alberta",
      },
      {
        key: 6,
        title: "Delphis County",
      },
    ],
  },
];

const FacultyCommunityEngagementTourPage = () => {
  useDocumentTitle("New Faculty Community Engagement Tour");

  return (
    <>
      <Navbar />
      <div className="w-full mt-9 min-[720px]:mt-0 p-2">
        <div className="w-full max-w-[732px] m-auto px-2 text-neutral-600">
          <h3 className="text-3xl font-semibold text-slate-800 my-4">
            New Faculty Community Engagement Tour
          </h3>
          <img
            className="object-cover w-full max-h-[15rem]"
            src={headerImage}
            alt="Community Affairs"
          />
          <h3 className="text-xl font-bold text-vgred mt-4">About the Tour</h3>
          <p className="mt-3 text-sm">
            The Office of Academic Affairs is pleased to collaborate with the
            Division of Community Affairs and the Graduate School to host the
            annual New Faculty Community Engagement Tour.
          </p>
          <p className="mt-4 text-xs">
            The New Faculty Community Engagement Tour engages early career
            faculty and advanced graduate students in three, day-long tours of
            West Delphis and the Delphis Black Belt. Travelers have
            opportunities to develop innovative partnerships with community
            members and other campus researchers interested in community-based
            approaches to addressing community needs. Those who are involved in
            or interested in research that contributes to their discipline while
            making a positive impact on external stakeholders in our communities
            should participate.
          </p>
          <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 mt-6 gap-3">
            {days.map((day, i) => (
              <day
                key={day.key}
                className="p-4 even:bg-slate-200 odd:bg-vggreen odd:text-white"
              >
                <h3 className="text-xl font-light mb-1">
                  <span className="font-bold mr-1">DAY {i + 1}</span>
                  {day.weekday}, {day.date}
                </h3>
                <div>
                  {day.locations.map((location, i) => (
                    <p
                      key={location.key}
                      className="text-sm font-bold inline-block"
                    >
                      {location.title}
                      {day.locations.length - 1 !== i && (
                        <span className="mx-2">|</span>
                      )}
                    </p>
                  ))}
                </div>
              </day>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FacultyCommunityEngagementTourPage;
