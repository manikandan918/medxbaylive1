// BlogPage.js
import React, { useEffect, useState } from "react";
import "./blog.css";
import { IoSearch } from "react-icons/io5";

import {
  FaTag,
} from "react-icons/fa";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";

const bufferToBase64 = (buffer) => {
  if (buffer?.type === "Buffer" && Array.isArray(buffer?.data)) {
    const bytes = new Uint8Array(buffer.data);
    let binary = "";
    for (let i = 0; i < bytes.length; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return `data:image/jpeg;base64,${btoa(binary)}`;
  } else {
    console.error("Unexpected buffer type:", typeof buffer);
    return "";
  }
};

const getProfileImage = (formData) => {
  if (formData?.data?.type === "Buffer") {
    return bufferToBase64(formData.data);
  } else if (typeof formData?.data === "string") {
    return `data:image/jpeg;base64,${formData.data}`;
  } else {
    return "Loading Image";
  }
};

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [tempBlog, setTempBlog] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [hashtags, setHastags] = useState([]);
  const [recentBlog, setRecentBlog] = useState([]);
  const [mostReadBlog, setMostReadBlog] = useState([]);
  const [topRatedDoctors, setTopRatedDoctors] = useState([]);
  const [featuredBlog, setFeaturedBlog] = useState([]);
  const [sideFeatureBlog, setSideFeatureBlog] = useState([]);
  const [categories, setCategories] = useState([]);

  const loadBlogs = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/patient/blogs`
    );
    console.log(response.data)
    if (response.data) {
      var data = response.data;
      setHastags(data.hashtags);
      setCategoryData(data.categoryCounts);
      setRecentBlog(data.recentBlogs);
      setMostReadBlog(data.mostReadBlogs);
      setTopRatedDoctors(data.topRatedDoctors);
      setBlogData(response.data);
      setTempBlog(response.data);
      setCategories(data.blogsByCategory);
      const sortedBlogs = data.featuredBlogs.sort(
        (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
      );
      setFeaturedBlog(sortedBlogs[0]);
      setSideFeatureBlog(sortedBlogs.slice(1));
    } else {
      setBlogData([]);
    }
  };

  useEffect(() => {
    loadBlogs();
  }, []);


  
  return (
    <div className="blog-page">
      <div className="main-content-blog">
        {/* Featured Section */}
        <h1>Featured</h1>
        <div className="featured-section">
          <div className="featured-post">
            <img
              src={getProfileImage(featuredBlog?.image)}
              alt="Image Loading"
              className="featured-img"
            />
            <div className="featured-details">
              <h2>{featuredBlog?.title}</h2>
              {/* <p>{featuredBlog?.description?.slice(0,350)+"....."}</p> */}
              <p dangerouslySetInnerHTML={{ __html:featuredBlog.description?.slice(0,350)+"....."}} />
            </div>
          </div>

          {/* Featured Side Posts */}
          <div className="featured-side-posts">
            {sideFeatureBlog.map((post, index) => (
              <div key={index} className="side-post-card">
                <img
                  src={getProfileImage(post.image)}
                  alt={post.title}
                  className="side-post-img"
                />
                <div className="side-post-details">
                  <h5>{post.title}</h5>
                  <span>{moment(post.date).format("MMMM DD, YYYY")}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blog Content Sections */}
        {Object.entries(categories).map(([name, value], index) => (
          <BlogPostList key={index} title={name} posts={value} />
        ))}
       
        
      </div>

      {/* Sidebar */}
      <div>
        <input
          type="text"
          placeholder="Search..."
          style={{
            padding: "10px",
            width: "400px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "16px",
            marginTop: "30px",
            marginLeft: "170px",
            marginBottom: "20px",

          }}
        />
        <span
          style={{
            fontSize: "18px",
            marginTop: "-20px",
            top: "-40px",
            left: "530px",
            marginLeft: "-30px"
          }}
        >
          <IoSearch />
        </span>

        <div className="card card-blog ">
          <SidebarSection title="Categories" items={categoryData} />
          <NewRecentBlog recent={recentBlog} heading={"Recent Blog"} />
          <NewRecentBlog recent={mostReadBlog} heading={"Most Reads"} />
        </div>
      </div>
    </div>
  );
};

const BlogPostList = ({ title, posts }) => {
  return (
    <div className="blog-section">
      <h3>{title}</h3>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <div className="post-meta">
              <img src={getProfileImage(post.image)} alt={post.title} />
              <span className="post-author">
                <b>{post.author}</b>
              </span>
              <span className="post-time">5 min read</span>
            </div>
            <div className="post-content">
              <h4>{post.title}</h4>
              <p               dangerouslySetInnerHTML={{ __html:post.description?.slice(0,350)+"....."}}>

                </p>
              {/* <a href="#" className="read-more">
                Read more in 5 min <FaLongArrowAltRight />
              </a> */}

              

<Link
                to={`/blogPost/${post._id}`}
                className="recentBlog-card-readmore"
              >
                Read more in 8 mins ⟶
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SidebarSection = ({ title, items }) => {
  return (
    <div className="sidebar-section">
      <div className="sidebar-header">
        <h3>{title}</h3>
      </div>
      <ul>
        {Object.entries(items).map(([name, count], index) => (
          <li key={index} className="sidebar-item">
            {<FaTag className="sidebar-item-icon" />}
            <span>
              {name} ({count})
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};






const NewRecentBlog = ({ recent, heading }) => {
  return (
    <div className="recentBlog-card-container">
      <div className="recentBlog-section-header">
        <div className="recentBlog-section-title">{heading}</div>
        {/* <div className="recentBlog-section-showAll">Show All</div>{" "} */}
      </div>

      <div className="recentBlog-card-grid">
        {recent.map((card, index) => (
          <div key={index} className="recentBlog-card">
            <div className="recentBlog-card-left">
              <img
                src={getProfileImage(card.image)}
                alt="Card thumbnail"
                className="recentBlog-card-image"
              />
            </div>
            <div className="recentBlog-card-right">
              <div className="recentBlog-card-flex">
                <div className="recentBlog-card-chips">
                  {card.categories[0]}
                </div>
                <div className="recentBlog-card-date">
                  {moment(card.date).format("MMM DD, YYYY")}
                </div>
              </div>
              <div className="recentBlog-card-title">{card.title}</div>

             
              <Link
                to={`/blogPost/${card._id}`}
                className="recentBlog-card-readmore"
              >
                Read more in 8 mins ⟶
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};





export default Blog;
