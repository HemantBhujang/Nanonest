import React, { useState, useEffect } from 'react';
import { auth, database } from './Firebase'; // Import Firebase auth and database
import Navbar2 from './Navbar2';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { ref, onValue } from 'firebase/database'; // Import methods for Firebase Realtime Database
import defaultProfilePic from '../assets/ProfilePic.png'; // Adjust the path as necessary
import wave from "../assets/Wave.jpg";

const Profile = () => {
  const [user, setUser] = useState(null);  // State to hold the current user
  const [userEmail, setUserEmail] = useState(null); // State to hold user email
  const [profileData, setProfileData] = useState({
    companyName: '',
    description: '',
    website: '',
    linkedin: '',
    facebook: '',
    profileImageUrl: '',
  });

  // First useEffect to monitor authentication state and fetch email
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email); // Set the email state when user is authenticated
        fetchUserProfileData(user.displayName || user.email); // Fetch profile data based on displayName or email
      } else {
        setUserEmail(''); // Clear email if no user is signed in
      }
    });
    return () => unsubscribe(); // Clean up the subscription
  }, []);

  // Second useEffect to monitor auth state and set the user object
  useEffect(() => {
    const auth = getAuth();
    // Monitor the authentication state
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // Set the logged-in user data
      } else {
        setUser(null); // Clear user data if no user is signed in
      }
    });
  }, []);

  // Function to fetch user profile data from Firebase Realtime Database
  const fetchUserProfileData = (userNameOrEmail) => {
    const db = database; // Ensure we are using the Firebase database instance
    const userRef = ref(db, `entrepreneurs/${userNameOrEmail}`); // Path in Realtime DB based on user displayName or email

    onValue(userRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        // Update the profile data state with data fetched from Firebase
        setProfileData({
          companyName: data.companyName || '',
          description: data.description || '',
          website: data.website || '',
          linkedin: data.linkedin || '',
          facebook: data.facebook || '',
          profileImageUrl: data.profileImageUrl || defaultProfilePic,
        });
      } else {
        console.log("No data available for this user");
      }
    });
  };

  return (
    <>
      {/* Existing Navbar Component */}
      <Navbar2
        title='NanoNest'
        msg='Message'
        notification='Notification'
        button='Profile'
        menu='Menu'
      />

      {/* User Profile Section */}
      <div className="container text-center my-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <div className="row">
          <div className="col">
            {/* Display user's profile picture or default if none */}
            <img 
              src={user?.photoURL || profileData.profileImageUrl} 
              className="card-img-top rounded-circle" 
              alt="Profile" 
              style={{ width: '300px' }} 
            />
          </div>
          <div className="col d-flex flex-column justify-content-between">
            <div>
              {/* Display user's name, company name, and description */}
              <h1 style={{fontSize:'4rem'}}>{`${user?.displayName || 'User'}`}</h1>
              <h5 style={{color:'#969696'}}>{profileData.companyName || 'Company Name'}</h5>
              <h5 style={{color:'#969696', fontSize:'1rem'}} className='my-5'>
                {profileData.description || 'Description goes here'}
              </h5>
            </div>
            <div className='container'>
              {/* Links to user's email, website, LinkedIn, and Facebook */}
              <a href={`mailto:${userEmail}`} className='m-5'>{userEmail}</a>
              <a href={profileData.website} target="_blank" rel="noopener noreferrer" className='m-5'>
                Website URL
              </a>
              <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className='m-5'>
                LinkedIn Profile
              </a>
             
            </div>
          </div>
        </div>
      </div>

      <div class="card  container">
  <h5 class="card-header text-center"> List of Project</h5>
  <div class="card-body">
    <h5 class="card-title text-center">Add your project</h5>
    <p class="card-text"></p>
    <div class="d-flex justify-content-center">
  <a href="#" class="btn btn-primary">Add</a>
</div>
  </div>
</div>

      {/* Wave Image Section */}
      <div>
        <img src={wave} alt="wave image" style={{width:"100%"}} />
      </div>


    </>
  );
}

export default Profile;
