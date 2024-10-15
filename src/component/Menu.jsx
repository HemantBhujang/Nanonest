import React from 'react'
import { auth } from './Firebase';
import { signOut } from 'firebase/auth';
const Menu = () => {
    // Handle Logout Function
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
        // Optionally, you can redirect the user to the login page after logout
        window.location.href = '/'; 
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };
  return (
    <div className='container'>
        <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
                <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small>3 days ago</small>
                </div>
                <p className="mb-1">Some placeholder content in a paragraph.</p>
                <small>And some small print.</small>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small className="text-body-secondary">3 days ago</small>
                </div>
                <p className="mb-1">Some placeholder content in a paragraph.</p>
                <small className="text-body-secondary">And some muted small print.</small>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small className="text-body-secondary">3 days ago</small>
                </div>
                <p className="mb-1">Some placeholder content in a paragraph.</p>
                <small className="text-body-secondary">And some muted small print.</small>
            </a>
            <a href="EntrepreneurProfileForm" className="list-group-item list-group-item-action" >Edit Profile</a>
            </div>
             <div className="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-outline-warning my-5" type="button" onClick={handleLogout}>Logout</button>
              </div>
                
    </div>
  )
}

export default Menu