import React from 'react'
import ServiceCard from './ServiceCard'
import me from '../assets/Investor Relation Management.png'


const Services = ({title,content,itWorker}) => {
  return (
        <div className="container text-center my-5">
  <div className="row">
    <div className="col my-5">
    <h1 className="my-5 "style={{textShadow: "5px 5px 10px #F9BC6E",fontSize: '12vmin'}}>{title}</h1>
        <h4 className='text-start my-3' >{content}</h4>
        <button type="button" className="btn btn-lg my-4 mx-5" style={{backgroundColor : '#F9BC6E'}}>Contact Us </button>
    </div>
    <div className="col">
      <img src={itWorker} width="735rem" height='433rem' alt="It Worker" className='img-fluid' />
    </div>
      </div>
      <ServiceCard relation={me} title='Investor Relations Management' content='Provide tools for managing investor communications, including customizable dashboards that display key metrics, financial reports, and company updates. This service can help entrepreneurs maintain transparency and keep investors informed about business performance.
' />
    </div>
   
  )
}

export default Services