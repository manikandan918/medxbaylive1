import React, { useEffect, useRef, useState } from "react";
import './admincreateblog.css';
import Admineditor from "./Admineditor";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

const AdminBlogUploadForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    subCategory: "",
    hashtags: "",
    priority: "",
    description: "",
    image: null,
    save: false,
    authorId : ""
  });

  const [doctors, setDoctors] = useState([]); // Store doctors' data
  const quillRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/admin/blog`);
        setDoctors(response.data.doctors); // Set doctors data for dropdown
        
      } catch (error) {
        toast.error("Failed to fetch doctors.");
        console.error("Error fetching doctors:", error);
      }
    };
    
    fetchDoctors();
  }, []);


  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleAddClick = () => {
    setFormData({
      title: "",
      author: "",
      category: "",
      subCategory: "",
      hashtags: "",
      priority: "",
      description: "",
      image: null,
      save: false,
      authorId: "", // Reset doctor assignment
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/admin/blog-all`, formDataToSend, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data) {
        toast.success("Blog published successfully!");
        handleAddClick();
      } else {
        toast.error("Failed to publish blog.");
        console.error("Failed to publish blog:", res.data);
      }
    } catch (e) {
      toast.error("An error occurred while publishing the blog.");
      console.error(e);
    }
  };

  const categories = ["Technology", "Health", "Travel", "Food", "Lifestyle"];
  const subCategories = {
    Technology: ["AI", "Blockchain", "Cybersecurity"],
    Health: ["Nutrition", "Mental Health", "Fitness"],
    Travel: ["Adventure", "Culture", "Guides"],
    Food: ["Recipes", "Reviews", "Nutrition"],
    Lifestyle: ["Fashion", "Home Decor", "Wellness"],
  };

  return (
    <>
      <ToastContainer />
      <div className="admin-create-blog">
        <h2 className="admin-create-blog-title">Create Blog</h2>
        <div className="admin-create-blog-form-container">
          <form className="admin-create-blog-form-gap" onSubmit={handleSubmit}>
            <div className="admin-create-blog-header">
              <input
                type="text"
                value={formData.title}
                name="title"
                className="admin-create-blog-input"
                onChange={handleChange}
                required
              />
              <p className="admin-create-blog-placeholder">
                Blog Title
                <span style={{ color: "red" }}> *</span>
              </p>
            </div>

            <div className="admin-create-blog-header">
              <input
                type="text"
                value={formData.author}
                name="author"
                className="admin-create-blog-input"
                onChange={handleChange}
                required
              />
              <p className="admin-create-blog-placeholder">
                Author Name
                <span style={{ color: "red" }}> *</span>
              </p>
            </div>

            <div className="admin-create-blog-header">
              <select
                value={formData.category}
                name="category"
                className="admin-create-blog-input"
                onChange={handleChange}
                required
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
              <p className="admin-create-blog-placeholder">
                Blog Category
                <span style={{ color: "red" }}> *</span>
              </p>
            </div>

            <div className="admin-create-blog-header">
              <select
                value={formData.subCategory}
                name="subCategory"
                className="admin-create-blog-input"
                onChange={handleChange}
                required
              >
                <option value="" disabled hidden>
                  Choose Blog Sub Category
                </option>
                {formData.category &&
                  subCategories[formData.category].map((subCategory, index) => (
                    <option key={index} value={subCategory}>
                      {subCategory}
                    </option>
                  ))}
              </select>
              <p className="admin-create-blog-placeholder">
                Blog Sub Category
                <span style={{ color: "red" }}> *</span>
              </p>
            </div>

            <div className="admin-create-blog-header">
              <input
                type="text"
                value={formData.hashtags}
                name="hashtags"
                className="admin-create-blog-input"
                onChange={handleChange}
                required
              />
              <p className="admin-create-blog-placeholder">
                Hashtags (separated with a comma)
                <span style={{ color: "red" }}> *</span>
              </p>
            </div>

            <div className="admin-create-blog-header">
              <p className="admin-create-blog-placeholder-status">
                Blog Priority
                <span style={{ color: "red" }}> *</span>
              </p>
              <div className="admin-create-blog-check-hilo">
                <div className="admin-create-blog-radio-input-header">
                  <input
                    type="radio"
                    id="check-high"
                    name="priority"
                    value="high"
                    checked={formData.priority === "high"}
                    onChange={() => setFormData({ ...formData, priority: "high" })}
                    required
                  />
                  <label
                    htmlFor="check-high"
                    className="admin-create-blog-radio-radio-label"
                  >
                    High
                  </label>
                </div>
                <div className="admin-create-blog-radio-input-header">
                  <input
                    type="radio"
                    id="check-low"
                    name="priority"
                    value="low"
                    checked={formData.priority === "low"}
                    onChange={() => setFormData({ ...formData, priority: "low" })}
                    required
                  />
                  <label
                    htmlFor="check-low"
                    className="admin-create-blog-radio-radio-label"
                  >
                    Low
                  </label>
                </div>
              </div>
            </div>

                        {/* Doctor Assignment */}
                        <div className="admin-create-blog-header">
              <select
                value={formData.authorId}
                name="authorId"
                className="admin-create-blog-input"
                onChange={handleChange}
                required
              >
                <option value="" disabled hidden>
                  Assign a Doctor
                </option>
                {Array.isArray(doctors) && doctors.map((doctor, index) => (
                  <option key={index} value={doctor._id}>
                    {doctor.name}
                  </option>
                ))}
              </select>
              <p className="admin-create-blog-placeholder">
                Assign Doctor
                <span style={{ color: "red" }}> *</span>
              </p>
            </div>

            <div className="admin-create-blog-editor-and-file-container">
              <div className="admin-create-blog-editor-box">
                <Admineditor
                  ref={quillRef}
                  defaultText="Description"
                  onTextChange={(content) => {
                    const plainText = content.replace(/<[^>]*>/g, ""); // Remove HTML tags
                    setFormData({ ...formData, description: plainText });
                  }}
                />
              </div>

              <div className="admin-create-blog-header-file">
                <input
                  type="file"
                  ref={fileInputRef}
                  className="admin-create-blog-file-input"
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.files[0] })
                  }
                  required
                />
                <p className="admin-create-blog-file-name">{formData?.image?.name}</p>

                <div
                  className="choose-file-admin-create-blog"
                  onClick={() => fileInputRef.current.click()}
                >
                  <span>Choose File</span>
                </div>
                <p className="admin-create-blog-placeholder">
                  Image
                  <span style={{ color: "red" }}> *</span>
                </p>
              </div>
            </div>

            <div className="admin-create-blog-button">
              <button type="submit" className="admin-create-blog-button-inside">
                Publish Blog
              </button>
              <div className="admin-create-blog-button-inside" onClick={handleAddClick}>
                <span>Cancel</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminBlogUploadForm;
