
import React from "react";
import "./tail.css";

const LanguageCard = ({ name, image }) => {
  return (
    <div className="flex relative flex-col px-7  text-base leading-loose aspect-[4.2] w-[105px] max-md:pl-5">
      <img
        loading="lazy"
        src={image}
        alt=""
        className="object-cover absolute inset-0 size-full h-[16px] w-[16px] mt-2"
      />
      <span className="relative z-10 font-medium text-slate-800 ">{name}</span>
    </div>
  );
};

export default LanguageCard;
