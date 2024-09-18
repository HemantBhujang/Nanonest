import React from 'react'


const Apointment = () => {
  return (
    <div class="badge text-wrap" style={{backgroundColor:'#F9BC6E', color:'white', height:'250px' ,width:'100%'}}>
    <div class="row">
      <div class="col">
        <h1 className='text-start my-5 mx-5'>Book A Free <br />Digital Marketing Consultation</h1>
      </div>
      <div class="col">
      <div class="input-group container mb-3 my-5 " >
      <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>     
       </div>
      <div className='d-grid gap-2'>
      <button type="button" class="btn btn-outline-secondary">Book My Free Apointment</button>
      </div>
    </div>
    </div>
     
    </div>
    
   
  )
}

export default Apointment