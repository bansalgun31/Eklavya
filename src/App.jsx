import Footer from './component/Footer'
import Header from './component/Header'
import Home from './Home'
import Login from './component/Login'
import SignUp from './component/SignUp'
import TeachOnEkLavya from './component/TeachOnEkLavya'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCourses from './component/Addcourses'
import "./App.css"

function App() {

  return (
    <>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/teach-on-eklavya" element={<TeachOnEkLavya />} />
        <Route path="/addCourse" element={<AddCourses />} />
        
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
