import React from 'react';
import Tata from '../assets/Ratan-Tata.png';
import Arvind from '../Images/Arvind Krishna.jpg';
import Rajeev from '../Images/Rajeev Suri.jpg';

const Testimonials = () => {
  return (
    <>
      <div>
        <h1 style={{ color: 'black' }} className='container text-center my-5'>Our Testimonials</h1>
      </div>

      <div className="container">
        {/* Testimonial for Ratan Tata */}
        <div className="row align-items-center shadow p-5 mb-4 bg-white rounded">
          <div className="col-md-4 text-center">
            <img src={Tata} alt="Ratan Tata" className='img-fluid rounded' />
          </div>
          <div className="col-md-8">
            <h3 style={{ color: 'black', fontSize: '4vmin' }}>
              "The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks."
              <h5 style={{ color: '#F9BC6E', marginTop: '1rem' }}>- Ratan Tata</h5>
            </h3>
          </div>
        </div>

        {/* Testimonial for Arvind Krishna */}
        <div className="row align-items-center shadow p-5 mb-4 bg-white rounded">
          <div className="col-md-4 text-center">
            <img src={Arvind} alt="Arvind Krishna" className='img-fluid rounded' />
          </div>
          <div className="col-md-8">
            <h3 style={{ color: 'black', fontSize: '4vmin' }}>
              "Our success as a company is built on continuous innovation and a relentless drive to lead in our industry."
              <h5 style={{ color: '#F9BC6E', marginTop: '1rem' }}>- Arvind Krishna, CEO, IBM Group</h5>
            </h3>
          </div>
        </div>

        {/* Testimonial for Rajeev Suri */}
        <div className="row align-items-center shadow p-5 mb-4 bg-white rounded">
          <div className="col-md-4 text-center">
            <img src={Rajeev} alt="Rajeev Suri" className='img-fluid rounded' />
          </div>
          <div className="col-md-8">
            <h3 style={{ color: 'black', fontSize: '4vmin' }}>
              "Innovation is the driving force behind our progress and our future success."
              <h5 style={{ color: '#F9BC6E', marginTop: '1rem' }}>- Rajeev Suri, CEO, Nokia Inc.</h5>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
