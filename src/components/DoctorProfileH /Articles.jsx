import React from "react";
import ArticleCard from "./ArticleCard";
import "./Scrool.css"

const Articles = () => {
  const articles = [
    {
      image: "/DoctorProfile/ArticleImage.png",
      category: "TELEMEDICINE",
      date: "05 June, 2024",
      title: "Free Checkup",
      readTime: "2 min read",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
    },
    // Repeat the article structure for a total of 5 articles
    {
      image: "/DoctorProfile/ArticleImage.png",
      category: "TELEMEDICINE",
      date: "05 June, 2024",
      title: "Free Checkup",
      readTime: "2 min read",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
    },
    {
      image: "/DoctorProfile/ArticleImage.png",
      category: "TELEMEDICINE",
      date: "05 June, 2024",
      title: "Free Checkup",
      readTime: "2 min read",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
    },

  ];

  return (
    <section className="flex flex-col py-9 pl-10 mt-10 max-w-full bg-white rounded-xl w-[780px] max-md:pl-5">
      <h2 className="self-start text-2xl font-medium leading-none text-slate-800">
        Articles
      </h2>
      <div className="flex overflow-x-auto gap-8 mt-8 max-md:max-w-full scrollbar">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
      
    </section>
  );
};

export default Articles;
