import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Faq.css"; 
import faqImage from '../Assets/faqImage.jpg'

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
    <section className="faq-section">
      <h2 className="faq-title" style={{paddingTop:"30px"}}>Frequently asked questions</h2>
      <div className="faq-containe">
        <div className="faq-image-container">
          <img
            loading="lazy"
            src={faqImage}
            alt="FAQ illustration"
            style={{width:"250px", paddingLeft:"40px", marginTop:"20px"}}
         
          />
        </div>
        <div className="faq-content">
          <div className="faq-list">
            {doctor?.faqs?.map((item, index) => (
              <div className="faq-item" key={index}>
                <div className="faq-question">{item.question}</div>
                <div className="faq-toggle" onClick={toggleContent}>
                  <img src="/DoctorProfile/plus.png" alt="Toggle" className="py-2" />
                </div>
                {isOpen && (
                  <div className="faq-answer">
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
