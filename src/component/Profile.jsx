import React from 'react'

const Profile = ({Profile}) => {
  return (
            <div class="container text-center my-5">
            <div class="row row-cols-2">
                <div className="col">
                    <img src={Profile} className="rounded img-fluid" alt="Profile Picture" style={{width:'300px'}}/>
                </div>
                <div class="col">
                    <button type="button" class="btn btn-outline-warning my-5">Upload Photo</button></div>
                <div class="col">
                   <h6 style={{opacity:'50%'}}>Your Name </h6> 
                   <h6>Sakshi Kakde</h6>
                </div>
                <div class="col"><button type="button" class="btn btn-outline-warning my-5">Edit</button></div>
                    <div class="col">
                    <h6 style={{opacity:'50%'}}>Contact Information</h6> 
                    <h6>sakshikakde@nanonest.in</h6>
                    <h6>+91987654321</h6>
                    </div>
                    <div class="col"><button type="button" class="btn btn-outline-warning my-5">Edit</button></div><div class="col">
                    <h6 style={{opacity:'50%'}}>About</h6> 
                    <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, doloribus expedita. Explicabo cupiditate est quod reiciendis consequatur distinctio voluptatem illo exercitationem deserunt quaerat eius incidunt, optio veniam natus labore unde.</h6>
                    </div>
                    </div>
                    <h1 className='container my-5'>Dashboard Of Investment</h1>
                    <ol class="list-group list-group-numbered m-5">
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                        <div class="fw-bold">Aura digital</div>
                        Active
                        </div>
                        <span class="badge text-bg-primary rounded-pill">$14</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                        <div class="fw-bold">Rukhmini Services</div>
                        Active
                        </div>
                        <span class="badge text-bg-primary rounded-pill">$7</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-start list-group-item list-group-item-danger">
                        <div class="ms-2 me-auto">
                        <div class="fw-bold">Gujrat Giants</div>
                        Expired
                        </div>
                        <span class="badge text-bg-danger rounded-pill">$29</span>
                    </li>
                    </ol>

            </div>
  )
}

export default Profile