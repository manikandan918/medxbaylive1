import React from "react";
import ArticleCard from "./ArticleCard";
import "./Scrool.css";
import "./Article.css"; 

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
    <section className="articles">
      <h2>Articles</h2>
      <div className="article-container">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </section>
  );
};

export default Articles;
