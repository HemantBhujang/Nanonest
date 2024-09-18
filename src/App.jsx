import React from 'react'
import Navbar from './component/Navbar'
import HeroSection from './component/HeroSection'
import Section2 from './component/Section2'
import Apointment from './component/Apointment'
import Testimonials from './component/Testimonials'

const App = () => {
  return (
    <div>
      <Navbar title='NanoNest' services='Services' industry='Industry' about='About Us'  team ='Team NanoNest' more='More' faq='Founder FAQ' in_faq='Investor FAQ' blog='Blog'/>
      <HeroSection/>
      <Section2 />
      <Apointment />
      <Testimonials />
    </div>
  )
}

export default App
