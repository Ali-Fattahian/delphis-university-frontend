import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import useDocumentTitle from "../hooks/useDocumentTitle";

const headerImage = require("../assets/images/student community engagement center - header.jpeg");

const StudentCommunityEngagementCenterPage = () => {
  useDocumentTitle("Student Community Engagement Center");

  return (
    <>
      <Navbar />
      <div className="w-full mt-9 min-[720px]:mt-0 p-2">
        <div className="w-full max-w-[732px] m-auto px-2 text-neutral-600">
          <h3 className="text-3xl font-semibold text-slate-800 my-4">
            Student Community Engagement Center
          </h3>
          <img
            className="object-cover w-full max-h-[15rem]"
            src={headerImage}
            alt="Community Affairs"
          />
          <p className="mt-4 p-3 text-sm bg-neutral-100 border-[1px]">
            The mission of The University of Alabama’s Student Community
            Engagement Center is to engage students and community partners in
            mutually beneficial partnerships to identify and address critical
            community opportunities by connecting engagement to the University’s
            missions of teaching, research, and service.
          </p>
          <p className="mt-2 text-xs">
            All students at The University of Alabama are welcome to visit the
            SCEC in Capital Hall and explore ways to grow their community
            partnerships. The SCEC Leadership Academy and Anchor Organizations
            provide additional opportunities to engage!
          </p>
          <h3 className="text-3xl font-semibold text-vgred mt-6 mb-3">
            We're Listening
          </h3>
          <div className="p-4 bg-vgblue text-white">
            <p className="text-sm italic">
              UA’s student chapter of the Public Relations Council of Alabama's
              mission is to provide real-world experiences for all of our
              members through active engagement, so when we heard about this
              space, the main selling point was that students would be able to
              do real-world work.
            </p>
            <p className="mt-2 text-xs">Kate McAbee, Public Relations Major</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-bold mt-10">
              Anchor Organizations in the SCEC are student organizations that
              seek to deepen and strengthen their community-engaged scholarship.
            </p>
            <p className="mt-1 text-sm">
              These organization have dedicated office space in the SCEC in
              Capital Hall, work to develop an action plan for advancing their
              community partnerships and engagement initiatives, and assess and
              evaluate the impact of their work.
            </p>
          </div>
          <div className="mt-10 bg-vggreen p-4 text-white">
            <h4 className="text-xl font-semibold">SCEC Leadership Academy</h4>
            <p className="mt-4 text-sm">
              The goal of the SCEC Leadership Academy will be to develop student
              leaders of community-engaged scholarship at The University of
              Alabama. Each year, a cohort of undergraduate and graduate
              students will meet monthly to discuss the fundamentals of
              community engagement, strategies for leading community-engaged
              scholarship, and emerging trends. Members of the SCEC Leadership
              Academy will
            </p>
            <ul className="list-inside list-disc [&>li]:py-2 mt-2 text-sm">
              <li>
                Serve as campus and community leaders to advance
                community-engaged scholarship.
              </li>
              <li>
                Take a leadership role in SCOPE (Scholars for Community
                Outreach, Partnership, and Engagement).
              </li>
              <li>
                Act as liaisons between the Student Community Engagement Center
                and other university organizations and networks in which they
                are engaged.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudentCommunityEngagementCenterPage;
