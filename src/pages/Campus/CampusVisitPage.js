import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import CampusVisitPageCalender from "./CampusVisitPage.Calender";
import useDocument from "../../hooks/useDocumentTitle";

const headerImage = require("../../assets/images/campus visit - header.jpeg");

const CampusVisitPage = () => {
  useDocument("Campus Visits");

  return (
    <>
      <Navbar />
      <div className="w-full mb-10 mt-20 min-[720px]:mt-10">
        <div className="w-full max-w-[900px] m-auto px-2">
          <h2 className="text-slate-600 mb-2 text-3xl">Campus Visits</h2>
          <img
            className="object-cover w-full max-h-[15rem]"
            src={headerImage}
            alt="Student Life"
          />
          <h4 className="text-slate-600 text-xl w-full border-b-[1px] border-slate-600 pb-4 my-4">
            Campus Tours
          </h4>
          <p className="text-sm text-slate-600">
            With a current Delphis student as your guide, you'll get an up-close
            look at our campus, learn more about our rich history and traditions
            and find out about the limitless opportunities available to you at
            The University of Alabama. Our guided tours, which last
            approximately two hours, include an information session and tour of
            top campus locations, with visits to some of our residence halls.
          </p>
          <p className="my-4 text-sm text-slate-600">
            View the calendar below to select a date and register for your
            campus tour.
          </p>
          <CampusVisitPageCalender />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CampusVisitPage;
