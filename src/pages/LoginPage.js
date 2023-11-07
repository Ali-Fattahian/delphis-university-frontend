import React, { useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

const imageURL = require("../assets/images/Login.jpeg");

const LoginPage = () => {
  useDocumentTitle("Login");

  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);

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
              LOGIN
            </h1>
            <p className="text-center font-semibold text-slate-700 mb-4">
              Welcome to Delphis University
            </p>
            <div className="w-full">
              <label
                className="block mb-1 font-semibold text-sm"
                htmlFor="username"
              >
                USERNAME/ID
              </label>
              <input
                className="block w-full text-slate-800 px-3 py-1 text-sm font-bold outline-none focus-within:bg-slate-100 rounded-sm"
                type="text"
                id="username"
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
              />
            </div>
            <fieldset className="w-full flex flex-col gap-3">
              <div>
                <input
                  id="student"
                  className="peer/student accent-vgyellow mr-1"
                  type="radio"
                  name="status"
                  checked
                />
                <label
                  htmlFor="student"
                  className="peer-checked/student:text-white"
                >
                  Student
                </label>
                <p className="hidden peer-checked/student:block text-xs font-bold">
                  I am a student.
                </p>
              </div>
              <div>
                <input
                  id="staff"
                  className="peer/staff accent-vgyellow mr-1"
                  type="radio"
                  name="status"
                  checked
                />
                <label
                  htmlFor="staff"
                  className="peer-checked/staff:text-white"
                >
                  Staff
                </label>
                <p className="hidden peer-checked/staff:block text-xs font-bold">
                  I am a staff member.
                </p>
              </div>
              <div>
                <input
                  id="faculty"
                  className="peer/faculty accent-vgyellow mr-1"
                  type="radio"
                  name="status"
                  checked
                />
                <label
                  htmlFor="faculty"
                  className="peer-checked/faculty:text-white"
                >
                  Faculty
                </label>
                <p className="hidden peer-checked/faculty:block text-xs font-bold">
                  I am a faculty member.
                </p>
              </div>
            </fieldset>
            <button
              type="submit"
              id="login"
              name="login"
              className="w-full px-2 py-2 bg-transparent text-white text-sm font-semibold border-[1px]  transition-colors duration-300 hover:bg-[#ffffff14] text-center rounded-sm"
            >
              Log In
            </button>
          </form>
          <div className="mt-4 border-t-[1px] border-t-slate-500 pt-4 overflow-hidden">
            <p
              className="text-sm font-bold text-slate-100 cursor-pointer hover:underline"
              onClick={() => setForgotPasswordOpen((prevState) => !prevState)}
            >
              I forgot my password
            </p>
            <form
              method="POST"
              className={`w-full transition-all mt-2 duration-300 ${
                forgotPasswordOpen ? "scale-0" : "scale-100"
              }`}
            >
              <div>
                <label
                  className="block mb-1 font-semibold text-sm"
                  htmlFor="lastname"
                >
                  LAST NAME
                </label>
                <input
                  className="block w-full text-slate-800 px-3 py-1 text-sm font-bold outline-none focus-within:bg-slate-100 rounded-sm"
                  type="text"
                  id="lastname"
                />
              </div>
              <div className="w-full mt-2">
                <label
                  className="block mb-1 font-semibold text-sm"
                  htmlFor="username-forgot"
                >
                  USERNAME/ID
                </label>
                <input
                  className="block w-full text-slate-800 px-3 py-1 text-sm font-bold outline-none focus-within:bg-slate-100 rounded-sm"
                  type="text"
                  id="username-forgot"
                />
              </div>
              <p className="text-xs font-bold mt-1">
                Please provide your ID and last name.
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
