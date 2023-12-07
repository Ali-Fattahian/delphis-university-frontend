import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const TransferRequirementsPage = () => {
  return (
    <>
      <Navbar />
      <div className="mt-[36px] min-[720px]:mt-0 w-full p-4">
        <div className="w-full max-w-[1200px] mx-auto text-neutral-700">
          <h1 className="text-5xl font-semibold mt-6">Transfer Requirements</h1>
          <h1 className="text-3xl font-semibold mt-8">Transfer Students</h1>
          <ul className="list-disc list-inside [&>li]:py-1 mt-4 text-sm">
            <li>2.0 overall college GPA</li>
            <li>
              24 transferable semester hours or 36 transferable quarter hours
              (excludes technical, remedial and vocational courses)
            </li>
            <li>
              If you're currently a freshman or have fewer than the required
              transferable hours, additional high school records will be
              required including a high school transcript and ACT/SAT score.
              <li>
                Because of limited testing opportunities throughout the United
                States, The University of Delphis will not require standardized
                ACT or SAT scores from students applying for the Spring, Summer
                or Fall 2024 semesters. The presence of a score will not create
                an unfair advantage or disadvantage to students applying for
                admission.
              </li>
            </li>
          </ul>
          <div className="w-full text-left mt-4">
            <a
              href="/login"
              className="text-sm text-vggreen underline cursor-pointer"
            >
              Apply Now
            </a>
          </div>
          <h1 className="text-3xl font-semibold mt-6">Transcripts</h1>
          <p className="mt-4 text-sm">
            Official transcripts are those submitted directly to UD in a sealed
            envelope by the originating institution. Official electronic
            transcripts are those submitted directly to UD by the originating
            institution, normally through a third-party provider such as the
            National Student Clearinghouse or Parchment. UD will only accept a
            transcript directly from the student provided it is delivered in the
            envelope sealed by the originating institution and marked as
            official.
          </p>
          <p className="mt-6 text-sm font-semibold">
            Official transcripts being sent via regular mail should be sent to
            the following mailing address:
          </p>
          <ul className="mt-4 text-sm">
            <li>Office of the University Register</li>
            <li>The University of Delphis</li>
            <li>Box 947638</li>
            <li>Delphis City, AL 3157-4817</li>
          </ul>
          <p className="mt-6 text-sm font-semibold">
            Official transcripts being sent via FedEx, UPS or other carrier
            should be sent to the following physical address:
          </p>
          <ul className="mt-4 text-sm">
            <li>Office of the University Register</li>
            <li>The University of Delphis</li>
            <li>203 campus drive</li>
            <li>Student Services Center Delphis City, AL 3217-9837</li>
          </ul>
          <h1 className="text-3xl font-semibold mt-6">Transient Students</h1>
          <p className="mt-6 text-sm">
            Admission as a transient (visiting) student may be granted for any
            term. Standard application procedures must be followed. Approval may
            be given on the basis of an official statement of good standing from
            the last institution attended. Transient status may be granted for
            only one term.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TransferRequirementsPage;
