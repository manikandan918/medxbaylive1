import React from "react";
import DoctorProfile from "./DoctorProfile";
import DoctorInfo from "./DoctorInfo";
import Articles from "./Articles";
import FAQ from "./FAQ";
import "./Maincontent.css";

const MainContent = () => {
  return (
    <main className="">
      <div className="">
        <div style={{display:"flex", flexDirection:"row", }}>
          <div style={{marginLeft:"80px"}}>
            <DoctorProfile />
          </div>
          <div style={{marginLeft:"80px"}}>
            <DoctorInfo />
            <Articles />
            <FAQ />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
