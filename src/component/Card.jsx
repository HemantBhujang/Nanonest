import React from 'react'  

function Card({ Testonomial, Title, Content }) {  
  return (  
    <div className="my-4"> {/* Added margin to the parent for spacing */}  
      <div className="card bg-body-tertiary shadow-lg p-3 mb-4 bg-white rounded" style={{ width: "65%" }}>  
        <div className="row no-gutters">  
          {/* Use col- classes for responsive layout */}  
          <div className="col-12 col-md-4">  
            <img src={Testonomial} className="img-fluid" alt="Image Description" />  
          </div>  
          <div className="col-12 col-md-8">  
            <div className="card-body">  
              <h5 className="card-title text-warning">{Title}</h5>  
              <hr className="text-warning" style={{ border: "2px solid", width: "3rem" }} />  
              <p className="card-text">{Content}</p>  
            </div>  
          </div>  
        </div>  
      </div>  
    </div>  
  )  
}  

export default Card