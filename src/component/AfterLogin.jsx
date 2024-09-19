import React from 'react'

const AfterLogin = ({title,content,wave,ProfilePic,Name,CName,Website}) => {
  return (
    <>    <div className='container text-start my-5'>
        <h1 style={{fontSize:'8vmin'}} className='my-3'>{title}</h1>
        <h3 style={{fontSize:'4vmin', color:'#F9BC6E'}}>{content}</h3>
        
    </div>
    <img src={wave} alt="Wave Image" className='Start' width='100%' />
    <div className="container text-center">
        <div className="row">
            <div className="col card bg-body-tertiary shadow-lg p-3 mb-4 bg-white rounded">
            <img src={ProfilePic} alt="Profile Picture" className='img-thumbnail' />
            <h3 style={{fontSize:'4vmin'}} className='my-3'>{Name}</h3>
            <h4 style={{fontSize:'2vmin', color:'#F9BC6E'}}>{CName}</h4>
            <a href={Website} style={{color:'#F9BC6E'}}>{Website}</a>
            <button className="btn btn-warning my-3" style={{Color:'##F9BC6E'}}>View Profile</button>
            </div>
            <div className="col">
            Column
            </div>
            <div className="col">
            Column
            </div>
        </div>
    </div>
    </>

  )
}

export default AfterLogin