import React from "react";
import ExtraInfoButton from "../../components/utilities/ExtraInfoButton";
import LinkButtonTransparent from "../../components/utilities/LinkButtonTransparent";
import {
  ExclamationCircleIcon,
  FolderIcon,
  BuildingLibraryIcon,
  ShoppingBagIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/solid";

const FacultyPageGovernance = () => {
  const buttonsClasses =
    "text-sm font-bold hover:text-vgred hover:bg-slate-50 w-full";

  return (
    <div className="p-6 mt-10">
      <h1 className="text-3xl sm:text-5xl mb-6 text-center overflow-hidden">
        Governance
      </h1>
      <p className="text-center mb-6">
        Learn about the policies and procedures that govern activities in the
        classroom and the workplace at Delphis university, or lend your voice by
        getting involved in university's faculty and staff professional
        organizations.
      </p>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-6 max-w-[1600px] m-auto">
        <div className="flex flex-col gap-1">
          <ExtraInfoButton
            color="vggreen"
            name="Faculty Senate"
            text={`The University Faculty Senate
             is the representative body of the State's faculty with legislative
              authority on all matters pertaining to the educational interests
               of the University and all educational matters that concern the
                faculties of more than one college. In addition, the Senate is
                 recognized by the University as an advisory and consultative
                  body to the President on all matters that may affect the
                   attainment of the University's educational objectives.`}
            classes={buttonsClasses}
            icon={<FolderIcon className="w-5" />}
          />
          <ExtraInfoButton
            color="vggreen"
            name="Administration"
            text={`University administration conducts the business of the
             university as directed by the president's office. It is divided
              into eight divisions and three staff units. The Vice-President
               Finance and Personnel, who is also a member of the president's
                office, is the director of the university administration.`}
            classes={buttonsClasses}
            icon={<BuildingLibraryIcon className="w-5" />}
          />
        </div>
        <div className="flex flex-col gap-1">
          <ExtraInfoButton
            color="vggreen"
            name="Professional Staff Assembly"
            text={`PSC is an officially-recognized branch of the university
             governance system and exists to promote the growth and welfare
              of staff employees.  We are elected by university staff during
               a campus-wide election process. Assembly Members, through
                assigned committee work, research and provide recommendations
                 on all matters related to staff work environment,
                  benefits, and policies.`}
            classes={buttonsClasses}
            icon={<ShoppingBagIcon className="w-5" />}
          />
          <ExtraInfoButton
            color="vggreen"
            name="OCT Staff Assembly"
            text={`The Office, Clerical, and Technical Staff Assembly (OCTSA)
             was established in 2009 to serve as the representative assembly
              for non-exempt (hourly) staff at The University of Delphis.
               The Assembly, elected by their peers and inclusive of all
                the University's colleges, divisions, and operational units,
                 represents and advocates for the needs of non-exempt staff
                  to the University administration. OCTSA provides a forum
                   for the exchange of ideas, resources for evaluating policy 
                   proposals, and opportunity for professional development
                    and engagement among its members and constituents.`}
            classes={buttonsClasses}
            icon={<ShoppingBagIcon className="w-5" />}
          />
          <ExtraInfoButton
            color="vggreen"
            name="Equal Opportunity Program"
            text={`It is the mission of the Office of Equal Opportunity
             Programs (EOP) to ensure the University community operates
              within a system of equity for all its constituents and all
               its operation as it relates to federal and state laws.`}
            classes={buttonsClasses}
            icon={<ExclamationCircleIcon className="w-5" />}
          />
        </div>
        <div className="flex flex-col gap-1">
          <ExtraInfoButton
            color="vggreen"
            name="HR Policy Manual"
            text={`
            The Delphis University Human Resources Policy Manual is
             designed to provide a clear statement of the University's
              Human Resources policy. The policies contained in this
               manual are in keeping with the values and goals of the
                University. These policies should be used to inform and
                 guide day-to-day human resources decisions.
            ${(
              <LinkButtonTransparent
                name="Link to the file"
                href="/"
                classes="w-full"
              />
            )}
            `}
            classes={buttonsClasses}
            icon={<ClipboardDocumentIcon className="w-5" />}
          />
          <ExtraInfoButton
            color="vggreen"
            name="Faculty Handbook"
            text={`The Faculty Handbook is a guide to the faculty and is
             designed to present general information about Delphis University,
              and some of the more important University policies and practices
               as they apply to the Faculty of the University. It is also meant
                to inform and serve other members of the University community.
                 The Handbook is compiled from a number of sources and is
                  maintained by the Office of the Provost.`}
            classes={buttonsClasses}
            icon={<ClipboardDocumentIcon className="w-5" />}
          />
          <ExtraInfoButton
            color="vggreen"
            name="Staff Handbook"
            text={`This handbook provides University staff members with an
             overview of the University's best practices. Our leadership
              believes in and is proud of the University's environment of
               open communication. We have summarized the key issues that
                affect the daily operational needs and objectives of the
                 University and its respective staff members.`}
            classes={buttonsClasses}
            icon={<ClipboardDocumentIcon className="w-5" />}
          />
        </div>
      </div>
    </div>
  );
};

export default FacultyPageGovernance;
