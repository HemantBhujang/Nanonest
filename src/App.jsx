import React from 'react'
import Navbar from './component/Navbar'
import HeroSection from './component/HeroSection'

const App = () => {
  return (
    <div>
      <Navbar title='NanoNest' services='Services' industry='Industry' about='About Us'  team ='Team NanoNest' more='More' faq='Founder FAQ' in_faq='Investor FAQ' blog='Blog'/>
      <HeroSection/>
    </div>
  )
}

export default App
