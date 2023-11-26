import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CardsNoBorderContainer from "../components/layout/CardsNoBorderContainer";
import useDocumentTitle from "../hooks/useDocumentTitle";

const headerImage = require("../assets/images/diversity - header.jpeg");
const image2 = require("../assets/images/about - events.jpeg");

const cardsArr = [
  {
    key: 1,
    title: "From Corpse to Capstone",
    text: `See how the Office of Veteran and Military Affairs helps students in unique situations like Wade and several more.`,
    imageURL: image2,
    link: `/news-center/${1}`,
  },
  {
    key: 2,
    title: "From Corpse to Capstone",
    text: `See how the Office of Veteran and Military Affairs helps students in unique situations like Wade and several more.`,
    imageURL: image2,
    link: `/news-center/${2}`,
  },
  {
    key: 3,
    title: "From Corpse to Capstone",
    text: `See how the Office of Veteran and Military Affairs helps students in unique situations like Wade and several more.`,
    imageURL: image2,
    link: `/news-center/${3}`,
  },
];

const DiversityPage = () => {
  useDocumentTitle("Diversity");

  return (
    <>
      <Navbar />
      <div className="w-full mb-10 mt-20 min-[720px]:mt-10">
        <div className="w-full max-w-[900px] m-auto px-2">
          <img
            className="object-cover w-full max-h-[15rem]"
            src={headerImage}
            alt="Student Life"
          />
          <p className="text-slate-500 mt-4 p-4">
            Student Life empowers and supports students in maximizing their
            University learning experiences by cultivating an inclusive campus
            culture that promotes equitable opportunities for engaged learning,
            holistic wellness, and student success.
          </p>
          <CardsNoBorderContainer cardsArr={cardsArr} classes="mt-0 pt-0" />
          <h2 className="text-slate-600 text-3xl w-full border-b-[1px] border-slate-600 pb-4 my-4">
            Featured Faculty & Staff
          </h2>
          <div className="bg-slate-100">
            <div className="p-4 gap-4 flex flex-col sm:flex-row sm:border-none border-b-[1px]">
              <img
                src={image2}
                alt="Featured Faculty & Staff"
                className="aspect-square max-w-[400px] object-cover"
              />
              <div>
                <h3 className="my-2 text-xl">Dr. Adam Sharples Brooks</h3>
                <p className="text-slate-700">
                  Associate Professor and Director of the Speaking Studio
                  College of Communication and Information Sciences
                </p>
              </div>
            </div>
            <div>
              <p className="p-4 text-sm">
                With a background in communication and a commitment to fostering
                meaningful learning experiences, Dr. Adam Sharples Brooks stands
                out for his innovative and student-centered teaching. Brooks
                attributes his approach in part to his personal background and
                teaching inspiration. “When I see a student transform from
                someone without certainty, knowledge or confidence into someone
                who has the competency to be able to make an impact in any room.
                This is meaningful to me because a teacher saved my life in high
                school by introducing me to speech and debate. She taught me a
                skill that enabled me to gain access to college as a
                first-generation college student and a craft that would enable
                me to build a life that I could support myself. I then met
                teachers in graduate school who would show me how to deepen my
                knowledge while still containing the kind of vigor and passion
                that translates to students. I mention the teacher who saved my
                life because I think if I can somehow be even a fraction as
                impactful to my students as my teachers were to me then I've
                done something worthy in this world.” In a recent faculty
                spotlight Q&A conducted by the UD Teaching Academy, Brooks —
                associate professor and director of the Speaking Studio — shares
                insights into his teaching philosophy, the pivotal moments that
                shaped his methods and the profound impact he has had on his
                students' lives.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DiversityPage;
