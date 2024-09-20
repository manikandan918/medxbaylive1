
import React from "react";
import { useState, useEffect } from "react";
import profileImage from "../Assets/profileimg.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./DoctorP.css"

const DoctorProfile = () => {
  const navigate = useNavigate();
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

  const [loading, setLoading] = useState(false);
  const handleVerify = async (e) => {
    e.preventDefault();

    if (
      doctor.verified === "Verified" &&
      doctor.subscriptionVerification !== "Verified"
    ) {
      navigate("/SubscriptionPlans");
      return;
    }

    setLoading(true);
    try {
      await axios.post(
        `${process.env.REACT_APP_BASE_URL}/doctor/profile/verify`,
        {},
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      await fetchDoctorDetails();
    } catch (error) {
      console.error(
        "Verification request failed:",
        error.response?.data?.message || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  const handleShowEdit = () => {
    navigate("/edit/profile/doctor");
  };

  useEffect(() => {
    document.title = "Doctor-Edit";

    fetchDoctorDetails();
  }, []);


  return (
    <div >
    <div className="profile-card-doctor" style={{marginTop:"40px", }}>
      <div className="profile-image-container">
        <img
          loading="lazy"
          src={profileimg}
          alt="Doctor's profile picture"
          className="profile-image-doctor"
        />
      </div>
      <div className="profile-info">
        <div className="profile-header">
          <div className="doctor-name">
            {doctor ? doctor.name : "Loading..."}
          </div>
          {/* <div className="py-1">
            <img
              loading="lazy"
              src="/DoctorProfile/share.png"
              alt=""
              className="share-icon"
            />
          </div> */}
        </div>
        <div className="doctor-title">
          {doctor ? doctor.title : "Loading..."}
        </div>
        <div className="button-group">
          <button className="edit-button" onClick={handleShowEdit}>
            Edit profile
          </button>
  
          <button
            className="verify-button"
            onClick={handleVerify}
            disabled={
              loading ||
              doctor.verified === "Pending" ||
              (doctor.verified === "Verified" &&
                doctor.subscriptionVerification === "Verified")
            }
          >
            {doctor.verified === "Verified"
              ? doctor.subscriptionVerification === "Verified"
                ? doctor.subscriptionType
                : "Subscribe"
              : doctor.verified === "Pending"
              ? "Pending"
              : "Request To Verify"}
          </button>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default DoctorProfile;
