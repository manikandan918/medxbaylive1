import React, { useState } from "react";

const FAQItem = ({ question, image, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="relative flex gap-2 px-7 py-4 bg-white">
      <div className="flex-auto text-base font-medium leading-8 text-sky-900">
        {question}
      </div>
      <div className=" text-lg font-black leading-none text-right text-sky-400 cursor-pointer" onClick={toggleContent}>
        <img src={image} alt="Toggle" className="py-2"/>
      </div>
      {isOpen && (
        <div className="z-20 absolute left-[30px] top-[50%] mt-2 w-full text-base font-medium leading-8 text-sky-900 ">
        
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
