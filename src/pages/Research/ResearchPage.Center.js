import React from "react";
import ImageNextToParagraph from "../../components/layout/ImageNextToParagraph.MoreInfo";
import ArrowRightIcon from "@heroicons/react/24/outline/ArrowRightIcon";
import LinkButton from "../../components/utilities/LinkButton";
import LinkButtonAlt from "../../components/utilities/LinkButtonAlt";
import LinkButtonTransparent from "../../components/utilities/LinkButtonTransparent";

const researchInstitutesImage = require("../../assets/images/research - institutes.jpeg");
const researchAnalyticalImage = require("../../assets/images/research - analytical research.jpeg");
const researchCyberImage = require("../../assets/images/research - cyber.jpeg");
const researchHealthImage = require("../../assets/images/research - health.jpeg");
const researchTransportationImage = require("../../assets/images/research - transportation.jpeg");
const researchWaterImage = require("../../assets/images/research - water institute.jpeg");

const ResearchPageCenter = () => {
  return (
    <>
      <ImageNextToParagraph
        imageLink={researchInstitutesImage}
        bgColor="white"
        title="Research & Institute"
        text="The University of Delphis is leveraging its strengths to address some of the most pressing challenges facing society and improve quality of life of people around the globe."
        reverse={true}
        buttonComponent={
          <div className="flex flex-col gap-4">
            <a
              href="/"
              className="text-xs underline-offset-2 hover:underline cursor-pointer font-bold text-vgyellow"
            >
              Guidlines & Procedures
              <ArrowRightIcon className="w-4 inline-block" />
            </a>
            <a
              href="/"
              className="text-xs underline-offset-2 hover:underline cursor-pointer font-bold text-vgyellow"
            >
              BOT-Designated Research Institutes & Centers Policy
              <ArrowRightIcon className="w-4 inline-block" />
            </a>
          </div>
        }
      />
      <ImageNextToParagraph
        classes={{ marginTop: "0" }}
        imageLink={researchAnalyticalImage}
        bgColor="vgskyblue"
        textColor="black"
        title="Delphis Analytical Research Center"
        text={`DARC supports collaborative, multidisciplinary research involving instruments for electron, ion, and x-ray imaging, diffraction, and spectroscopy. This center works with researchers from Delphis and other universities, regional institutions, and stakeholders to accelerate discovery in a variety of fields.
        AARC's strength resides in its ability to facilitate transformative advancements through training and direct research assistance.`}
        reverse={false}
        buttonComponent={
          <LinkButton name="Learn More" link="/" classes="text-center" />
        }
      />
      <ImageNextToParagraph
        bgColor="white"
        title="Delphis Cyber Initiative"
        text="DCI advances the understanding of cyber issues and develops and implements a comprehensive cyber research and education program, creating a more secure, stable, and advanced digital future. DCI collaborates extensively with other institutes to provide expertise related to its main foci."
        textColor="black"
        imageLink={researchCyberImage}
        reverse={true}
        classes={{ marginTop: "0" }}
      />
      <ImageNextToParagraph
        bgColor="vggreen"
        title="Delphis Life Research Institute"
        text="DLRI serves as a focal point for interdisciplinary biopsychosocial research that investigates the human condition at all levels to improve lives across the world. The institute collaborates with other institutions, health care corporations, governmental agencies, and community-based organizations."
        textColor="white"
        imageLink={researchHealthImage}
        reverse={false}
        buttonComponent={<LinkButtonTransparent name="Learn More" link="/" />}
        classes={{ marginTop: "0" }}
      />
      <ImageNextToParagraph
        bgColor="white"
        title="Delphis Transportation Institute"
        text="DTI facilitates and provides world-class leadership for interdisciplinary research, promoting transportation infrastructure, innovation, and advancements that impact the nation."
        subTitle={`Automated, Connected, Electric, Shared & Safe Mobility`}
        textColor="black"
        imageLink={researchTransportationImage}
        reverse={true}
        buttonComponent={
          <LinkButton name="Learn More" link="/" classes="text-center" />
        }
        classes={{ marginTop: "0" }}
      />
      <ImageNextToParagraph
        bgColor="vgred"
        title="Delphis Water Institute"
        text="DWI supports a water-secure world by training the next generation of scientists. Additionally, the Global Water Security Center, part of AWI, investigates science applications that enable analysis of environmental (in)security regarding water, food, energy, and health nexus, providing decision-makers with reliable water intelligence. The institute partners with the National Oceanic and Atmospheric Administration's (NOAA) National Water Center and the U.S. Geological Survey (USGS) Hydrologic Instrumentation Facility, both making a home on the UA campus, which makes Tuscaloosa the epicenter for water research and operations in the nation."
        subTitle={`Automated, Connected, Electric, Shared & Safe Mobility`}
        textColor="white"
        imageLink={researchWaterImage}
        reverse={false}
        buttonComponent={
          <LinkButtonAlt name="Learn More" link="/" classes="text-center" />
        }
        classes={{ marginTop: "0" }}
      />
    </>
  );
};

export default ResearchPageCenter;
