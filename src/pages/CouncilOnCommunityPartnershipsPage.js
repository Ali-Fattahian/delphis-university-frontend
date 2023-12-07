import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import UserGroupIcon from "@heroicons/react/24/outline/UserGroupIcon";
import ListBulletIcon from "@heroicons/react/24/outline/ListBulletIcon";
import CalendarDaysIcon from "@heroicons/react/24/outline/CalendarDaysIcon";
import useDocumentTitle from "../hooks/useDocumentTitle";
import ExtraInfoButton from "../components/utilities/ExtraInfoButton";
import ChevronDownIcon from "@heroicons/react/24/solid/ChevronDownIcon";

const headerImage = require("../assets/images/council on community partnerships - header.jpeg");

const councilExecutiveCommittee = [
  {
    key: 1,
    title: "Chair of the Executive Committee",
    text: `Dr. Susan Carvalho, Associate Provost and Dean of the Graduate School`,
  },
  {
    key: 2,
    title: "Chair of the Proposal and Seed Funding Committee",
    text: `Dr. Carol Donovan, Professor, Literacy Education and Director, Belser Parton Literacy Center`,
  },
  {
    key: 3,
    title: "Chair of the Executive Committee",
    text: `Dr. Susan Carvalho, Associate Provost and Dean of the Graduate School`,
  },
  {
    key: 4,
    title: "Chair of the Proposal and Seed Funding Committee",
    text: `Dr. Carol Donovan, Professor, Literacy Education and Director, Belser Parton Literacy Center`,
  },
  {
    key: 5,
    title: "Chair of the Executive Committee",
    text: `Dr. Susan Carvalho, Associate Provost and Dean of the Graduate School`,
  },
  {
    key: 6,
    title: "Chair of the Proposal and Seed Funding Committee",
    text: `Dr. Carol Donovan, Professor, Literacy Education and Director, Belser Parton Literacy Center`,
  },
  {
    key: 7,
    title: "Chair of the Executive Committee",
    text: `Dr. Susan Carvalho, Associate Provost and Dean of the Graduate School`,
  },
  {
    key: 8,
    title: "Chair of the Proposal and Seed Funding Committee",
    text: `Dr. Carol Donovan, Professor, Literacy Education and Director, Belser Parton Literacy Center`,
  },
];

const councilExecutiveCommittee2 = [
  {
    key: 1,
    title: "Natalie Adams",
    text: `New College`,
  },
  {
    key: 2,
    title: "Tania Alameda-Lawson",
    text: `School of Social Work`,
  },
  {
    key: 3,
    title: "David Albright",
    text: `School of Social Work`,
  },
  {
    key: 4,
    title: "Stacy Alley",
    text: `Musical Theatre and Dance`,
  },
  {
    key: 5,
    title: "Marcus Ashford",
    text: `Mechanical Engineering`,
  },
  {
    key: 6,
    title: "Alex Ates",
    text: `Theatre and Dance`,
  },
  {
    key: 7,
    title: "Megan Bailey",
    text: `Honors College`,
  },
  {
    key: 8,
    title: "Sheila Black",
    text: `Psychology`,
  },
];

const CouncilOnCommunityPartnershipsPage = () => {
  useDocumentTitle("Council on Community-Based Partnerships");

  return (
    <>
      <Navbar />
      <div className="w-full mt-9 min-[720px]:mt-0 p-2">
        <div className="w-full max-w-[732px] m-auto px-2">
          <h3 className="text-3xl font-semibold text-slate-800 my-4">
            Council on Community-Based Partnerships
          </h3>
          <img
            className="object-cover w-full max-h-[15rem]"
            src={headerImage}
            alt="Community Affairs"
          />
          <div className="grid grid-cols-1 gap-6 p-3 sm:grid-cols-3 mt-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center text-vgblue gap-3">
                <UserGroupIcon width={28} height={28} />
                <h4 className="text-xl font-bold">Community Affairs News</h4>
              </div>
              <p className="text-xs">
                The Council exists to connect faculty, staff, students and
                community partners in research-based projects designed to solve
                critical problems identified collaboratively by community
                members and the University. All academic disciplines are
                represented on a Council made up of campus and community
                members.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center text-vgblue gap-3">
                <ListBulletIcon width={28} height={28} />
                <h4 className="text-xl font-bold">Council Initiatives</h4>
              </div>
              <p className="text-xs">
                The Council's various committees oversee project funding,
                conduct an awards program, propose methods to integrate teaching
                and research, and seek outside funding all with the goal of
                fulfilling the Division of Community Affairs' motto: “Engaging
                Communities and Changing Lives.”
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center text-vgblue gap-3">
                <CalendarDaysIcon width={28} height={28} />
                <h4 className="text-xl font-bold">Council Meetings</h4>
              </div>
              <p className="text-xs">
                The Council on Community-Based Partnerships will announce the
                2023-2024 meeting schedule soon.
              </p>
            </div>
          </div>
          <h3 className="text-2xl text-vgblue border-spacing-1 border-b-[1px] border-neutral-800 mt-6">
            Council Members & Meeting Notes
          </h3>
          <div className="mt-3 flex flex-gap-4">
            <ExtraInfoButton
              name="Council Executive Committee"
              text={
                <p>
                  <ul className="text-xs p-1 text-neutral-700 [&>li]:py-1">
                    {councilExecutiveCommittee.map((c) => (
                      <li key={c.key}>
                        <span className="mr-1 font-bold">{c.title}</span>
                        {c.title}
                      </li>
                    ))}
                  </ul>
                </p>
              }
              color="vgred"
              icon={<ChevronDownIcon width={20} height={20} />}
            />
          </div>
          <div className="mt-3 flex flex-gap-4 mb-6">
            <ExtraInfoButton
              name="Council Executive Committee"
              text={
                <p>
                  <ul className="text-xs p-1 text-neutral-700 [&>li]:py-1">
                    {councilExecutiveCommittee2.map((c) => (
                      <li key={c.key}>
                        <span className="mr-1 font-bold">{c.title}</span>
                        {c.title}
                      </li>
                    ))}
                  </ul>
                </p>
              }
              color="vgred"
              icon={<ChevronDownIcon width={20} height={20} />}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CouncilOnCommunityPartnershipsPage;
