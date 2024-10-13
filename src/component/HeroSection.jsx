
import React from 'react'
import hero from "../assets/pagal sakshi.png";
import HeroVector from '../assets/Wave.jpg';
import './HeroSection.css'; 
import { useNavigate } from 'react-router-dom';


const HeroSection = () => {
  const navigate = useNavigate();
  
  const handleSignInClick = () => {
    navigate('/signIn'); 
  };

  return (
    <div>
      <div className="container ">
  <div className="row ">
    <div className="col mt-0 mb-0 pt-5 ">

    <div className=" my-2">
  <div className="row">
    <div className="col ">
    <h1  className="h1" style={{ color: 'black', fontSize: '15vmin' }}>  
    We help you grow your <span className="h1" style={{ color: '#F9BC6E', fontSize: '15vmin' }}>Conversation</span>  
</h1>
    <h5 className='mx-3 my-2'>Featured in leading publications around the world</h5>
    <button type="button" class="btn btn-lg my-4 mx-2" onClick={handleSignInClick} style={{backgroundColor : '#F9BC6E'}}>SignIn as Investor </button>

    <button type="button" class="btn btn-lg my-4 mx-2" style={{backgroundColor : '#F9BC6E'}} onClick={handleSignInClick} >SignIn as Enterpreneur</button>
    </div>
    
    </div>
    </div>
    </div>
    <div className="col mt-3 mb-0 pt-5 container">
   <img src={hero} alt="hero" width="735rem" height='433rem' className='img-fluid' />
    </div>
  </div>
  </div>
  <img src={HeroVector} alt="Hero Vector" className="hero-vector mt-0 mb-5" />
 
    </div>
    
  )
}

export default HeroSection
