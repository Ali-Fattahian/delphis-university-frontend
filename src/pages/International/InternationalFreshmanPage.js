import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const headerImage = require("../../assets/images/International Freshman  - header.jpeg");

const InternationalFreshmanPage = () => {
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
            <p className="mt-8 text-base font-semibold">
              Admission Requirements
            </p>
            <p className="mt-2 text-sm">
              International freshmen graduating from US high schools must meet
              the same admissions criteria as domestic applicants.
            </p>
            <p className="mt-4 text-base font-semibold">Required Documents</p>
            <ul className="mt-3 list-disc list-inside">
              <li className="text-xs">Copy of your passport (optional)</li>
              <li className="text-xs mt-2">
                Relevant visa and immigration documents (This includes PR card,
                current visa, or F-1/ J-1 visa request and supporting documents)
              </li>
            </ul>
            <p className="mt-8 text-base font-semibold">
              Provide Proof of English
            </p>
            <p className="mt-2 text-sm">
              All students must meet the
              <a
                href="/international/english-proficiency-proof"
                className="ml-1 text-vggreen underline cursor-pointer"
              >
                English proficiency requirements
              </a>
            </p>
            <p className="mt-4 text-sm font-semibold">
              Documentation and admission requirements differ if you are an
              incoming freshman graduating from a US high school or school
              outside the US.
            </p>
            <p className="mt-8 text-base font-semibold">
              Submit official transcripts
            </p>
            <p className="mt-2 text-sm">
              Ask your school to submit your official high school transcript
              either electronically or via post
            </p>
            <p className="mt-8 text-base font-semibold">
              Submit your official SAT or ACT test score (optional)
            </p>
            <ul className="mt-3 list-disc list-inside [&>li]:py-2 text-xs">
              <li>
                Incoming students are not required to submit SAT or ACT scores
                for admission, but they must be submitted for merit scholarship
                consideration
              </li>
              <li>
                Test scores must be received directly from the testing agency or
                on your high school transcript
              </li>
              <li>UA’s ACT code is 0052 and SAT code is 1830</li>
              <li>
                Information on these tests is available from your high school
                counselor or from the testing agency
                <li className="mt-3 ml-4">ACT, Box 451, Iowa City, IA 52243</li>
                <li className="mt-1 ml-4">
                  SAT, College Board ATP, Box 592, Princeton, NJ 08541
                </li>
              </li>
            </ul>
            <h1 className="text-3xl font-semibold mt-10">
              Incoming International Freshman Graduating from Schools Outside
              the US
            </h1>
            <p className="mt-8 text-base font-semibold">
              Admission Requirements
            </p>
            <p className="mt-2 text-sm">
              The University of Alabama employs a competitive admission process
              that includes reviewing and evaluating each application on an
              individual basis for an applicant’s abilities as a student and a
              scholar.
            </p>
            <ul className="mt-3 list-disc list-inside [&>li]:py-2 text-xs">
              <li>
                The undergraduate international admissions office will review
                the applicant’s transcripts within the context of the school,
                curriculum and country.
              </li>
              <li>
                <span className="mr-1 font-semibold">
                  GPA will be calculated on all coursework, not just core
                  subjects.
                </span>
                UA considers applicants with a cumulative GPA of 3.0 on a 4.0
                scale for admission.
              </li>
              <li>
                UA will accept unofficial transcripts for admission purposes.
                These can be emailed or uploaded by the student.
                <li className="mt-3 ml-3">
                  If a student applies with unofficial documents, we MUST
                  receive the official documents directly from the school or
                  testing authority by July 1 for Fall admission and November 1
                  for Spring admission.
                </li>
                <li className="mt-1 ml-3">
                  Any student who does not provide official copies will not be
                  able to enroll for courses.
                </li>
                <li className="mt-1 ml-3">
                  If a student’s official documents are not available by that
                  time, exceptions will be made on a case-by-case basis.
                  Students requesting an exception must email
                  international.admissions@ua.edu before the deadline to be
                  considered.
                </li>
              </li>
              <li>
                For academic admission, students must meet the English
                proficiency requirement. For more information see UA’s English
                Language Proficiency page.
              </li>
              <li>
                Students who meet the academic and financial qualifications, but
                do not meet the TOEFL, IELTS or PTE score requirement may apply
                for conditional admission.
                <li className="mt-3 ml-4">
                  Conditionally admitted students will begin their studies in
                  the English Language Institute and then enter directly into
                  their academic coursework once they have satisfied English
                  proficiency.
                </li>
                <li className="mt-1 ml-4">
                  For more information see UA’s conditional admission page.
                </li>
              </li>
              <li>
                Students requiring F-1 and J-1 visas must also send
                documentation in order to secure an I-20 or DS-2010.
              </li>
              <li>
                Successful candidates for UA will have completed a college
                preparatory curriculum.
              </li>
            </ul>
            <table className="table-auto mt-3 text-xs text-left">
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
                  <td className="px-1 py-2">Language</td>
                  <td className="px-1 py-2">4 units.</td>
                </tr>
                <tr className="hover:bg-neutral-100">
                  <td className="px-1 py-2">Mathematics</td>
                  <td className="px-1 py-2">
                    3 units, should include algebra I, algebra II, AND 1 unit of
                    either geometry, trigonometry OR calculus.
                  </td>
                </tr>
                <tr className="hover:bg-neutral-100">
                  <td className="px-1 py-2">Social Studies</td>
                  <td className="px-1 py-2">4 Units</td>
                </tr>
                <tr className="hover:bg-neutral-100">
                  <td className="px-1 py-2">Natural Sciences</td>
                  <td className="px-1 py-2">
                    3 units, including 2 units with a laboratory
                  </td>
                </tr>
                <tr className="hover:bg-neutral-100">
                  <td className="px-1 py-2">Other Academic Courses</td>
                  <td className="px-1 py-2">
                    5 units (courses recommended are in fine arts or computer
                    literacy, with additional courses in mathematics, science
                    and foreign language)
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="mt-8 text-base font-semibold">Required Documents</p>
            <ul className="mt-6 list-disc list-inside [&>li]:py-2 text-xs">
              <li>Copy of your passport (optional)</li>
              <li>
                Relevant visa and immigration documents (This includes PR card,
                current visa, or F-1/ J-1 visa request and supporting documents)
              </li>
              <li>
                Unofficial transcript copies from every secondary school you
                have attended. This includes academic transcripts, mark sheets,
                grade reports, diplomas or certificates, national standardized
                examination results, or other academic course work.
                <li className="ml-4 mt-3">
                  Include an English translation for all documents not written
                  in English. If you need assistance translating your documents
                  into English, we recommend using the American Translators
                  Association to find a certified translator.
                </li>
                <li className="mt-1 ml-4">
                  Students graduating high school in Nigeria, Liberia, Ghana,
                  The Gambia or Sierra Leone must submit a copy of their WASSCE
                  results and scratch card information (serial number and PIN)
                  in order to complete their application.
                </li>
              </li>
              <li>
                Students that graduated 6 or more months ago should also provide
                a brief statement listing any academic activities since
                graduation (including any post-secondary coursework at
                institutions inside or outside of the US, English language
                programs, study abroad programs, etc.) List name(s) of the
                institutions and dates of attendance. If you have no additional
                academic activities, please write a short statement that speaks
                to your activities during the gap period. In the statement,
                please include the following and send to International
                Admissions at intladm@ua.edu:
                <li className="ml-4 mt-3">Full Name</li>
                <li className="mt-1 ml-4">Address</li>
                <li className="mt-1 ml-4">High School/Secondary School</li>
                <li className="mt-1 ml-4">Graduation Date</li>
              </li>
            </ul>
            <p className="mt-8 text-base font-semibold">
              Provide proof of English
            </p>
            <p className="mt-2 text-sm">
              All students must meet the
              <a
                href="/international/english-proficiency-proof"
                className="ml-1 text-vggreen underline cursor-pointer"
              >
                English proficiency requirements
              </a>
            </p>
            <p className="mt-8 text-base font-semibold">
              Submit your official SAT or ACT test score (optional)
            </p>
            <ul className="mt-3 list-disc list-inside [&>li]:py-2 text-xs">
              <li>
                Incoming students are not required to submit SAT or ACT scores
                for admission, but they must be submitted for merit scholarship
                consideration
              </li>
              <li>
                Test scores must be received directly from the testing agency or
                on your high school transcript
              </li>
              <li>UA’s ACT code is 0052 and SAT code is 1830</li>
              <li>
                Information on these tests is available from your high school
                counselor or from the testing agency
                <li className="ml-4 mt-3">ACT, Box 451, Iowa City, IA 52243</li>
                <li className="mt-1 ml-4">
                  SAT, College Board ATP, Box 592, Princeton, NJ 08541
                </li>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InternationalFreshmanPage;
