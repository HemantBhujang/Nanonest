import React from 'react'
import Testonomial from '../assets/Testimonial.png'
import GetStarted from '../assets/Get Started.png'
import Setting from '../assets/Settings.png'
import TeamWork from '../assets/Team Work.png'
import Card from './Card'
import './HeroSection.css'
function Section2() {
  return (
    <div className='container'>
      <h1 className="text-center fw-bold my-5">How It Works </h1>
   <Card Testonomial={Testonomial} Title='Goal' Content='To create a seamless connection between micro and nano entrepreneurs and potential investors or donors, facilitating effective communication and collaboration.' />

   <Card style={{ marginLeft: '50px' }} Testonomial={GetStarted} Title='Competitors' Content='Everybody wants to be the best in their field. To achieve success, we audit your competitors and find out what is working and what is not. All this to help you save time, money, and effort on things that do not work and focus on what does.' />

   <Card Testonomial={Setting} Title='Strategy' Content='Focus on creating an intuitive and engaging platform that simplifies the connection and communication process between entrepreneurs and investors, ensuring a seamless experience that encourages active participation and collaboration.'/>

   <Card style={{ marginLeft: '200px' }}  Testonomial={TeamWork} Title='Launch' Content='Launching everything into action will be the start of your new marketing strategy. Taking every step we have planned and carefully following the laid-out road map to reach your business goals.​' />
    </div>
  )
}

export default Section2
