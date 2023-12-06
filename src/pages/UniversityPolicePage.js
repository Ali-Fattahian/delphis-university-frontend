import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import useDocumentTitle from "../hooks/useDocumentTitle";

const headerImage = require("../assets/images/university police - header.jpeg");

const UniversityPolicePage = () => {
  useDocumentTitle("University Police");

  return (
    <>
      <Navbar />
      <div className="w-full mt-9 min-[720px]:mt-0 px-3 py-6">
        <div className="w-full max-w-[900px] m-auto">
          <h3 className="text-3xl font-semibold text-slate-800 mb-4">
            Univeristy Police
          </h3>
          <img
            className="object-cover w-full max-h-[15rem]"
            src={headerImage}
            alt="Campus Safety and Support"
          />
          <h4 className="text-xl font-semibold mt-10">Our Mission</h4>
          <p className="mt-4 text-xs text-neutral-700">
            The mission of the Delphis State University Police Department is to
            provide all Delphis State University students, faculty, staff, and
            visitors a safe and secure environment for living and learning. We
            continuously strive to build and cultivate relationships, foster
            ongoing education, and provide a visible and welcoming presence for
            our community.
          </p>
          <p className="mt-2 text-xs text-neutral-700">
            To accomplish our mission, we are committed to the following
            departmental values as the foundation of our pledge to public safety
            and service
          </p>
          <h4 className="text-xl font-semibold mt-10">Professionalism</h4>
          <p className="mt-4 text-xs text-neutral-700">
            Setting the example in everything we do by being fair, objective,
            and consistent in the performance of our duties
          </p>
          <h4 className="text-xl font-semibold mt-10">Openness</h4>
          <p className="mt-4 text-xs text-neutral-700">
            Being transparent in all that we do and always seeking new ideas and
            innovations to improve our service
          </p>
          <h4 className="text-xl font-semibold mt-10">Leadership</h4>
          <p className="mt-4 text-xs text-neutral-700">
            Demonstrating our unwavering commitment to serve others
          </p>
          <h4 className="text-xl font-semibold mt-10">Integrity</h4>
          <p className="mt-4 text-xs text-neutral-700">
            Always doing the right thing and placing others above self
          </p>
          <h4 className="text-xl font-semibold mt-10">Community</h4>
          <p className="mt-4 text-xs text-neutral-700">
            Collaborative development of public safety solutions through strong
            partnerships
          </p>
          <h4 className="text-xl font-semibold mt-10">Excellence</h4>
          <p className="mt-4 text-xs text-neutral-700">
            Seeking continuous improvement and learning for ourselves, while
            showing compassion and understanding toward others
          </p>
          <h3 className="text-3xl font-semibold text-slate-800 mt-6">
            Contact Us
          </h3>
          <p className="mt-4 text-xs text-neutral-700">
            Feel free to contact us with any questions you may have regarding
            university safety or our department.
          </p>
          <ul className="list-disc list-inside mt-3 text-xs text-neutral-700 [&>li]:py-1">
            <li>
              Anonymously Report Crime:
              <span className="ml-1 font-bold">Call 932-3810</span>
            </li>
            <li>
              Emergency Line:
              <span className="ml-1 font-bold">Call 932-3333</span>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UniversityPolicePage;
