import React, { useMemo, useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ImageNextToParagraphMoreInfo from "../../components/layout/ImageNextToParagraph.MoreInfo";
import LinkButton from "../../components/utilities/LinkButton";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import countryList from "react-select-country-list";
import LinkButtonAlt from "../../components/utilities/LinkButtonAlt";
import CardsNoBorderContainer from "../../components/layout/CardsNoBorderContainer";

const headerImage = require("../../assets/images/international admissions - header.jpeg");
const freshmanImage = require("../../assets/images/international admissions - freshman.jpeg");
const transferImage = require("../../assets/images/international admissions - transfer.jpeg");
const exploreImage = require("../../assets/images/international admissions - explore.jpeg");
const centerImage = require("../../assets/images/international admissions - center.jpeg");

const cardsArr = [
  {
    key: 1,
    title: "Freshman",
    text: `You have finished, or are set to finish Secondary School, but have not enrolled in any University courses after secondary school completion.`,
    imageURL: freshmanImage,
    link: "/international-freshman",
  },
  {
    key: 2,
    title: "Transfer",
    text: `You have completed one or more courses at the college level after graduating from secondary school.`,
    imageURL: transferImage,
    link: "/international-transfer",
  },
];

const InternationalAdmissionsPage = () => {
  const [country, setCountry] = useState("");
  const [plan, setPlan] = useState("");
  const [start, setStart] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const animatedComponents = makeAnimated();

  return (
    <>
      <Navbar />
      <div className="mt-[36px] min-[720px]:mt-0 w-full">
        <div className="w-full max-w-[1200px] mx-auto text-neutral-700">
          <ImageNextToParagraphMoreInfo
            title="International Admissions"
            text={`Founded in 1831 as the state of Alabama’s flagship university, The University of Alabama has always focused on being the best. We are dedicated to excellence in teaching, research and service. We welcome applications from students around the world! Undergraduate International Admissions is here to help you with your application and admission to The University of Alabama.`}
            imageLink={headerImage}
            bgColor="white"
            textColor="black"
            classes={{ marginTop: 0 }}
            buttonComponent={
              <div className="w-full flex justify-center text-center p-1">
                <LinkButtonAlt name="Apply Today" link="/application" />
              </div>
            }
            reverse={false}
          />
          <CardsNoBorderContainer
            title="Application Requirements and Procedures"
            text={`What best describes how you would enter UA?`}
            cardsArr={cardsArr}
            bgColor="neutral-100"
          />
          <ImageNextToParagraphMoreInfo
            title="Explore. Create. Achieve. Transcend."
            text={`As a student at The University of Alabama you’ll grow and excel in an unrivaled academic environment on our campus, routinely named one of the most impressive in the country. Equipped with the unmatched opportunities and resources UA has to offer, there is no limit to what you can dream and achieve.`}
            imageLink={exploreImage}
            bgColor="white"
            textColor="black"
            classes={{ marginTop: 0 }}
            buttonComponent={
              <div className="w-full flex justify-center text-center p-1">
                <LinkButtonAlt name="Academic Programs" link="/" />
              </div>
            }
            reverse={true}
          />
          <div className="w-full bg-vgskyblue bg-opacity-60 p-4">
            <h1 className="mb-4 text-4xl overflow-hidden font-bold w-full mx-auto max-w-[500px] text-center">
              You Belong at UD. Let Us Tell You More.
            </h1>
            <form
              method="post"
              className="w-full max-w-[500px] mx-auto mt-2 flex flex-col justify-center gap-4 items-center"
            >
              <div className="w-full">
                <label
                  className="block mb-1 font-semibold text-sm"
                  htmlFor="firstname"
                >
                  First Name
                </label>
                <input
                  className="block w-full text-slate-800 px-3 py-1 text-sm font-bold outline-none focus-within:bg-slate-100 rounded-sm"
                  type="text"
                  id="firstname"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  className="block mb-1 font-semibold text-sm"
                  htmlFor="lastname"
                >
                  Last Name
                </label>
                <input
                  className="block w-full text-slate-800 px-3 py-1 text-sm font-bold outline-none focus-within:bg-slate-100 rounded-sm"
                  type="text"
                  id="lastname"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  className="block mb-1 font-semibold text-sm"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="block w-full text-slate-800 px-3 py-1 text-sm font-bold outline-none focus-within:bg-slate-100 rounded-sm"
                  type="email"
                  id="email"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  className="block mb-1 font-semibold text-sm"
                  htmlFor="country"
                >
                  Country of Citizenship
                </label>

                <Select
                  options={options}
                  classNames="block w-full text-slate-800 px-3 py-1 text-sm font-bold  focus-within:bg-slate-100 rounded-sm"
                  id="country"
                  onChange={(v) => setCountry(v)}
                  components={animatedComponents}
                  required={true}
                />
              </div>
              <div className="w-full">
                <label
                  className="block mb-1 font-semibold text-sm"
                  htmlFor="plan"
                >
                  I plan to enter UD as a
                </label>
                <div className="flex gap-2 w-full text-center">
                  <p
                    className={`px-3 py-1 w-full border-[1px] cursor-pointer border-neutral-300 ${
                      plan === "freshman" ? "bg-vgred text-white" : "bg-white"
                    }`}
                    onClick={() => setPlan("freshman")}
                  >
                    Freshman
                  </p>
                  <p
                    className={`px-3 py-1 border-[1px] w-full cursor-pointer border-neutral-300 ${
                      plan === "transfer" ? "bg-vgred text-white" : "bg-white"
                    }`}
                    onClick={() => setPlan("transfer")}
                  >
                    Transfer
                  </p>
                </div>
              </div>
              <div className="w-full">
                <label
                  className="block mb-1 font-semibold text-sm"
                  htmlFor="plan"
                >
                  Starting date
                </label>
                <div className="grid grid-cols-2 gap-2 w-full text-center">
                  <p
                    className={`px-3 py-1 w-full border-[1px] cursor-pointer border-neutral-300 ${
                      start === "s22" ? "bg-vgred text-white" : "bg-white"
                    }`}
                    onClick={() => setStart("s22")}
                  >
                    Spring 2022
                  </p>
                  <p
                    className={`px-3 py-1 border-[1px] w-full cursor-pointer border-neutral-300 ${
                      start === "sr22" ? "bg-vgred text-white" : "bg-white"
                    }`}
                    onClick={() => setStart("sr22")}
                  >
                    Summer 2022
                  </p>
                  <p
                    className={`px-3 py-1 border-[1px] w-full cursor-pointer border-neutral-300 ${
                      start === "f22" ? "bg-vgred text-white" : "bg-white"
                    }`}
                    onClick={() => setStart("f22")}
                  >
                    Fall 2022
                  </p>
                  <p
                    className={`px-3 py-1 w-full border-[1px] cursor-pointer border-neutral-300 ${
                      start === "s23" ? "bg-vgred text-white" : "bg-white"
                    }`}
                    onClick={() => setStart("s23")}
                  >
                    Spring 2023
                  </p>
                  <p
                    className={`px-3 py-1 border-[1px] w-full cursor-pointer border-neutral-300 ${
                      start === "sr23" ? "bg-vgred text-white" : "bg-white"
                    }`}
                    onClick={() => setStart("sr23")}
                  >
                    Summer 2023
                  </p>
                  <p
                    className={`px-3 py-1 border-[1px] w-full cursor-pointer border-neutral-300 ${
                      start === "f23" ? "bg-vgred text-white" : "bg-white"
                    }`}
                    onClick={() => setStart("f23")}
                  >
                    Fall 2023
                  </p>
                  <p
                    className={`px-3 py-1 w-full border-[1px] cursor-pointer border-neutral-300 ${
                      start === "s24" ? "bg-vgred text-white" : "bg-white"
                    }`}
                    onClick={() => setStart("s24")}
                  >
                    Spring 2024
                  </p>
                  <p
                    className={`px-3 py-1 border-[1px] w-full cursor-pointer border-neutral-300 ${
                      start === "sr24" ? "bg-vgred text-white" : "bg-white"
                    }`}
                    onClick={() => setStart("sr24")}
                  >
                    Summer 2024
                  </p>
                  <p
                    className={`px-3 py-1 border-[1px] w-full cursor-pointer border-neutral-300 ${
                      start === "f24" ? "bg-vgred text-white" : "bg-white"
                    }`}
                    onClick={() => setStart("f24")}
                  >
                    Fall 2024
                  </p>
                  <p
                    className={`px-3 py-1 w-full border-[1px] cursor-pointer border-neutral-300 ${
                      start === "s25" ? "bg-vgred text-white" : "bg-white"
                    }`}
                    onClick={() => setStart("s25")}
                  >
                    Spring 2025
                  </p>
                  <p
                    className={`px-3 py-1 border-[1px] w-full cursor-pointer border-neutral-300 ${
                      start === "sr25" ? "bg-vgred text-white" : "bg-white"
                    }`}
                    onClick={() => setStart("sr25")}
                  >
                    Summer 2025
                  </p>
                  <p
                    className={`px-3 py-1 border-[1px] w-full cursor-pointer border-neutral-300 ${
                      start === "f25" ? "bg-vgred text-white" : "bg-white"
                    }`}
                    onClick={() => setStart("f25")}
                  >
                    Fall 2025
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <button
                  type="submit"
                  className="text-black px-3 py-1 cursor-pointer bg-transparent hover:opacity-80 transition-all border-white border-[1px]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <ImageNextToParagraphMoreInfo
            title="Capstone International Center"
            text={`UA offers many ways for you to become part of the global community on our campus. We have 26 student organizations specific to the international and multicultural community, as well as Capstone International, which helps you understand all aspects of your student visa and other immigration guidelines.`}
            imageLink={centerImage}
            bgColor="white"
            textColor="black"
            classes={{ marginTop: 0 }}
            reverse={false}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InternationalAdmissionsPage;
