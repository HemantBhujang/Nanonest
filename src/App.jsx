import React from 'react'
import Navbar from './component/Navbar'
import HeroSection from './component/HeroSection'
import Section2 from './component/Section2'
import Apointment from './component/Apointment'
import Testimonials from './component/Testimonials'
import Services from './component/Services'
// import worker from '..assets/Worker.png' //it give me error that can't import


const App = () => {
  return (
    <div>
      <Navbar title='NanoNest' services='Services' industry='Industry' about='About Us'  team ='Team NanoNest' more='More' faq='Founder FAQ' in_faq='Investor FAQ' blog='Blog'/>
      <HeroSection/>
      <Section2 />
      <Apointment />
      <Testimonials />
      <Services title='Services'  content='All our digital marketing services start with a free 30-minute consultation call where we find the best strategy towards reaching your goals.'/>
    </div>
  )
}

export default App
