import React, { useState } from "react";
import "./AddCourse.css";

const AddCourse = () => {
  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    price: "",
    description: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission (API integration here)
    console.log("Uploaded Course Details:", formData);
    alert("Course uploaded successfully!");
  };

  return (
    <div className="upload-course-container">
      <h2>Upload Course</h2>
      <form onSubmit={handleSubmit} className="upload-course-form">
        <label>
          Course Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter course title"
            required
          />
        </label>
        <label>
          Subject:
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter subject name"
            required
          />
        </label>
        <label>
          Price (₹):
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter course price"
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Write a brief description about the course"
            required
          ></textarea>
        </label>
        <label>
          Upload File:
          <input
            type="file"
            name="file"
            accept=".mp4,.pdf,.zip"
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className="submit-btn">
          Upload Course
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
