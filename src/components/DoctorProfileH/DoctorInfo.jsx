
import React from "react";
import { useState, useEffect } from "react";
import profileImage from "../Assets/profileimg.png";
import axios from "axios";
import "./DoctorInfo.css";

const bufferToBase64 = (logo) => {
  const buffer = logo.data;
  const contentType = logo.contentType;
  
  if (buffer?.type === 'Buffer' && Array.isArray(buffer?.data)) {
    const bytes = new Uint8Array(buffer.data);
    let binary = '';
    for (let i = 0; i < bytes.length; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return `data:${contentType};base64,${btoa(binary)}`;
  } else {
    console.error('Unexpected buffer type:', typeof buffer);
    return '';
  }
};


const DoctorInfo = () => {
  const [profileimg, setProfileimage] = useState("");
  const [doctor, setDoctor] = useState([]);
  const [insurance, setInsurance] = useState([]);
  const [setBlogs] = useState([]);
  const [verificationStatus, setVerificationStatus] = useState("");
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
      setProfileimage(profileImageData);
      setDoctor(doctorData.doctor);
      setInsurance(doctorData.insurances);
      setBlogs(doctorData.blogs);
      setVerificationStatus(doctorData.doctor.verified);
    } catch (error) {
      console.error("Error fetching doctor details:", error);
    }
  };

  useEffect(() => {
    fetchDoctorDetails();
  }, []);

  const getBaseImage = (logo) => {
    const base64String = bufferToBase64(logo);
    return base64String;
  };
  
 
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className="contain">
    <div className="section">
      <h2 className="about-title">About</h2>
      <div>
        <p className="about-text">{isReadMore ? `${doctor.aboutMe}` : `${doctor.aboutMe}`}</p>
        <div onClick={toggleReadMore} className="button" style={{cursor:"pointer"}}>
          {isReadMore ? "Read More" : "Read Less"}
        </div>
      </div>
      <div className="flex-row">
        <img loading="lazy" src="/DoctorProfile/date.png" alt="" className="icon" />
        <span>{doctor?.dateOfBirth?.slice(0, 10)} |</span>
        <img loading="lazy" src="/DoctorProfile/loc.png" alt="" className="icon" />
        <span>{doctor.city}</span>
      </div>
      <div className="flex-row mt-2">
        <img loading="lazy" src="/DoctorProfile/heartSpecilist.png" alt="" className="icon" />
        <span>
          {doctor?.speciality?.map((condition, index) => (
            <span key={index}>
              {condition}
              {index < doctor.speciality.length - 1 ? ", " : ""}
            </span>
          ))}
        </span>
      </div>
      <div className="flex-row mt-2">
        <img loading="lazy" src="/DoctorProfile/heartDisease.png" alt="" className="icon" />
        {doctor?.conditions?.map((condition, index) => (
          <span key={index}>
            {condition}
            {index < doctor.conditions.length - 1 ? ", " : ""}
          </span>
        ))}
      </div>
      <div className="flex-row mt-2">
        <img loading="lazy" src="/DoctorProfile/videoConsultamnt.png" alt="" className="icon" />
        <span>Video consult |</span>
        <span>{doctor?.consultation}</span>
      </div>
  
      <h2 className="about-title" style={{marginTop:"30px"}}>Languages</h2>
      <div className="flex gap-5 max-md:flex-col">
        {doctor?.languages?.map((language, index) => (
          <div className="language-item" key={index}>
            <img loading="lazy" src="/DoctorProfile/righttick.png" alt="" className="language-icon" />
            <span className="absolute z-10 font-medium text-slate-800">{language}</span>
          </div>
        ))}
      </div>
    </div>
  
    <div className="hospital-section">
      <h2 className="hospital-title">Locations</h2>
      {doctor?.hospitals?.map((location, index) => (
        <div className="hospital-card" key={index}>
          <div className="flex flex-col items-start text-xs">
            <div className="flex gap-2.5 self-stretch text-lg font-semibold text-blue-600">
              <img loading="lazy" src="/DoctorProfile/LocationIcon.png" alt="" className="icon" />
              <div className="grow shrink my-auto w-[297px]" style={{fontWeight:"bold"}}>{location.name}</div>
            </div>
            <div className="flex gap-1.5 mt-2">
              <div className="font-semibold text-slate-800">$12</div>
              <div className="font-medium text-gray-400 basis-auto">(For Video Consultation)</div>
            </div>
            <div className="flex gap-3.5 mt-8 font-medium" style={{marginTop:"30px"}}>
              <img loading="lazy" src="/DoctorProfile/Locationbig.png" alt="" className="icon" />
              <div className="inside">
                <div className="">
                  {location.street},
                  <br></br>
                  {location.city},{location.state}
                </div>
                <div className="">
                  <div className="button-call">
                    <img loading="lazy" src="/DoctorProfile/phone.png" alt="" className="icon" />
                    <span>Call Now</span>
                  </div>
                  <div className="button-call">
                    <img loading="lazy" src="/DoctorProfile/direction.png" alt="" className="icon" />
                    <span>Get Direction</span>
                  </div>
                </div>
                <div style={{width:"120px", textAlign:"center", height:"40px", paddingTop:"8px", backgroundColor:"#0167FF", color:"white", borderRadius:"5px"}}>
                
              Visit website
          
            </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
           
          </div>
        </div>
      ))}
    </div>
  
    <div className="insurance-section">
      <h2 className="about-title">Accepted insurances</h2>
      <div className="flex gap-5 mt-8 max-md:flex-col">
      {insurance?.map((i) => (
          <div className="insurance-item" key={i._id}>
            <img loading="lazy" src={getBaseImage(i.logo)} alt={"insurance-logo"} className="w-[131px]" />
          </div>
        ))}
      </div>
    </div>
  
    <div className="insurance-section">
      <h2 className="about-title">Awards</h2>
      <div className="flex gap-5 mt-7 max-md:flex-col">
        {doctor?.awards?.map((award, index) => (
          <div className="award-item" key={index}>
            <img loading="lazy" src="/DoctorProfile/Awardcup.png" alt="award-image" className="icon" />
            <div className="my-auto font-medium text-slate-800">{award}</div>
          </div>
        ))}
      </div>
    </div>
   
  </div>
  
  );
};

export default DoctorInfo;
