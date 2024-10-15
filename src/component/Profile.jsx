import React,{useState,useEffect} from 'react';
import { auth,storage } from './Firebase'; // Import the Firebase auth instance
import Navbar2 from './Navbar2';
import { getAuth,onAuthStateChanged } from 'firebase/auth';
import defaultProfilePic from '../assets/ProfilePic.png'; // Adjust the path as necessary
import wave from "../assets/Wave.jpg"
const Profile = ({ Profile }) => {

  const [user, setUser] = useState(null);  // State to hold the current user
  const [userEmail,setUserEmail] = useState(null);
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email); // Set the email state
      } else {
        setUserEmail(''); // No user signed in
      }
    });
    return () => unsubscribe(); // Clean up the subscription
  }, []);


  useEffect(() => {
    const auth = getAuth();
    // Monitor the authentication state
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // Set the logged-in user data
      } else {
        setUser(null); // No user is signed in
      }
    });
  }, []);

  

  return (
    <>
      <Navbar2
        title='NanoNest'
        msg='Message'
        notification='Notification'
        button='Profile'
        menu='Menu'
      />

<div className="container text-center my-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
            <div className="row">
                <div className="col">
                <img 
                src={user?.photoURL || defaultProfilePic} 
                className="card-img-top rounded-circle" 
                alt="Profile" 
                style={{ width: '300px' }} 
              />
                </div>
                <div className="col d-flex flex-column justify-content-between">
                    <div>
                        <h1 style={{fontSize:'4rem'}}>{`${user?.displayName || 'User'}`}</h1>
                        <h5 style={{color:'#969696'}}>Company Name</h5>
                        <h5 style={{color:'#969696',fontSize:'1rem'}} className='my-5'>Aura is a new-age digital consultancy. We help brands grow digitally through Social Media Management, Branding, Animations, Web Development. We're a one-stop shop for all your digital needs.</h5>
                    </div>
                    <div className='container'>
                      <a href="#" className='m-5'>{userEmail}</a>
                      <a href="#" className='m-5'>Website URl</a>
                     </div>
                    <div className="mt-auto">
                        {/* <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="button" className="btn btn-outline-warning">Add to List</button>
                            <button type="button" className="btn btn-outline-warning">Message</button>
                            <button type="button" className="btn btn-outline-warning">Invest</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
        <div>
          <img src={wave} alt="wave image" style={{width:"120rem"}} />
        </div>
    </>
  );
}

export default Profile;
