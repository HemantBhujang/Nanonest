import React from 'react'
import Tata from '../assets/Ratan-Tata.png'

const Testimonials = () => {
  return (
    <>
    <div>
        <h1 style={{color:'black'}} className='container text-center my-5'>Our Testimonials</h1>
    </div>

    <div class="container text-center ">
  <div class="row align-items-center shadow p-5 mb-4 bg-white rounded">
    <div class="col">
      <img src={Tata} alt="Ratan Tata" className='img-fluid rounded float-star'/>
    </div>
    <div className="col">
    <h3 className="text-start my-5" style={{color:'black', fontSize:'4vmin'}}>The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks.
    <h5 className='Text-start my-3' style={{color:'#F9BC6E'}} > Ratan Tata</h5>
    </h3> 
    </div>
    </div>
    </div>

    </>
  )
}

export default Testimonials