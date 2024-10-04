import React from 'react'
import Post from './Post'
import Tabish from '../assets/Tabish Khan.jpg'
import Profile from './Profile'
import Sakshi from '../assets/Sakshi.jpg'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import VisitProfile from '../component/VisitProfile'
const AfterLogin = ({title,content,wave}) => {
  return (
    <>    
    <div className='container text-start my-5'>
        <h1 style={{fontSize:'8vmin'}} className='my-3'>{title}</h1>
        <h3 style={{fontSize:'4vmin', color:'#F9BC6E'}}>{content}</h3> 
    </div>
    <img src={wave} alt="Wave Image" className='Start' width='100%' />
    <div class="btn-group dropend" style={{marginLeft:'90%'}}>
      <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Dropend
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Investors</a></li>
        <li><a class="dropdown-item" href="#">Entrepreneur</a></li>
        <li><a class="dropdown-item" href="#">Other</a></li>
      </ul>
    </div>
    <Post ProfilePic={Tabish}
              Name="Tabish Khan"
              Content="Aura Digital"
              Button="View Profile" />
    <Router>
      <Routes>
        <Route exact path="visit_profile" element={<VisitProfile/>} />
      </Routes>
    </Router>
    
    <Post ProfilePic={Tabish}
              Name="Tabish Khan"
              Content="Aura is a new-age digital consultancy. We help brands grow digitally through Social Media Management, Branding, Animations, Web Development. We're a one-stop shop for all your digital needs."
              Button="View Profile" />
    <Post ProfilePic={Tabish}
              Name="Tabish Khan"
              Content="Aura Digital"
              Button="View Profile" />

    <Profile Profile={Sakshi} />

              
    </>

  )
}

export default AfterLogin