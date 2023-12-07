import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const InternationalGraduatesAdmissionsPage = () => {
  useDocumentTitle("International Graduates Admissions");

  return (
    <>
      <Navbar />
      <div className="mt-[36px] min-[720px]:mt-0 w-full p-4">
        <div className="w-full max-w-[1200px] mx-auto text-neutral-700">
          <h1 className="text-3xl font-semibold mt-6">
            International Admissions
          </h1>
          <h1 className="text-2xl text-vgblue font-semibold mt-8 pb-3 border-neutral-100 border-b-[1px]">
            Admission
          </h1>
          <p className="mt-3 text-sm">
            All prospective international students are welcome at The University
            of Delphis. Please visit our
            <a
              className="mx-1 text-vggreen underline cursor-pointer"
              href="/apply-graduates"
            >
              application
            </a>
            page to submit your application and learn more about our
            requirements.
          </p>
          <p className="mt-2 text-sm">
            Each international applicant must hold the equivalent of a U.S.
            four-year bachelor's degree from an accredited institution to be
            eligible for graduate admission. While individual departments may
            have more stringent requirements, bachelor degrees from Bologna
            Accord certified institutions are considered to meet this criterion.
            We do also consider Indian three-year degrees to be equivalent to a
            U.S. four-year degree.
          </p>
          <p className="mt-2 text-sm">
            The fall semester begins in August and is considered the beginning
            of the academic year. International students are strongly advised to
            plan to begin their studies then. Many of our departments and
            programs will consider applications for the spring semester, which
            starts in January, but fewer openings for new students are available
            at that time.
          </p>
          <p className="mt-2 text-sm">
            Students who are offered admission to The University of Delphis
            Graduate School will receive housing and health insurance
            information, a letter of admission, and an immigration document
            (usually Form I-20 or DS-2019). We will also provide information
            about our Graduate Orientation and Welcome (GROW).
          </p>
          <p className="mt-2 text-sm">
            Upon arrival in Delphis, students should report International
            Student and Scholar Services. This office is also the best place to
            ask any questions concerning immigration.
          </p>
          <h1 className="text-2xl font-semibold mt-6 text-vgblue">
            Language Score Requirements
          </h1>
          <p className="mt-3 text-sm">
            Non-native speakers are required to submit TOEFL, IELTS, Duolingo,
            or PTE scores unless they meet at least one of the following
            criteria: 1) at the time of initial enrollment, they will hold a
            degree from a U.S. institution or an institution in one of the
            English speaking countries or regions listed below; 2) at the time
            of initial enrollment, they will have been enrolled in coursework
            for at least two years at a U.S. institution or an institution in
            one of the English speaking countries or regions listed below; 3)
            they are a citizen or legal resident of one of the English speaking
            countries or regions listed below. Information on registering for
            the TOEFL, IELTS, or PTE is available online or at U.S. embassies,
            consulates, Institute of International Education offices, AMIDEAST
            offices, and other organizations concerned with international
            education. Note that during the application process we only need
            unofficial language score reports. Official reports must be sent on
            admission.
          </p>
          <ul className="mt-3 text-sm list-disc list-inside [&>li]:py-1">
            <li>
              <span className="font-bold">
                Test of English as a Foreign Language (TOEFL)
              </span>
              : The minimum score for admission to a degree program or for
              non-degree admission is 79 on the internet-based TOEFL (iBT).
            </li>
            <li>
              <span className="font-bold">
                International English Language Testing System (IELTS)
              </span>
              : The minimum score for admission to a degree program or for
              non-degree admission is 6.5.
            </li>
            <li>
              <span className="font-bold">Duolingo</span>
              We are accepting Duolingo scores during the COVID-19 crisis. The
              minimum score for admission to a degree program or for non-degree
              admission is 105.
            </li>
            <li>
              <span className="font-bold">Pearson Test of English (PTE)</span>:
              The minimum score of admission to a degree program or for
              non-degree admission is 59.
            </li>
          </ul>
          <p className="mt-2 text-sm">
            The TOEFL, IELTS, Duolingo, or PTE scores must be less than two
            years old at the time of the application.
          </p>
          <h1 className="text-2xl font-semibold mt-4 text-vgblue">
            Conditional Language Admission
          </h1>
          <p className="mt-3 text-sm">
            An international graduate applicant to The University of Delphis may
            be considered for Conditional Language Admission if he or she does
            not meet the minimum TOEFL score requirement of 550 on the
            paper-based TOEFL or 79 on the iBT, 6.5 on the IELTS, 105 on the
            Duolingo test, or 59 on the PTE and/or does not have an admission
            test score (e.g. GRE/GMAT/MAT). Please click here to check if your
            prospective program offers Conditional Language Admission.
          </p>
          <p className="mt-2 text-sm">
            A conditionally admitted international student must complete the
            English Language Institutes's (ELI) Intensive English Program with a
            minimum GPA of 3.0 in the advanced levels (levels 4, 5, and 6) or
            earn a score of at least 550 on the paper-based TOEFL or 79 on the
            iBT, 105 on the Duolingo test, or 6.5 on the IELTS before he or she
            will be allowed to enroll in graduate courses, hold teaching
            assistantships, or hold internally funded research assistantships.
            Students who have Conditional Language Admission are eligible to
            hold only externally funded research assistantships. In special
            circumstances an applicant may also enroll in graduate classes while
            enrolled in the ELI.
          </p>
          <h1 className="text-2xl font-semibold mt-4 text-vgblue">
            Transcript Requirements
          </h1>
          <p className="mt-3 text-sm">
            During the application process please upload copies of your
            transcripts (with English translations if necessary) to the
            application portal. Once admitted, international applicants must
            submit one certified copy in the native language along with
            certified English translations of all transcripts, diplomas, and
            certificates of degree. Transcript and diploma copies submitted
            after admission must be certified by the issuing institution. Notary
            copies are NOT acceptable.
          </p>
          <h1 className="text-2xl font-semibold mt-4 text-vgblue">
            International Teaching Assistant Program
          </h1>
          <p className="mt-3 text-sm">
            The University of Delphis maintains (through the English Language
            Institute) the International Teaching Assistant Program (ITAP), a
            program that all graduate assistants with any teaching or
            instructional activities who are non-native speakers of English must
            successfully complete before they are allowed to teach. Students are
            recommended for ITAP by their departments.
          </p>
          <h1 className="text-2xl font-semibold mt-4 text-vgblue">
            Application Deadlines
          </h1>
          <p className="mt-3 text-sm">
            Applicants applying from outside the U.S. are encouraged to have
            complete applications, with all supporting documents, at least 180
            days before the beginning of the semester for which application is
            made. Some departments have earlier deadlines; applicants should
            contact the departments in which they are interested to obtain
            information about department deadlines and other requirements.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InternationalGraduatesAdmissionsPage;
