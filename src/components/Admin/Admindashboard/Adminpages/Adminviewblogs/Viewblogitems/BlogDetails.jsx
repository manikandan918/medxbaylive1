import React from "react";
import Comment from "./Comment";
import PostComment from "./PostComment";  // Import the PostComment component
import { IoIosCalendar } from "react-icons/io";
import { TbMessage } from "react-icons/tb";
import { LuEye } from "react-icons/lu";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

function BlogDetails({ blog }) {
  if (!blog) {
    return <div className="loader-container">
                <div className="loader"></div>
            </div>
  ;
  }
  return (
    <div className="Adminviewblog-blog-cnt">
      <div className="Adminviewblog-blog-post-cnt">
        <h4>{blog.title}</h4>
        <div className="Adminviewblog-blog-status-info">
          <p className="Adminviewblog-read-more-text">Read more in {blog.readTime} Minutes</p>
          <div className="Adminviewblog-blog-status">
            <div className="Adminviewblog-date-info-cnt">
              <IoIosCalendar size="1.1rem" className="Adminviewblog-date-info-cnt-icon" />
              <p className="Adminviewblog-blue-text">{blog.date}</p>
            </div>
            <div className="Adminviewblog-date-info-cnt">
              <TbMessage size="1.1rem" className="Adminviewblog-date-info-cnt-icon"/>
              <p className="Adminviewblog-blue-text">{blog.commentsCount}</p>
            </div>
            <div className="Adminviewblog-date-info-cnt">
              <LuEye size="1.1rem" className="Adminviewblog-date-info-cnt-icon"/>
              <p className="Adminviewblog-blue-text">{blog.viewsCount}</p>
            </div>
          </div>
        </div>

        <img
          src={blog.image ? blog.image : ""}
          alt="blog-img"
          className="Adminviewblog-blog-image"
        />
        <p className="Adminviewblog-blog-description">
          {blog.description}
        </p>
        <div className="Adminviewblog-social-reach-cnt">
          <IoLogoFacebook className="Adminviewblog-facebook-icon"/>
          <span>{blog.facebookLikes}</span>
        </div>
        <div className="Adminviewblog-blog-tags">
  {Array.isArray(blog.tags) && blog.tags.length > 0 ? (
    blog.tags.map((tag, index) => (
      <div key={index} className="Adminviewblog-blog-tags-content">
        <span className="Adminviewblog-blog-tags-item">#{tag}</span>
      </div>
    ))
  ) : (
    <p>No tags available</p>
  )}
</div>

      </div>
      
      <div className="Adminviewblog-blogger-details-cnt Adminviewblog-profileInfo">
        <img
          src={blog.authorProfilePicture ? blog.authorProfilePicture : ""}
          alt="profile-img"
          className="Adminviewblog-profile-img"
        />
        <h4>{blog.authorName}</h4>
        <p>{blog.authorTitle}</p>
        <p className="Adminviewblog-profile-bio">
          {blog.authorBio}
        </p>
        <div className="Adminviewblog-profile-socials-cnt">
          <IoLogoFacebook className="Adminviewblog-facebook-icon"/>
          <IoLogoLinkedin className="Adminviewblog-facebook-icon"/>
          <FaTwitter className="Adminviewblog-facebook-icon"/>
          <SiInstagram className="Adminviewblog-facebook-icon"/>
        </div>
      </div>

      <div className="Adminviewblog-comments-cnt">
        <h4 className="Adminviewblog-comments-title">Comments</h4>
        <Comment />
      </div>

      {/* Add the PostComment component here */}
      <PostComment blogId={blog.id} />
    </div>
  );
}

export default BlogDetails;
