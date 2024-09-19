import React from "react";
import profileImage from "../Assets/profileimg.png";
import faqImage from "../Assets/faqImage.jpg";
import axios from "axios";
import { useState, useEffect } from "react";

const FAQ = () => {
  const [doctor, setDoctor] = useState([]);
  const fetchDoctorDetails = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/doctor/profile/update`,
        { withCredentials: true }
      );
      const doctorData = response.data;

      console.log(doctorData);
      if (doctorData.doctor.dateOfBirth) {
        const date = new Date(doctorData.doctor.dateOfBirth);
        const formattedDate = `${String(date.getDate()).padStart(
          2,
          "0"
        )}-${String(date.getMonth() + 1).padStart(
          2,
          "0"
        )}-${date.getFullYear()}`;
        doctorData.doctor.dateOfBirth = formattedDate;
      }
      var formData = doctorData.doctor;
      const profileImageData = formData?.profilePicture
        ? `data:image/jpeg;base64,${formData.profilePicture.data}`
        : profileImage;
      setDoctor(doctorData.doctor);
    } catch (error) {
      console.error("Error fetching doctor details:", error);
    }
  };

  useEffect(() => {
    fetchDoctorDetails();
  }, []);


  const [isOpen, setIsOpen] = useState(false);
  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="overflow-hidden p-9 mt-10 max-w-full bg-white rounded-xl w-[850px] max-md:px-5">
      <h2 className="self-start text-2xl font-medium leading-none text-slate-800">
        Frequently asked questions
      </h2>
      <div className="flex max-md:flex-col">
        <div className="flex flex-col w-2/5 max-md:w-full">
          <div className="flex overflow-hidden flex-col items-start mt-10 bg-neutral-400 h-full">
            <img
              loading="lazy"
              src={faqImage}
              alt="FAQ illustration"
              className="object-cover w-full h-full" // Change object-contain to object-cover
            />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
            {doctor?.faqs?.map((item, index) => (
              <div className="relative flex gap-2 px-7 py-4 bg-white">
                <div className="flex-auto text-base font-medium leading-8 text-sky-900">
                  {item.question}
                </div>
                <div
                  className=" text-lg font-black leading-none text-right text-sky-400 cursor-pointer"
                  onClick={toggleContent}
                >
                  <img src="/DoctorProfile/plus.png" alt="Toggle" className="py-2" />
                </div>
                {isOpen && (
                  <div className="z-20 absolute left-[30px] top-[50%] mt-2 w-full text-base font-medium leading-8 text-sky-900 ">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
