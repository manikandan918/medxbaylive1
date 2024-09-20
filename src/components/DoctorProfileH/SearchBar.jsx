
import React from "react";
import "./tail.css";

const SearchBar = () => {
  return (
    <div className="flex overflow-hidden flex-wrap gap-5 justify-between px-20 py-4 w-full text-base leading-loose border-b bg-slate-50 border-slate-300 shadow-[0px_10px_24px_rgba(172,172,172,0.15)] max-md:px-5 max-md:max-w-full">
      <div className="flex overflow-hidden flex-col items-start bg-white rounded-md border border-solid border-slate-300 max-md:max-w-full">
        <div className="flex flex-col justify-center px-5 py-2.5 max-w-full min-h-[42px] w-[403px]">
          <div className="flex gap-6 items-center w-full">
            <label
              htmlFor="searchWhat"
              className="self-stretch my-auto font-medium text-slate-800"
            >
              What
            </label>
            <input
              type="text"
              id="searchWhat"
              placeholder="Search Doctors, providers or conditions"
              className="self-stretch my-auto text-neutral-600 text-opacity-70"
            />
            <div className="flex shrink-0 self-stretch my-auto w-6 h-6" />
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col bg-white rounded-md border border-solid border-slate-300">
        <div className="flex flex-col justify-center px-5 py-2.5 w-full min-h-[42px]">
          <div className="flex gap-6 items-center w-full">
            <label
              htmlFor="searchWhere"
              className="self-stretch my-auto font-medium text-slate-800"
            >
              Where
            </label>
            <input
              type="text"
              id="searchWhere"
              placeholder="United Arab Emirates"
              className="self-stretch my-auto text-neutral-600"
            />
            <div className="flex shrink-0 self-stretch my-auto w-6 h-6" />
          </div>
        </div>
      </div>
      <button className="gap-2.5 self-stretch px-5 py-2.5 text-base font-medium leading-loose text-white bg-blue-600 rounded-md min-h-[42px]">
        Find My Doctor
      </button>
    </div>
  );
};

export default SearchBar;
