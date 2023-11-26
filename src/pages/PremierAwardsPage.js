import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const PremierAwardsPage = () => {
  const [studentResume, setStudentResume] = useState(null);
  const [studentEssay, setStudentEssay] = useState(null);
  const [studentRefrenceName, setStudentRefrenceName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentGradDate, setStudentGradDate] = useState("");
  const [letterOfRefrence, setLetterOfRefrence] = useState(null);
  const [staffCV, setStaffCV] = useState(null);
  const [showStudentApplyForm, setShowStudentApplyForm] = useState(false);
  const [showSubmitNominationForm, setShowSubmitNominationForm] =
    useState(false);
  const [showCVForm, setShowCVForm] = useState(false);

  return (
    <>
      <Navbar />
      <div className="mt-[36px] min-[720px]:mt-0 text-neutral-600">
        <div className="w-full p-3 border-b-[1px] border-neutral-300 bg-neutral-200">
          <h2 className="text-xl mx-auto max-w-[1200px]">Apply/Nominate</h2>
        </div>
        <div className="w-full max-w-[800px] mx-auto p-2 text-sm">
          <p>
            Students who believe they are qualified are strongly encouraged to
            apply. Students are encouraged to fill out the application to be
            considered and nominations are also welcome. Students, faculty, and
            staff may also be nominated for an award.
          </p>
          <p className="mt-2">
            The nomination period opens on September 1, 2023. The deadline for
            nominations is 11:59 p.m. on November 1, 2023. All members of the UA
            community may nominate qualified students, faculty and staff.
          </p>
          <p className="mt-2">
            The student application period opens on September 1, 2023. The
            deadline for applications is 11:59 p.m. on November 15, 2023. Only
            students may apply for Premier Awards (all others must be
            nominated).
          </p>
          <p className="mt-2">
            Please note, all portions of the student application, including the
            required essay, are due by the November 15th deadline. Applicants
            should note that their reference may submit his/her letter of
            recommendation through the nomination form; applicants should submit
            their applications with enough time for recommenders to submit their
            letter before the deadline. Students can only apply for one award.
          </p>
          <p className="mt-2">
            After nominations are received, the individual being nominated will
            receive a request to complete the award application by the November
            15th deadline. Students that are being nominated will be required to
            submit their resume and essay. Faculty/Staff that are being
            nominated will be required to submit their resume/CV.
          </p>
          <p className="mt-2">
            Your application/nomination information will be saved for 2-3 days
            if you need to complete it at a later time. Be sure to utilize the
            same browser and computer to complete your application/nomination.
          </p>
          <p className="mt-2">
            Recipients will receive a monetary award and special recognition at
            an awards banquet in February.
          </p>
          <h2 className="mt-4 font-semibold text-base border-b-[1px] border-vgyellow border-spacing-1">
            Student Applications
          </h2>
          <p className="mt-3">
            Any student that meets the criteria may apply. You may only apply
            for one award. The application must be filled out in one sitting and
            you will need to make sure your reference is aware so that they have
            time to complete their portion of the application (letter of
            reference attachment). Please have the following ready before
            starting the application:
          </p>
          <ul className="list-disc mt-2 list-inside [&>li]:py-1">
            <li>
              Resume (with name and contact information removed for blinded
              application process - see note below)
            </li>
            <li>Award Specified Essay</li>
            <li>Letter of Reference Name and Email</li>
            <li>Anticipated Graduation Date</li>
          </ul>
          <p className="mt-2">
            *If you are applying on or near the deadline, it is heavily advised
            to make sure your reference knows their portion of the application
            (letter of reference attachment) is due by 11:59 PM on November
            15th.*
          </p>
          <p className="mt-2">
            Special Note: The awards committee reviews blind applications, so it
            is important to remove names, contact and other identifying
            information from resumes, essays and letters of reference before
            uploading. More detailed instructions for file uploads are included
            in the application and nomination forms.
          </p>
          <button
            onClick={() => setShowStudentApplyForm((prevState) => !prevState)}
            className="px-4 py-2 mt-2 w-full text-center mx-auto bg-vgyellow  text-white border-2 border-white shadow-sm hover:shadow-[inset_0_0_10px_rgba(201,157,45,0.8)] shadow-vgyellow"
          >
            Apply(Students Only)
          </button>
          {showStudentApplyForm && (
            <div>
              <form
                method="post"
                encType="multipart/form-data"
                className="grid grid-cols-1 justify-center sm:grid-cols-2 p-3 gap-2"
              >
                <label class="block mt-4">
                  <span class="text-xs font-semibold px-1">Choose Resume</span>
                  <input
                    value={studentResume}
                    onChange={(e) => setStudentResume(e.target.value)}
                    type="file"
                    class="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100 mt-1
                    "
                    id="student-resume"
                    required
                  />
                </label>
                <label class="block mt-4">
                  <span class="text-xs font-semibold px-1">
                    Choose Award Essay
                  </span>
                  <input
                    value={studentEssay}
                    onChange={(e) => setStudentEssay(e.target.value)}
                    type="file"
                    class="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100 mt-1
                    "
                    id="student-essay"
                    required
                  />
                </label>
                <label class="block mt-4">
                  <span class="text-xs font-semibold px-1">
                    Choose Letter of Refrence
                  </span>
                  <input
                    value={studentRefrenceName}
                    onChange={(e) => setStudentRefrenceName(e.target.value)}
                    type="file"
                    class="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100 mt-1
                    "
                    id="student-refrence"
                    required
                  />
                </label>
                <label class="block mt-4">
                  <span class="text-xs font-semibold px-1">Email</span>
                  <input
                    value={studentEmail}
                    onChange={(e) => setStudentEmail(e.target.value)}
                    className="block w-full text-slate-800 px-3 py-1 text-sm font-bold outline-none bg-slate-100 rounded-sm"
                    type="email"
                    id="student-email"
                    required
                  />
                </label>
                <label class="block mt-4">
                  <span class="text-xs font-semibold px-1">
                    Anticipated Graduation Date
                  </span>
                  <input
                    value={studentGradDate}
                    onChange={(e) => setStudentGradDate(e.target.value)}
                    className="block w-full text-slate-700 px-3 py-1 text-sm font-bold outline-none rounded-sm bg-slate-100"
                    type="date"
                    id="graduation-date"
                    required
                  />
                </label>
              </form>
            </div>
          )}
          <h2 className="mt-4 font-semibold text-base border-b-[1px] border-vgyellow border-spacing-1">
            Nominations/Letters of Reference
          </h2>
          <p className="mt-3">
            Faculty, staff, and students may make nominations. Please complete
            the nomination form. You may nominate an individual for one award
            only. Please note that students who are nominated will be directed
            to complete the remaining application portion. Faculty/staff that
            are nominated will be directed to submit a resume. It is recommended
            that you notify anyone that you are nominating so that they can be
            ready to submit the required materials.
          </p>
          <p className="mt-2">
            Special Note: The awards committee reviews blind applications, so it
            is important to remove names, contact and other identifying
            information from resumes, essays and letters of reference before
            uploading. More detailed instructions for file uploads are included
            in the application and nomination forms.
          </p>
          <p className="mt-2 p-2 text-neutral-700 bg-vgskyblue bg-opacity-50 border-vgskyblue border-[1px] border-opacity-50">
            All materials will be accepted as long as they are submitted by Nov.
            15. The reviewing committee does not review whether or not a
            candidate was nominated or applied; reference/nomination letters and
            letters of support are equivalent.
          </p>
          <button
            onClick={() =>
              setShowSubmitNominationForm((prevState) => !prevState)
            }
            className="px-4 py-2 mt-2 w-full text-center mx-auto bg-vgyellow  text-white border-2 border-white shadow-sm hover:shadow-[inset_0_0_10px_rgba(201,157,45,0.8)] shadow-vgyellow"
          >
            Submit Nomination/Letter of Reference
          </button>
          {showSubmitNominationForm && (
            <form
              method="post"
              encType="multipart/form-data"
              className="flex w-full justify-center p-3"
            >
              <label class="block mt-4">
                <span class="text-xs font-semibold px-1">
                  Choose Letter of Refrence
                </span>
                <input
                  value={letterOfRefrence}
                  onChange={(e) => setLetterOfRefrence(e.target.value)}
                  type="file"
                  class="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100 mt-1
                    "
                  id="letter-refrence"
                  required
                />
              </label>
            </form>
          )}
          <h2 className="mt-4 font-semibold text-base border-b-[1px] border-vgyellow border-spacing-1">
            Resume/CV Submission (for Faculty/Staff Nominees)
          </h2>
          <p className="mt-3">
            For faculty and staff who are nominated, a resume or CV is required.
            The nominator may submit this during the original nomination process
            or through the form below. Additionally, the nominee may submit
            their own resume/CV if the nominator is unable to collect and submit
            it.
          </p>
          <p className="mt-2">
            Special Note: The awards committee reviews blind applications, so it
            is important to remove names, contact and other identifying
            information from resumes, essays and letters of reference before
            uploading. More detailed instructions for file uploads are included
            in the application and nomination forms.
          </p>
          <button
            onClick={() => setShowCVForm((prevState) => !prevState)}
            className="px-4 py-2 mt-2 w-full text-center mx-auto bg-vgyellow  text-white border-2 border-white shadow-sm hover:shadow-[inset_0_0_10px_rgba(201,157,45,0.8)] shadow-vgyellow"
          >
            Submit Nominee Resume/CV
          </button>
          {showCVForm && (
            <form
              method="post"
              encType="multipart/form-data"
              className="flex w-full justify-center p-3"
            >
              <label class="block mt-4">
                <span class="text-xs font-semibold px-1">Choose CV</span>
                <input
                  value={staffCV}
                  onChange={(e) => setStaffCV(e.target.value)}
                  type="file"
                  class="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100 mt-1
                    "
                  id="staff-cv"
                  required
                />
              </label>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PremierAwardsPage;
