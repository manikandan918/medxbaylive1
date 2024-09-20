import React from "react";
import "./Article.css"; // Import the new external CSS

const ArticleCard = ({ image, category, date, title, readTime, content }) => {
  return (
    <div className="article-card">
      <img loading="lazy" src={image} alt={title} />
      <div className="card-content">
        <div className="card-header">
          <div className="flex flex-col">
            <div className="category">{category}</div>
            <div className="date">{date}</div>
            <div className="title">{title}</div>
          </div>
          <div className="read-time">{readTime}</div>
        </div>
        <p className="content">{content}</p>
        <div className="learn-more">Learn more</div>
      </div>
    </div>
  );
};

export default ArticleCard;
