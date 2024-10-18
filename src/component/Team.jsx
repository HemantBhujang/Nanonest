import React from 'react';
import Hemant from '../Images/Hemant_B.jpg';

const Team = () => {
  return (
    <>
      <div className="container my-4">
        <div className="row justify-content-center">
          <div className="col-md-4 d-flex justify-content-center">
            <div className="card shadow-lg" style={{width: '18rem', borderRadius: '10px'}}>
              <img src={Hemant} className="card-img-top" alt="Hemant Bhujang" style={{width: '100%', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}} />
              <div className="card-body text-center">
                <h5 className="card-title">Hemant Bhujang</h5>
                <p className="card-text">UI/UX Designer</p>
                <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">View Profile</a>
                    
              </div>
            </div>
          </div>
          
          <div className="col-md-4 d-flex justify-content-center">
            <div className="card shadow-lg" style={{width: '18rem', borderRadius: '10px'}}>
              <img src={''} className="card-img-top" alt="Sakshi Kakde" style={{width: '100%', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}} />
              <div className="card-body text-center">
                <h5 className="card-title">Sakshi Kakde</h5>
                <p className="card-text">UI/UX Designer</p>
                <a href="#" className="btn btn-primary">View Profile</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 d-flex justify-content-center">
            <div className="card shadow-lg" style={{width: '18rem', borderRadius: '10px'}}>
              <img src={'Sneha'} className="card-img-top" alt="Sneha Sonwane" style={{width: '100%', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}} />
              <div className="card-body text-center">
                <h5 className="card-title">Sneha Sonwane</h5>
                <p className="card-text">UI/UX Designer</p>
                <a href="#" className="btn btn-primary">View Profile</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
