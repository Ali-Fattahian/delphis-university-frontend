import React from "react";

const programsImage = require("../../assets/images/general - catalog - majors & programs.jpeg");
const applyImage = require("../../assets/images/general catalog - how to apply.jpeg");
const regulationsImage = require("../../assets/images/general catalog - regulations.jpeg");

const CatalogGeneralInfoCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center px-8 py-4 text-center">
      <div className="flex flex-col gap-4 items-center mx-auto shadow-md pb-4">
        <img
          className="object-cover aspect-square transition-transform duration-300 border-t-2 border-vgred"
          src={programsImage}
          alt="Majors & Programs"
        />
        <a
          className="p-2 text-vgyellow hover:underline cursor-pointer w-full"
          href="/"
        >
          Majors & Programs
        </a>
        <p className="px-4 pb-2 text-sm text-slate-800 w-full">
          Follow your passion and interests to explore our more than 200 fields
          of study to find the best academic path for you.
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center mx-auto shadow-md pb-4">
        <img
          className="object-cover aspect-square transition-transform duration-300 border-t-2 border-vgred"
          src={applyImage}
          alt="Majors & Programs"
        />
        <p className="p-2 text-vgyellow w-full">How to Apply</p>
        <p className="px-4 pb-2 text-sm text-slate-800 w-full">
          Apply now to study at the University of Delphis, where faculty and
          staff genuinely care about your success.
        </p>
        <div className="flex flex-col gap-2">
          <a
            href="/apply-undergraduates"
            className="text-xs font-semibold hover:underline underline-offset-2 text-vgblue"
          >
            Undergraduate
          </a>
          <a
            href="/"
            className="text-xs font-semibold hover:underline underline-offset-2 text-vgblue"
          >
            Graduate
          </a>
          <a
            href="/"
            className="text-xs font-semibold hover:underline underline-offset-2 text-vgblue"
          >
            Law
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center mx-auto shadow-md pb-4">
        <img
          className="object-cover aspect-square transition-transform duration-300 border-t-2 border-vgred"
          src={regulationsImage}
          alt="Majors & Programs"
        />
        <p className="p-2 text-vgyellow w-full">Academic Regulations</p>
        <p className="px-4 pb-2 text-sm text-slate-800 w-full">
          Students are expected to observe standards of conduct appropriate to a
          community of scholars. Learn about UD's regulations.
        </p>
        <div className="flex flex-col gap-2">
          <a
            href="/"
            className="text-xs font-semibold hover:underline underline-offset-2 text-vgblue"
          >
            Undergraduate
          </a>
          <a
            href="/"
            className="text-xs font-semibold hover:underline underline-offset-2 text-vgblue"
          >
            Graduate
          </a>
          <a
            href="/"
            className="text-xs font-semibold hover:underline underline-offset-2 text-vgblue"
          >
            Law
          </a>
        </div>
      </div>
    </div>
  );
};

export default CatalogGeneralInfoCards;
