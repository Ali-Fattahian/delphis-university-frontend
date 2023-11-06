import React from "react";
import LinkButtonWithIcon from "../../components/utilities/LinkButtonWithIcon";
import {
  HeartIcon,
  CakeIcon,
  CurrencyDollarIcon,
  TruckIcon,
  ComputerDesktopIcon,
  BuildingLibraryIcon,
  InformationCircleIcon,
  UserGroupIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";

const FacultyPageServices = () => {
  const buttonsClasses =
    "text-sm font-bold hover:text-vgred hover:bg-slate-50 w-full";

  return (
    <div className="p-6 mt-10">
      <h1 className="text-3xl sm:text-5xl mb-6 text-center overflow-hidden">
        Services
      </h1>
      <p className="text-center mb-6">
        UD offers many support services to benefit faculty and staff and create
        a positive, enriching work environment.
      </p>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-4">
        <div className="flex flex-col">
          <LinkButtonWithIcon
            color="vggreen"
            name="Dining"
            link="/"
            classes={buttonsClasses}
            icon={<CakeIcon className="w-5" />}
          />
          <LinkButtonWithIcon
            color="vggreen"
            name="Benefits"
            link="/"
            classes={buttonsClasses}
            icon={<CurrencyDollarIcon className="w-5" />}
          />
          <LinkButtonWithIcon
            color="vggreen"
            name="Parking"
            link="/"
            classes={buttonsClasses}
            icon={<TruckIcon className="w-5" />}
          />
        </div>
        <div className="flex flex-col">
          <LinkButtonWithIcon
            color="vggreen"
            name="Wellness and Work-Life"
            link="/"
            classes={buttonsClasses}
            icon={<HeartIcon className="w-5" />}
          />
          <LinkButtonWithIcon
            color="vggreen"
            name="Information Technology"
            link="/"
            classes={buttonsClasses}
            icon={<ComputerDesktopIcon className="w-5" />}
          />
          <LinkButtonWithIcon
            color="vggreen"
            name="Disablitiy Services"
            link="/"
            classes={buttonsClasses}
            icon={<InformationCircleIcon className="w-5" />}
          />
        </div>
        <div className="flex flex-col">
          <LinkButtonWithIcon
            color="vggreen"
            name="Holiday Schedule"
            link="/"
            classes={buttonsClasses}
            icon={<ShoppingBagIcon className="w-5" />}
          />
          <LinkButtonWithIcon
            color="vggreen"
            name="Career Opportunities"
            link="/"
            classes={buttonsClasses}
            icon={<BuildingLibraryIcon className="w-5" />}
          />
          <LinkButtonWithIcon
            color="vggreen"
            name="University Recreation"
            link="/"
            classes={buttonsClasses}
            icon={<UserGroupIcon className="w-5" />}
          />
        </div>
      </div>
    </div>
  );
};

export default FacultyPageServices;
