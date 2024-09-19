import React from "react";
import Articles from "../Articles";
import DoctorInfo from "../DoctorInfo";
import FAQ from "../FAQ";
import MainPac from "./MainPac";

function PatientFrofile() {
  return (
    <div>
      <main className="flex flex-col items-end px-20 mt-10 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="self-stretch max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <MainPac />
            <DoctorInfo />
          </div>
        </div>
        <Articles />
        <FAQ />
      </main>
    </div>
  );
}

export default PatientFrofile;
