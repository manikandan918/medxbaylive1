
import React from "react";
import BookAppointment from "../BookAppointment";
import { useState, useEffect } from "react";
import profileImage from "../../Assets/profileimg.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../tail.css";

const MainPac = () => {
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
    <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col max-md:mt-8">
        <div className="flex overflow-hidden flex-col pb-4 bg-white rounded-xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          <div className="flex overflow-hidden flex-col  max-md:px-2">
            <img
              loading="lazy"
              src={profileimg}
              alt="Doctor's profile picture"
              className="object-contain w-full "
            />
          </div>
          <div className="flex flex-col items-start px-4 w-full">
            <div className="flex justify-evenly gap-20">
              <div className="text-2xl font-medium text-slate-800">
                {doctor ? doctor.name : "Loading..."}
              </div>
              <div className="py-1">
                <img
                  loading="lazy"
                  src="/DoctorProfile/share.png"
                  alt=""
                  className="object-contain shrink-0  aspect-square h-[30px] w-[30px]"
                />
              </div>
            </div>
            <div className=" text-[14px] text-gray-600">
              {doctor ? doctor.title : "Loading..."}
            </div>
            <div className="flex gap-2 justify-between self-stretch mt-4 w-full">
              <button className="gap-2.5 self-stretch px-4  text-base font-medium leading-loose text-white bg-blue-600 rounded-md h-[32px]"
              onClick={handleShowEdit}>
                Edit profile
              </button>

              <button
                className="gap-2.5 self-stretch px-2  text-base font-medium leading-loose bg-white text-blue-600 rounded-md h-[32px] border border-blue-600"
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
        <BookAppointment/>
      </div>
    </div>
  );
};

export default MainPac;
