import React, { useState } from "react";
import "../component/Addcourse.css"

const AddCourses = () => {
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [notesFile, setNotesFile] = useState(null);

  const handleSubmit = () => {
    console.log("Description:", description);
    console.log("Video File:", videoFile ? videoFile.name : "No file uploaded");
    console.log("Notes File:", notesFile ? notesFile.name : "No file uploaded");

    alert("Content submitted successfully!");
  };

  return (
    <div>

      <div className="container">
        {/* Welcome Section */}
        <div className="text-center mb-4 m-4">
          <h1>{courseName ? `Welcome, ${courseName}!` : "Add Course"}</h1>
          <div className="mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter the course name"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            />
          </div>
        </div>

        {/* Upload Section */}
        <div className="card p-4 m-4">
          <h2 className="card-title text-center">Upload Your Content</h2>
          <form>
            {/* Video Upload */}
            <div className="mb-3">
              <label htmlFor="videoUpload" className="form-label">
                Upload Video
              </label>
              <input
                type="file"
                className="form-control"
                id="videoUpload"
                accept="video/*"
                onChange={(e) => setVideoFile(e.target.files[0])}
              />
            </div>

            {/* Description */}
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Add a Description
              </label>
              <textarea
                className="form-control"
                id="description"
                rows="4"
                placeholder="Write a brief description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            {/* Notes Upload */}
            <div className="mb-3">
              <label htmlFor="notesUpload" className="form-label">
                Upload Notes
              </label>
              <input
                type="file"
                className="form-control"
                id="notesUpload"
                accept=".pdf,.docx"
                onChange={(e) => setNotesFile(e.target.files[0])}
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="button"
                className="btn btn-lg"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCourses;
