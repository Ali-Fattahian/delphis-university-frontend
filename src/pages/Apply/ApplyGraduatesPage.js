import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ApplyGraduatesHeader from "./ApplyGraduates.Header";
import LinkButton from "../../components/utilities/LinkButton";
import InformationCircleIcon from "@heroicons/react/24/outline/InformationCircleIcon";

const howToImage = require("../../assets/images/apply graduates - how to.jpeg");
const extraImage = require("../../assets/images/apply undergraduates - extra.jpeg");

const ApplyGraduatesPage = () => {
  return (
    <>
      <Navbar />
      <ApplyGraduatesHeader />
      <div className="w-full p-2 bg-vgskyblue">
        <p className="tracking-wide text-white text-2xl font-semibold leading-loose w-full max-w-[1200px] m-auto">
          Apply Now
        </p>
      </div>
      <div className="w-full px-3 py-6">
        <div className="w-full max-w-[1200px] m-auto">
          <h2 className="text-3xl pb-2 text-vgblue border-b-[1px] border-b-neutral-200">
            How to Apply
          </h2>
          <p className="text-neutral-600 mt-2">
            Thank you for your interest in The University of Delphis Graduate
            School. We're proud that you have chosen us for these important next
            steps in your career.
          </p>
          <div className="p-2 bg-neutral-100 mt-4 text-neutral-600">
            <h3 className="font-semibold">To Apply:</h3>
            <div className="text-sm px-6 my-2">
              <p>
                1. Review UD's application materials and submission requirements
                (see below).
              </p>
              <p>2. Log in and complete your application.</p>
              <p>
                3. Check your application regularly to verify your application
                status and upload additional materials.
              </p>
            </div>
            <LinkButton
              name="Apply Now"
              link="/apply-now"
              classes="w-9/12 text-center max-w-[600px] px-3 m-auto block"
            />
          </div>
          <img
            src={howToImage}
            alt="How to Apply"
            className=" w-11/12 aspect-square object-cover max-w-[540px] mx-auto mt-4"
          />
          <h2 className="mt-3 text-3xl pb-2 text-vgblue border-b-[1px] border-b-neutral-200">
            Application Materials and Submission Requirements
          </h2>
          <p className="text-neutral-600 mt-2">
            Though it isn't necessary to have all materials on-hand at the time
            of your application (e.g. letters of recommendation), we recommend
            you obtain and properly format as many of these items as possible
            before you begin.
          </p>
          <img
            src={extraImage}
            alt="How to Apply"
            className=" w-11/12 aspect-square object-cover max-w-[540px] mx-auto mt-4"
          />
          <div className="p-2 bg-neutral-100 mt-4 text-neutral-600">
            <h3 className="font-semibold">
              For Master's or Doctoral students:
            </h3>
            <ul className="text-xs px-6 my-2 list-disc list-inside space-y-2">
              <li>An online application form</li>
              <li>Application fee payment</li>
              <li>Statement of purpose</li>
              <li>
                Unofficial admission scores (GRE, GMAT, MAT or MCAT; if required
                by the department)
              </li>
              <li>Unofficial transcripts</li>
              <li>Letters of recommendation</li>
              <li>Language scores* (non-native English speakers)</li>
            </ul>
            <h3 className="font-semibold">For non-degree-seeking students:</h3>
            <ul className="text-xs px-6 my-2 list-disc list-inside space-y-2">
              <li>An online application form</li>
              <li>Unofficial transcripts</li>
              <li>Language scores* (non-native English speakers)</li>
            </ul>
            <p className="text-sm mt-4">
              <InformationCircleIcon
                width={16}
                height={16}
                className="inline-block text-vgred mr-2 mb-1"
              />
              Non-native English speakers who meet certain requirements may not
              need to provide language test scores.
            </p>
          </div>
          <h2 className="mt-3 text-3xl pb-2 text-vgblue border-b-[1px] border-b-neutral-200">
            Deadlines
          </h2>
          <p className="text-neutral-600 mt-2">
            Most departments have rolling or semester-specific deadlines for
            admission, scholarships, assistantships and fellowships. We
            recommend checking in with your program director before beginning
            your application.
          </p>
          <p className="text-neutral-600 mt-2">
            To allow time for visa processing, international applicants should
            complete their application well ahead of their first enrolled
            semester. For many, this means completing your fall application by
            mid-Spring. For a complete list of international requirements and
            deadlines, visit our{" "}
            <a
              href="/international-admissions"
              className="text-vgyellow mr-1 hover:underline"
            >
              international admissions
            </a>
            page.
          </p>
          <h2 className="mt-3 text-3xl pb-2 text-vgblue border-b-[1px] border-b-neutral-200">
            Number of Applications
          </h2>
          <p className="text-neutral-600 mt-2">
            An applicant may apply to only two programs at a time. To apply to a
            second program, please submit a second complete application packet
            and application fee.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ApplyGraduatesPage;
