import React from "react";
import Navbar from "../../components/layout/Navbar";
import ImageNextToParagraphMoreInfo from "../../components/layout/ImageNextToParagraph.MoreInfo";
import LinkButtonTransparent from "../../components/utilities/LinkButtonTransparent";
import CardNoBordContainer from "../../components/layout/CardNoBorderContainer";

const imageURL = require("../../assets/images/pexels-christina-morillo-1181534.jpeg");
const imageURL2 = require("../../assets/images/pexels-roxanne-minnish-4514045.jpeg");

const ResearchResourcesPage = () => {
  return (
    <>
      <Navbar />
      <ImageNextToParagraphMoreInfo
        title="Research Resources"
        text="The University of Alabama celebrates the ongoing efforts of faculty and staff to engage students in innovative research and entrepreneurship. The University is committed to providing faculty and students with the resources and staff support that turn imagination and inspiration into reality."
        imageLink={imageURL}
        bgColor="white"
        textColor="black"
      />
      <ImageNextToParagraphMoreInfo
        title="Resources for Faculty"
        text="The University of Alabama celebrates the ongoing efforts of faculty and staff to engage students in innovative research and entrepreneurship. The University is committed to providing faculty and students with the resources and staff support that turn imagination and inspiration into reality."
        imageLink={imageURL}
        bgColor="vgblue"
        textColor="white"
        buttonComponent={
          <div className="flex flex-col gap-4 justify-center items-center">
            <LinkButtonTransparent name="Training" link="/" />
            <LinkButtonTransparent name="Forms & Templates" link="/" />
          </div>
        }
      />
      <div className="p-8">
        <h1 className="text-5xl text-center font-semibold overflow-hidden mb-10">
          RESOURCES FOR STUDENTS
        </h1>
        <CardNoBordContainer
          cardsArr={[
            {
              imageURL: imageURL2,
              title: "Undergraduate Research",
              text: "The University of Alabama celebrates the ongoing efforts of faculty and staff to engage students in innovative research and entrepreneurship. The University is committed to providing faculty and students with the resources and staff support that turn imagination and inspiration into reality.",
              link: "/",
              key: 1,
            },
            {
              imageURL: imageURL2,
              title: "Undergraduate Research",
              text: "The University of Alabama celebrates the ongoing efforts of faculty and staff to engage students in innovative research and entrepreneurship. The University is committed to providing faculty and students with the resources and staff support that turn imagination and inspiration into reality.",
              link: "/",
              key: 2,
            },
            {
              imageURL: imageURL2,
              title: "Undergraduate Research",
              text: "The University of Alabama celebrates the ongoing efforts of faculty and staff to engage students in innovative research and entrepreneurship. The University is committed to providing faculty and students with the resources and staff support that turn imagination and inspiration into reality.",
              link: "/",
              key: 3,
            },
          ]}
        />
      </div>
    </>
  );
};

export default ResearchResourcesPage;
