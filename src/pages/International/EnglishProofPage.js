import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const headerImage = require("../../assets/images/English Proof - header.jpeg");

const EnglishProofPage = () => {
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
                  English Language Proficiency Policy
                </h2>
                <p className="text-sm mt-6">
                  Students who apply for academic admission are expected to take
                  all of their courses alongside native English speakers. This
                  includes:
                </p>
                <ul className="mt-4 [&>li]:py-2 text-xs list-disc list-inside">
                  <li>Participating in class discussions</li>
                  <li>Writing multiple-page essays</li>
                  <li>
                    Reading and understanding assigned textbook and course
                    material
                  </li>
                  <li>Comprehending lectures</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[800px] mx-auto p-4">
            <p className="text-base font-bold -translate-y-5">
              To show English proficiency, international applicants must submit
              an official qualifying English Proficiency score for one of the
              following:
            </p>
            <ul className="mt-3 list-disc list-inside [&>li]:py-2 text-xs">
              <li>
                TOEFL iBT score of 79 and above
                <li className="mt-3 ml-4">TOEFL code 1830</li>
              </li>
              <li>TOEFL paper-based score of 550 and above</li>
              <li>TOEFL Essentials score of 8.5 and above</li>
              <li>IELTS score of 6.0 or above</li>
              <li>Pearson's Test of English score of 54 or above</li>
              <li>
                Duolingo English Test score of 51 or above (test dates before
                July 15, 2019)
              </li>
              <li>
                Duolingo English Test score of 110 or above (test dates after
                July 15, 2019)
              </li>
              <li>IB Literature (SL & HL) final grade of 4 or above</li>
              <li>
                IB Language & Literature (SL & HL) final grade of 4 or above
              </li>
              <li>English Language A or AS Level final grade in A-E range</li>
            </ul>
            <p className="text-sm mt-4">
              Students may be required to enroll in one or two English language
              support courses administered by the English Language Institute.
            </p>
            <h2 className="text-3xl mx-auto mt-4">
              ELC Coursework Requirements
            </h2>
            <ul className="mt-3 list-disc list-inside [&>li]:py-2 text-xs">
              <li>
                Enrollment in the Undergraduate Academic Writing or Speaking
                courses will count toward your overall minimum full-time
                enrollment requirement and carries 3 hours of academic credit.
              </li>
              <li>
                If your TOEFL iBT writing score is lower than 18, or IELTS
                writing score is lower than 6.0, or your overall Duolingo score
                is lower than 120, or your TOEFL Essentials writing score is
                lower than 8.5, or your Pearson's Test of English writing score
                is lower than 51, you must enroll in the Undergraduate Academic
                Writing course (ELC 111) in addition to your other undergraduate
                courses.
              </li>
              <li>
                If your TOEFL iBT speaking score is lower than 18, or IELTS
                speaking score is lower than 6.0, or your overall Duolingo score
                is lower than 120, or your TOEFL Essentials speaking score is
                lower than 6.5, or your Pearson's Test of English speaking score
                is lower than 51, you must enroll in the Undergraduate Academic
                Speaking course (ELC 110) in addition to your other
                undergraduate courses.
              </li>
            </ul>
            <h3 className="text-base font-bold mt-8">
              Exemptions from the English Course Requirement
            </h3>
            <p className="text-sm mt-4">
              You are exempt from the Undergraduate Academic Writing (ELC 111)
              course requirement if:
            </p>
            <ul className="mt-3 list-disc list-inside [&>li]:py-2 text-xs">
              <li>Your Writing sub-score is 18 or higher on the TOEFL iBT</li>
              <li>
                Your Writing sub-score is 8.5 or higher on the TOEFL Essentials
              </li>
              <li>Your Writing sub-score is 6.0 or higher on the IELTS</li>
              <li>
                Your Duolingo overall score is 120 or higher on the new DET
                scale for tests taken after July 15, 2019 (61 DET for tests
                taken prior to July 15, 2019)
              </li>
              <li>
                Your Writing sub-score is 51 or higher on the Pearson's Test of
                English
              </li>
              <li>You have completed ELI Reading/Writing 6.</li>
            </ul>
            <p className="text-sm mt-4">
              You are exempt from the Undergraduate Academic Speaking (ELC 110)
              course requirement if:
            </p>
            <ul className="mt-3 list-disc list-inside [&>li]:py-2 text-xs">
              <li>Speaking sub-score is 18 or higher on the TOEFL iBT</li>
              <li>
                Your Speaking sub-score is 6.5 or higher on the TOEFL Essentials
              </li>
              <li>Your Speaking sub-score is 6.0 or higher on the IELTS</li>
              <li>
                Your Your Duolingo overall score is 120 or higher on the new DET
                scale for tests taken after July 15, 2019 (61 DET for tests
                taken prior to July 15, 2019)
              </li>
              <li>
                Your Speaking sub-score is 51 or higher on the Pearson's Test of
                English
              </li>
              <li>You have completed ELI Speaking/Listening 6</li>
            </ul>
            <p className="text-sm mt-4">
              You are exempt from both the Undergraduate Academic Writing (ELC
              111) and Undergraduate Academic Speaking (ELC 110) course
              requirements if you have an ELI Proficiency Certificate or if you
              were admitted to UD with an English proficiency waiver. English
              proficiency Exemption Options Exemptions are granted to applicants
              who:
            </p>
            <ul className="mt-3 list-disc list-inside [&>li]:py-2 text-xs">
              <li>Graduate from a U.S. high school</li>
              <li>
                Have earned a “C” or better in a university-level composition
                course at an accredited post-secondary institution in the US
                that is level 101 or higher (ESL courses do not qualify). This
                must be an in-person class, not online.
              </li>
              <li>
                Are a citizen or resident of one of the English-speaking
                countries or regions.
              </li>
            </ul>
            <p className="text-sm mt-4">
              Applicants who have not met these requirements, but have high
              SAT/ACT reading and/or writing scores, can petition to waive the
              TOEFL requirement.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EnglishProofPage;
