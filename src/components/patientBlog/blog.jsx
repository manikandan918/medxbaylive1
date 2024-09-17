// BlogPage.js
import React, { useEffect, useState } from "react";
import "./blog.css";
import { IoSearch } from "react-icons/io5";
import { FaTag, FaStar, FaMapMarkerAlt } from "react-icons/fa";

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
    console.log(response.data);
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

  const newBloodPressureSpecialist = [
    {
      name: "Dr. Donald Hopkins, MD",
      specialist: "Cardio",
      rating: 3,
      address: "49 mi, 795 El Camino Real Palo Alto, CA 94301",
      instruction: [
        "Appt wasn't rushed",
        "Listened/answered questions",
        "Explains conditions well",
        "Found trustworthy",
        "Felt respected",
      ],
      imageUrl:
        "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg",
    },
    {
      name: "Dr. Donald Hopkins, MD",
      specialist: "Cardio",
      rating: 3,
      address: "49 mi, 795 El Camino Real Palo Alto, CA 94301",
      instruction: [
        "Appt wasn't rushed",
        "Listened/answered questions",
        "Explains conditions well",
        "Found trustworthy",
        "Felt respected",
      ],
      imageUrl:
        "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg",
    },
    {
      name: "Dr. Donald Hopkins, MD",
      specialist: "Cardio",
      rating: 3,
      address: "49 mi, 795 El Camino Real Palo Alto, CA 94301",
      instruction: [
        "Appt wasn't rushed",
        "Listened/answered questions",
        "Explains conditions well",
        "Found trustworthy",
        "Felt respected",
      ],
      imageUrl:
        "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg",
    },
  ];
  return (
    <div>
      <div className="heading-blog">BLOGS</div>
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
                <p
                  dangerouslySetInnerHTML={{
                    __html: featuredBlog.description?.slice(0, 350) + ".....",
                  }}
                />
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
                    style={{ width: "100px" }}
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
          
          

          <div className="card card-blog ">
            <SidebarSection title="Categories" items={categoryData} />
            <NewRecentBlog recent={recentBlog} heading={"Recent Blog"} />
            <NewRecentBlog recent={mostReadBlog} heading={"Most Reads"} />
            <NewRecentBlogcategories
              recent={mostReadBlog}
              heading={"Most Reads"}
            />
            <h5 className="tags">Tags</h5>
            <div className="tag-head">
              <span className="tag-child"># Endodontics (10)</span>
              <span className="tag-child"># Endodontics (15)</span>
              <span className="tag-child"># Neurology (70)</span>
              <span className="tag-child"># Insurance (16)</span>
              <span className="tag-child"># Dental (60)</span>
              <span className="tag-child"># Neurology (70)</span>
              <span className="tag-child"># Diabetes (10)</span>
              <span className="tag-child"># Dermatology (15)</span>
              <span className="tag-child"># Stress (10)</span>
              <span className="tag-child"># Blood pressure (25)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="parent">
        <div className="head1">
          <div className="blog-section">
            <h2>
              <span style={{ color: "#0167FF", paddingRight: "5px" }}>|</span>
              {"Treatment"}
            </h2>
            <br></br>
            <ul>
              {recentBlog?.slice(0, 4)?.map((post, index) => (
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
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.description?.slice(0, 350) + ".....",
                      }}
                    ></p>
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
        </div>
        <div className="head1">
          <div className="blog-section">
            <h2>
              <span style={{ color: "#0167FF", marginRight: "5px" }}></span>
              {""}
            </h2>
            <br></br>
            <ul>
              {recentBlog?.slice(0, 4)?.map((post, index) => (
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
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.description?.slice(0, 350) + ".....",
                      }}
                    ></p>
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
        </div>
      </div>

      <div
        className="bloodPrSp-card-container"
        style={{ width: "90%", marginLeft: "5%" }}
      >
        <div className="bloodPrSp-section-title">
          Top high blood pressure specialists
        </div>
        <div className="bloodPrSp-card-grid">
          {topRatedDoctors?.slice(0,3)?.map((card, index) => (
            <div key={index} className="bloodPrSp-card">
              <div className="bloodPrSp-card-content">
                <div className="bloodPrSp-card-content-heading">
                  <img
                    src={getProfileImage(card.profilePicture)}
                    alt="Card thumbnail"
                    className="bloodPrSp-card-image"
                  />
                  <div className="bloodPrSp-card-title">{card.name}</div>
                  <div className="bloodPrSp-card-rating">
                    <FaStar className="starr" />
                    {card.rating}
                  </div>
                </div>
                <div className="bloodPrSp-card-specialist">{card.title}</div>
                <div className="bloodPrSp-card-address">
                  <FaMapMarkerAlt className="bloodPrSp-card-location" />
                  {card.country}
                </div>
                <div className="bloodPrSp-card-instruction">
                  <span>Specialist In:</span>{" "}
                  {card.conditions.map((point, index) => (
                  <div key={index}>
                    <FaStar className="str" />
                    {point}
                  </div>
                ))}
                </div>
                <button className="bloodPrSp-card-btn">View Profile</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="parent">
        <div className="head1">
          <div className="blog-section">
            <h2>
              <span style={{ color: "#0167FF", paddingRight: "5px" }}>|</span>
              {"High Blood Pressure"}
            </h2>
            <br></br>
            <ul>
              {mostReadBlog?.slice(0, 4)?.map((post, index) => (
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
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.description?.slice(0, 350) + ".....",
                      }}
                    ></p>
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
        </div>
        <div className="head1">
          <div className="blog-section">
            <h2>
              <span style={{ color: "#0167FF", marginRight: "5px" }}></span>
              {""}
            </h2>
            <br></br>
            <ul>
              {recentBlog?.slice(0, 4)?.map((post, index) => (
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
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.description?.slice(0, 350) + ".....",
                      }}
                    ></p>
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
        </div>
      </div>

      <div className="blog-section-last">
        <h2>
          <span style={{ color: "#0167FF", paddingRight: "5px" }}>|</span>
          {"Treatment"}
        </h2>
        <br></br>
        <ul>
          {mostReadBlog.map((post, index) => (
            <li key={index}>
              <div className="post-meta-last">
                <img src={getProfileImage(post.image)} alt={post.title} />
              </div>
              <div className="post-content-last">
                <h4>{post.title}</h4>
                <p
                  dangerouslySetInnerHTML={{
                    __html: post.description?.slice(0, 350) + ".....",
                  }}
                ></p>
                <span className="post-author-last">
                  <b>By {post.author}</b>
                </span>

                {/* <span className="post-time-last">5 min read</span> */}
                {/* <a href="#" className="read-more">
                Read more in 5 min <FaLongArrowAltRight />
              </a> */}
                <br></br>
                <Link
                  to={`/blogPost/${post._id}`}
                  className="recentBlog-card-readmore-last"
                >
                  Read more in 10 mins ⟶
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const BlogPostList = ({ title, posts }) => {
  return (
    <div className="blog-section">
      <h2>
        <span style={{ color: "#0167FF", paddingRight: "5px" }}>|</span>
        {title}
      </h2>
      <br></br>
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
              <p
                dangerouslySetInnerHTML={{
                  __html: post.description?.slice(0, 350) + ".....",
                }}
              ></p>
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
        <Link to={`/blogs/showAll`}>
          <div className="recentBlog-section-showAll">Show All</div>{" "}
        </Link>
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

const NewRecentBlogcategories = ({ recent, heading }) => {
  return (
    <div className="recentBlog-card-container">
      <div className="recentBlog-section-header">
        <div className="recentBlog-section-title">{"Recommended Reading"}</div>
        <Link to={`/blogs/showAll`}>
          <div className="recentBlog-section-showAll">Show All</div>{" "}
        </Link>
      </div>

      <div className="recentBlog-card-grid">
        {recent?.slice(0, 2).map((card, index) => (
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

// const HighBloodPressureSpecialist = ({ newBloodPressureSpecialist }) => {
//   return (
//     <div className="bloodPrSp-card-container" style={{width:"90%", marginLeft:"5%"}}>
//       <div className="bloodPrSp-section-title">
//         Top high blood pressure specialists
//       </div>
//       <div className="bloodPrSp-card-grid">
//         {topRatedDoctors.map((card, index) => (
//           <div key={index} className="bloodPrSp-card">

//             <div className="bloodPrSp-card-content">
//               <div className="bloodPrSp-card-content-heading">
//               <img
//               src={card.getProfileImage(profilePicture)}
//               alt="Card thumbnail"
//               className="bloodPrSp-card-image"
//             />
//                 {/* <div className="bloodPrSp-card-title">{card.name}</div> */}
//                 <div className="bloodPrSp-card-rating">
//                   <FaStar className="starr" />
//                   {/* {card.rating} */}
//                 </div>
//               </div>
//               {/* <div className="bloodPrSp-card-specialist">{card.specialist}</div> */}
//               <div className="bloodPrSp-card-address">
//                 <FaMapMarkerAlt className="bloodPrSp-card-location" />
//                 {/* {card.address} */}
//               </div>
//               <div className="bloodPrSp-card-instruction">
//                 <span>Patient Tell Us:</span>{" "}
//                 {/* {card.instruction.map((point, index) => (
//                   <div key={index}>
//                     <FaStar className="str" />
//                     {point}
//                   </div>
//                 ))} */}
//               </div>
//               <button className="bloodPrSp-card-btn">View Profile</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
export default Blog;
