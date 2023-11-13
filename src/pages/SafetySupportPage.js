import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const headerImage = require("../assets/images/safety & support - header.jpeg");

const SafetySupportPage = () => {
  useDocumentTitle("Safety Support");

  return (
    <>
      <Navbar />
      <div className="w-full mb-10 mt-20 min-[720px]:mt-10">
        <div className="w-full max-w-[900px] m-auto">
          <img
            className="object-cover w-full max-h-[15rem] px-2"
            src={headerImage}
            alt="Student Life"
          />
          <p className="text-slate-500 mt-4 p-4">
            In the University of Delphis, we are committed to maintaining a
            safe, mutually respectful and healthy environment for students,
            administrative staff and faculty, regardless of race, ethnicity,
            gender identity and gender expression, sexual orientation, age or
            whether one has a disability. We categorically condemn any form of
            bullying, harassment or sexual misconduct and will deal severely
            with any instance of such behavior. We want you to know that if you
            have experienced (or been witness to) any form of discrimination,
            bullying, harassment or sexual misconduct, help and support is
            available to you.
          </p>
          <div className="px-2 my-10">
            <h2 className="text-3xl text-vgblue mb-3">Student Support</h2>
            <p className="text-vgyellow mb-2">
              UD Student Wellness and Support
            </p>
            <p className="text-slate-700 text-sm font-semibold">
              The University of Delphis has a dedicated team of Student Support
              Managers (SSMs), to offer support to students who may be
              experiencing wellbeing-related difficulties or who may be disabled
              or temporarily disadvantaged. UD SSMs can discuss problems and
              potential solutions with students, and, where possible, facilitate
              access to the various university resources that may be helpful.
            </p>
          </div>
          <div className="px-2 mt-10 mb-6">
            <h2 className="text-3xl text-vgblue mb-3">Counselling Services</h2>
            <p className="text-vgyellow mb-2">
              University Counselling Services (UCS)
            </p>
            <p className="text-slate-700 text-sm font-semibold">
              The University Health Centre provides both medical care as well as
              mental health management services, including Counselling Services
              and the 24-hour hotline for life-threatening psychological
              emergencies and Lifeline NUS for students.
            </p>
            <div className="mt-2">
              <span className="text-xs font-semibold text-vgred">
                Lifeline NUS
              </span>
              <span className="text-xs font-semibold ml-2 text-vgskyblue">
                +99 1246 7232
              </span>
            </div>
            <div className="mt-1">
              <span className="text-xs font-semibold text-vgred">Phone</span>
              <span className="text-xs font-semibold ml-2 text-vgskyblue">
                +99 1728 6421
              </span>
            </div>
            <div className="mt-1">
              <span className="text-xs font-semibold text-vgred">Email</span>
              <a
                href="mailto:safety_support@ud.edu"
                className="text-xs font-semibold ml-2 text-vgskyblue"
              >
                safety_support_nus@ud.edu
              </a>
            </div>
          </div>
          <div className="px-2 mb-10">
            <p className="text-vgyellow mb-2">NUSHeart (for NUS Staff Only)</p>
            <p className="text-slate-700 text-sm font-semibold">
              Individual counselling for staff is available through the Help
              Employees with Advice, Resources & Therapy (NUSHeart) Program.
              Staff seeking professional support and consultation may approach
              NUSHeart for a confidential assessment as well as short-term
              counselling services held away from the University premises.
            </p>
          </div>
          <div className="px-2 my-10">
            <h2 className="text-3xl text-vgblue mb-3">Sexual Misconduct</h2>
            <p className="text-vgyellow mb-2">NUS Care Unit (NCU)</p>
            <p className="text-slate-700 text-sm font-semibold">
              If you believe you have witnessed or personally been on the
              receiving end of sexual misconduct, contact the NUS Care Unit
              (NCU). The NCU is a dedicated unit providing a central point of
              contact for all NUS students who are being or have been affected
              by sexual misconduct. They offer a private and safe place for
              victims to seek support and to be heard independent of their
              faculty, department, or hostel. The team at NCU comprises trained
              professionals who have experience working with victims of sexual
              misconduct.
            </p>
            <p className="text-slate-700 mt-4 text-sm font-semibold">
              NUS is committed to creating a safe, inclusive and respectful
              community. Sexual misconduct undermines this commitment and
              affects the ability of students to focus on their educational
              goals. NUS will not tolerate nor condone any form of sexual
              misconduct.
            </p>
            <div className="mt-2">
              <span className="text-xs font-semibold text-vgred">
                NCU Helpline
              </span>
              <span className="text-xs font-semibold ml-2 text-vgskyblue">
                +99 1211 7335
              </span>
            </div>
            <div className="mt-2">
              <span className="text-xs font-semibold text-vgred">Email</span>
              <a
                href="mailto:safety_support_ncu@ud.edu"
                className="text-xs font-semibold ml-2 text-vgskyblue"
              >
                safety_support_ncu@ud.edu
              </a>
            </div>
          </div>
          <div className="px-2 my-10">
            <h2 className="text-3xl text-vgblue mb-3">Care Team</h2>
            <p className="text-slate-700 mb-3 text-sm font-semibold">
              In addition, The University of Delphis has a Care Team that
              provides points of contact for students and staff who wish to
              report an issue or who simply want to discuss and learn more about
              these topics in a safe space. The Care Team's members are:
            </p>
            <span className="text-slate-600 text-sm font-bold">Faculty:</span>
            <div className="flex gap-2 flex-col mb-4">
              <a
                href="mailto:john_doe@ud.edu"
                className="text-xs font-semibold text-vgred"
              >
                <span className="text-xs text-slate-700 mr-2">-</span>John Doe
              </a>
              <a
                href="mailto:jane_doe@ud.edu"
                className="text-xs font-semibold text-vgred"
              >
                <span className="text-xs text-slate-700 mr-2">-</span>Jane Doe
              </a>
              <a
                href="mailto:blake_smith@ud.edu"
                className="text-xs font-semibold text-vgred"
              >
                <span className="text-xs text-slate-700 mr-2">-</span>Blake
                Smith
              </a>
            </div>
            <span className="text-slate-600 text-sm font-bold">
              Administrative:
            </span>
            <div className="flex gap-2 flex-col">
              <a
                href="mailto:mark_stuart@ud.edu"
                className="text-xs font-semibold text-vgred"
              >
                <span className="text-xs text-slate-700 mr-2">-</span>Mark
                Stuart
              </a>
              <a
                href="mailto:julie_dean@ud.edu"
                className="text-xs font-semibold text-vgred"
              >
                <span className="text-xs text-slate-700 mr-2">-</span>Julie Dean
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SafetySupportPage;

// CARE TEAM
// In addition, the Department of Southeast Asian Studies has a Care Team that provides points of contact for students and staff who wish to report an issue or who simply want to discuss and learn more about these topics in a safe space. The Care Team's members are:
