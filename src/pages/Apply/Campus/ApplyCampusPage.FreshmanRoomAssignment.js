import React from "react";

const ApplyCampusPageFreshmanRoomAssignment = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto p-2 text-sm">
      <h2 className="text-neutral-800 font-semibold border-spacing-1 mt-3 border-b-[1px] border-vgyellow text-base">
        Room Selection
      </h2>
      <p className="text-neutral-600 text-sm mt-3">
        Incoming freshmen who complete their housing application by February 1,
        2024, are eligible to take part in online room selection in May 2024.
        Students eligible to participate are notified of their log-in time
        through their Crimson email in the spring. During this process,
      </p>
      <ul className="mt-2 list-disc list-inside [&>li]:my-1 p-2 text-xs">
        <li>
          students pick their space to live in the fall from available spaces
          for which they are eligible,
        </li>
        <li>
          can pull in their confirmed roommate to their room if they have formed
          a roommate pair; are both eligible to live in that hall/room; and
          space allows (space may not allow roommates to live together),
        </li>
        <li>
          students are <span className="font-semibold mx-1">not</span>
          guaranteed any specific building or style of building. Buildings will
          fill during the room selection process, and suites may not be
          available later in the room selection process. Students should have
          multiple options in mind, in case their first choice is not available
          when they participate in room selection.
        </li>
      </ul>
      <p className="text-neutral-600 text-sm mt-3">
        We base a student’s initial room selection day/time on their housing
        application <span className="font-semibold mx-1">completion date</span>
        (which means the contract is signed and the $175 housing deposit is
        paid). Return to your application to confirm your completion date.
      </p>
      <p className="text-neutral-600 text-sm mt-3">
        Incoming freshmen can select one other student to form a roommate pair.
        If one person in the group is eligible for room selection, that person
        can select a room and pull in the other student in their roommate pair
        during their assigned room selection time. If both students in a
        roommate pair are eligible for room selection, the person with the
        earlier selection date can select a room and pull in the other student,
        as long as space allows. If a student is pulled into a space by another
        student, the student who has been pulled in will not participate in room
        selection.
      </p>
      <p className="text-neutral-600 text-sm mt-3">
        NOTE: A confirmed roommate pair created in myRoomie will identify the
        student who initiated a roommate group as the “leader,” however, this
        isn’t relevant for online room selection. In online room selection,
        either student in the roommate pair can select a room online, dependent
        on their individual room selection date/time.
      </p>
      <h2 className="text-neutral-800 font-semibold mt-2 mb-1 px-1 text-base">
        Trying to Fill a 4-Person Suite (Optional and not Guaranteed)
      </h2>
      <p className="text-neutral-600 text-sm mt-1">
        <span className="font-semibold mx-1">
          Incoming freshmen may form a roommate pair with one other person.
        </span>
        Some students hope to select a 4-person suite and have two roommate
        pairs join together in that suite. Students will increase their chances
        of successfully doing so by:
      </p>
      <ul className="mt-2 list-disc list-inside [&>li]:my-1 p-2 text-xs">
        <li>
          Pairing up and confirming two roommate pairs prior to the start of
          room selection. A student must be in a roommate pair in order to pull
          another student in during room selection. A student can only pull the
          <span className="font-semibold mx-1">one</span>student in their pair
          into a room or suite.
        </li>
        <li>
          Communicating and selecting during the same room selection time. If
          Pair A receives an earlier room selection time, and they want to try
          to be in the same suite as Pair B, which has a later selection time,
          they need to wait to select at the same assigned time as Pair B.
        </li>
        <li>
          A member of each roommate pair goes in and selects spaces in the same
          suite.
        </li>
        <li>
          If Pair A selects a suite during their earlier room selection time
          without waiting until Pair B’s time, then more than likely, another
          random pair will go in and select the remaining spaces in that suite.
        </li>
        <li>
          Waiting until a later selection time in order to try to get two pairs
          together will reduce the spaces available for selection, and there is
          no guarantee that two roommate pairs can select spaces in the same
          suite. Students who wait to pick at a later room selection time risk
          not getting into a building or space that they prefer. Students should
          decide whether to prioritize preferred space or roommates.
        </li>
      </ul>
      <h2 className="text-neutral-800 font-semibold border-spacing-1 mt-3 border-b-[1px] border-vgyellow text-base">
        Room Assignment – Housing Applications from February 2
      </h2>
      <p className="text-neutral-600 text-sm mt-3">
        HRC assigns students who apply after February 1 beginning in late May
        through late July/early August. Factors that affect assignment are
        application date; gender; Living-Learning Community status, if any; and
        roommate pair. Students who complete the application beginning February
        2 will preference their top 10 residence hall choices. This list is
        editable until a student’s assignment is made.
        <span className="font-semibold mx-1">
          We consider roommate and hall preferences as space allows but cannot
          guarantee either.
        </span>
        HRC notifies students of their assignment via email. Students can see
        their assignment and roommate(s) in their myHousing portal by clicking
        on View Fall Assignment.
      </p>
      <h2 className="text-neutral-800 font-semibold mt-2 mb-1 px-1 text-base">
        Editing Hall Preferences
      </h2>
      <p className="text-neutral-600 text-sm mt-1">
        Students are able to edit their list of top 10 residence halls until
        they have been assigned to a space. Example: You are admitted to the
        Honors College after you have completed your housing application. You
        can log back in and add Honors buildings to your list so that HRC staff
        know that you would prefer those options when assigned, if space allows.
      </p>
      <h2 className="text-neutral-800 font-semibold border-spacing-1 mt-3 border-b-[1px] border-vgyellow text-base">
        View Room Assignment/Roommates
      </h2>
      <p className="text-neutral-600 text-sm mt-3">
        Once freshman room selection begins for the upcoming academic year,
        students can see their room assignment and other occupants in the space.
        To review your room assignment/roommates once you’ve received an
        assignment, log back into the myHousing portal, click
        <span className="font-semibold mx-1">myRoom</span>and then click the{" "}
        <span className="mx-1 font-semibold">View Fall Housing Assignment</span>
        link.
      </p>
    </div>
  );
};

export default ApplyCampusPageFreshmanRoomAssignment;
