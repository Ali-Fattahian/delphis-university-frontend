import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const sampleImage = require("../assets/images/Tour - events.jpeg");

const tempSearchResults = [
  {
    key: 1,
    title: "Ajian Sushi",
    imageURL: sampleImage,
    locaiton: "1914 University Blvd, Delphis, AL 35401",
    Website: "http://www.ajian10.com",
    Phone: " (205) 331-4542",
  },
  {
    key: 2,
    title: "Ajian Sushi",
    imageURL: sampleImage,
    locaiton: "1914 University Blvd, Delphis, AL 35401",
    Website: "http://www.ajian10.com",
    Phone: " (205) 331-4542",
  },
  {
    key: 3,
    title: "Ajian Sushi",
    imageURL: sampleImage,
    locaiton: "1914 University Blvd, Delphis, AL 35401",
    Website: "http://www.ajian10.com",
    Phone: " (205) 331-4542",
  },
  {
    key: 4,
    title: "Ajian Sushi",
    imageURL: sampleImage,
    locaiton: "1914 University Blvd, Delphis, AL 35401",
    Website: "http://www.ajian10.com",
    Phone: " (205) 331-4542",
  },
];

const EatAtDelphisPage = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState(tempSearchResults);

  //   const getListings = () => {
  //     null; // Send async request with search value, setSearchResults
  //   };

  return (
    <>
      <Navbar />
      <div className="w-full bg-neutral-100 p-2 mt-[36px] min-[720px]:mt-0">
        <div className="w-full max-w-[1000px] m-auto">
          <h1 className="text-2xl font-bold text-center mt-6">Eat</h1>
          <form
            method="POST"
            className="mt-8 w-full pb-6 border-neutral-200 border-b-[1px] flex justify-center"
          >
            <input
              type="search"
              placeholder="Search listings"
              value={search}
              className="text-sm w-full px-3 py-1 border-[1px] max-w-[800px] mx-auto"
              onChange={(e) => {
                setSearch(e.target.value);
                // getListings();
              }}
            />
          </form>
          <div className="mt-6 flex flex-col gap-4">
            {searchResults.map((r) => (
              <div key={r.key} className="flex gap-3 flex-col sm:flex-row">
                <img
                  className="object-cover sm:flex-1"
                  src={r.imageURL}
                  alt={r.title}
                />
                <div>
                  <h2 className="text-base font-bold my-3 sm:mt-0">
                    {r.title}
                  </h2>
                  <div>
                    <p className="text-sm font-semibold">
                      Location: <span className="font-light">{r.locaiton}</span>
                    </p>
                    <p className="text-sm font-semibold">
                      Website:
                      <span className="font-light">
                        <a
                          href={r.Website}
                          target="_blank"
                          className="text-vggreen cursor-pointer hover:underline"
                        >
                          {r.Website}
                        </a>
                      </span>
                    </p>
                    <p className="text-sm font-semibold">
                      Phone: <span className="font-light">{r.Phone}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EatAtDelphisPage;
