import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';  
import Navbar from './component/Navbar';  
import HeroSection from './component/HeroSection';  
import Section2 from './component/Section2';  
import Appointment from './component/Apointment';  
import Testimonials from './component/Testimonials';  
import Services from './component/Services';  
import Industry from './component/Industry';  
import wave from '../src/assets/Wave.jpg';  
import webDesign from './assets/Web Design 1.png';  
import SignIn from './component/SignIn';  
import SignUp from './component/SignUp';  
import AfterLogin from './component/AfterLogin';
import AfterLogInInvestor from './component/AfterLogInInvestor' ;
import Profile from './component/Profile';  
import { getAuth, onAuthStateChanged } from "firebase/auth";  // Import Firebase Auth
import VisitProfile from './component/VisitProfile';
import Menu from './component/Menu';
import EntrepreneurProfileForm from './component/EntrepreneurProfileForm';
import MessageSection from './component/MessageSection';
import Footer from './component/Footer';
import Team from './component/Team';
import NewPostForm from './component/NewPostForm'

const App = () => {  
  const [user, setUser] = useState(null);  // State to hold the current user

  useEffect(() => {
    const auth = getAuth();
    // Monitor the authentication state
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null); // Set the logged-in user data or null
    });
    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  return (  
    <Router>  
      <MainLayout user={user} />  {/* Pass user data to the MainLayout */}
    </Router>  
  );  
};  

const MainLayout = ({ user }) => {  
  const location = useLocation();  
  const noNavbarPaths = ['/signIn', '/signup', '/AfterLogin', '/profile','/VisitProfile','/Profile/Menu' ,'/profile/EntrepreneurProfileForm', '/MessageSection','/AfterLogInInvestor'];  
  const showNavbar = !noNavbarPaths.includes(location.pathname);  

  return (  
    <div>  
      {showNavbar && (  
        <Navbar   
          title='NanoNest'   
          services='Services'   
          industry='Industry'   
          about='About Us'   
          team='Team NanoNest'   
          more='More'   
          faq='Entrepreneur FAQ'   
          in_faq='Investor FAQ'   
          blog='Blog' 
          button='Contact Us' 
        />  
      )}  

      <Routes>  
        <Route path="/" element={  
          <>  
         
            <HeroSection />  
            <Section2 />  
            <Appointment />  
            <Testimonials /> 
            <Footer />
            
            
          </>  
        }/>  

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

        <Route path="/signIn" element={<SignIn />} />  
        <Route path='profile/EntrepreneurProfileForm' element ={<EntrepreneurProfileForm />}/>

        <Route path="/signup" element={<SignUp />} />
        <Route path="/VisitProfile" element={<VisitProfile />} />
        <Route path="Profile/Menu" element ={<Menu />}/>
        <Route path="/Team" element={<Team />} />
        <Route path='/NewPostForm' element={<NewPostForm />}/>

        <Route path="/profile" element={<Profile />} />
        <Route path='/MessageSection' element={<MessageSection />}/>
        <Route path="/AfterLogin" element={  
          <AfterLogin
            wave={wave}   
            title={`Welcome, ${user?.displayName || 'User'}`}  // Dynamically pass user's name
            content='where your entrepreneurial journey meets limitless growth and opportunity!'   
          />  
         
        } /> 

        <Route path='/AfterLogInInvestor' element={<AfterLogInInvestor/>}/>
        {/* 404 Not Found Route */}
        <Route path="*" element={<h2>404 Not Found</h2>} /> 
      </Routes>  
    </div>  
  );  
};  

export default App;