import React from "react";
import ExtraInfoButton from "../../components/utilities/ExtraInfoButton";
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
        The University of Delphis offers many support services to benefit
        faculty and staff and create a positive, enriching work environment.
      </p>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-6 max-w-[1600px] m-auto">
        <div className="flex flex-col gap-1">
          <ExtraInfoButton
            color="vggreen"
            name="Dining"
            text={`University Dining Services is the official dining operation
             of the university of Delphis. With diverse self-branded operations
              to nationally recognizable franchises, you have an array of choices
               when it comes to eating.`}
            classes={buttonsClasses}
            icon={<CakeIcon className="w-5" />}
          />
          <ExtraInfoButton
            color="vggreen"
            name="Benefits"
            text={`Benefits complement pay and provide assistance to our
             employees through any stage of their life. Benefits we offer
              include affordable medical, dental and vision coverage, flexible
               spending plans, generous paid time off for staff, disability,
                employee assistance program, life insurance and superb
                 retirement savings plans options.`}
            classes={buttonsClasses}
            icon={<CurrencyDollarIcon className="w-5" />}
          />
          <ExtraInfoButton
            color="vggreen"
            name="Parking"
            text={`We're committed to providing environmentally sustainable,
             innovative and professionally-managed parking & transportation
              options for our students, faculty, staff and visitors.`}
            classes={buttonsClasses}
            icon={<TruckIcon className="w-5" />}
          />
        </div>
        <div className="flex flex-col gap-1">
          <ExtraInfoButton
            color="vggreen"
            name="Wellness and Work-Life"
            text={`The university of Delphis recognizes the challenges
             of balancing work and family life. We are committed to providing
              programs and resources that help you successfully navigate your
               way through work and personal life, and improving your sense of
                achievement, productivity and job satisfaction. We hope that you
                 find these tools useful as we continuously strive to recruit
                  and support the Best and Brightest faculty & staff and 
                  their families.`}
            classes={buttonsClasses}
            icon={<HeartIcon className="w-5" />}
          />
          <ExtraInfoButton
            color="vggreen"
            name="Information Technology"
            text={`It is our mission to advance research, teaching, learning
             and operations at the university of Delphis by providing
              exceptional technology services and support to students,
               faculty and staff. We value reliability, service, collaboration
               , change, respect, innovation, positivity and improvement.`}
            classes={buttonsClasses}
            icon={<ComputerDesktopIcon className="w-5" />}
          />
          <ExtraInfoButton
            color="vggreen"
            name="Disablitiy Services"
            text={`The goal of Disability Services is to aid students, faculty
             and staff with all types of conditions including physical and
              learning disabilities, temporary injuries, and chronic illnesses
               to access the educational possibilities at Delphis University as
                per federal law. We work in collaboration with all departments
                 and programs at the university to facilitate accommodations,
                  advocate for our members with disabilities and assist them
                   to maximize their potential while helping them develop and
                    maintain independence.`}
            classes={buttonsClasses}
            icon={<InformationCircleIcon className="w-5" />}
          />
        </div>
        <div className="flex flex-col gap-1">
          <ExtraInfoButton
            color="vggreen"
            text={`Normal business operations of the university of Delphis will
             be suspended on holidays that are approved by the President and
              published annually by the Department of Human Resources. Eligible
               employees who are not required to work will be excused on such
                holidays without charge to leave or loss of pay and will be paid
                 at their regular rates. In the event eligible employees are
                  required to work on a holiday, non-exempt employees will be
                   paid or given time off in accordance with current policy and
                    exempt employees will be given equivalent time off.`}
            name="Holiday Schedule"
            classes={buttonsClasses}
            icon={<ShoppingBagIcon className="w-5" />}
          />
          <ExtraInfoButton
            color="vggreen"
            text={`
            The Center for Instructional Technology (CIT) provides faculty with
             support in the application, development and maintenance of academic
              instructional technology systems, both emerging and existing. 
              Through demonstrations, technical assistance and training,
               CIT provides faculty with programs that improve teaching,
                learning and scholarship. The Center for Instructional
                 Technology is a division of the Office for Academic Affairs.`}
            name="Center for Instructional Technology"
            classes={buttonsClasses}
            icon={<BuildingLibraryIcon className="w-5" />}
          />
          <ExtraInfoButton
            color="vggreen"
            text={`University Recreation is a center for community
             and connection that empowers all to live happier and healthier
              lives. Enjoy a variety of activities all centered on fun,
               fitness and personal development; many at no additional cost.
                Explore the Cascades, try a Cardio Dance class, grab a few
                 friends for an Outdoor Volleyball league or go for a swim.
                  The REC provides programming that fits into your life,
                   interests and needs.`}
            name="University Recreation"
            classes={buttonsClasses}
            icon={<UserGroupIcon className="w-5" />}
          />
        </div>
      </div>
    </div>
  );
};

export default FacultyPageServices;
