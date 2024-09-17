import React from 'react'
import hero from "../assets/pagal sakshi.png";
import HeroVector from '../assets/Hero_vector.svg';
import './HeroSection.css'; 

const HeroSection = () => {
  return (
    <div>
      <div className="container text-center">
  <div className="row ">
    
    <div className="col mt-5 mb-0 pt-5 container">
   <img src={hero} alt="hero" width="735rem" height='433rem' className='img-fluid' />
    </div>
  </div>
  </div>
  <img src={HeroVector} alt="Hero Vector" className="hero-vector mt-0 mb-5" />
    </div>
  )
}

export default HeroSection
