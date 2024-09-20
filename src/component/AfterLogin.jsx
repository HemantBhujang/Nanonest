import React from 'react'
import Post from './Post'
import Tabish from '../assets/Tabish Khan.jpg'

const AfterLogin = ({title,content,wave}) => {
  return (
    <>    <div className='container text-start my-5'>
        <h1 style={{fontSize:'8vmin'}} className='my-3'>{title}</h1>
        <h3 style={{fontSize:'4vmin', color:'#F9BC6E'}}>{content}</h3> 
    </div>
    <img src={wave} alt="Wave Image" className='Start' width='100%' />
    <Post ProfilePic={Tabish}
              Name="Tabish Khan"
              Content="Aura Digital"
              Button="View Profile" />
    <Post ProfilePic={Tabish}
              Name="Tabish Khan"
              Content="Aura is a new-age digital consultancy. We help brands grow digitally through Social Media Management, Branding, Animations, Web Development. We're a one-stop shop for all your digital needs."
              Button="View Profile" />
    <Post ProfilePic={Tabish}
              Name="Tabish Khan"
              Content="Aura Digital"
              Button="View Profile" />
              
    </>

  )
}

export default AfterLogin