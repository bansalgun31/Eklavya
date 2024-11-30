import React from 'react'
import "../component/footer.css"

const Footer = () => {
  return (
    <div>
      <footer class="section-p1 ">
        <div class="col">
            <h4>Contact</h4>
            <p><strong>Address:</strong>sewa nagar merrut road ghaziabad </p>
            <p><strong>Phone:</strong>7065980030</p>
            <p><strong>Hours:</strong>10:00-18:00,mon-sat</p>
            <div class="follow">
                <h4>Follow us</h4>
                <div class="icon">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-youtube"></i>
                </div>
            </div>
        </div>
        <div class="col">
            <h4>about</h4>
            <a href="#">About us</a>
            <a href="#">Delivery Information</a>
            <a href="#">privacy policy</a> 
            <a href="#">Terms & conditions</a> 
            <a href="#">Contact us</a>
        </div>
       
            <div class="install">
            <h4>Install App</h4>
            <p>Form App Store or Google Play</p>
            <div class="row">
                <img src="src\assets\AppStore.jpg"/>
                <img src="src\assets\GooglePlay.jpg"/>
            </div>
            <p>Secured Payment with</p>
            <img src="src\assets\Visa.jpg"/>
        </div>
       
    </footer>
    </div>
  )
}

export default Footer
