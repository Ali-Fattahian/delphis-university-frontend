import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import LinkButtonAlt from "../components/utilities/LinkButtonAlt";

const image = require("../assets/images/Tour - header.jpeg");

const cardsArr = [
  {
    key: 1,
    title: "Veteran Suicide Awareness Focus of 2023 Operation Iron Ruck",
    text: `UD and Auburn student veterans bring awareness to veteran suicide through Operation Iron Ruck`,
    tags: [
      {
        key: 1,
        title: "students",
      },
      {
        key: 2,
        title: "awards and honors",
      },
    ],
    link: `news-center/${1}`,
    ImageURL: image,
  },
  {
    key: 2,
    title: "Veteran Suicide Awareness Focus of 2023 Operation Iron Ruck",
    text: `UD and Auburn student veterans bring awareness to veteran suicide through Operation Iron Ruck`,
    tags: [
      {
        key: 1,
        title: "students",
      },
      {
        key: 2,
        title: "awards and honors",
      },
    ],
    link: `news-center/${3}`,
    ImageURL: image,
  },
  {
    key: 3,
    title: "Veteran Suicide Awareness Focus of 2023 Operation Iron Ruck",
    text: `UD and Auburn student veterans bring awareness to veteran suicide through Operation Iron Ruck`,
    tags: [
      {
        key: 1,
        title: "students",
      },
      {
        key: 2,
        title: "awards and honors",
      },
    ],
    link: `news-center/${3}`,
    ImageURL: image,
  },
];

const NewsCenterPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-[720px]:mt-0 mt-[36px] w-full max-w-[1200px] p-3">
        <h1 className="text-center text-xl text-black tracking-wider font-semibold">
          <span className="text-vgyellow mr-2">Tag Name</span>News Center
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
          {cardsArr.map((card) => (
            <div
              className="flex flex-col gap-3 items-center mx-auto group mt-4"
              key={card.key}
            >
              <img
                className="object-cover aspect-square transition-transform duration-300 border-2 border-vgred border-double group-hover:border-0"
                src={card.ImageURL}
                alt={card.title}
              />
              <div className="w-full overflow-y-hidden flex justify-start ">
                {card.tags.map((tag) => (
                  <button
                    className="p-2 text-sm text-vgyellow hover:underline cursor-pointer"
                    key={tag.key}
                  >
                    {tag.title}
                  </button>
                ))}
              </div>
              <a
                className="px-2 text-black hover:underline cursor-pointer w-full text-xl"
                href={card.link}
              >
                {card.title}
              </a>
              <p className="px-2 pb-2 text-sm text-slate-800 w-full">
                {card.text}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-end p-1 mt-4">
          <LinkButtonAlt name="Next" link="next-pagination" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewsCenterPage;
