
import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import MainContent from "./MainContent";
import Footer from "./Footer";
import "./tail.css";

const DoctorPage = () => {
  return (
    <div className="flex overflow-hidden flex-col pb-24 bg-slate-50">
      <Header />
      <SearchBar />
      <MainContent />
      <Footer />
    </div>
  );
};

export default DoctorPage;
