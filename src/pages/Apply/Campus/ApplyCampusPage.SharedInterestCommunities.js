import React from "react";
import useDocumentTitle from "../../../hooks/useDocumentTitle";

const ApplyCampusPageSharedInterestCommunities = () => {
  useDocumentTitle("Shared Interest Communities");

  return (
    <div className="w-full max-w-[1200px] mx-auto p-2 text-xs">
      <p className="text-neutral-600 text-sm">
        Shared Interest Living-Learning Communities (LLC) are organized either
        around students' shared academic or social interests. Students in Shared
        Interest LLCs have the opportunity to build strong academic and social
        support systems with their fellow residents with whom they have a common
        interest. Each group is supported by either an academic department or a
        Student Life office that work with HRC to provide students with a living
        experience that is unique to their individual interests.
      </p>
      <p className="text-neutral-600 text-sm mt-2">
        The following Shared Interest LLC options are available during the
        2023-2024 Academic Year.
      </p>
      <h2 className="text-neutral-800 font-semibold border-spacing-1 mt-3 border-b-[1px] border-vgyellow text-base">
        Engineering and Computer Science
      </h2>
      <p className="text-neutral-600 mt-3">
        A unique living option is available for male engineering and computer
        science students in Bryant Hall, which houses student-athletes and
        freshmen from the College of Engineering. This living option provides an
        environment where students can exchange ideas, experiences, skills, and
        even class notes. The interaction between students with similar
        interests, and sometimes the same classes, is one of the main advantages
        of this living option. Students who select their option should be
        majoring in a degree program offered by the College of Engineering.
      </p>
      <h2 className="text-neutral-800 font-semibold border-spacing-1 mt-3 border-b-[1px] border-vgyellow text-base">
        Mallet Assembly
      </h2>
      <p className="text-neutral-600 mt-3">
        Mallet Assembly, currently located in Highlands, is a group of original
        thinkers and eclectic personalities. This living option has the
        following goals:
      </p>
      <ul className="list-disc list-inside [&>li]:my-1 p-2">
        <li>
          to recognize extraordinary scholastic achievement through its
          admissions process
        </li>
        <li>
          to encourage further scholastic development through a comprehensive
          system of in-house programs designed as learning activities that are
          enjoyable
        </li>
        <li>
          to encourage the development of leadership skills through the
          self-government of the program and encouragement of individual and
          collective involvement throughout all areas of campus life
        </li>
        <li>
          to gather students to these ends with high scholastic and achievement
          records into a unique environment encompassing academics, recreation,
          unity, and fellowship.
        </li>
      </ul>
      <h2 className="text-neutral-800 font-semibold border-spacing-1 mt-3 border-b-[1px] border-vgyellow text-base">
        Multicultural Living Learning Community at the Rotary International
        House
      </h2>
      <p className="text-neutral-600 mt-3">
        The Multicultural Living Learning Community is a place where students
        can engage with people and ideas from around the world. The small, co-ed
        atmosphere fosters an environment where globalism and multicultural
        communication is practiced through direct interaction. This community is
        ideal for students interested in studying abroad or who have a passion
        for global learning. This community is paired with the recommended
        course CIP 200 Introduction to Global and Cultural Perspectives and
        participation in the Global Tide small group program.
      </p>
    </div>
  );
};

export default ApplyCampusPageSharedInterestCommunities;
