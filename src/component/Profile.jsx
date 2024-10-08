import React,{useState,useEffect} from 'react';
import { auth } from './Firebase'; // Import the Firebase auth instance
import { signOut } from 'firebase/auth';
import Navbar2 from './Navbar2';
import { getAuth,onAuthStateChanged } from 'firebase/auth';

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

  // Handle Logout Function
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
        // Optionally, you can redirect the user to the login page after logout
        window.location.href = '/'; 
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  return (
    <>
      <Navbar2
        title='NanoNest'
        msg='Message'
        notification='Notification'
        button='Profile'
      />

      <div className="container text-center my-5">
        <div className="row row-cols-2">
          <div className="col">
            <img src={Profile} className="rounded img-fluid" alt="Profile Picture" style={{ width: '300px' }} />
          </div>
          <div className="col">
            <button type="button" className="btn btn-outline-warning my-5">Upload Photo</button>
          </div>
          <div className="col">
            <h6 style={{ opacity: '50%' }}>Your Name</h6>
            <h6>{`${user?.displayName || 'User'}`}</h6>
          </div>
          <div className="col">
            <button type="button" className="btn btn-outline-warning my-5">Edit</button>
          </div>
          <div className="col">
            <h6 style={{ opacity: '50%' }}>Contact Information</h6>
            {/* <h6>{`${user.email?.displayName || 'User'}`}</h6> */}
            <h6>{userEmail}</h6>
            <h6>+91987654321</h6>
          </div>
          <div className="col">
            <button type="button" className="btn btn-outline-warning my-5">Edit</button>
          </div>
          <div className="col">
            <h6 style={{ opacity: '50%' }}>About</h6>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
          </div>
        </div>

        <h1 className="container my-5">Dashboard Of Investment</h1>
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
        </ol>
        <button type="button" className="btn btn-outline-warning mx-3" onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
}

export default Profile;
