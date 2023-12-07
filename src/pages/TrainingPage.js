import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import useDocumentTitle from "../hooks/useDocumentTitle";

const headerImage = require("../assets/images/training - header.jpeg");

const TrainingPage = () => {
  useDocumentTitle("Training");

  return (
    <>
      <Navbar />
      <div className="w-full mb-10 mt-20 min-[720px]:mt-10">
        <div className="w-full max-w-[900px] m-auto px-2 text-slate-600">
          <h2 className="mb-2 text-3xl">Training</h2>
          <img
            className="object-cover w-full max-h-[15rem]"
            src={headerImage}
            alt="Training"
          />
          <h4 className="text-xl w-full border-b-[1px] border-slate-600 pb-2 mb-4 mt-6">
            Pre-Award
          </h4>
          <h5 className="text-base font-bold my-3">Limited Submissions</h5>
          <p className="text-sm">
            Funding agencies (sponsors) may place limits on the number of
            letters of intent, pre-proposals, or proposals that any one
            university can submit in response to a funding opportunity
            announcement (commonly referred to as a Request for Proposals -
            RFP). The Limited Submissions Grant Application Process is designed
            to support an equitable review while preventing any
            disqualifications due to submissions from The University of Delphis
            beyond the allowed number.
          </p>
          <h5 className="text-base font-bold my-3">Pivot</h5>
          <p className="text-sm">
            Presented by the ASSIST Office, attendees will learn how to utilize
            Pivot to locate external funding opportunities. Research faculty,
            staff, and students are encouraged to create an account in Pivot and
            to receive personalized weekly Funding Alert emails with funding
            announcements that match their specific research interests. Funding
            sponsors include federal agencies, commercial organizations, private
            foundations, other nonprofits, and professional associations. The
            session is one hour long. All faculty, staff, and students, have
            access to Pivot.
          </p>
          <h5 className="text-base font-bold my-3">
            Proposal Development Series
          </h5>
          <p className="text-sm">
            The Proposal Development Series is a webinar series presented by
            experts employed by The Implementation Group (TIG). This is a
            four-day targeted proposal development series for early to
            mid-career faculty. Topics include how to interact with funding
            agencies, how to analyze a program solicitation, the anatomy of a
            proposal, and best practices for developing a competitive narrative.
          </p>
          <h5 className="text-base font-bold my-3">Cayuse Research Suite</h5>
          <p className="text-sm">
            The Cayuse Research Suite is a connected cloud-based research suite
            that is designed to simplify the preparation and electronic
            submission of proposals and other research administration processes.
            The system provides faculty and administrators with the opportunity
            to improve efficiency, collaboration, and compliance specific to
            research administration processes.
          </p>
          <h4 className="text-xl w-full border-b-[1px] border-slate-600 pb-2 mb-4 mt-6">
            Post-Award
          </h4>
          <h5 className="text-base font-bold my-3">Banner Research</h5>
          <p className="text-sm">
            In order to access Banner Research forms, you must attend a Banner
            Research Training session. In order to register for a Banner
            Research Training session, you must first have completed Banner
            Navigation training. If you have not taken this training previously,
            please contact Staff Development and Training at (214) 151-9842.
            Banner Finance is also recommended.
          </p>
          <p className="text-sm mt-3">
            To register for Banner Research, Banner Hot Tips, or E-print
            Training, please contact Contract & Grant Accounting at (214)
            214-5346.
          </p>
          <h5 className="text-base font-bold my-3">Financial Stewardship</h5>
          <ul className="text-sm list-inside list-disc">
            <li>CGA Financial Stewardship</li>
          </ul>
          <h4 className="text-xl w-full border-b-[1px] border-slate-600 pb-2 mb-4 mt-6">
            Research Compliance
          </h4>
          <h5 className="text-base font-bold my-3">Animal Subjects (IACUC)</h5>
          <p className="text-sm">
            The IACUC requires that all IACUC members, researchers, students,
            and anyone working with laboratory animals complete training prior
            to any involvement with animal subjects. The IACUC supports two
            online training programs that are designed to provide the user with
            the required information on the humane care and use of laboratory
            animals as mandated by federal regulations.
          </p>
          <h5 className="text-base font-bold my-3">Biosafety</h5>
          <p className="text-sm">
            Please note that CITI biosafety coursework and that which is
            assigned by EHS through Skillsoft are separate assignments. You will
            need to initiate the CITI coursework aided by the instructions on
            the ORC Biological Safety Program page.
          </p>
          <h5 className="text-base font-bold my-3">Conflict of Interest</h5>
          <p className="text-sm">
            Conflict of Interest (COI) training is required once every four (4)
            years and should be completed by each investigator prior to engaging
            in any research or sponsored activity related to a funded grant or
            contract (refer to Section III. D. of the Policy on Conflict of
            Interest).
          </p>
          <p className="text-sm mt-3">
            The COI training course is administered through the CITI Program,
            which is accessible via myBama. The course consists of a brief
            introduction and 5 modules. If you have already completed the COI
            training, you will not be required to complete the new CITI COI
            course until your training expires four (4) years from the date of
            initial completion. You will receive an email notification to renew
            your COI training prior to expiration.
          </p>
          <h5 className="text-base font-bold my-3">IRB/Human Subject</h5>
          <p className="text-sm">
            Under federal regulations, any research activity involving a human
            participant cannot begin until all persons involved in the research
            are appropriately trained. This educational requirement includes not
            only training for the principal investigator but also training for
            co-investigators, students, and any personnel on the project who
            will be collecting data, intervening with the human participant or
            who has access to identifiable data. Training must be completed
            before protocols are submitted, regardless of whether the project is
            funded or unfunded.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TrainingPage;
