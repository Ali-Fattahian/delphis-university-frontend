import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import useDocumentTitle from "../hooks/useDocumentTitle";
import TextOnImage from "../components/layout/TextOnImage";
import LinkButtonAlt from "../components/utilities/LinkButtonAlt";
import CardNoBorder from "../components/layout/CardNoBorder";

const headerImage = require("../assets/images/delphis online - header.jpeg");
const militaryImage = require("../assets/images/delphis online - military.jpeg");
const sameDegreeImage = require("../assets/images/delphis online - same degree.jpeg");
const prestigiousImage = require("../assets/images/delphis online - prestigious.jpeg");
const affordableImage = require("../assets/images/delphis online - affordable.jpeg");
const recentAwardWinnerImage = require("../assets/images/campus - health.jpeg");

const recentServiceAwardWinner = {
  title:
    "Top-Flight Performance on Her Base and in Her Community Earns Air Force Staff Sergeant UA Online's Legendary Service Award",
  text: `Air Force Staff Sgt. Sarah Neal comes from a long line of military service members, and now she's charting her own path. The flight chief, who is earning her master's through UA Online, has led her unit to new heights all while making time to serve her local community — and her commitment to service has been nothing short of legendary.`,
  imageURL: recentAwardWinnerImage,
  id: 1,
};

const awardWinners = [
  {
    key: 1,
    id: 1,
    title:
      "U.S. Air Force Veteran Receives UA Online’s 2023 Legendary Service Award",
    imageURL: recentAwardWinnerImage,
  },
  {
    key: 2,
    id: 2,
    title:
      "Air Force Staff Sergeant Receives UA Online’s Second Legendary Service Award",
    imageURL: recentAwardWinnerImage,
  },
  {
    key: 3,
    id: 3,
    title:
      "Coast Guard Lieutenant Receives UA Online’s First Legendary Service Award",
    imageURL: recentAwardWinnerImage,
  },
];

const onlineEdBenefits = [
  {
    key: 1,
    title: "Military Friendly",
    text: `Unlimited Yellow Ribbon. Top 10 gold-level Military Friendly rank. And a new Military Tuition Grant for active-duty undergraduates.`,
    imageURL: militaryImage,
  },
  {
    key: 2,
    title: "The Same Degree",
    text: `A degree earned through UA Online is identical to one earned on UA's main campus!`,
    imageURL: sameDegreeImage,
  },
  {
    key: 3,
    title: "Prestigious",
    text: `We have a robust alumni network who will greet you with that familiar "Roll Tide."`,
    imageURL: prestigiousImage,
  },
  {
    key: 3,
    title: "Affordable",
    text: `Our students benefit from the distance learning tuition rate (regardless of residency).`,
    imageURL: affordableImage,
  },
];

