import React from "react";
import useDocumentTitle from "../../../hooks/useDocumentTitle";

const ApplyCampusPageExemptions = () => {
  useDocumentTitle("Campus Exemptions");

  return (
    <div className="w-full max-w-[1200px] mx-auto p-2 text-xs">
      <p className="text-neutral-600 text-sm">
        UD requires that all first year, full-time students live on campus for
        the entirety of their first year to provide students with a
        comprehensive educational experience.
      </p>
      <h2 className="text-neutral-800 font-semibold border-spacing-1 mt-3 border-b-[1px] border-vgyellow text-base">
        Duration of Program
      </h2>
      <ul className="mt-2 list-disc list-inside [&>li]:my-1 p-2">
        <li>
          Students first enrolling in the summer: required to live in the
          residence halls for summer, fall and spring semesters.
        </li>
        <li>
          Students first enrolling in the fall: required to live in the
          residence halls for fall and spring semesters.
        </li>
        <li>
          Students first enrolling in the spring: required to live in the
          residence halls for spring semester.
        </li>
      </ul>
      <p className="text-neutral-600 text-sm">
        UD's freshman residency program applies to all students who are college
        students for the first time. Dual enrollment credits from high school do
        not impact the duration of the freshman residency program.
      </p>
      <h2 className="text-neutral-800 font-semibold border-spacing-1 mt-3 border-b-[1px] border-vgyellow text-base">
        Exemptions
      </h2>
      <p className="text-neutral-600 text-sm mt-3">
        We require all full-time freshman students live on campus, unless they
        meet at least one of the following criteria for exemption:
      </p>
      <ul className="mt-2 list-disc list-inside [&>li]:my-1 p-2">
        <li>
          Live within 60 miles of UD (including Bibb, Chilton, Dallas, Fayette,
          Greene, Hale, Jefferson, Lamar, Marion, Marengo, Perry, Pickens,
          Shelby, Sumter, Tuscaloosa, Walker, and Winston counties) with lineal
          relatives (parent or grandparent, not siblings) or legal guardian
        </li>
        <li>
          Live in Tuscaloosa-area property owned by a parent (proof of ownership
          required)
        </li>
        <li>Married and/or have dependent children in residence</li>
      </ul>
      <p className="text-neutral-600 text-sm mt-2">
        The exemption committee reviews requests that do not meet the above
        criteria. Other criteria considered include:
      </p>
      <ul className="list-disc list-inside [&>li]:my-1 p-2">
        <li>Military veteran</li>
        <li>Compelling individual circumstance (committee reviewed)</li>
      </ul>
      <p className="text-neutral-600 text-sm">
        We do not automatically grant exemptions and consider each as it is
        submitted. The deadline to request an exemption for Fall 2024 is July
        15, 2024.
      </p>
      <h2 className="text-neutral-800 font-semibold border-spacing-1 mt-3 border-b-[1px] border-vgyellow text-base">
        Apply for Exemption
      </h2>
      <p className="text-neutral-600 text-sm mt-3">
        The exemption request form is available when the housing application
        opens for Fall. To access the exemption request form, go to your
        <a className="cursor-pointer mx-1 text-vggreen underline" href="/login">
          online portal
        </a>
        and log in with your account when prompted. From the home page, select
        the “Housing Application” button, then click on the “Freshman Exemption
        Request” at the bottom of the next page. Exemption requests for Fall
        2024 that are submitted in Fall 2023 or early Spring 2024 will be
        considered by March 2024. The deadline to submit an exemption request is
        July 15, 2024.
      </p>
    </div>
  );
};

export default ApplyCampusPageExemptions;
