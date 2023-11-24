import React from "react";
import useDocumentTitle from "../../../hooks/useDocumentTitle";

const ApplyCampusPageLivingLearningCommunities = ({ setShow }) => {
  useDocumentTitle("Living Learning Communities");

  return (
    <div className="w-full max-w-[1200px] mx-auto p-2 text-xs">
      <p className="text-neutral-600 text-sm">
        Living-Learning Communities (LLCs) engage students with similar academic
        goals or shared interests in a unique living environment, giving them
        common ground with others in their community before they even arrive on
        campus. Residents enjoy exclusive activities, opportunities, and courses
        that cater to their interests, along with increased interaction with
        campus faculty.
        <span
          className="cursor-pointer mx-1 text-vggreen underline"
          onClick={() => setShow(3)}
        >
          Academic LLCs
        </span>
        are geared toward students with a shared academic goal or major who may
        take a common course together.
        <span
          className="cursor-pointer mx-1 text-vggreen underline"
          onClick={() => setShow(4)}
        >
          Shared Interest LLCs
        </span>
        are for students with a common interest or activity.
      </p>
      <h2 className="text-neutral-800 font-semibold border-spacing-1 mt-3 border-b-[1px] border-vgyellow text-base">
        Faculty-in-Residence
      </h2>
      <p className="text-neutral-600 mt-3">
        At UD, we take great pride in our faculty, and want our students to love
        them as much as we do. We developed the Faculty-in-Residence (FIR)
        program in HRC to allow students to interact with faculty members
        outside the classroom.
      </p>
      <h2 className="text-neutral-800 font-semibold mt-3 text-base">
        Jim Michaels
      </h2>
      <ul className="list-disc list-inside [&>li]:my-1 px-2">
        <li>Community: Blount Scholars Program</li>
        <li>
          Academic Position: Senior Fellow, Blount Scholars Program; Instructor,
          Department of English
        </li>
      </ul>
      <h2 className="text-neutral-800 font-semibold mt-3 text-base">
        Aaron Jones
      </h2>
      <ul className="list-disc list-inside [&>li]:my-1 px-2">
        <li>Community: Honors College</li>
        <li>Academic Position: Assistant Director of Creative Writing</li>
      </ul>
      <h2 className="text-neutral-800 font-semibold mt-3 text-base">
        Sam Allen
      </h2>
      <ul className="list-disc list-inside [&>li]:my-1 px-2">
        <li>Community: Honors College</li>
        <li>
          Academic Position: Instructor of Advertising and Public Relations
        </li>
      </ul>
      <h2 className="text-neutral-800 font-semibold border-spacing-1 mt-3 text-base">
        Julie Shawn
      </h2>
      <ul className="list-disc list-inside [&>li]:my-1 p-2">
        <li>Community: Culverhouse College of Business</li>
        <li>Academic Position: Instructor, Management</li>
      </ul>
    </div>
  );
};

export default ApplyCampusPageLivingLearningCommunities;
