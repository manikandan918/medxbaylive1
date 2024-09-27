import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Faq.css"; 
import {  useParams} from "react-router-dom";

import faqImage from '../Assets/faqImage.jpg'
import { fetchFromDoctor } from "../../actions/api";

const FAQ = () => {
  const [doctor, setDoctor] = useState([]);
  const [openFAQs, setOpenFAQs] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (id) {
  const fetchDoctorDetails = async () => {
    try {
      const response = await fetchFromDoctor(`/doctors/${id}/slots`);



      console.log(response);
      if (response.doctor.dateOfBirth) {
        const date = new Date(response.doctor.dateOfBirth);
        const formattedDate = `${String(date.getDate()).padStart(
          2,
          "0"
        )}-${String(date.getMonth() + 1).padStart(
          2,
          "0"
        )}-${date.getFullYear()}`;
        response.doctor.dateOfBirth = formattedDate;
      }
      setDoctor(response.doctor);
    } catch (error) {
      console.error("Error fetching doctor details:", error);
    }
  };
  fetchDoctorDetails();
}



}, []);


const fetchDoctorDetail = async () => {
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
  fetchDoctorDetail();
}, []);

  const handleOpen = (index) => {
    setOpenFAQs((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle open state
    }));
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
            style={{ width: "250px", paddingLeft: "40px", marginTop: "20px" }}
          />
        </div>
        <div className="faq-content">
          <div className="faq-list">
            {doctor?.faqs?.map((item, index) => (
              <div className="faq-item" key={item._id}>
                <div className="faq-question">
                  {item.question} ?
                  <span
                    className="faq-icon"
                    onClick={() => handleOpen(index)}
                    style={{ cursor: "pointer", paddingLeft: "10px" }}
                  >
                    {openFAQs[index] ? "-" : "+"} {/* Toggle between plus and minus */}
                  </span>
                </div>
                {openFAQs[index] && (
                  <div className="faq-answer-doctor">
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
