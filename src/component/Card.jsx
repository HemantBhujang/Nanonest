import React from 'react'
function Card({Testonomial,Title,Content}) {
  return (
    <div>
 <div className="card my-4 bg-body-tertiary shadow-lg p-2 mb-4 bg-white rounded" style={{width:"40rem"}}>  
  <div className="row no-gutters">  
    <div className="col-md-4">  
      <img src={Testonomial} className=" img-fluid" alt="Image Description"/>  
    </div>  
    <div className="col-md-8">  
      <div className="card-body">  
        <h5 className="card-title text-warning">{Title}</h5>  
        <hr  className="text-warning" style={{ border: "2px solid",  width:"3rem"}} />
        <p className="card-text">{Content}</p>  
      </div>  
    </div>  
  </div>  
</div>
    </div>
  )
}

export default Card
