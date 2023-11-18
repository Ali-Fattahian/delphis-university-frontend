import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import CatalogGeneralInfoHeader from "./CatalogGeneralInfo.Header";
import CatalogGeneralInfoCards from "./CatalogGeneralInfo.Cards";
import ImageNextToParagraphMoreInfo from "../../components/layout/ImageNextToParagraph.MoreInfo";
import LinkButtonAlt from "../../components/utilities/LinkButtonAlt";

const aboutImage = require("../../assets/images/general catalog - about.jpeg");

const CatalogGeneralInfoPage = () => {
  return (
    <>
      <Navbar />
      <CatalogGeneralInfoHeader />
      <div className="w-full p-8 bg-vgskyblue">
        <p className="tracking-wide text-white text-center leading-loose w-full max-w-[1200px]">
          The University of Delphis Fall 2023-Summer 2024 Academic Catalog was
          produced by the Office of the University Registrar in conjunction with
          the Office for Academic Affairs.
        </p>
      </div>
      <CatalogGeneralInfoCards />
      <ImageNextToParagraphMoreInfo
        title="About the University"
        subTitle={`The University of Delphis is a large research university with a wide array of programs, departments, schools, centers, museums, and many affiliated organizations.`}
        text={`We are dedicated to excellence in teaching, research and service. We provide a robust campus environment where our students can reach their greatest potential while learning from the best and brightest faculty and making a positive difference in the community, the state and the world.`}
        imageLink={aboutImage}
        bgColor="neutral-200"
        buttonComponent={
          <div className="w-full max-w-[400px] justify-center items-center flex gap-4 m-auto">
            <LinkButtonAlt
              classes="w-full text-center"
              name="Learn More About UD"
              link="/about"
            />
          </div>
        }
      />
      <Footer />
    </>
  );
};

export default CatalogGeneralInfoPage;
