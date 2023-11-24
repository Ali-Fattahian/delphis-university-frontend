import React, { useState } from "react";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LinkButton from "../../../components/utilities/LinkButton";

const ApplyCampusPageApply = () => {
  useDocumentTitle("Apply to Campus");
  const [show, setShow] = useState(0);

  return (
    <div className="w-full max-w-[1200px] mx-auto p-2">
      <p className="text-neutral-600 text-sm">
        Learn more about the application timeline and instructions for incoming
        first-year students for Academic Year 2023-24 and Academic Year 2024-25.
      </p>
      <h2 className="text-neutral-800 font-semibold border-spacing-1 mt-3 border-b-[1px] border-vgyellow">
        Incoming Freshmen
      </h2>
      <div className="flex mt-2">
        <button
          className={`text-[4vw] min-[350px]:text-xs font-semibold p-2 ${
            show === 0
              ? "bg-vggreen text-neutral-100"
              : "text-neutral-600 bg-transparent"
          }`}
          onClick={() => setShow(0)}
        >
          Fall 2024-Spring 2025
        </button>
        <button
          className={`text-[4vw] min-[350px]:text-xs font-semibold p-2 ${
            show === 1
              ? "bg-vggreen text-neutral-100"
              : "text-neutral-600 bg-transparent"
          }`}
          onClick={() => setShow(1)}
        >
          Fall 2023-Spring 2024
        </button>
      </div>
      {show === 0 && (
        <div className="p-3 border-[1px] relative border-neutral-200 bg-white text-xs">
          <span className="w-4 h-4 bg-neutral-200 absolute top-0 -translate-y-3 left-10 rotate-45 border-[1px] border-neutral-300 shadow-sm"></span>
          <p className="text-neutral-700">
            The 2024-2025 housing application for incoming freshmen opened
            Monday, October 2, 2023, at 9 a.m. CDT. In order to apply for
            housing as a new incoming freshman, a student must be admitted to
            the University and pay the freshman enrollment deposit.
          </p>
          <p className="text-neutral-700 mt-4">
            PLEASE NOTE: It may take up to
            <span className="font-semibold mx-1">
              24 hours for your Freshman Enrollment Deposit deposit
            </span>
            to be reflected in the myHousing portal.
          </p>
          <p className="text-neutral-700 mt-4">
            To apply for housing (after the above are true) for the 2024-2025
            academic year, click on the “Apply for Housing” link below, log in
            using your credentials, and select “Academic Year 2024-2025.” Your
            housing application is not complete until you have submitted:
          </p>
          <ul className="mt-4 list-disc list-inside [&>li]:my-1">
            <li>the application form through the myHousing portal</li>
            <li>a signed housing contract through DocuSign</li>
            <li>
              the $175 housing prepayment and application fee ($140 refundable
              prepayment for fall housing charge and $35 non-refundable
              application fee)
            </li>
          </ul>
          <div className="mt-4 flex flex-col gap-2">
            <p>
              In order to apply for housing, you will need your username and
              password.
            </p>
            <div className="flex justify-start">
              <LinkButton
                name="Apply for Housing"
                link="/login"
                classes="text-center"
              />
            </div>
          </div>
        </div>
      )}
      {show === 1 && (
        <div className="p-3 border-[1px] relative border-neutral-200 bg-white text-xs">
          <span className="w-4 h-4 bg-neutral-200 absolute top-0 -translate-y-3 left-1/3 translate-x-5 rotate-45 border-[1px] border-neutral-300 shadow-sm"></span>
          <p className="text-neutral-700">
            Due to high demand for campus housing in the fall, Housing and
            Residential Communities closed the housing application at 5 p.m. CT
            on May 3. Students who completed housing applications before that
            date will receive housing assignments, with room selection/housing
            assignments beginning in mid-May. HRC will maintain a waitlist for
            incoming freshmen who are not able to complete an application. As
            space allows, HRC will remove students from the waitlist and allow
            them to apply for housing. Beginning on May 4, incoming freshmen who
            would like to be placed on the waitlist should contact Housing and
            Residential Communities at 205-348-6676. Students who prefer to look
            for off-campus housing can visit the Off Campus Housing website or
            contact Off Campus Resources at offcampushousing@ua.edu or
            205-348-0200 for assistance.
          </p>
          <p className="text-neutral-700 mt-4">
            The 2023-2024 housing application for incoming freshmen opened
            Monday, October 3, 2022, at 9 a.m. CDT. In order to apply for
            housing as a new incoming freshman, a student must be admitted to
            the University and pay the freshman enrollment deposit.
          </p>
          <p className="text-neutral-700 mt-4">
            To apply for housing (after the above are true) for the 2023-2024
            academic year, click on the “Apply for Housing” link below, log in
            using your credentials, and select “Academic Year 2023-2024.”
          </p>
          <ul className="mt-4 list-disc list-inside [&>li]:my-1">
            <li>the application form through the myHousing portal</li>
            <li>a signed housing contract through DocuSign</li>
            <li>
              the $175 housing prepayment and application fee ($140 refundable
              prepayment for fall housing charge and $35 non-refundable
              application fee)
            </li>
          </ul>
        </div>
      )}
      <h2 className="text-neutral-800 font-semibold border-spacing-1 mt-3 border-b-[1px] border-vgyellow">
        View Application Status
      </h2>
      <p className="text-neutral-600 text-sm mt-4">
        To review your application status once you have applied, log back into
        the myHousing portal, and under Academic Year Housing Application, click
        on View myHousing Status Page. This screen will show you the date and
        time you completed your housing application (if applicable).
      </p>
      <h2 className="text-neutral-800 font-semibold border-spacing-1 mt-3 border-b-[1px] border-vgyellow">
        Summer Housing
      </h2>
      <p className="text-neutral-600 text-sm mt-4">
        Incoming freshmen who will be taking UD courses this summer can live on
        campus for one or more summer terms (Summer I, Summer II or both). The
        application for summer housing is a separate application than the
        housing application for Academic Year 24-25 for fall and spring.
        Interested students need to apply for Summer Housing as well as fall and
        spring, if applicable. Summer housing assignments are in different
        buildings than the academic year. Students will be assigned to an
        available space for summer in one of the summer buildings. Students
        should be prepared to move their belongings from their summer building
        to their fall building at the end of summer term.
      </p>
    </div>
  );
};

export default ApplyCampusPageApply;
