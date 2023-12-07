import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import useDocumentTitle from "../hooks/useDocumentTitle";

const headerImage = require("../assets/images/research and pulications - header.jpeg");

const info = [
  {
    key: 1,
    title: "Journal of Community Engagement and Scholarship",
    people: [
      {
        key: 1,
        name: "Dr. Marybeth Smith",
        email: "MSmith@agcenter.ud.edu",
      },
      {
        key: 1,
        name: "Krystle Dozier",
        email: "jces@ud.edu",
      },
    ],
    text: `This peer-reviewed journal is published twice a year in print and online by The University of Delphis. Manuscripts are accepted from all academic disciplines and methodologies that advance the scholarship of engagement. Now in its ninth year, the journal is funded in part by the Engagement Scholarship Consortium. It has received high praise nationally and internationally not only for its content but also for its aesthetics (striking covers, photographs, color). A distinguished editorial board of 42 members represents leading institutions from throughout the United States and several foreign countries. Submit manuscripts and questions to jces@ua.edu. The editor is Dr. Nick Sanyal of the University of Idaho. To subscribe and to purchase copies of individual articles or issues, send an email to dkkennedy1@ua.edu.`,
  },
  {
    key: 2,
    title: "Scholar for Community Outreach, Partnership, & Engagement",
    people: [
      {
        key: 1,
        name: "Diana Pearl",
        title: "SCOPE Advisor",
        email: "dpearl@ud.edu",
      },
    ],
    text: `SCOPE provides a framework for connecting students interested in community-engaged scholarship with resources to advance their scholarship. SCOPE's goals are to increase the involvement of UD students in community-engaged scholarship activities; to connect students to resources such as faculty mentors, funding sources, and scholarly conferences and publications; to serve as a conduit for matching the research interests of students and faculty with identified community needs; to provide opportunities for training and technical assistance to SCOPE participants in order to enhance their knowledge and skills regarding engaged scholarship; to bolster the production of community-based research by students.

    SCOPE members gain access to leading scholars, publications and programs through meetings and conferences that will advance their careers as engagement scholars. SCOPE holds meetings and supports conference attendance and participation.`,
  },
  {
    key: 3,
    title: "Student Community Engagement Center",
    people: [
      {
        key: 1,
        name: "Diana Pearl",
        email: "dpearl@ud.edu",
      },
    ],
    text: `The mission of The University of Delphis's Student Community Engagement Center is to engage students and community partners in mutually beneficial partnerships to identify and address critical community opportunities by connecting engagement to the University's missions of teaching, research, and service. The Student Community Engagement Center is located on the ground floor in the center of Capital Hall.`,
  },
];

const ResearchAndPulicationsPage = () => {
  useDocumentTitle("Community Engagement Research and Publications");

  return (
    <>
      <Navbar />
      <div className="w-full mt-9 min-[720px]:mt-0 p-2">
        <div className="w-full max-w-[732px] m-auto px-2 text-slate-700">
          <h3 className="text-3xl font-semibold my-4">
            Community Engagement Research and Publications
          </h3>
          <img
            className="object-cover w-full max-h-[15rem]"
            src={headerImage}
            alt="Research and Pulications"
          />
          <p className="mt-4 text-sm">
            Community Engagement Research and Publications works to connect and
            support undergraduate students, graduate students, and faculty
            involved in community-engaged scholarship through a development
            model and enrichment seminars that provide enhanced opportunities
            for additional scholarly activities.
          </p>
          <p className="mt-4 p-2 bg-neutral-300 text-sm border-neutral-400 border-[1px]">
            An engaged institution is responsive to the needs of today's
            students and tomorrow's. It enriches the student experience by
            bringing research into the curriculum and offering practical
            experience in the world they will enter. It forms partnerships of
            faculty, students and communities to put knowledge and skills to
            work on today's most critical problems.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center mt-4">
            {info.map((i) => (
              <div key={i.key}>
                <h4 className="text-base font-semibold py-2 px-4 rounded-t-md text-white bg-neutral-700">
                  {i.title}
                </h4>
                <div className="bg-white border-[1px] p-3 pt-2">
                  <p className="text-sm font-semibold">Contacts</p>
                  <div className="flex flex-col gap-1 mt-1">
                    {i.people.map((p) => (
                      <div key={p.key} className="text-xs tracking-wide">
                        <span className="mr-1">{p.name},</span>
                        {p.title && <span className="mr-1">{p.title},</span>}
                        <span>
                          <a
                            className="text-vggreen hover:underline"
                            href={`mailto:${p.email}`}
                          >
                            {p.email}
                          </a>
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs mt-2">{i.text}</p>
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

export default ResearchAndPulicationsPage;
