import React from 'react'
import Tata from '../assets/Ratan-Tata.png'
import Arvind from '../Images/Arvind Krishna.jpg'
import Rajeev from '../Images/Rajeev Suri.jpg'

const Testimonials = () => {
  return (
    <>
    <div>
        <h1 style={{color:'black'}} className='container text-center my-5'>Our Testimonials</h1>
    </div>

    <div className="container text-center ">
  <div className="row align-items-center shadow p-5 mb-4 bg-white rounded">
    <div className="col">
      <img src={Tata} alt="Ratan Tata" className='img-fluid rounded float-star'/>
    </div>
    <div className="col">
    <h3 className="text-start my-5" style={{color:'black', fontSize:'4vmin'}}>The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks.
    <h5 className='Text-start my-3' style={{color:'#F9BC6E'}} > Ratan Tata</h5>
    </h3> 
    </div>
    </div>
    </div>

      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Tata} className="d-block w-80 h-80" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Ratan Tata - TATA</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Arvind} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Arvind Krishna – CEO, IBM Group </h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Rajeev} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5> Rajeev Suri – CEO, Nokia Inc. </h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </>
  )
}

export default Testimonials