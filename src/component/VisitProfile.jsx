import React from 'react';
import tabish from '../assets/Tabish Khan.jpg';

const VisitProfile = () => {
    return (
        <> 
        <div className="container text-center my-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
            <div className="row">
                <div className="col">
                    <img src={tabish} alt="Profile Picture" style={{height:'30rem', borderRadius: '20px'}} />
                </div>
                <div className="col d-flex flex-column justify-content-between">
                    <div>
                        <h1 style={{fontSize:'4rem'}}>Tabish Khan</h1>
                        <h5 style={{color:'#969696'}}>Aura Digital</h5>
                        <h5 style={{color:'#969696',fontSize:'1rem'}} className='my-5'>Aura is a new-age digital consultancy. We help brands grow digitally through Social Media Management, Branding, Animations, Web Development. We're a one-stop shop for all your digital needs.</h5>
                    </div>
                    <div className="mt-auto">
                        <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="button" className="btn btn-outline-warning">Add to List</button>
                            <button type="button" className="btn btn-outline-warning">Message</button>
                            <button type="button" className="btn btn-outline-warning">Invest</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default VisitProfile;
