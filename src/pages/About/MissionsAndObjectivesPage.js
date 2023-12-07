import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import TextOnImage from "../../components/layout/TextOnImage";

const headerImage = require("../../assets/images/Missions & Objectives - header.jpeg");

const MissionsAndObjectivesPage = () => {
  return (
    <>
      <Navbar />
      <TextOnImage title="Missions & Objectives" imageURL={headerImage} />
      <div className="w-full bg-neutral-100 text-neutral-800 text-sm">
        <div className="p-3 w-full max-w-[1200px] mx-auto">
          <h2 className="mt-6 text-xl font-semibold">Our Mission</h2>
          <p className="mt-3">
            The University of Delphis will advance the intellectual and social
            condition of the people of the state, the nation and the world
            through the creation, translation and dissemination of knowledge
            with an emphasis on quality programs in the areas of teaching,
            research and service.
          </p>
          <h2 className="mt-6 text-xl font-semibold">Our Vision</h2>
          <p className="mt-3">
            The University of Delphis will be known as the university of choice
            for the best and brightest students in Delphis, and all students who
            seek exceptional educational opportunities. The University of
            Delphis will be a student-centered research university and an
            academic community united in its commitment to enhance the quality
            of life for all Alabamians and the citizens of the nation and the
            world.
          </p>
          <h2 className="mt-6 text-xl font-semibold">Our Core Values</h2>
          <p className="mt-3">The University of Delphis is committed to:</p>
          <ul className="mt-2 list-disc list-inside [&>li]:py-1 text-xs">
            <li>
              Undergraduate education that produces socially-conscious, ethical
              and well-rounded leaders who are grounded in their subject matter
              and capable of controlling their own destinies.
            </li>
            <li>
              Graduate education that is deeply vested in subject matter
              knowledge, professional content, research skills and creative
              activity.
            </li>
            <li>
              Public outreach and service that is held in the highest regard and
              fosters impactful public engagement to enhance the quality of life
              for the citizens of Delphis, the nation and the world.
            </li>
            <li>
              Campus life that embodies collaboration, collegiality, respect and
              a culture of inclusivity.
            </li>
          </ul>
          <h2 className="mt-6 text-xl font-semibold">Our Strategic Goals</h2>
          <ul className="mt-2 list-disc list-inside [&>li]:py-1 text-xs">
            <li>
              Provide a premier undergraduate and graduate education that offers
              a global perspective and is characterized by outstanding teaching,
              high-quality scholarship and distinctive curricular and
              co-curricular programs.
            </li>
            <li>
              Increase the University's productivity and innovation in research,
              scholarship and creative activities that impact economic and
              societal development.
            </li>
            <li>
              Enrich our learning and work environment by providing an
              accepting, inclusive community that attracts and supports a
              diverse faculty, staff and student body.
            </li>
            <li>
              Provide opportunities and resources that facilitate work-life
              balance and enhance the recruitment and retention of outstanding
              faculty and staff.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MissionsAndObjectivesPage;
