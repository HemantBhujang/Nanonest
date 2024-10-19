import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/react.svg";
 
import { signOut } from 'firebase/auth'; // Assuming you're using Firebase for authentication
import { auth } from "./Firebase"; // Adjust this import based on your Firebase setup

const Navbar2 = ({ title, msg, notification, button = "Profile" }) => {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate('/profile');
  };

  const handleEditProfile = () => {
    navigate('/profile/EntrepreneurProfileForm');
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
        window.location.href = '/'; // Redirect to homepage after logout
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow p-2 mb-4 bg-white rounded">
        <div className="container-fluid">
          <Link className="navbar-brand">
            <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top mx-2" />
            {title}
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active mx-3" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop" to="#">{msg}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-3" to="#">{notification}</Link>
              </li>
              
            </ul>

            {/* Dropdown Button for Profile */}
            <div className="dropdown">
              <button className="btn btn-outline-warning dropdown-toggle mx-3" type="button" id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                {button}
              </button>
              <ul className="dropdown-menu" aria-labelledby="profileDropdown">
                <li><button className="dropdown-item" onClick={handleViewProfile}>View Profile</button></li>
                <li><button className="dropdown-item" onClick={handleEditProfile}>Edit Profile</button></li>
                <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
              </ul>
            </div>

          </div>
        </div>
      </nav>
      
{/* __________________Offcanvas of Personal Message #chat____________ */}
<div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="staticBackdropLabel">Chat Section</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      <p>I will not close if you click outside of me.</p>
    </div>

    {/* <!-- Messages List --> */}
    <div class="list-group">
      {/* <!-- Unread Message --> */}
      <a href="/MessageSection" class="list-group-item list-group-item-action active" aria-current="true">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">John Doe</h5>
          <small>5 mins ago</small>
        </div>
        <p class="mb-1">Hey! Are we still on for the meeting tomorrow?</p>
        <small>Unread</small>
      </a>

      {/* <!-- Read Messages --> */}
      <a href="#" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Jane Smith</h5>
          <small class="text-muted">1 hour ago</small>
        </div>
        <p class="mb-1">I've sent over the documents. Let me know if you need anything else.</p>
        <small class="text-muted">Read</small>
      </a>

      <a href="#" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Alice Johnson</h5>
          <small class="text-muted">3 hours ago</small>
        </div>
        <p class="mb-1">Thanks for the update! Looking forward to the next steps.</p>
        <small class="text-muted">Read</small>
      </a>
    </div>
  </div>
</div>

    </div>
  );
};

export default Navbar2;