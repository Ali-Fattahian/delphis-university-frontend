import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const headerImage = require("../../assets/images/International Transfer - header.jpeg");

const InternationalTransferPage = () => {
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
              <div className="w-full mx-auto max-w-[800px] bg-white p-4">
                <h2 className="text-3xl mx-auto mb-4">
                  Admission Priority Deadlines
                </h2>
                <table className="table-auto text-xs text-left w-full">
                  <thead>
                    <tr className="bg-vgred">
                      <th>
                        <p className="text-white p-2 font-bold">Term</p>
                      </th>
                      <th>
                        <p className="text-white p-2 font-bold">
                          Academic Calendar
                        </p>
                      </th>
                      <th>
                        <p className="text-white p-2 font-bold">
                          Priority Deadline
                        </p>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y-[1px]">
                    <tr className="hover:bg-neutral-100">
                      <td className="p-2">Spring Semester</td>
                      <td className="p-2">January - May</td>
                      <td className="p-2">October</td>
                    </tr>
                    <tr className="hover:bg-neutral-100">
                      <td className="p-2">Summer Semester</td>
                      <td className="p-2">June - August</td>
                      <td className="p-2">March 1</td>
                    </tr>
                    <tr className="hover:bg-neutral-100">
                      <td className="p-2">Fall Semester</td>
                      <td className="p-2">August - December</td>
                      <td className="p-2">March 1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[800px] mx-auto p-4">
            <h1 className="text-3xl font-semibold mt-10">
              Incoming International Freshman Graduating from a US High School
            </h1>
          </div>
          <p className="mt-8 text-base font-semibold">
            Submit Official Transcripts
          </p>
          <p className="mt-2 text-sm">
            Ask all current and former institutions to send an official copy of
            your transcript by email to{" "}
            <a
              href="mailto:transfercredit@ud.edu"
              className="text-vggreen underline cursor-pointer mr-1"
            >
              transfercredit@ud.edu
            </a>
            or by mail to:
          </p>
          <ul className="mt-4 [&>li]:py-2 text-xs">
            <li>The University of Delphis</li>
            <li>Office of the University Registrar</li>
            <li>Box 870134</li>
            <li>Delphis, AL 35487-0134</li>
          </ul>
          <p className="mt-8 text-base font-semibold">Admission Requirements</p>
          <ul className="mt-3 list-disc list-inside [&>li]:py-2 text-xs">
            <li>
              <span className="font-semibold mr-1">
                If you have completed 24 or more credits (about 1 year of
                college courses),
              </span>
              you will apply as a transfer student.
            </li>
            <li>
              <span className="mr-1 font-semibold">
                If you have completed less than 24 credit hours at the
                university level,
              </span>
              you will need to apply as a transfer student with less than 24
              hours.
              <li className="mt-3 ml-4">
                In this instance, we will also need to see copies of your high
                school diploma and transcripts.
              </li>
              <li className="mt-1 ml-4">
                You will have the choice to be considered test optional for
                admission through the Fall 2022 Semester.
              </li>
              <li className="mt-1 ml-4">
                Applicants with fewer than 24 earned credit hours of
                university-level coursework will also need to meet the freshman
                admission requirements.
              </li>
            </li>
            <li>
              To be admitted to UD as a transfer student, you must have earned
              an overall GPA of “C” (2.00 on a 4.00 scale) or higher on all
              university-level work attempted. GPA will be calculated on all
              coursework, not just core subjects.
            </li>
            <li>
              Please note that technical, remedial, vocational and ESL classes
              are not accepted.
            </li>
          </ul>
          <p className="mt-6 text-sm">
            In addition to meeting the admission requirements, international
            students graduating from U.S. schools seeking an F-1 or J-1 visa
            must submit their I-20 / DS-2019 request form and proof of finances
            before a Form I-20/ DS-2019 can be issued. For more information,
            please read the Securing an I-20 / DS-2019 page.
          </p>
          <h1 className="text-3xl font-semibold mt-10">
            Incoming Transfer Students Coming From Schools Outside the US
          </h1>
          <p className="mt-8 text-base font-semibold">
            Submit Official Transcripts
          </p>
          <p className="mt-4 text-sm">
            If any of your post-secondary education has taken place outside the
            US, transcripts from non-US schools must be evaluated by an external
            credential evaluation company. Please request a course-by-course
            evaluation with GPA calculation.
          </p>
          <ul className="mt-3 list-disc list-inside [&>li]:py-2 text-xs">
            <li>
              <span className="font-semibold mr-1">
                If you have completed 24 or more credits (about 1 year of
                college courses),
              </span>
              you will apply as a transfer student.
            </li>
            <li>
              <span className="mr-1 font-semibold">
                If you have completed less than 24 credit hours at the
                university level,
              </span>
              you will need to apply as a transfer student with less than 24
              hours.
              <li className="mt-3 ml-4">
                In this instance, we will also need to see copies of your high
                school diploma and transcripts.
              </li>
              <li className="mt-1 ml-4">
                You will have the choice to be considered test optional for
                admission through the Fall 2022 Semester.
              </li>
              <li className="mt-1 ml-4">
                Applicants with fewer than 24 earned credit hours of
                university-level coursework will also need to meet the freshman
                admission requirements.
              </li>
            </li>
            <li>
              To be admitted to UD as a transfer student, you must have earned
              an overall GPA of “C” (2.00 on a 4.00 scale) or higher on all
              university-level work attempted. GPA will be calculated on all
              coursework, not just core subjects.
            </li>
            <li className="font-semibold">
              Applicants who wish to receive transfer credit from an overseas
              post-secondary institution must provide course descriptions or
              syllabi for each subject considered for transfer.
              <li className="mt-3 ml-4">
                These descriptions should be in English and should include a
                list of required readings, the number of class hours required
                for each course, and the length of the academic term(s) when
                enrolled.
              </li>
              <li className="mt-1 ml-4">
                Since the academic departments at The University of Delphis
                determine whether credits earned abroad will be accepted as
                equivalent to courses offered at UD, credit is awarded on a
                subject-by-subject basis.
              </li>
            </li>
            <li className="font-semibold">
              For academic admission, students must meet the English proficiency
              requirement.
              <li className="mt-3 ml-4">
                Students who meet the academic and financial qualifications, but
                do not meet the TOEFL, IELTS or PTE score requirement may apply
                for conditional admission.Conditionally admitted students will
                begin their studies in the English Language Institute and then
                enter directly into their academic coursework once they have
                satisfied English proficiency.
              </li>
            </li>
          </ul>
          <p className="mt-6 text-sm">
            Students transferring from outside of the U.S. requiring F-1 and J-1
            visas must also send documentation in order to secure an I-20 /
            DS-2010.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InternationalTransferPage;
