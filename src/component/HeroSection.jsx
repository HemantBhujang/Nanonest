import React from 'react'
import hero from "../assets/pagal sakshi.png";
import HeroVector from '../assets/Hero_vector.svg';
import './HeroSection.css'; 

const HeroSection = () => {
  return (
    <div>
      <div className="container text-center">
  <div className="row ">
    <div className="col mt-5 mb-0 ">
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita distinctio eligendi, unde fugit nisi aut aliquid aliquam labore et quas, atque a ipsa exercitationem placeat, quos ipsam culpa deserunt minima.
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi error, omnis similique sequi, itaque ullam blanditiis id earum hic laboriosam reprehenderit ducimus consequuntur veritatis totam quisquam illo dignissimos mollitia. Est.
     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus omnis a ducimus ipsam quibusdam dicta ipsum repudiandae. Molestias, nihil reprehenderit odit consequatur neque quas sit nulla amet recusandae nesciunt eveniet?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ducimus tempora distinctio molestiae error ullam voluptas. Quia corrupti vel velit adipisci fugiat facilis quasi recusandae tempore animi nobis, iure voluptas.
    </div>
    <div className="col mt-5 mb-0 container">
   <img src={hero} alt="hero" width="735rem" height='533rem' className='img-fluid' />
    </div>
  </div>
  </div>
  <img src={HeroVector} alt="Hero Vector" className="hero-vector mt-0 mb-5" />
    </div>
  )
}

export default HeroSection
