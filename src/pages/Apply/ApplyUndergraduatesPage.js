import React from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ImageNextToParagraphMoreInfo from "../../components/layout/ImageNextToParagraph.MoreInfo";
import ArrowRightIcon from "@heroicons/react/24/outline/ArrowRightIcon";
import { StarIcon } from "@heroicons/react/24/outline";

const headerImage = require("../../assets/images/apply undergraduates - header.jpeg");
const freshmanImage = require("../../assets/images/apply undergraduates - freshman.jpeg");
const transferImage = require("../../assets/images/apply undergraduates - transfer.jpeg");
const extraImage = require("../../assets/images/apply undergraduates - extra.jpeg");

const ApplyUndergraduatesPage = () => {
  useDocumentTitle("The Undergraduates Apply");

  return (
    <>
      <Navbar />
      <ImageNextToParagraphMoreInfo
        title="Apply to Delphis"
        text={`Take your first step towards becoming a legend by applying for undergraduate admission to The University of Delphis. We encourage you to review requirements for admission before applying.`}
        imageLink={headerImage}
        buttonComponent={
          <div className="flex flex-col gap-4">
            <a
              href="/freshman-requirements"
              className="text-xs underline-offset-2 hover:underline cursor-pointer font-bold text-vgblue"
            >
              Freshman Requirements
              <ArrowRightIcon className="w-4 inline-block" />
            </a>
            <a
              href="/transfer-requirements"
              className="text-xs underline-offset-2 hover:underline cursor-pointer font-bold text-vgblue"
            >
              Transfer Requirements
              <ArrowRightIcon className="w-4 inline-block" />
            </a>
            <a
              href="/international-requirements"
              className="text-xs underline-offset-2 hover:underline cursor-pointer font-bold text-vgblue"
            >
              International Requirements
              <ArrowRightIcon className="w-4 inline-block" />
            </a>
          </div>
        }
      />
      <ImageNextToParagraphMoreInfo
        title="Incoming Freshmen"
        bgColor="vgblue"
        textColor="white"
        subTitle={`You have finished, or are set to finish high school, and will be entering college as a first-year student. You are also a domestic, international or online student.`}
        text={
          <ul className="shadow-md">
            <p className="ml-2 mb-3">
              Here are a few things to keep in mind before you start your
              application:
            </p>
            <li className="p-2 text-xs font-semibold">
              <StarIcon
                width={16}
                height={16}
                className="text-neutral-100 inline-block mr-2 -translate-y-[1px]"
              />
              UD is incorporating the scholarship application into the
              application for admission. Complete your application and submit
              all supporting documents by January 15 to be considered for
              competitive scholarships.
            </li>
            <li className="p-2 text-xs font-semibold">
              <StarIcon
                width={16}
                height={16}
                className="text-neutral-100 inline-block mr-2 -translate-y-[1px]"
              />
              A credit/debit card is required to pay the non-refundable $40
              application fee.
            </li>
            <li className="p-2 text-xs font-semibold">
              <StarIcon
                width={16}
                height={16}
                className="text-neutral-100 inline-block mr-2 -translate-y-[1px]"
              />
              You will be asked to create a login with the UD Undergraduate App.
            </li>
            <li className="p-2 text-xs font-semibold">
              <StarIcon
                width={16}
                height={16}
                className="text-neutral-100 inline-block mr-2 -translate-y-[1px]"
              />
              Once your application is submitted you will not be able to make
              changes.
            </li>
            <li className="p-2 text-xs font-semibold">
              <StarIcon
                width={16}
                height={16}
                className="text-neutral-100 inline-block mr-2 -translate-y-[1px]"
              />
              You can check your application status online at any time.
            </li>
            <li className="p-2 text-xs font-semibold">
              <StarIcon
                width={16}
                height={16}
                className="text-neutral-100 inline-block mr-2 -translate-y-[1px]"
              />
              A valid email address is required. Secure information concerning
              your application will be sent to this email address.
            </li>
            <li className="p-2 text-xs font-semibold">
              <StarIcon
                width={16}
                height={16}
                className="text-neutral-100 inline-block mr-2 -translate-y-[1px]"
              />
              If you lose your login or PIN, this information will be sent to
              the email address you provided in your application.
            </li>
            <li className="p-2 text-xs font-semibold">
              <StarIcon
                width={16}
                height={16}
                className="text-neutral-100 inline-block mr-2 -translate-y-[1px]"
              />
              UD does not require standardized ACT or SAT scores from students
              applying through the Fall 2024 Semester. If you are unsure whether
              or not to submit a test score, contact your high school counselor
              or UD recruiter.
            </li>
          </ul>
        }
        imageLink={freshmanImage}
        reverse={false}
      />
      <ImageNextToParagraphMoreInfo
        title="Transfer"
        subTitle={`You are not a current high school student and have completed courses at a community or technical college, or four-year university.`}
        text={
          <ul className="shadow-md">
            <p className="ml-2 mb-3">
              Here are a few things to keep in mind before you start your
              application:
            </p>
            <li className="p-2 text-xs font-semibold">
              <StarIcon
                width={16}
                height={16}
                className="text-neutral-500 inline-block mr-2 -translate-y-[1px]"
              />
              UD is incorporating the scholarship application into the
              application for admission.
            </li>
            <li className="p-2 text-xs font-semibold">
              <StarIcon
                width={16}
                height={16}
                className="text-neutral-500 inline-block mr-2 -translate-y-[1px]"
              />
              A credit/debit card is required to pay the non-refundable $40
              application fee.
            </li>
            <li className="p-2 text-xs font-semibold">
              <StarIcon
                width={16}
                height={16}
                className="text-neutral-500 inline-block mr-2 -translate-y-[1px]"
              />
              You will be asked to create a login with the UD Undergraduate App.
            </li>
            <li className="p-2 text-xs font-semibold">
              <StarIcon
                width={16}
                height={16}
                className="text-neutral-500 inline-block mr-2 -translate-y-[1px]"
              />
              Once your application is submitted you will not be able to make
              changes.
            </li>
            <li className="p-2 text-xs font-semibold">
              <StarIcon
                width={16}
                height={16}
                className="text-neutral-500 inline-block mr-2 -translate-y-[1px]"
              />
              You can check your application status online at any time.
            </li>
            <li className="p-2 text-xs font-semibold">
              <StarIcon
                width={16}
                height={16}
                className="text-neutral-500 inline-block mr-2 -translate-y-[1px]"
              />
              A valid email address is required. Secure information concerning
              your application will be sent to this email address.
            </li>
            <li className="p-2 text-xs font-semibold">
              <StarIcon
                width={16}
                height={16}
                className="text-neutral-500 inline-block mr-2 -translate-y-[1px]"
              />
              After submitting your application, a campus wide identification
              (CWID) number will be emailed to you within 48 hours. You will
              need your CWID to access The Online Portal.
            </li>
            <li className="p-2 text-xs font-semibold">
              <StarIcon
                width={16}
                height={16}
                className="text-neutral-500 inline-block mr-2 -translate-y-[1px]"
              />
              If you lose your login or PIN, this information will be sent to
              the email address you provided in your application.
            </li>
          </ul>
        }
        imageLink={transferImage}
        classes={{ marginTop: "0" }}
      />
      <ImageNextToParagraphMoreInfo
        title="Readmit, Transient, Postgraduates & Specials"
        bgColor="vggreen"
        textColor="white"
        subTitle={`Readmits have previously attended UD as an undergraduate student in a degree-seeking capacity. Transients are applying to take classes as a visitor. Postgraduates hold an undergraduate degree from any university. Specials are students seeking to take a class as a non-degree seeking student; they could range from UD staff members to the public.`}
        text={
          <ul className="shadow-md">
            <p className="ml-2 mb-3">
              Here are a few things to keep in mind before you start your
              application:
            </p>
            <li className="p-2 text-xs font-semibold">
              <StarIcon
                width={16}
                height={16}
                className="text-neutral-100 inline-block mr-2 -translate-y-[1px]"
              />
              A credit/debit card is required to pay the non-refundable
              application fee. The fee is $15 for applicants applying for
              readmission. The fee is $40 for transient, postgraduate and
              special applicants.
            </li>
            <li className="p-2 text-xs font-semibold">
              <StarIcon
                width={16}
                height={16}
                className="text-neutral-100 inline-block mr-2 -translate-y-[1px]"
              />
              Once your application is submitted you will not be able to make
              changes.
            </li>
            <li className="p-2 text-xs font-semibold">
              <StarIcon
                width={16}
                height={16}
                className="text-neutral-100 inline-block mr-2 -translate-y-[1px]"
              />
              You can check your application status online at any time.
            </li>
            <li className="p-2 text-xs font-semibold">
              <StarIcon
                width={16}
                height={16}
                className="text-neutral-100 inline-block mr-2 -translate-y-[1px]"
              />
              A valid email address is required. Secure information concerning
              your application will be sent to this email address.
            </li>
            <li className="p-2 text-xs font-semibold">
              <StarIcon
                width={16}
                height={16}
                className="text-neutral-100 inline-block mr-2 -translate-y-[1px]"
              />
              After submitting your application, a campus wide identification
              (CWID) number will be emailed to you within 48 hours. You will
              need your CWID to access The login portal.
            </li>
            <li className="p-2 text-xs font-semibold">
              <StarIcon
                width={16}
                height={16}
                className="text-neutral-100 inline-block mr-2 -translate-y-[1px]"
              />
              If you lose your login or PIN, this information will be sent to
              the email address you provided in your application. APPLY
            </li>
          </ul>
        }
        imageLink={extraImage}
        classes={{ marginTop: "0" }}
      />
      <Footer />
    </>
  );
};

export default ApplyUndergraduatesPage;
