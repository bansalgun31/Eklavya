import Footer from './component/Footer'
import Header from './component/Header'
import Home from './Home'
import Login from './component/Login'
import SignUp from './component/SignUp'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCourses from './component/AddCourse'
import TeacherDashboard from './component/TeacherDashboard'
import LecturePage from "./component/LecturePage";

function App() {

  return (
    <>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/teach-on-eklavya" element={<TeacherDashboard />} />
        <Route path="/addCourse" element={<AddCourses />} />
        <Route path="/lecture/:id" element={<LecturePage />} />
        
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
