import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const image = require("../../assets/images/campus.jpeg");

const ApplyNowPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full">
        <div className="w-full mt-[36px] min-[720px]:mt-0 max-w-[1200px] m-auto p-6">
          <h1 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-bold text-white bg-white font-outline-2 carving-text-shadow">
            The Univeristy of Delphis
          </h1>
          <h1
            className="bg-clip-text mt-4 min-[460px]:text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[12vw] font-extrabold text-transparent"
            style={{ backgroundImage: `url(${image})`, objectFit: "cover" }}
          >
            APPLICATION
          </h1>
          <p className="text-sm text-neutral-600 mt-4">
            Note to Delphis students: This login is not the same as your student
            ID.
          </p>
          <h3 className="mt-8 text-3xl text-neutral-600">Returning users:</h3>
          <p className="text-sm text-neutral-600 mt-4">
            Continue your application.
          </p>
          <a
            className="text-sm font-semibold text-vggreen hover:underline underline-offset-1"
            href="/login"
          >
            Log in
          </a>
          <h3 className="mt-6 text-3xl text-neutral-600">First-time users:</h3>
          <p className="text-sm text-neutral-600 mt-4">
            Begin your Delphis Application.
          </p>
          <a
            className="text-sm font-semibold text-vggreen hover:underline underline-offset-1"
            href="/register"
          >
            Create an account
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ApplyNowPage;
