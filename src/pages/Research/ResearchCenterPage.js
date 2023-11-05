import React from "react";
import ImageNextToParagraph from "../../components/layout/ImageNextToParagraph.MoreInfo";
import ArrowRightIcon from "@heroicons/react/24/outline/ArrowRightIcon";
import Navbar from "../../components/layout/Navbar";
import LinkButton from "../../components/utilities/LinkButton";
import LinkButtonAlt from "../../components/utilities/LinkButtonAlt";
import LinkButtonTransparent from "../../components/utilities/LinkButtonTransparent";
import Footer from "../../components/layout/Footer";

const imageURL = require("../../assets/images/pexels-suzy-hazelwood-1887609.jpeg");
const imageURL2 = require("../../assets/images/pexels-christina-morillo-1181534.jpeg");

const ResearchCenterPage = () => {
  return (
    <>
      <Navbar />
      <ImageNextToParagraph
        imageLink={imageURL}
        bgColor="white"
        title="Research & Institute"
        text="The University of Alabama is leveraging its strengths to address some of the most pressing challenges facing society and improve quality of life for those in Alabama, the southeast and around the globe."
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
        imageLink={imageURL2}
        bgColor="vgblue"
        textColor="white"
        title="ALABAMA ANALYTICAL RESEARCH CENTER"
        text={`AARC supports collaborative, multidisciplinary research involving instruments for electron, ion, and x-ray imaging, diffraction, and spectroscopy. This center works with researchers from UA and other universities, regional institutions, and stakeholders to accelerate discovery in a variety of fields.
        AARC's strength resides in its ability to facilitate transformative advancements through training and direct research assistance.`}
        reverse={false}
        buttonComponent={
          <LinkButton name="Learn More" link="/" classes="text-center" />
        }
      />
      <ImageNextToParagraph
        bgColor="white"
        text="ACI advances the understanding of cyber issues and develops and implements a comprehensive cyber research and education program, creating a more secure, stable, and advanced digital future. ACI collaborates extensively with other UA institutes to provide expertise related to its main foci. The institute focuses extensively in
            Artificial Intelligence and Machine Learning
            Critical Infrastructure Protection
            Cybercrime
            Cyber Infrastructure
            Cyber Security
            "
        title="ALABAMA CYBER INITIATIVE"
        textColor="black"
        imageLink={imageURL2}
        reverse={true}
        classes={{ marginTop: "0" }}
      />
      <ImageNextToParagraph
        bgColor="vggreen"
        text="ALRI serves as a focal point for interdisciplinary biopsychosocial research that investigates the human condition at all levels to improve lives across the world. The institute collaborates with UA centers, other institutions, health care corporations, governmental agencies, and community-based organizations. ALRI pursues five research themes:
        Rural Health and Health Disparities
        Neuroscience
        Biomedical Sciences
        Environmental Sciences and Health
        Implementation Science
            "
        title="ALABAMA LIFE RESEARCH INSTITUTE"
        textColor="white"
        imageLink={imageURL2}
        reverse={false}
        buttonComponent={<LinkButtonTransparent name="Learn More" link="/" />}
        classes={{ marginTop: "0" }}
      />
      <ImageNextToParagraph
        bgColor="vgred"
        text="ALRI serves as a focal point for interdisciplinary biopsychosocial research that investigates the human condition at all levels to improve lives across the world. The institute collaborates with UA centers, other institutions, health care corporations, governmental agencies, and community-based organizations. ALRI pursues five research themes:
        Rural Health and Health Disparities
        Neuroscience
        Biomedical Sciences
        Environmental Sciences and Health
        Implementation Science
            "
        title="ALABAMA LIFE RESEARCH INSTITUTE"
        textColor="white"
        imageLink={imageURL}
        reverse={true}
        buttonComponent={
          <LinkButtonAlt name="Learn More" link="/" classes="text-center" />
        }
        classes={{ marginTop: "0" }}
      />
      <Footer />
    </>
  );
};

export default ResearchCenterPage;
