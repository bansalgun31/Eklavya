import React from 'react'
import { Banner } from './component/Banner'
import Feature from './component/Feature'
import TopCourses from './component/TopCourses'
import FeedBack from './component/FeedBack'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Feature/>
      <TopCourses/>
      <FeedBack/>
    </div>
  )
}

export default Home
