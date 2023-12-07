import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import useDocumentTitle from "../hooks/useDocumentTitle";
import ChevronDownIcon from "@heroicons/react/24/outline/ChevronDownIcon";
import ExtraInfoButton from "../components/utilities/ExtraInfoButton";

const headerImage = require("../assets/images/human resources - header.jpeg");

const HumanResourcesPage = () => {
  const buttonsClasses =
    "text-sm font-bold hover:text-vgred hover:bg-slate-50 w-full text-left";
  useDocumentTitle("Human Resources");

  return (
    <>
      <Navbar />
      <div className="w-full mb-10 mt-20 min-[720px]:mt-10">
        <div className="w-full max-w-[900px] m-auto px-2">
          <h2 className="text-slate-600 mb-2 text-3xl">Human Resources</h2>
          <img
            className="object-cover w-full max-h-[15rem]"
            src={headerImage}
            alt="Human Resources"
          />
          <p className="text-sm text-slate-800 mt-4">
            We are Human Resources. We provide advice, support and guidance for
            University staff on all aspects of employment.
          </p>
          <p className="text-sm text-slate-800 mt-4">
            The Human Resources Division comprises the HR Business and Advisory,
            Recruitment, Business Support, Organisational Development, Staff
            Health and Wellbeing, Occupational Health, and Equity, Diversity and
            Inclusion teams.
          </p>
          <p className="text-sm text-slate-800 mt-4">
            The University has a five-year People Strategy, 2020 - 2025 which
            sets out five interconnected strategic aims:
          </p>
          <ul className="mt-4 list-decimal list-inside [&>li]:py-2 px-4 text-sm">
            <li>
              <span className="font-semibold mr-1">
                Attracting and recruiting talent:
              </span>
              To be an employer of choice, an organisation with international
              reach, a fully inclusive culture that supports operational
              excellence and high performance, to enable the University to excel
              in research-inspired education and world-changing research.
            </li>
            <li>
              <span className="font-semibold mr-1">
                People and organisational culture:
              </span>
              To provide solutions to support organisational change, improve
              staff engagement, develop colleagues and deliver effective
              leadership development for our people as Citizens of Change.
            </li>
            <li>
              <span className="font-semibold mr-1">
                Recognition and reward:
              </span>
              To have processes in place to appropriately recognise and reward
              all grades and staff groups in a fair, consistent, timely and
              transparent way.
            </li>
            <li>
              <span className="font-semibold mr-1">Inclusivity:</span>
              To be an inclusive place of work and research, enabled by a
              culture of dignity and respect, where our people reflect our
              diverse student body and our wider local community.
            </li>
            <li>
              <span className="font-semibold mr-1">Health and wellbeing:</span>
              To have a holistic approach to staff health and wellbeing with the
              aim to be a sector leader in our approach, that is evidence based
              and informed by staff collaboration.
            </li>
          </ul>
          <p className="text-sm text-slate-800 mt-4">
            The Division is led by the
            <span className="font-semibold mx-1 text-vgblue">
              Director of Human Resources, Emma Stevens.
            </span>
          </p>
          <div className="mt-6 flex flex-col w-full text-start gap-1">
            <ExtraInfoButton
              color="vggreen"
              name="Equity, Diversity and Inclusion"
              text={
                <div className="text-slate-800 text-sm px-1">
                  <p>
                    The Equity, Diversity and Inclusion (EDI) team lead and
                    support the University in delivering on its EDI Strategy,
                    commitments and ambition to be a truly inclusive university.
                  </p>
                  <p className="mt-4">
                    A small and dedicated team, we engage across our staff and
                    student communities, the Students' Union and EDI governance
                    framework, to drive cultural and structural change to
                    advance equity and inclusion through an evidence-based
                    approach, and informed by the voices and lived experiences
                    in our diverse community.
                  </p>
                  <p className="mt-4">
                    We work collaboratively to promote and embed a culture of
                    inclusion, dignity and respect, where everyone is treated in
                    a fair and equitable way, and effect change to challenge and
                    remove structural inequities. Through horizon scanning, we
                    lead the University in responding to the changing EDI
                    landscape, providing strategic direction to ensure we
                    deliver proactive initiatives to tackle the known persistent
                    disadvantages and barriers that exist for people of
                    different identities.
                  </p>
                  <p className="mt-4">
                    Through our EDI expertise we guide, train, advise and
                    support colleagues, teams, schools and services to meet
                    their legal obligations and embed EDI considerations and
                    inclusive best practice into their everyday activities. We
                    value and celebrate the incredible diversity of our
                    University and local community and we are proud to organise,
                    host and support events for staff and students, celebrating
                    diversity and raising awareness of issues faced by
                    marginalised and minoritised groups.
                  </p>
                  <h3 className="font-semibold mt-5">Leadership</h3>
                  <ul className="mt-3 list-inside list-disc">
                    <li>
                      <p className="inline">
                        Angie Pears, Associate Director of Equity, Diversity and
                        Inclusion:
                        <span className="ml-1">
                          <a
                            className="text-vgred hover:underline"
                            href="mailto:angie.pears@ud.edu"
                          >
                            angie.pears@ud.edu
                          </a>
                        </span>
                      </p>
                    </li>
                  </ul>
                  <h3 className="font-semibold mt-5">Key contact</h3>
                  <ul className="mt-3 list-inside list-disc">
                    <li>
                      <p className="inline">
                        Equity, Diversity and Inclusion:
                        <span className="ml-1">
                          <a
                            className="text-vgred hover:underline"
                            href="mailto:equalities@ud.edu"
                          >
                            equalities@ud.edu
                          </a>
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              }
              classes={buttonsClasses}
              icon={<ChevronDownIcon className="w-5" />}
            />
            <ExtraInfoButton
              color="vggreen"
              name="Staff Health and Wellbeing, Occupational Health and Organisational Development"
              text={
                <div className="text-slate-800 text-sm px-1">
                  <p>
                    We provide a holistic package of advice, support, resources
                    and events for staff working at the University, working hard
                    to ensure that the health and wellbeing of staff remains a
                    priority.
                  </p>
                  <p className="mt-4">
                    The nurse-led Occupational Health team provide specialist
                    occupational health advice to staff and managers on
                    maintaining a safe and healthy working environment, and
                    ensuring that the health needs of staff are accommodated
                    within the workplace.
                  </p>
                  <p className="mt-4">
                    The Organisational Development team utilise behavioural
                    science and an understanding of human dynamics to support
                    the University with change, leadership and cultural
                    development. The team also support the learning and
                    development of colleagues including coaching, mentoring and
                    apprenticeships. We have a wealth of experience, skills and
                    knowledge and work with our leaders and colleagues to
                    deliver the right intervention at the right time for
                    individuals and teams.
                  </p>
                  <h3 className="font-semibold mt-5">Leadership</h3>
                  <ul className="mt-3 list-inside list-disc">
                    <li>
                      <p className="inline">
                        Nicola Junkin, Assistant Director HR - Health Wellbeing
                        and Organisational Development:
                        <span className="ml-1">
                          <a
                            className="text-vgred hover:underline"
                            href="mailto:njj8@ud.edu
"
                          >
                            njj8@ud.edu
                          </a>
                        </span>
                      </p>
                    </li>
                  </ul>
                  <h3 className="font-semibold mt-5">Key contacts</h3>
                  <ul className="mt-3 list-inside list-disc">
                    <li>
                      <p className="inline">
                        Staff Health and Wellbeing:
                        <span className="ml-1">
                          <a
                            className="text-vgred hover:underline"
                            href="mailto:staffhwb@ud.edu"
                          >
                            staffhwb@ud.edu
                          </a>
                        </span>
                      </p>
                    </li>
                    <li>
                      <p className="inline">
                        Occupational Health:
                        <span className="ml-1">
                          <a
                            className="text-vgred hover:underline"
                            href="mailto:ochealth@ud.edu"
                          >
                            ochealth@ud.edu
                          </a>
                        </span>
                      </p>
                    </li>
                    <li>
                      <p className="inline">
                        Organisational Development:
                        <span className="ml-1">
                          <a
                            className="text-vgred hover:underline"
                            href="mailto:orgdev@ud.edu"
                          >
                            orgdev@ud.edu
                          </a>
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              }
              classes={buttonsClasses}
              icon={<ChevronDownIcon className="w-5" />}
            />
            <ExtraInfoButton
              color="vggreen"
              name="HR Business Partnering and Advisory"
              text={
                <div className="text-slate-800 text-sm px-1">
                  <p>
                    The HR Business Partnering and Advisory teams play a crucial
                    role in managing various aspects of the University's HR
                    functions, offering guidance and support to managers and
                    employees on things like employee development, conflict
                    resolution, and policy interpretation.
                  </p>
                  <p className="mt-4">
                    The College and Professional Services HR Advisory teams
                    ensure that University policies, procedures and practices
                    are consistently applied across Professional Services and
                    the colleges, and ensure that we are inclusive, inspiring
                    and impactful in line with the University's values. We
                    develop and update HR policies to reflect changing laws,
                    regulations, and best practice. We address employee
                    enquiries, concerns and conflicts and act as intermediaries
                    between employees and management, striving to maintain a
                    positive work environment and resolve issues in a fair and
                    effective manner. By building relationships with line
                    managers, we support and coach them to resolve a range of
                    informal issues and to lead their teams effectively. We
                    promote a positive work culture by ensuring that our staff
                    are recognised for their efforts and rewarded effectively in
                    line with our recognition schemes.
                  </p>
                  <h3 className="font-semibold mt-5">Leadership</h3>
                  <ul className="mt-3 list-inside list-disc">
                    <li>
                      <p className="inline">
                        Clare Haynes, Assistant Director of HR (Professional
                        Services):
                        <span className="ml-1">
                          <a
                            className="text-vgred hover:underline"
                            href="mailto:clare.haynes@ud.edu"
                          >
                            clare.haynes@ud.edu
                          </a>
                        </span>
                      </p>
                    </li>
                    <li>
                      <p className="inline">
                        Nerys Bradley, Assistant Director of HR (Academic):
                        <span className="ml-1">
                          <a
                            className="text-vgred hover:underline"
                            href="mailto:nb255@ud.edu"
                          >
                            nb255@ud.edu
                          </a>
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              }
              classes={buttonsClasses}
              icon={<ChevronDownIcon className="w-5" />}
            />
            <ExtraInfoButton
              color="vggreen"
              name="Recruitment"
              text={
                <div className="text-slate-800 text-sm px-1">
                  <p>
                    The University's strategic aims involve attracting and
                    retaining excellent, committed staff with outstanding
                    experience, skills and knowledge. We use our understanding
                    of particular departments and role requirements to advise
                    managers on the best ways to find the people they need, with
                    inclusivity and diversity at the forefront of the entire
                    recruitment process.
                  </p>
                  <p className="mt-4">
                    The Recruitment team also ensure that staff are recruited
                    both in a timely manner and in line with employment
                    legislation to result in an efficient onboarding process in
                    line with the University's reputation and wider strategic
                    aims. As well as attracting new candidates, we also work to
                    retain current staff by promoting secondment and
                    redeployment opportunities within the University and ensure
                    ongoing institutional compliance with regards to the
                    recruitment and retention of non-UK staff members.
                  </p>
                  <h3 className="font-semibold mt-5">Key contact</h3>
                  <ul className="mt-3 list-inside list-disc">
                    <li>
                      <p className="inline">
                        Recruitment
                        <span className="ml-1">
                          <a
                            className="text-vgred hover:underline"
                            href="mailto:recruitment@ud.edu"
                          >
                            recruitment@ud.edu
                          </a>
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              }
              classes={buttonsClasses}
              icon={<ChevronDownIcon className="w-5" />}
            />
            <ExtraInfoButton
              color="vggreen"
              name="Business Support"
              text={
                <div className="text-slate-800 text-sm px-1">
                  <p>
                    We are a small team that process all contract changes for
                    existing staff members at the University.
                  </p>
                  <p className="mt-4">
                    The Business Support team produce regular people management
                    information and reports which help inform plans and key
                    areas of focus. We respond to all staff queries that are
                    sent to the HR advice inbox on a wide range of HR issues.
                    The team oversee the process for staff members who choose to
                    purchase additional annual leave and support a number of
                    University level committees.
                  </p>
                  <h3 className="font-semibold mt-5">Key contact</h3>
                  <ul className="mt-3 list-inside list-disc">
                    <li>
                      <p className="inline">
                        HR advice:
                        <span className="ml-1">
                          <a
                            className="text-vgred hover:underline"
                            href="mailto:hradvice@ud.edu"
                          >
                            hradvice@ud.edu
                          </a>
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              }
              classes={buttonsClasses}
              icon={<ChevronDownIcon className="w-5" />}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HumanResourcesPage;
