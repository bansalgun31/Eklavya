import React from 'react'
import "../component/FeedBack.css"

const FeedBack = () => {
  return (
    <section id="newsletter" class="section-p1 section-m1">
    <div class="newstext">
        <h4>FeedBack </h4>
        {/* <p>Set S-mail update about our latest shop and <span>special offers.</span></p> */}
    </div>
    <div class="form">
        <input type="text" placeholder="Please give your feedback"/>
        <button class="normal">Feedback</button>
    </div>
</section>
  )
}

export default FeedBack