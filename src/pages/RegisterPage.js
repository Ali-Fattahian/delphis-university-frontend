import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

const imageURL = require("../assets/images/Login.jpeg");

const RegisterPage = () => {
  useDocumentTitle("Register");

  return (
    <>
      <img
        src={imageURL}
        alt="University Area"
        className="object-cover h-screen w-screen"
      />
      <div className="flex justify-center items-center absolute top-0 left-0 bottom-0 right-0">
        <div className="bg-transparent backdrop-blur-sm p-4 text-white w-3/4 sm:w-1/2 max-w-[450px]">
          <form
            method="POST"
            className="flex flex-col justify-center items-center gap-4"
          >
            <h1 className="text-center font-semibold  text-4xl [text-shadow:_0_-2px_0_rgb(0_0_0_/_50%)]">
              Register
            </h1>
            <p className="text-center font-semibold text-slate-700 mb-4">
              Create a Delphis account
            </p>
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
                htmlFor="birthdate"
              >
                Birthdate
              </label>
              <input
                className="block w-full text-slate-800 px-3 py-1 text-sm font-bold outline-none focus-within:bg-slate-100 rounded-sm cursor-pointer"
                type="date"
                id="birthdate"
                required
              />
            </div>
            <div className="w-full">
              <label
                className="block mb-1 font-semibold text-sm"
                htmlFor="password"
              >
                PASSWORD
              </label>
              <input
                className="block w-full text-slate-800 px-3 py-1 text-sm font-bold outline-none focus-within:bg-slate-100 rounded-sm"
                type="password"
                id="password"
                autoComplete="true"
                required
              />
            </div>
            <button
              type="submit"
              id="submit"
              name="submit"
              className="w-full px-2 py-2 bg-transparent text-white text-sm font-semibold border-[1px]  transition-colors duration-300 hover:bg-[#ffffff14] text-center rounded-sm"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
