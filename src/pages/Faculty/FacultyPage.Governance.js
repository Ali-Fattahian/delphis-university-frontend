import React from "react";
import LinkButtonWithIcon from "../../components/utilities/LinkButtonWithIcon";
import {
  ExclamationCircleIcon,
  FolderIcon,
  UserGroupIcon,
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
        GOVERNANCE
      </h1>
      <p className="text-center mb-6">
        Learn about the policies and procedures that govern activities in the
        classroom and the workplace at UA, or lend your voice by getting
        involved in UD's faculty and staff professional organizations.
      </p>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
        <div className="flex flex-col">
          <LinkButtonWithIcon
            color="vggreen"
            name="Faculty Activity Report"
            link="/"
            classes={buttonsClasses}
            icon={<FolderIcon className="w-5" />}
          />
          <LinkButtonWithIcon
            color="vggreen"
            name="Administration"
            link="/"
            classes={buttonsClasses}
            icon={<BuildingLibraryIcon className="w-5" />}
          />
          <LinkButtonWithIcon
            color="vggreen"
            name="Committees"
            link="/"
            classes={buttonsClasses}
            icon={<UserGroupIcon className="w-5" />}
          />
        </div>
        <div className="flex flex-col">
          <LinkButtonWithIcon
            color="vggreen"
            name="Professional Staff Assembly"
            link="/"
            classes={buttonsClasses}
            icon={<ShoppingBagIcon className="w-5" />}
          />
          <LinkButtonWithIcon
            color="vggreen"
            name="OCT Staff Assembly"
            link="/"
            classes={buttonsClasses}
            icon={<ShoppingBagIcon className="w-5" />}
          />
          <LinkButtonWithIcon
            color="vggreen"
            name="Equal Opportunity Program"
            link="/"
            classes={buttonsClasses}
            icon={<ExclamationCircleIcon className="w-5" />}
          />
        </div>
        <div className="flex flex-col">
          <LinkButtonWithIcon
            color="vggreen"
            name="HR Policy Manual"
            link="/"
            classes={buttonsClasses}
            icon={<ClipboardDocumentIcon className="w-5" />}
          />
          <LinkButtonWithIcon
            color="vggreen"
            name="Faculty Handbook"
            link="/"
            classes={buttonsClasses}
            icon={<ClipboardDocumentIcon className="w-5" />}
          />
          <LinkButtonWithIcon
            color="vggreen"
            name="Staff Handbook"
            link="/"
            classes={buttonsClasses}
            icon={<ClipboardDocumentIcon className="w-5" />}
          />
        </div>
      </div>
    </div>
  );
};

export default FacultyPageGovernance;
