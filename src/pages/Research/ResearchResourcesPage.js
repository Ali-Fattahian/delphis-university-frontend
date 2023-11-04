import React from "react";
import Navbar from "../../components/layout/Navbar";
import ImageNextToParagraphMoreInfo from "../../components/layout/ImageNextToParagraph.MoreInfo";
import LinkButtonTransparent from "../../components/utilities/LinkButtonTransparent";

const imageURL = require("../../assets/images/pexels-christina-morillo-1181534.jpeg");

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
        // subTitle="UD is commited to building an innovative research community on campus"
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
    </>
  );
};

export default ResearchResourcesPage;
