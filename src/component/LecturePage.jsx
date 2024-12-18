import React from "react";
import { useParams } from "react-router-dom";
import "./LecturePage.css";

const LecturePage = () => {
  const { id } = useParams();

  const lectureDetails = {
     1:{ subject: "Chemistry", title: "P-block", price: 49, rating: 5, img: "src/assets/1.jpg" },
     2:{ subject: "Computer Science", title: "Web Development", price: 99, rating: 5, img: "src/assets/2.jpg" },
     3:{ subject: "English", title: "Proposition and Composition", price: 59, rating: 5, img: "src/assets/3.jpg" },
     4:{ subject: "Chemistry", title: "Chemical Kinetics", price: 39, rating: 5, img: "src/assets/4.jpg" },
     5:{ subject: "Chemistry", title: "Atoms and Molecule", price: 69, rating: 4, img: "src/assets/6.jpg" },
  };

  const lecture = lectureDetails[id];

  if (!lecture) {
    return <h2>Lecture Not Found</h2>;
  }

  return (
    <div className="lecture-page-container">
      <img src={lecture.img} alt={lecture.title} className="lecture-img" />
      <div className="lecture-details">
        <h2>{lecture.title}</h2>
        <h4>{lecture.subject}</h4>
        <p>{lecture.description}</p>
        <h3>Price: ₹{lecture.price}</h3>
      </div>
    </div>
  );
};

export default LecturePage;
