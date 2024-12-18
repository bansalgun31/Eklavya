import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./TeacherDashboard.css";

const TeacherDashboard = () => {
  const navigate = useNavigate();
  const lectures = [
    { id: 1, subject: "Chemistry", title: "P-block", price: 49, rating: 5, img: "src/assets/1.jpg" },
    { id: 2, subject: "Computer Science", title: "Web Development", price: 99, rating: 5, img: "src/assets/2.jpg" },
    { id: 3, subject: "English", title: "Proposition and Composition", price: 59, rating: 5, img: "src/assets/3.jpg" },
    { id: 4, subject: "Chemistry", title: "Chemical Kinetics", price: 39, rating: 5, img: "src/assets/4.jpg" },
    { id: 5, subject: "Chemistry", title: "Atoms and Molecule", price: 69, rating: 4, img: "src/assets/6.jpg" },
  ]

  const openLecturePage = (lectureId) => {
    navigate(`/lecture/${lectureId}`);
  };

  return (
    <div className="dashboard-container">
      {/* Profile Section */}
      <div className="profile-section">
        <img src="src\assets\teacher.jpg" alt="Teacher" className="profile-pic" />
        <h2>John Doe</h2>
        <p>Email: johndoe@example.com</p>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <a href="/AddCourse"><button className="action-btn upload-btn" >Upload Lecture</button></a>
        <button className="action-btn upload-btn" >Upload Assignment</button>
        <button className="action-btn schedule-btn">Schedule Doubt Class</button>
      </div>

      {/* Uploaded Lectures */}
      <h2>Your Uploaded Lectures</h2>
      <div className="lecture-grid">
        {lectures.map((lecture) => (
          <div className="pre" key={lecture.id} onClick={() => openLecturePage(lecture.id)}>
            <img src={lecture.img} alt={lecture.title} />
            <div className="des">
              <span>{lecture.subject}</span>
              <h5>{lecture.title}</h5>
              <div className="star">
                {Array.from({ length: lecture.rating }, (_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    style={{ color: "gold", marginRight: "5px" }}
                  />
                ))}
              </div>
              <h4>₹{lecture.price}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherDashboard;
