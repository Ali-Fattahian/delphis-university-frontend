import React from "react";

const ApplyCampusPageMedicalRequests = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto p-2 text-xs">
      <p className="text-neutral-600 text-sm">
        Housing and Residential Communities will consider requests for special
        housing accommodation based on medical need, as long as the requests are
        submitted by the deadline and accompanied by documentation from the
        appropriate medical provider.
        <span className="mx-2 font-semibold">
          We will accept requests after the deadline but limited space means
          there may be no way to fulfill a request.
        </span>
        Students still need to complete their housing application through the
        myHousing portal. Only one medical accommodation request form is
        necessary per academic year.
      </p>
      <h2 className="text-neutral-800 font-semibold border-spacing-1 mt-3 border-b-[1px] border-vgyellow text-base">
        Documentation Requirements
      </h2>
      <p className="text-neutral-600 mt-2">
        For all disability housing accommodation requests, HRC requires
        completion of the Medical Accommodation Form by the treating licensed
        clinical professional or health care provider thoroughly familiar with
        the student’s condition and functional limitations and/or restrictions.
        Family members through blood, marriage, or other legal arrangement
        cannot act as the professional or provider.
      </p>
      <p className="text-neutral-600 mt-2">
        HRC is responsible for determining the acceptability of documentation
        and reserves the right to require additional information, as needed. HRC
        also reserves the option of seeking a second professional opinion
        regarding documentation submitted.
      </p>
      <p className="text-neutral-600 mt-2">
        Recommended health care professionals who can provide medical diagnoses
        include physicians, nurse practitioners, surgeons, orthopedic or other
        specialists as appropriate. For
        <span className="font-semibold mx-1">psychiatric disabilities</span>,
        students should provide documentation from a professional generally
        trained, certified, or licensed to diagnose and treat these conditions,
        including a psychologist, psychiatrist, counselor, or social worker.
      </p>
      <p className="text-neutral-600 mt-2">
        Please note that requests for particular housing assignments/living
        environments based on a student’s preference, rather than need, will not
        be honored. For example, a student with ADHD or anxiety seeking a single
        room to serve as a quiet, undisturbed place to study likely represents a
        preference, but not a necessity, for most students. Campus offers
        multiple different locations for quiet study and therefore, our limited
        single/private room accommodations are reserved for individuals with
        documented and substantiated needs and for whom a standard housing
        assignment with a roommate is not viable.
      </p>
      <p className="text-neutral-600 mt-2">
        Once completed and signed, submit the form to Assignments Coordinator
        Jim Barron by either faxing it to 205-348-7135 or mailing to Box 870399,
        Tuscaloosa, AL 35487. Only HRC will have access to and utilize this
        documentation for housing-specific accommodations.
      </p>
      <p className="text-neutral-600 mt-2">
        The Office of Disability Services requires additional documentation to
        determine any necessary academic accommodations.
        <span className="mx-1 font-semibold">
          Requests for accommodation through ODS are not the same and do not
          take the place of requests for accommodation in housing.
        </span>
      </p>
      <p className="text-neutral-600 mt-2">
        Students requesting accommodation in housing due to a medical condition
        can make the same roommate requests as other students. Incoming freshmen
        can request one preferred roommate and upper class students can request
        up to three preferred roommates.
      </p>
      <h2 className="text-neutral-800 font-semibold border-spacing-1 mt-3 border-b-[1px] border-vgyellow text-base">
        Deadlines
      </h2>
      <ul className="mt-2 list-disc list-inside [&>li]:my-1 p-2">
        <li>
          Spring semester
          <li>December 1</li>
        </li>
        <li>
          Fall semester
          <li>February 1 for returning students</li>
          <li>April 1 for incoming freshmen</li>
        </li>
      </ul>
      <h2 className="text-neutral-800 font-semibold border-spacing-1 mt-3 border-b-[1px] border-vgyellow text-base">
        Appeals Process
      </h2>
      <p className="text-neutral-600 mt-2">
        UA recognizes that despite its good faith and reasonable efforts to
        provide fair accommodations to its policies, practices, and procedures
        for students with disabilities, students may ultimately disagree with
        the determination made by HRC. In the event of contention, the student
        may request a review by UA’s ADA Coordinator. The Vice President of
        Student Life will review all written appeals of the decision by the ADA
        coordinator to provide the final institutional review.
      </p>
    </div>
  );
};

export default ApplyCampusPageMedicalRequests;
