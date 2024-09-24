import React from "react";
import "./Article.css"; 

const ArticleCard = ({ image, category, date, title, readTime, content }) => {
  return (
    <div className="article-card" style={{border:"1px solid #BFBFBF", borderRadius:"12px"}}>
      <img loading="lazy" src={image} alt={title} />
      <div className="card-content">
        <div className="">
          <div className="">
            <div style={{color:"#0167FF"}}>{category}</div>
            <div style={{color:"#717171"}}>{date} .{readTime}</div>
            <div  style={{width:"200px"}}>{""}</div>
          </div>
          <br></br>
          <div style={{width:"200px", fontWeight:500, fontSize:"18px"}}>{title}</div>
        </div>
        <p style={{color:"#717171"}}>{content}</p>
        <br></br>
        <div style={{color:"white", backgroundColor:"#0167FF", padding:"8px 15px", borderRadius:"10px", width:"max-content"}}>Learn more</div>
      </div>
    </div>
  );
};

export default ArticleCard;
