import React, { useState } from "react";
import Navbar from "./../../../components/layout/Navbar";
import Footer from "./../../../components/layout/Footer";
import ApplyCampusPageHeader from "./ApplyCampusPage.Header";
import CampusNavBtutton from "./CampusNavBtutton";
import ChevronDownIcon from "@heroicons/react/24/outline/ChevronDownIcon";
import ApplyCampusPageApply from "./ApplyCampusPage.Apply";
import ApplyCampusPageExemptions from "./ApplyCampusPage.Exemptions";
import ApplyCampusPageLivingLearningCommunities from "./ApplyCampusPage.LivingLearningCommunities";
import ApplyCampusPageAcademicLLCs from "./ApplyCampusPage.AcademicLLCs";
import ApplyCampusPageSharedInterestCommunities from "./ApplyCampusPage.SharedInterestCommunities";
import ApplyCampusPageSpringHousing from "./ApplyCampusPage.SpringHousing";
import ApplyCampusPageTransferGraduateStudents from "./ApplyCampusPage.TransferGraduateStudents";
import ApplyCampusPageMedicalRequests from "./ApplyCampusPage.MedicalRequests";
import ApplyCampusPageRoommates from "./ApplyCampusPage.Roommates";
import ApplyCampusPageFreshmanRoomAssignment from "./ApplyCampusPage.FreshmanRoomAssignment";
import ApplyCampusPageMoveIn from "./ApplyCampusPage.MoveIn";
import ApplyCampusPageMoveInSchedule from "./ApplyCampusPage.MoveInSchedule";
import ApplyCampusPagePackingMoveIn from "./ApplyCampusPage.PackingMoveIn";
import ApplyCampusPageMoveInDay from "./ApplyCampusPage.MoveInDay";
import ApplyCampusPageRoomSetup from "./ApplyCampusPage.RoomSetup";
import ApplyCampusPageMoveInVolunteers from "./ApplyCampusPage.MoveInVolunteers";

const ApplyCampusPage = () => {
  const [show, setShow] = useState(0);

  return (
    <>
      <Navbar />
      <ApplyCampusPageHeader />
      <div className="w-full bg-neutral-100">
        <details className="group w-full max-w-[1200px] mx-auto p-2">
          <summary className="flex justify-between items-center bg-white shadow-sm p-3 font-medium cursor-pointer list-none">
            <span className="text-sm">Navigate</span>
            <span className="transition group-open:rotate-180">
              <ChevronDownIcon height={16} width={16} />
            </span>
          </summary>
          <div className="mt-3 group-open:animate-fadeIn w-full">
            <div className="w-full max-w-[1200px] mx-auto p-4 grid grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-3 gap-2 justify-center">
              <CampusNavBtutton
                onClick={() => setShow(0)}
                name="Apply"
                active={show === 0}
                key={0}
                id={0}
              />
              <CampusNavBtutton
                onClick={() => setShow(1)}
                name="Exemptions"
                active={show === 1}
                key={1}
                id={1}
              />
              <CampusNavBtutton
                onClick={() => setShow(2)}
                name="Living-Learning Communities"
                active={show === 2}
                key={2}
                id={2}
              />
              <CampusNavBtutton
                onClick={() => setShow(3)}
                name="Academic LLCs"
                active={show === 3}
                key={3}
                id={3}
              />
              <CampusNavBtutton
                onClick={() => setShow(4)}
                name="Shared Interest Communities"
                active={show === 4}
                key={4}
                id={4}
              />
              <CampusNavBtutton
                onClick={() => setShow(5)}
                name="Spring Housing"
                active={show === 5}
                key={5}
                id={5}
              />
              <CampusNavBtutton
                onClick={() => setShow(6)}
                name="Transfer and Graduate Students"
                active={show === 6}
                key={6}
                id={6}
              />
              <CampusNavBtutton
                onClick={() => setShow(7)}
                name="Medical Requests"
                active={show === 7}
                key={7}
                id={7}
              />
              <CampusNavBtutton
                onClick={() => setShow(8)}
                name="Roommates"
                active={show === 8}
                key={8}
                id={8}
              />
              <CampusNavBtutton
                onClick={() => setShow(9)}
                name="Freshman Room Assignment"
                active={show === 9}
                key={9}
                id={9}
              />
              <CampusNavBtutton
                onClick={() => setShow(10)}
                name="Move-In"
                active={show === 10}
                key={10}
                id={10}
              />
              <CampusNavBtutton
                onClick={() => setShow(11)}
                name="Move-In Schedule"
                active={show === 11}
                key={11}
                id={11}
              />
              <CampusNavBtutton
                onClick={() => setShow(12)}
                name="Packing for Move-In"
                active={show === 12}
                key={12}
                id={12}
              />
              <CampusNavBtutton
                onClick={() => setShow(13)}
                name="Move-In Day"
                active={show === 13}
                key={13}
                id={13}
              />
              <CampusNavBtutton
                onClick={() => setShow(14)}
                name="Room Setup"
                active={show === 14}
                key={14}
                id={14}
              />
              <CampusNavBtutton
                onClick={() => setShow(15)}
                name="Move-In Volunteers"
                active={show === 15}
                key={15}
                id={15}
              />
            </div>
          </div>
        </details>
      </div>
      <div className="w-full p-2 bg-neutral-100">
        {show === 0 && <ApplyCampusPageApply />}
        {show === 1 && <ApplyCampusPageExemptions />}
        {show === 2 && (
          <ApplyCampusPageLivingLearningCommunities setShow={setShow} />
        )}
        {show === 3 && <ApplyCampusPageAcademicLLCs />}
        {show === 4 && <ApplyCampusPageSharedInterestCommunities />}
        {show === 5 && <ApplyCampusPageSpringHousing />}
        {show === 6 && <ApplyCampusPageTransferGraduateStudents />}
        {show === 7 && <ApplyCampusPageMedicalRequests />}
        {show === 8 && <ApplyCampusPageRoommates setShow={setShow} />}
        {show === 9 && <ApplyCampusPageFreshmanRoomAssignment />}
        {show === 10 && <ApplyCampusPageMoveIn setShow={setShow} />}
        {show === 11 && <ApplyCampusPageMoveInSchedule />}
        {show === 12 && <ApplyCampusPagePackingMoveIn />}
        {show === 13 && <ApplyCampusPageMoveInDay />}
        {show === 14 && <ApplyCampusPageRoomSetup />}
        {show === 15 && <ApplyCampusPageMoveInVolunteers />}
      </div>
      <Footer />
    </>
  );
};

export default ApplyCampusPage;
