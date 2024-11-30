import React from 'react'
import "../component/TeachOnEkLavya.css";

const TeachOnEkLavya = () => {
  return (
    <>
       <div class="container">
    <header>
    <div class="dashboard-container">
        {/* <!-- Sidebar --> */}
        <div class="sidebar">
            <div class="profile">
                <img src="data:image/jpeg;base64,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" alt="Teacher Profile Picture" class="profile-img"/>
                <h2>John Doe</h2>
                <p>(Science)</p>
                <p>Email: johndoe@example.com</p>
                <p>Phone: 0571-2483596</p>
                <br/>
                <div><button class="btn-edit">Edit-Profile</button></div>

                {/* <!-- <p>Profile Overview</p> --> */}
            </div>
            <nav>
                <ul>
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Classes</a></li>
                    <li><a href="#">Assignments</a></li>
                    <li><a href="#">Attendance</a></li>
                    <li><a href="#">Settings</a></li>
                </ul>
            </nav>

            <div><button class="btn-logout">Logout</button></div>
        </div>    
    </div>
</header>
<section id="product1" class="section-p1">
    <h2>Uploaded Lecture</h2>
    <div class="pro-container">
        {/* <!-- single product --> */}
        <div class="pre">
            <img src="src\assets\7.jpg"/>
            <div class="des">
                <span>chemistry</span>
                <h5>Thermodynamics</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>₹49<i class="fa-solid fa-indian-rupee-sign"></i></h4>
            </div>
            <a href=""><i class="fa-solid fa-cart-shopping "id="cart"></i></a>
        </div>
        <div class="pre">
            <img src="src\assets\6.jpg"/>
            <div class="des">
                <span>chemistry</span>
                <h5>Atom and molecule</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>₹51</h4>
            </div>
            <a href=""><i class="fa-solid fa-cart-shopping "id="cart"></i></a>
        </div>
        <div class="pre">
            <img src="src\assets\1.jpg"/>
            <div class="des">
                <span>chemisty</span>
                <h5>carbon and its compound</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>₹51</h4>
            </div>
            <a href=""><i class="fa-solid fa-cart-shopping "id="cart"></i></a>
        </div>
        
        <div class="pre">
            <img src="src\assets\4.jpg"/>
            <div class="des">
                <span>Biodiversity</span>
                <h5>living organism</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>₹29</h4>
            </div>
            <a href=""><i class="fa-solid fa-cart-shopping "id="cart"></i></a>
        </div>
        
    </div>
    <div class="click">
        <a href="/addCourse">
            <button>add a new course</button>
        </a>
        
    </div>
</section>
</div> 
    </>
  )
}

export default TeachOnEkLavya