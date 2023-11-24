import React from "react";
import LinkButton from "../../../components/utilities/LinkButton";

const tableContent = [
  ["Blount", "Blount lobby"],
  ["Bryant, Bryce Lawn and Smith Woods", "Bryant desk"],
  ["Burke", "Burke desk"],
  ["England", "England desk"],
  ["Highlands", "Presidential Village 1 desk"],
  ["Lakeside", "Lakeside East lobby"],
  ["Parham", "Parham lobby"],
  ["Paty", "Paty lobby"],
  ["Presidential Village 1", "Presidential Village 1 desk"],
  ["Presidential Village 2", "Presidential Village 2 desk"],
  ["Ridgecrest East and West", "Ridgecrest East desk"],
  ["Ridgecrest South", "Ridgecrest South desk"],
  ["Riverside East and West", "Riverside East lobby"],
  ["Riverside North", "Riverside North lobby"],
  ["Tutwiler", "Tutwiler desk"],
  ["East Edge", "Leasing office"],
];

const ApplyCampusPageSpringHousing = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto p-2">
      <h2 className="text-neutral-800 font-semibold border-spacing-1 mt-3 border-b-[1px] border-vgyellow text-base">
        Spring Housing Application
      </h2>
      <p className="text-neutral-600 mt-3">
        The Spring 2024 housing application for incoming freshmen, transfer
        students, and UA students currently living off campus opens in the
        myHousing portal on Monday, November 13, 2023, at 9 a.m. CDT. Students
        currently living on campus do not need to apply for spring housing. In
        order to apply for housing, a student must be admitted to the
        University. The housing deposit for Spring 2024 is $175.
      </p>
      <p className="text-neutral-600 mt-3">
        All incoming freshmen are expected to participate in the Freshman
        Residency Program, unless they meet at least one criterion for
        exemption.
      </p>
      <p className="text-neutral-600 mt-3">
        If you apply for housing and then decide not to attend UA, cancel your
        housing application prior to moving in or the first day of class
        (whichever comes first) for the spring semester to avoid housing charges
        for the full spring semester. There is no refund for the $175 housing
        deposit, but you will have your semester housing charge removed from
        your student bill.
      </p>
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
      <h2 className="text-neutral-800 font-semibold border-spacing-1 mt-3 border-b-[1px] border-vgyellow text-base">
        Spring Semester Move-In
      </h2>
      <p className="text-neutral-600 mt-3">
        Students moving in for the spring semester should check in at the
        appropriate location based on their housing assignment from 1-5 p.m. on
        Sunday, January 7. Students who arrive after hours should contact their
        area desk to coordinate check in with the RA on call.
      </p>
      <table className="text-xs w-full mt-4 table-auto hover:opacity-90 text-left">
        <thead className="bg-vggreen">
          <tr>
            <th className="border-r-[1px] border-neutral-400">
              <p className="font-semibold text-white p-1">Assign building</p>
            </th>
            <th>
              <p className="font-semibold text-white p-1">Check-in location</p>
            </th>
          </tr>
        </thead>
        <tbody id="spring-housing" className="even:bg-neutral-200 odd:bg-white">
          {tableContent.map((r) => (
            <tr className="even:bg-neutral-200 odd:bg-white">
              <td>
                <p>{r[0]}</p>
              </td>
              <td>
                <p>{r[1]}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplyCampusPageSpringHousing;
