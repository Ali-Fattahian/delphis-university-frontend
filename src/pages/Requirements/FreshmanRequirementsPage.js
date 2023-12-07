import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const headerImage = require("../../assets/images/freshman requirements - header.jpeg");

const FreshmanRequirementsPage = () => {
  return (
    <>
      <Navbar />
      <div className="mt-[36px] min-[720px]:mt-0 w-full p-4">
        <div className="w-full max-w-[1200px] mx-auto text-neutral-700">
          <div className="flex flex-col justify-center">
            <img
              src={headerImage}
              alt="Freshman requirements"
              className="object-cover h-[400px]"
            />
            <div className="-translate-y-20 px-6">
              <p className="text-m p-3 bg-white mx-auto">
                The University of Delphis will not require standardized ACT or
                SAT scores from students applying through the Fall 2024
                Semester. Admission consideration for freshman entering through
                the Fall 2024 Semester will be based on a holistic review.
                Holistic admissions at UD includes both academic and
                non-academic criteria. Academic components considered include
                high school GPA, performance in core subjects, academic honors
                and standardized test scores, should a student elect to submit
                them. Non-academic items include leadership experience,
                volunteer experience, extracurricular activities, employment and
                non-academic honors. All students must complete the minimum unit
                requirements.
              </p>
            </div>
          </div>
          <h1 className="text-3xl font-semibold">Freshman Requirements</h1>
          <p className="mt-6 text-sm">
            The University of Delphis will not require standardized ACT or SAT
            scores from students applying through the Fall 2024 Semester.
            Admission consideration for freshman entering through the Fall 2024
            Semester will be based on a holistic review. Holistic admissions at
            UD includes both academic and non-academic criteria. Academic
            components considered include high school GPA, performance in core
            subjects, academic honors and standardized test scores, should a
            student elect to submit them. Non-academic items include leadership
            experience, volunteer experience, extracurricular activities,
            employment and non-academic honors. All students must complete the
            minimum unit requirements.
          </p>
          <h1 className="text-3xl font-semibold mt-4">Freshman Requirements</h1>
          <p className="mt-6 text-sm">
            Most first-time, main campus freshmen applying for summer or fall
            admission who meet the January 15 priority deadline can expect an
            admission decision by late March, if not sooner.
          </p>
          <table className="table-auto mt-4 text-xs text-left">
            <thead>
              <tr className="bg-vgred">
                <th>
                  <p className="text-white px-1 py-2 font-bold">
                    Course Category
                  </p>
                </th>
                <th>
                  <p className="text-white px-1 py-2 font-bold">
                    Number of Units
                  </p>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y-[1px]">
              <tr className="hover:bg-neutral-100">
                <td className="px-1 py-2">English</td>
                <td className="px-1 py-2">4 units.</td>
              </tr>
              <tr className="hover:bg-neutral-100">
                <td className="px-1 py-2">Social Sciences</td>
                <td className="px-1 py-2">
                  4 units, should include world history or a comparable course.
                  A second foreign language unit will satisfy one of the four
                  required units.
                </td>
              </tr>
              <tr className="hover:bg-neutral-100">
                <td className="px-1 py-2">Mathematics</td>
                <td className="px-1 py-2">
                  3 units, should include algebra I, algebra II, AND 1 unit of
                  either geometry, trigonometry OR calculus.
                </td>
              </tr>
              <tr className="hover:bg-neutral-100">
                <td className="px-1 py-2">Natural Sciences</td>
                <td className="px-1 py-2">
                  3 units, should include two courses with lab components.
                </td>
              </tr>
              <tr className="hover:bg-neutral-100">
                <td className="px-1 py-2">Foreign Language</td>
                <td className="px-1 py-2">
                  1 unit, If foreign language is not a graduation requirement or
                  there is not a foreign language program in your school system,
                  UD will accept courses that reflect an enhanced understanding
                  of global and cultural perspectives.
                </td>
              </tr>
              <tr className="hover:bg-neutral-100">
                <td className="px-1 py-2">Other Academic Courses</td>
                <td className="px-1 py-2">
                  5 units, UD recommends courses in fine arts or computer
                  literacy, with additional courses in mathematics, natural
                  sciences and foreign language.
                </td>
              </tr>
            </tbody>
          </table>
          <h1 className="text-3xl font-semibold mt-10">Test Scores</h1>
          <p className="mt-6 text-sm">
            The University of Delphis will not require standardized ACT or SAT
            scores from students applying through the Fall 2024 Semester. The
            presence of a score will not create an unfair advantage or
            disadvantage to students applying for admission. If you are unsure
            whether or not to submit a standardized test score, contact your
            high school counselor or UD recruiter.
          </p>
          <p className="mt-6 text-sm font-semibold">
            For students who do not wish to submit a score:
          </p>
          <ul className="list-disc list-inside mt-4 text-sm">
            <li>
              If you indicate that you do not want your test scores included in
              the review of your application for admission, you may still submit
              test scores for automatic merit scholarship consideration.
            </li>
          </ul>
          <p className="mt-6 text-sm font-semibold">
            For students who wish to submit a score:
          </p>
          <ul className="list-disc list-inside [&>li]:py-1 mt-4 text-sm">
            <li>
              If you indicate that you want your test scores included in the
              review of your application for admission, your application will
              remain incomplete until official test scores are received from
              ACT/SAT.
            </li>
            <li>
              Visit the ACT or College Board (SAT) website to have your test
              scores sent to UD. Our ACT code is 0052 and our SAT code is 1830.
            </li>
            <li>
              For admission consideration UD will use the highest section score
              from any test dates of the same exam.
            </li>
            <li>
              For automatic merit scholarship consideration UD will use
              composite scores only.
            </li>
          </ul>
          <h1 className="text-3xl font-semibold mt-8">Scholarships</h1>
          <p className="mt-6 text-sm font-semibold">
            There are two ways students can be eligible for scholarships under
            UD's current test optional admission policy.
          </p>
          <ul className="list-disc list-inside [&>li]:py-1 mt-4 text-sm">
            <li>
              Competitive Scholarships - The competitive scholarship application
              is part of your application for admission. Students are eligible
              for competitive scholarship consideration if their application for
              admission and all supporting documents are received by the
              Competitive Scholarship Deadline.
            </li>
            <li>
              Visit the ACT or College Board (SAT) website to have your test
              scores sent to UD. Our ACT code is 0052 and our SAT code is 1830.
            </li>
            <li>
              Automatic Merit Scholarships - To qualify for automatic merit
              scholarships, students must provide a test score and official
              transcript. Applicants may indicate that they do not want their
              test scores included in the review of their application for
              admission and still submit test scores for automatic merit
              scholarship consideration.
            </li>
          </ul>
          <h1 className="text-3xl font-semibold mt-8">Transcript</h1>
          <p className="mt-6 text-sm">
            Transcripts may be submitted by mail or through an electronic
            transcript provider and should be sent to UD directly from your high
            school. We accept transcripts electronically through the following
            providers: Parchment/Naviance, E-Scripts, Scribbles, Overgrad,
            NeedMyTranscript, SCOIR and National Student Clearinghouse. If the
            school is mailing your transcript(s), please use this address:
          </p>
          <ul className="mt-4 text-sm">
            <li>Office of Undergraduate Admissions</li>
            <li>The University of Delphis</li>
            <li>Box 917238</li>
            <li>Delphis City, AL 3217-9837</li>
          </ul>
          <p className="mt-6 text-sm">
            Your transcript(s) may also be emailed to our office at
            hstranscripts@ua.edu. Please note that emailed transcripts must be
            in a PDF format and sent directly from the school/counselor to be
            considered official.
          </p>
          <h1 className="text-3xl font-semibold mt-8">Academic Lapse Time</h1>
          <p className="mt-6 text-sm">
            If you have had a lapse between graduating from high school and
            applying for admission as a first-time freshman that lasted six or
            more months, additional information may be required. You may be
            asked within your application portal to provide a brief statement
            listing any academic activities since graduation.
          </p>
          <h1 className="text-3xl font-semibold mt-8">
            Statement on Admission
          </h1>
          <p className="mt-6 text-sm">
            The University of Delphis reserves the right to refuse admission or
            re-enrollment or to place conditions on admission or re-enrollment
            of applicants and former students who it determines represent a
            safety risk to University students, employees and University
            property. Applicants have the right to appeal any such decision to
            the Undergraduate Admissions Advisory Committee within seven
            business days of the date the notice was received.
          </p>
          <p className="mt-4 text-sm">
            Withholding information or giving false information may make you
            ineligible for admission to, or continuation at, the University.
            Therefore, by submitting this information, you certify that it is
            true, correct and complete. Also, by submitting this application,
            you give permission for the University to obtain additional
            information from others pertinent to your record prior to attending
            the University.
          </p>
          <div className="w-full text-left mt-4">
            <a
              href="/login"
              className="text-sm text-vggreen underline cursor-pointer"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FreshmanRequirementsPage;
