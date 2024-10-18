import React from 'react'
import { useNavigate } from 'react-router-dom'

const Post = ({ProfilePic,Name,Content,Button}) => {
  const navigate= useNavigate();
  const handleViewProfile =()=>{
    navigate('/VisitProfile')
  }
  return (
    <>
    
    <div className="container text-center">
      <div className='row'>
              <div className="card col mx-5 my-5 shadow-lg mb-4" style={{width: '18rem', borderColor:'#F9BC6E'}}>
            <img src={ProfilePic} className="card-img-fluid" alt="Profile Picture"/>
            <div className="card-body">
              <h5 className="card-title">{Name}</h5>
              <p className="card-text">{Content}</p>
              <button className="btn btn-primary" onClick={handleViewProfile}>View the Profile</button>
            </div>
          </div>
          <div className="card col mx-5 my-5 shadow-lg mb-4" style={{width: '18rem', borderColor:'#F9BC6E'}}>
            <img src={ProfilePic} className="card-img-fluid" alt="Profile Picture"/>
            <div className="card-body">
              <h5 className="card-title">{Name}</h5>
              <p className="card-text">{Content}</p>
              <a href="/VisitProfile" class="btn btn-warning">{Button}</a>
            </div>
            </div>
            <div className="card col mx-5 my-5 shadow-lg mb-4" style={{width: '18rem',borderColor:'#F9BC6E'}}>
            <img src={ProfilePic} className="card-img-fluid" alt="Profile Picture"/>
            <div className="card-body">
              <h5 className="card-title">{Name}</h5>
              <p className="card-text">{Content}</p>
              <a href="#" class="btn btn-warning">{Button}</a>
            </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Post