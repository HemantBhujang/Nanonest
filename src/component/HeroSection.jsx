import React from 'react'
import hero from "../assets/pagal sakshi.png";
import HeroVector from '../assets/Hero_vector.svg';
import './HeroSection.css'; 

const HeroSection = () => {
  return (
    <div>
      <div className="container ">
  <div className="row ">
    <div className="col mt-5 mb-0 pt-5 ">

    <div className=" my-5">
  <div className="row">
    <div className="col ">
    <h1 style={{color:'black', fontSize:'100px'}}> We help you grow your </h1><br />
    <h1 style={{color:'#F9BC6E',fontSize:'5rem' }}> Conversation </h1>
    <h4 classNameName='mx-3 my-5'>Featured in leading publications around the world</h4>
    </div>
    </div>
    </div>
    </div>
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
