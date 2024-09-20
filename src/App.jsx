import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import HeroSection from './component/HeroSection';
import Section2 from './component/Section2';
import Appointment from './component/Apointment';
import Testimonials from './component/Testimonials';
import Services from './component/Services';
import Industry from './component/Industry';
import wave from '../src/assets/Wave.jpg';
import webDesign from './assets/Web Design 1.png'
import SignIn from './component/SignIn'
import AfterLogin from './component/AfterLogin';
// import Tabish from './assets/Tabish Khan.jpg'

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
              {/* <SignIn/> */}
              <AfterLogin title='Welcom, Sakshi' 
              content='where your entrepreneurial journey meets limitless growth and opportunity!'
              wave={wave}
             />
            </>
          }/>
          
          {/* Services route */}
          <Route path="/services" element={
            <Services 
              title='Services'  
              content='All our digital marketing services start with a free 30-minute consultation call where we find the best strategy towards reaching your goals.'
              itWorker={webDesign}
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
