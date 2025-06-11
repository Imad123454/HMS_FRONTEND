import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Carousel from './Carousel';
import About from './About';
// import Login from './Login';
// import Homeimage from './Homeimage';





const Home = () => {

    let slidebar = [
    "http://upkaarhospital.com/img/carousel-1.jpg",
    "https://assets.hillrom.com/is/image/hillrom/Med-Surg_1984-feature-hero-banner-desktop?$featureProductCarouselDesktop$",
    "https://blog.pattersonpope.com/hs-fs/hubfs/Maximize-Efficiency-in-Hospital-Supply-Room-Header-1.jpg?width=1925&height=1000&name=Maximize-Efficiency-in-Hospital-Supply-Room-Header-1.jpg",
    "https://themighty.com/wp-content/uploads/2018/06/GettyImages-695337976-1280x640.jpg"
  ]
  return (

    <div>
      <div>
        <Navbar/>
        
      <Carousel slidebar={slidebar} />
      {/* <About/> */}
      
        <Footer/>

      </div>
    </div>
  )
}

export default Home
