import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import HeroSection from './component/HeroSection';
import Section2 from './component/Section2';
import Appointment from './component/Apointment';
import Testimonials from './component/Testimonials';
import Services from './component/Services';
import Industry from './component/Industry';
import wave from '../src/assets/Wave.jpg'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar title='NanoNest' services='Services' industry='Industry' about='About Us' team ='Team NanoNest' more='More' faq='Founder FAQ' in_faq='Investor FAQ' blog='Blog'/>
        
        {/* Define routes */}
        <Routes>
          {/* Home route with multiple components */}
          <Route path="/" element={
            <>
              <HeroSection />
              <Section2 />
              <Appointment />
              <Testimonials />
            </>
          }/>
          
          {/* Services route */}
          <Route path="/services" element={
            <Services 
              title='Services'  
              content='All our digital marketing services start with a free 30-minute consultation call where we find the best strategy towards reaching your goals.'
            />
          } />
          <Route path='/Industry' element={
            <Industry 
            title="Welcome"
            content="where your entrepreneurial journey meets limitless growth and opportunity!"
            wave={wave}
            />
          }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
