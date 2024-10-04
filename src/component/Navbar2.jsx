import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/react.svg";

const Navbar = ({ title, msg,notification,button }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow p-2 mb-4 bg-white rounded">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top mx-2"></img>
            {title}
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link active mx-3" to="#">{msg}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-3" to="#">{notification}</Link>
              </li>
             </ul>
           
            <button type="button" className="btn btn-outline-warning mx-3">{button}</button>
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
