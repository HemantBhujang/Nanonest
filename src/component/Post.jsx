import React from 'react'

const Post = ({ProfilePic,Name,Content,Button}) => {
  return (
    <>
    <div className="container text-center">
      <div className='row'>
              <div className="card col mx-5 my-5 shadow-lg mb-4" style={{width: '18rem'}}>
            <img src={ProfilePic} className="card-img-fluid" alt="Profile Picture"/>
            <div className="card-body">
              <h5 className="card-title">{Name}</h5>
              <p className="card-text">{Content}</p>
              <a href="#" class="btn btn-primary">{Button}</a>
            </div>
          </div>
          <div className="card col mx-5 my-5 shadow-lg mb-4" style={{width: '18rem'}}>
            <img src={ProfilePic} className="card-img-fluid" alt="Profile Picture"/>
            <div className="card-body">
              <h5 className="card-title">{Name}</h5>
              <p className="card-text">{Content}</p>
              <a href="#" class="btn btn-primary">{Button}</a>
            </div>
            </div>
            <div className="card col mx-5 my-5 shadow-lg mb-4" style={{width: '18rem'}}>
            <img src={ProfilePic} className="card-img-fluid" alt="Profile Picture"/>
            <div className="card-body">
              <h5 className="card-title">{Name}</h5>
              <p className="card-text">{Content}</p>
              <a href="#" class="btn btn-primary">{Button}</a>
            </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Post