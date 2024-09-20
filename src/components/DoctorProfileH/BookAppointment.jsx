
import React from "react";
import "./tail.css";

const BookAppointment = () => {
  return (
    <div className="flex overflow-hidden flex-col items-start p-2 py-4 mt-10 w-full text-xs bg-white rounded-xl max-md:px-5 ">
      <h3 className="text-lg font-medium leading-none text-slate-800">
        Book Appointment
      </h3>
      <div className="flex self-stretch mt-8">
        <button className="flex flex-1 gap-2 px-2 py-2.5  text-white whitespace-nowrap bg-blue-600 rounded-md border border-solid border-stone-300 pl-4">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b626eeca9a86743ea81d31967695f00e6bd399ef03c154d2eef4b48f30371c07?placeholderIfAbsent=true&apiKey=4c137795ca7946528ace3d8e35f13cac"
            alt=""
            className="object-contain shrink-0 w-5 aspect-square"
          />
          <span>In-person</span>
        </button>
        <button className="flex flex-1 gap-2 px-2 py-2.5 border-t border-r border-b border-stone-300 text-black text-opacity-50 rounded-md">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ad1e4452994fb8921cdd7cd1e0f8a2c4605b967fc6673a2d0e1461b2826bc85?placeholderIfAbsent=true&apiKey=4c137795ca7946528ace3d8e35f13cac"
            alt=""
            className="object-contain shrink-0 w-5 aspect-square"
          />
          <span className="basis-auto">Video consultation</span>
        </button>
      </div>

      <label htmlFor="place" className="mt-8 text-slate-800">
        Select place
      </label>
      <select
        id="place"
        className="flex gap-5 justify-between self-stretch  py-2  whitespace-nowrap rounded-md border border-blue-600  text-black text-opacity-50"
      >
        <option>Select</option>
      </select>
      <label htmlFor="insurance" className="mt-6 text-slate-800">
        Select Insurance plan
      </label>
      <select
        id="insurance"
        className="flex gap-5 justify-between self-stretch py-2  whitespace-nowrap rounded-md border border-blue-600 border-opacity-50 text-black text-opacity-50"
      >
        <option>Select</option>
      </select>
      <label htmlFor="date" className="mt-6 text-slate-800">
        Select date
      </label>
      <input
        type="date"
        id="date"
        className="flex gap-5 justify-between self-stretch  py-2  whitespace-nowrap rounded-md border border-blue-600 border-opacity-50 text-black text-opacity-50"
      />
      <label htmlFor="slots" className="mt-6 text-slate-800">
        Select slots
      </label>
      <select
        id="slots"
        className="flex gap-5 justify-between self-stretch  py-2  whitespace-nowrap rounded-md border border-blue-600 border-opacity-50 text-black text-opacity-50"
      >
        <option>10:30</option>
        <option>10:30</option>
        <option>10:30</option>
      </select>
      <button className="gap-2.5 self-stretch px-5 py-2.5 mt-8 text-base font-medium leading-loose text-white border bg-blue-600 rounded-md min-h-[42px]">
        Book now
      </button>

   
    </div>
  );
};

export default BookAppointment;
