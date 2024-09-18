import React from 'react'
import ServiceCard from './ServiceCard'
import me from '../assets/Investor Relation Management.png'


const Services = ({title,content,itWorker}) => {
  return (
        <div class="container text-center my-5">
  <div class="row">
    <div class="col">
    <h1 >{title}</h1>
        <h4 className='text-start my-3' style={{color:'#F9BC6E'}}>{content}</h4>
        <button type="button" class="btn btn-lg my-4 mx-5" style={{backgroundColor : '#F9BC6E'}}>Contact Us </button>
    </div>
    <div class="col">
      <img src={itWorker} alt="It Worker" className='img-fluid' />
    </div>
      </div>
      <ServiceCard relation={me} title='Investor Relations Management' content='Provide tools for managing investor communications, including customizable dashboards that display key metrics, financial reports, and company updates. This service can help entrepreneurs maintain transparency and keep investors informed about business performance.
' />
    </div>
   
  )
}

export default Services