const DelphisOnlinePage = () => {
  useDocumentTitle("Distant Education");
  const [showForm, setShowForm] = useState(false);
  const [degreeType, setDegreeType] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [military, setMilitary] = useState("");

  return (
    <>
      <Navbar />
      <TextOnImage
        imageURL={headerImage}
        title="Let Your Computer Be Your Campus"
        text={
          <>
            <p>
              Earn a premier degree in a format flexible enough to fit your
              life.
            </p>
            <a
              href="/distant-programs"
              className="p-2 bg-vggreen inline-block mt-3 text-white text-sm text-center hover:opacity-90 transition-all"
            >
              Browse our top-ranked degree programs
            </a>
          </>
        }
      />
      <div className="mt-[36px] min-[720px]:mt-0 p-2">
        <div className="w-full max-w-[800px] mx-auto">
          <div className="flex w-full flex-col gap-4 justify-center text-center p-3">
            <h3 className="text-vgred text-base font-bold">
              {recentServiceAwardWinner.title}
            </h3>
            <img
              src={recentServiceAwardWinner.imageURL}
              alt="Latest Award Winner"
              className="object-cover w-full aspect-square max-w-sm mx-auto"
            />
            <p className="text-slate-800 font-light">
              {recentServiceAwardWinner.text}
            </p>
            <div className="flex justify-center p-1">
              <LinkButtonAlt
                name="Read More"
                link={`/online-award-winners/${recentServiceAwardWinner.id}`}
              />
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-4">
            {onlineEdBenefits.map((b) => (
              <div
                key={b.key}
                className="flex gap-3 flex-col sm:flex-row border-[1px] border-neutral-400 bg-neutral-100 shadow-sm"
              >
                <img
                  className="object-cover max-h-[300px]"
                  src={b.imageURL}
                  alt={b.title}
                />
                <div className="p-2">
                  <h2 className="text-base font-bold mb-3 sm:mt-0 text-vgskyblue underline">
                    {b.title}
                  </h2>
                  <p className="text-sm font-light text-neutral-700 pb-2">
                    {b.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <h3 className="text-vgyellow text-base font-bold p-3">
              Flexible. Affordable.
            </h3>
            <p className="font-light text-neutral-600 mt-2 p-3">
              Whether you’re looking for your first start or a fresh start, UA
              Online can help set you apart in your career. The University of
              Alabama has developed over 90 innovative online degree and
              certificate programs you can complete around your schedule, from
              any location. Join a tradition of champions by earning your degree
              or certificate from The University of Alabama.
            </p>
            <div className="w-full flex justify-center bg-vggreen p-3 mt-5">
              <p
                onClick={() => setShowForm((prevState) => !prevState)}
                className="cursor-pointer px-4 py-3 bg-transparent text-white text-sm font-semibold border-[1px]  transition-colors duration-300 hover:bg-[#ffffff14] min-[270px]:min-w-[200px] text-center"
              >
                Apply Now
              </p>
            </div>
            {showForm && (
              <form
                method="post"
                className="mt-4 flex flex-col justify-center items-center gap-4 text-left p-4 border-[1px] shadow-sm"
              >
                <div className="w-full">
                  <label
                    className="block mb-1 font-semibold text-sm"
                    htmlFor="degreeType"
                  >
                    Degree Type
                  </label>
                  <select
                    className="border-[1px] block w-full text-slate-800 px-3 py-1 text-sm font-bold outline-none focus-within:bg-slate-100 rounded-sm"
                    id="degreeType"
                    required
                    placeholder="Select a degree type"
                  >
                    <option
                      value={degreeType}
                      onClick={() => setDegreeType("")}
                    >
                      Select a degree type
                    </option>
                    <option
                      value={degreeType}
                      onClick={() => setDegreeType("b")}
                    >
                      Bachelor's Degree
                    </option>
                    <option
                      value={degreeType}
                      onClick={() => setDegreeType("c")}
                    >
                      Certificate
                    </option>
                    <option
                      value={degreeType}
                      onClick={() => setDegreeType("m")}
                    >
                      Master's Degree
                    </option>
                    <option
                      value={degreeType}
                      onClick={() => setDegreeType("e")}
                    >
                      Educational Specialist
                    </option>
                    <option
                      value={degreeType}
                      onClick={() => setDegreeType("d")}
                    >
                      Doctoral Degree
                    </option>
                  </select>
                </div>
                <div className="w-full">
                  <label
                    className="block mb-1 font-semibold text-sm"
                    htmlFor="firstname"
                  >
                    First Name
                  </label>
                  <input
                    className="border-[1px] block w-full text-slate-800 px-3 py-1 text-sm font-bold outline-none focus-within:bg-slate-100 rounded-sm"
                    type="text"
                    id="firstname"
                    required
                    value={firstName}
                    placeholder="Your First Name"
                    onChange={(e) => setFirstName(e.target.value)}
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
                    className="border-[1px] block w-full text-slate-800 px-3 py-1 text-sm font-bold outline-none focus-within:bg-slate-100 rounded-sm"
                    type="text"
                    id="lastname"
                    required
                    value={lastName}
                    placeholder="Your Last Name"
                    onChange={(e) => setLastName(e.target.value)}
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
                    className="border-[1px] block w-full text-slate-800 px-3 py-1 text-sm font-bold outline-none focus-within:bg-slate-100 rounded-sm"
                    type="email"
                    id="email"
                    required
                    value={email}
                    placeholder="Your Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="w-full">
                  <label
                    className="block mb-1 font-semibold text-sm"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    className="border-[1px] block w-full text-slate-800 px-3 py-1 text-sm font-bold outline-none focus-within:bg-slate-100 rounded-sm"
                    type="number"
                    id="phone"
                    required
                    value={phone}
                    placeholder="Your Phone Number"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div>Fix The Country State City ...</div>
                <div className="w-full">
                  <label
                    className="block mb-1 font-semibold text-sm"
                    htmlFor="militaryStatus"
                  >
                    Military Status
                  </label>
                  <select
                    className="border-[1px] block w-full text-slate-800 px-3 py-1 text-sm font-bold outline-none focus-within:bg-slate-100 rounded-sm"
                    id="militaryStatus"
                    required
                    placeholder="Select a degree type"
                  >
                    <option value={military} onClick={() => setMilitary("")}>
                      Your Military Status
                    </option>
                    <option
                      value={military}
                      onClick={() => setMilitary("None")}
                    >
                      None
                    </option>
                    <option value={military} onClick={() => setMilitary("a")}>
                      Active Duty
                    </option>
                    <option value={military} onClick={() => setMilitary("r")}>
                      Reserve / National Guard
                    </option>
                    <option value={military} onClick={() => setMilitary("v")}>
                      Veteran
                    </option>
                    <option value={military} onClick={() => setMilitary("d")}>
                      Dependent
                    </option>
                    <option value={military} onClick={() => setMilitary("ms")}>
                      Military Spouse
                    </option>
                    <option value={military} onClick={() => setMilitary("vs")}>
                      Veteran Spouse
                    </option>
                  </select>
                </div>
                <div className="w-full flex justify-center items-center">
                  <button
                    type="submit"
                    id="login"
                    name="login"
                    className="py-2 px-4 bg-vgred text-white text-sm font-semibold border-[1px]  transition-opacity duration-300 hover:opacity-90 text-center rounded-sm"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>
          <div className="mt-8">
            <div className="bg-vgblue text-white p-5">
              <p className="text-sm font-light tracking-wider">
                Student Spotlight
              </p>
              <h2 className="text-2xl font-bold mt-5">
                Inspiring stories of success from students and alumni.
              </h2>
              <h3 className="text-base font-semibold mt-3">
                Take a look at some of our UA Online stories.
              </h3>
            </div>
            <div className="bg-white py-3 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
                {awardWinners.map((w) => (
                  <CardNoBorder
                    maxWidth={300}
                    imageURL={w.imageURL}
                    key={w.key}
                    title={w.title}
                    link={`online-award-winners/${w.id}`}
                  />
                ))}
              </div>
              <div className="w-full flex justify-center p-1">
                <LinkButtonAlt
                  name="See all stories"
                  link="online-award-winners"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DelphisOnlinePage;
