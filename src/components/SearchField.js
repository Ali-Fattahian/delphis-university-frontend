import React from "react";
// import staticContent from "../staticContent";

const SearchField = () => {
  // const staticContent = JS(); // Load static content
  // const searchResultsFrontend = [];

  // for (let i = 0; i < staticContent.length; i++) {
  //   if (
  //     staticContent[i].text.includes("Search") ||
  //     staticContent[i].title.includes("Search")
  //   ) {
  //     searchResultsFrontend.push(staticContent[i].page);
  //   }
  // }

  // console.log(searchResultsFrontend);

  return (
    <div className="w-full fixed top-20 left-0 z-20 px-2">
      <div className="w-full max-w-[500px] m-auto flex">
        <input
          className="block w-full flex-1 text-slate-800 px-3 py-1 text-sm font-bold outline-none focus-within:bg-slate-100 rounded-l-sm"
          type="text"
          id="search"
          placeholder="Search the Website"
        />
        <button className="px-4 py-1 bg-vgblue text-white border-[1px] opacity-80 border-white transition-[opacity] duration-300 hover:opacity-100 shadow-sm shadow-vgblue rounded-r-sm">
          Go
        </button>
      </div>
    </div>
  );
};

export default SearchField;
