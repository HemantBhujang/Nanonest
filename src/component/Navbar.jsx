import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/react.svg";

const Navbar = ({ title, services, industry, about, team, more, faq, in_faq, blog, button }) => {
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
                <Link className="nav-link active mx-3" to="/services">{services}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-3" to="/industry">{industry}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-3" to="/about">{about}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-3" to="/team">{team}</Link>
              </li>
              <li className="nav-item dropdown mx-3">
                <a className="nav-link dropdown-toggle mx-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {more}
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/faq">{faq}</Link></li>
                  <li><Link className="dropdown-item" to="/investor-faq">{in_faq}</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/blog">{blog}</Link></li>
                </ul>
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
