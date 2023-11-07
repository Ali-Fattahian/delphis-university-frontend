import React from "react";
import Navbar from "../components/layout/Navbar";
import useDocumentTitle from "../hooks/useDocumentTitle";
import TextOnImage from "../components/layout/TextOnImage";

const AcademicsPage = () => {
  useDocumentTitle("Academics");

  const imageURL = require("../assets/images/Hometown.jpeg");

  return (
    <>
      <Navbar />
      <TextOnImage
        text={`At The University of Alabama, you will be surrounded by expert
            mentors and dedicated faculty as you pursue your interests and forge
            your legend through hands-on research and learning.`}
        title="Academics"
        imageURL={imageURL}
      />
    </>
  );
};

export default AcademicsPage;
