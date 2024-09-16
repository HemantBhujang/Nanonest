import React from 'react'
import logo from "../assets/react.svg";



const Navbar = ({title,services,industry,about,team,more,faq,in_faq,blog}) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow p-2 mb-4 bg-white rounded">
  <div className="container-fluid">
  <a className="navbar-brand" href="#">
 
      <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top mx-2"></img>
      {title}
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active mx-3" aria-current="page" href="#">{services}</a>
        </li>
        <li className="nav-item">
      <a className="nav-link active mx-3 " aria-current="page" href="#">{industry}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active mx-3" aria-current="page" href="#">{about}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active mx-3" aria-current="page" href="#">{team}</a>
        </li>
        <li className="nav-item dropdown mx-3">
          <a className="nav-link dropdown-toggle mx-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {more}
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">{faq}</a></li>
            <li><a className="dropdown-item" href="#">{in_faq}</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">{blog}</a></li>
          </ul>
        </li>
    </ul>

    <button type="button" class="btn btn-outline-warning mx-3">Contact Us </button>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
