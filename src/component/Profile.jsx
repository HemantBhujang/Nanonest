import React,{useState,useEffect} from 'react';
import { auth,storage } from './Firebase'; // Import the Firebase auth instance
import Navbar2 from './Navbar2';
import { getAuth,onAuthStateChanged } from 'firebase/auth';
import defaultProfilePic from '../assets/ProfilePic.png'; // Adjust the path as necessary

const Profile = ({ Profile }) => {

  // const defaultProfilePic = 'https://your-firebase-storage-url/ProfilePic.jpg';
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

      <div className="container text-center my-5">
        <div className="row row-cols-2">
          <div className="col">
            {/* <img src={defaultProfilePic} className="rounded img-fluid" alt="Profile Picture" style={{ width: '300px' }} /> */}
            <img 
                src={user?.photoURL || defaultProfilePic} 
                className="card-img-top rounded-circle" 
                alt="Profile" 
                style={{ width: '300px' }} 
              />
          </div>
        <div class="card" style={{width: "18rem;"}}>
          <div class="card-body">
            <h5 class="card-title">{`${user?.displayName || 'User'}`}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">Company Name</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">{userEmail}</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      </div>

        {/* <h1 className="container my-5">Dashboard Of Investment</h1>
        <ol className="list-group list-group-numbered m-5">
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Aura digital</div>
              Active
            </div>
            <span className="badge text-bg-primary rounded-pill">$14</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Rukhmini Services</div>
              Active
            </div>
            <span className="badge text-bg-primary rounded-pill">$7</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start list-group-item list-group-item-danger">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Gujrat Giants</div>
              Expired
            </div>
            <span className="badge text-bg-danger rounded-pill">$29</span>
          </li>
        </ol> */}
      </div>
    </>
  );
}

export default Profile;
