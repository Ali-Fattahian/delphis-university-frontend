import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import TextOnImage from "../components/layout/TextOnImage";
import useDocumentTitle from "../hooks/useDocumentTitle";

const headerImage = require("../assets/images/roommates pairs - header.jpeg");

const RoommatesPairsPage = () => {
  useDocumentTitle("Roommates pairs");

  return (
    <>
      <Navbar />
      <TextOnImage title="Roommate Guide 2024- 25" imageURL={headerImage} />
      <div className="mt-6 w-full flex justify-start">
        <div className="sm:w-9/12 w-full">
          <div className="w-full bg-vgyellow p-3">
            <h2 className="text-2xl font-semibold">Important Roommate Info</h2>
          </div>
          <div className="w-full p-6">
            <p className="text-sm">
              Only UA students with a complete housing application can search
              for and select a roommate. Incoming freshmen can only view and
              select other freshmen. Incoming freshmen can select one roommate.
              Returning students can select up to three roommates.
            </p>
            <p className="text-sm py-3">
              Space may not allow roommate pairs to live together, so please
              think about what you will do if you cannot find the space you want
              during online room selection. If your confirmed roommate is able
              to select a room before you, that person can assign you to a
              space. If HRC staff make your housing assignment, we will try to
              accommodate confirmed roommate requests, space permitting.
            </p>
            <p className="py-3 border-y-2 border-vgblue">
              In order to maximize the chances of living with a preferred
              roommate, students should create their roommate pair before online
              room selection begins. Returning students should create their
              roommate group by 8 a.m. Central Time on Monday, April 8. Incoming
              freshmen should complete their roommate pair by 8 a.m. Central
              Time on Monday, May 6.
            </p>
          </div>
          <div className="w-full bg-vgyellow p-3 mt-8">
            <h2 className="text-2xl font-semibold">Roommate Search</h2>
          </div>
          <div className="w-full p-6">
            <p className="text-sm">
              You may search for a potential roommate through My College Roomie
              (MCR). Students will receive a Welcome Email from MCR within 24
              hours of submitting their complete housing application. Within
              MCR, students can create a profile; complete a compatibility
              questionnaire; view potential roommate matches; and reach out to
              communicate with matches. Helpful instruction videos on the HRC
              website provide more information about these processes.
            </p>
            <p className="text-sm py-3">
              If you find someone with whom you want to live, you can create a
              roommate pair beginning on December 1. In order for HRC staff to
              assign students as roommates, or for one student to pull in
              another as a roommate during online room selection, students must
              be in a confirmed roommate pair.
            </p>
          </div>
          <div className="w-full bg-vgyellow p-3 mt-8">
            <h2 className="text-2xl font-semibold">Roommate Pairs</h2>
          </div>
          <div className="w-full p-6">
            <p className="text-sm">
              To match with a roommate, students will need to form a pair.
              Remember, incoming freshmen are limited to two people in a pair
              (including yourself), while returners can have up to four in a
              group.
            </p>
            <p className="text-sm py-3 mt-5">
              Each group will consist of one leader (the person who creates the
              pair and invites the other) and a member (the student who accepts
              the invitation). In order to accept an invitation to a roommate
              pair, a student must have a complete housing application. Students
              can only join one pair at a time. The “leader” and “member” refer
              only to who issues an invitation and who accepts. They are not
              relevant to online room selection and do not refer to who selects
              a room.
            </p>
          </div>
          <div className="w-full bg-vgyellow p-3 mt-8">
            <h2 className="text-2xl font-semibold">Creating a Roommate Pair</h2>
          </div>
          <div className="w-full p-6">
            <p className="text-sm font-semibold text-vgblue">
              For this section, you'll go back to the myHousing portal at
              myhousing.ua.edu (you do not actually request or confirm your
              roommate in MyCollegeRoomie).
            </p>
            <ul className="text-sm pt-3 [&>li]:py-2 list-decimal list-inside">
              <li>
                If you find a roommate and want to create a roommate pair, you
                should log into your myHousing portal and click on myRoomie.
              </li>
              <li>
                Then click
                <span className="ml-1 text-vgred font-semibold">
                  Roommate Group.
                </span>
              </li>
              <li>
                Click on
                <span className="ml-1 text-vgred font-semibold">
                  Create Group.
                </span>
              </li>
              <li>
                To send a roommate pair invitation, click
                <span className="mx-1 text-vgred font-semibold">Invite</span>
                and search for your preferred roommate using their first name,
                last name, or permanent (Crimson) email (all fields not required
                for search). Information used to search must be an exact match.
                Click on
                <span className="ml-1 text-vgred font-semibold">Search</span>.
              </li>
              <li>
                When you find the correct person, click
                <span className="mx-1 text-vgred font-semibold">Select</span>to
                send them an invitation to your roommate pair.
              </li>
            </ul>
            <h2 className="text-base font-bold mt-6">
              Pending Roommate Requests
            </h2>
            <p className="text-sm mt-3">
              Once you have requested the roommate, you will see this person in
              your pair. You may remove a request before it has been accepted by
              clicking Remove next to their name.
            </p>
            <h2 className="text-base font-bold mt-6">
              Confirmed Roommate Requests
            </h2>
            <p className="text-sm mt-3">
              Confirmed Roommate Requests When the other student has responded
              to your request, you will see the changes in your account. If the
              student accepted your request, you will automatically see their
              status change from “Invited” to “Member.”
            </p>
          </div>
          <div className="w-full bg-vgyellow p-3 mt-8">
            <h2 className="text-2xl font-semibold">
              Responding to a Roommate Request
            </h2>
          </div>
          <div className="w-full p-6">
            <p className="text-sm py-3">
              If you have received a roommate request, you will see a
              notification with the option to
              <span className="mx-1 text-vgred font-semibold">Accept</span>or
              <span className="mx-1 text-vgred font-semibold">Decline</span>next
              to your name. Students can only be in one pair at a time. If you
              have been invited to more than 1 pair, you can select
              <span className="mx-1 text-vgred font-semibold">Decline</span>next
              your name to remove a pair, and then click
              <span className="mx-1 text-vgred font-semibold">Accept</span>for
              the pair that you wish to join. If you accept one pair without
              declining the other pair, you will then need to come back and
              decline the other pair(s).
            </p>
            <p className="mt-6 py-2 border-y-2 border-vgblue">
              Remember to click Finish to save your changes.
            </p>
            <p className="mt-4 text-sm">
              Once the roommate request is accepted, both students will see the
              other student in the pair.
            </p>
            <p className="mt-4 text-sm">
              Be careful about accepting roommates, as your accepted roommate
              may pull you into a space during online room selection. If you
              change your mind, you are able to select
              <span className="mx-1 text-vgred font-semibold">Leave</span>before
              the roommate deadline.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RoommatesPairsPage;
