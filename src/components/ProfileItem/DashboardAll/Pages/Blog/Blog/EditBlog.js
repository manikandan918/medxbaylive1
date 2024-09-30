import React, { useRef, useState, useEffect } from "react";

import Blog from "../Blog";
import Editor from "../AddBlog/Editor";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams, useNavigate } from 'react-router-dom'; // Import hooks

const EditBlog = ({loadBlogs}) => {
    const { id: blogId } = useParams(); 
    const navigate = useNavigate(); 
    const [loading, setLoading] = useState(true);

  const [showAddNewBlog, setShowAddNewBlog] = useState(false);
  const [newBlog, setNewBlog] = useState({
    title: "",
    author: "",
    category: "",
    subcategories: "",
    hashtags: "",
    priority: "",
    description: "",
    image: null,
    save: false,
  });
  const quillRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleAddClick = () => {
    setShowAddNewBlog(true);
  };

  const handleCancel = () => {
    setShowAddNewBlog(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Blog submitted:", newBlog);
  };

  // Example options for the select boxes
  const categories = ["Technology", "Health", "Travel", "Food", "Lifestyle"];
  const subCategories = {
    Technology: ["AI", "Blockchain", "Cybersecurity"],
    Health: ["Nutrition", "Mental Health", "Fitness"],
    Travel: ["Adventure", "Culture", "Guides"],
    Food: ["Recipes", "Reviews", "Nutrition"],
    Lifestyle: ["Fashion", "Home Decor", "Wellness"],
  };

  useEffect(() => {
    // Fetch existing blog data
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`/blogs/edit/${blogId}`, {
          withCredentials: true,
        });
        setNewBlog({
          title: res.data.title,
          author: res.data.author,
          category: res.data.category,
          subcategories: res.data.subcategories.join(','),
          hashtags: res.data.hashtags.join(','),
          priority: res.data.priority,
          description: res.data.description,
          image: res.data.image?.data ? `data:${res.data.image.contentType};base64,${Buffer.from(res.data.image.data).toString('base64')}` : null,
        });
        setLoading(false);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch blog data.");
        setLoading(false);
      }
    };

    fetchBlog();
  }, [blogId]);


  const handlePublish = () => {
    toast.success("Blog Publish");
    console.log("Blog submitted:", newBlog);
    try{
      const res= axios.post(`${process.env.REACT_APP_BASE_URL}/blogs/edit/${blogId}`,
        newBlog,
        {
            withCredentials: true,
            headers: { "Content-Type": "multipart/form-data" },
        })
        console.log(res)
        if (res.data) {
          console.log("Blog updated successfully:", res.data);
          loadBlogs()
          handleCancel()
      } else {
          console.error("Failed to update Blog:", res.data);
      } 

    }catch(e){
      console.log(e)
    }
  }

  return (

   
        <div className="publish-blog-container" onSubmit={handleSubmit}>
          <h2 className="blog-title">Blogs</h2>
          <form className="publish-blog-gap">
            <div className="publish-blog-header">
              <input
                type="text"
                value={newBlog.title}
                className="publish-blog-input"
                onChange={(e) =>
                  setNewBlog({ ...newBlog, title: e.target.value })
                }
              />
              <p className="publish-blog-placeholder">
                Blog Title
                <span style={{ color: "red" }}> *</span>
              </p>
            </div>

            <div className="publish-blog-header">
              <input
                type="text"
                value={newBlog.author}
                className="publish-blog-input"
                onChange={(e) =>
                  setNewBlog({ ...newBlog, author: e.target.value })
                }
              />
              <p className="publish-blog-placeholder">
                Author Name
                <span style={{ color: "red" }}> *</span>
              </p>
            </div>

            <div className="publish-blog-header">
              <select
                value={newBlog.category}
                className="publish-blog-input"
                onChange={(e) =>
                  setNewBlog({ ...newBlog, category: e.target.value })
                }
              >
                <option value="" disabled hidden>
                  Choose Blog Category
                </option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <p className="publish-blog-placeholder">
                Blog Category
                <span style={{ color: "red" }}> *</span>
              </p>
            </div>

            <div className="publish-blog-header">
              <select
                value={newBlog.subcategories}
                className="publish-blog-input"
                onChange={(e) =>
                  setNewBlog({ ...newBlog, subcategories: e.target.value })
                }
              >
                <option value="" disabled hidden>
                  Choose Blog Sub Category
                </option>
                {newBlog.category &&
                  subCategories[newBlog.category].map((subcategories, index) => (
                    <option key={index} value={subcategories}>
                      {subcategories}
                    </option>
                  ))}
              </select>
              <p className="publish-blog-placeholder">
                Blog Sub Category
                <span style={{ color: "red" }}> *</span>
              </p>
            </div>

            <div className="publish-blog-header">
              <input
                type="text"
                value={newBlog.hashtags}
                className="publish-blog-input"
                onChange={(e) =>
                  setNewBlog({ ...newBlog, hashtags: e.target.value })
                }
              />
              <p className="publish-blog-placeholder">
                Tags (separated with a comma)
                <span style={{ color: "red" }}> *</span>
              </p>
            </div>

            <div className="publish-blog-header">
              <p className="publish-blog-placeholder-status">
                Blog priority
                <span style={{ color: "red" }}> *</span>
              </p>
              <div className="publish-blog-check-aina">
                <div className="radio-input-label">
                  <input
                    type="radio"
                    id="check-high"
                    className="checkbox"
                    checked={newBlog.priority === "high"}
                    onChange={() =>
                      setNewBlog({
                        ...newBlog,
                        priority:
                          newBlog.priority === "high"
                            ? "low"
                            : "high",
                      })
                    }
                  />
                  <label htmlFor="check-high" className="radio-label">
                    High
                  </label>
                </div>
                <div className="radio-input-label">
                  <input
                    type="radio"
                    id="check-inhigh"
                    className="checkbox"
                    checked={newBlog.priority === "low"}
                    onChange={() =>
                      setNewBlog({
                        ...newBlog,
                        priority:
                          newBlog.priority === "low"
                            ? "high"
                            : "low",
                      })
                    }
                  />
                  <label htmlFor="check-high" className="radio-label">
                    Low
                  </label>
                </div>
              </div>
            </div>
          </form>
          <div className="editor-and-file-container">
            <div className="editor-box">
              <Editor
                ref={quillRef}
                defaultText="Description"
                onTextChange={(content) => {
                  setNewBlog({ ...newBlog, description: content });
                }}
              />
            </div>

            <div className="publish-blog-header-file">
              <input
                type="file"
                ref={fileInputRef}
                className="publish-file-input"
                onChange={(e) =>
                  setNewBlog({ ...newBlog, image: e.target.files[0] })
                }
              />
              <p className="publish-file-name">{newBlog?.image?.name}</p>

              <div className="choose-file-publish" onClick={() => fileInputRef.current.click()}>
                <span>Choose File</span>
              </div>
              <p className="publish-blog-placeholder">
                Image
                <span style={{ color: "red" }}> *</span>
              </p>
            </div>
          </div>

          <div className="publish-button">
            <div className="publish-button-inside" onClick={handlePublish}>
              <span>Publish Blog</span>
            </div>
            <div className="publish-button-inside" onClick={handleAddClick} 
            style={{ background: "#3334480D", color: "black" }} >
              <span>Cancel</span>
            </div>
          </div>

        </div>
    
  );
};

export default  EditBlog;
