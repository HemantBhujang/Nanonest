import React, { useState, useEffect } from 'react';
import { auth, database } from './Firebase'; // Import Firebase auth and database
import Navbar2 from './Navbar2';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { ref, onValue } from 'firebase/database'; // Import methods for Firebase Realtime Database
import defaultProfilePic from '../assets/ProfilePic.png'; // Adjust the path as necessary
import wave from '../assets/Wave.jpg';
import { Card, CardContent, CardMedia, Typography, IconButton, Grid } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';

const Profile = () => {
  const [user, setUser] = useState(null); // State to hold the current user
  const [userEmail, setUserEmail] = useState(null); // State to hold user email
  const [profileData, setProfileData] = useState({
    companyName: '',
    description: '',
    website: '',
    linkedin: '',
    facebook: '',
    profileImageUrl: '',
  });
  const [posts, setPosts] = useState([]); // State to hold user posts

  // First useEffect to monitor authentication state and fetch email
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email); // Set the email state when user is authenticated
        fetchUserProfileData(user.displayName || user.email); // Fetch profile data based on displayName or email
        fetchUserPosts(user.uid); // Fetch user posts by user ID
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
    const formattedKey = userNameOrEmail.replace(/[.#$[\]]/g, '').replace(/\s+/g, ''); // Remove unsupported characters
    const userRef = ref(database, `entrepreneurs/${formattedKey}`); // Path in Realtime DB based on formatted name or email

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
          twitter: data.twitter || '',
          profileImageUrl: data.profileImageUrl || defaultProfilePic,
        });
      } else {
        console.log("No data available for this user");
      }
    });
  };

  // Function to fetch user posts
  const fetchUserPosts = (userId) => {
    const postsRef = ref(database, 'post'); // Reference to the posts in your database

    onValue(postsRef, (snapshot) => {
      const fetchedPosts = [];
      if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
          const postData = childSnapshot.val();
          // Check if the userId of the post matches the current user's ID
          if (postData.userId === userId) {
            fetchedPosts.push({
              title: postData.title,
              content: postData.description,
              image: postData.imageUrl || defaultProfilePic, // Ensure an image is always available
            });
          }
        });
        setPosts(fetchedPosts); // Update the state with fetched posts
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
              className="card-img-top" 
              alt="Profile" 
              style={{ width: '300px', height: '300px', borderRadius: '100%' }} 
            />
          </div>
          <div className="col d-flex flex-column justify-content-between">
            <div>
              {/* Display user's name, company name, and description */}
              <h1 style={{ fontSize: '4rem' }}>{user?.displayName || 'User'}</h1>
              <h5 style={{ color: '#969696' }}>{profileData.companyName || 'Company Name'}</h5>
              <h5 style={{ color: '#969696', fontSize: '1rem' }} className='my-5'>
                {profileData.description || 'Description goes here'}
              </h5>
            </div>
            <div className='container'>
              {/* Links to user's email, website, LinkedIn, and Facebook */}
              <a href={`mailto:${userEmail}`} className='m-5'>{userEmail}</a>
              <a href={profileData.website} target="_blank" rel="noopener noreferrer" className='m-5'>
              {profileData.website}
              </a>
              <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className='m-5'>
              {profileData.linkedin}
              </a>
              <a href={profileData.twitter} target="_blank" rel="noopener noreferrer" className='m-5'>
              {profileData.twitter}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="card container">
        <h5 className="card-header text-center">List of Projects</h5>
        <div className="card-body">
          <h5 className="card-title text-center">Add your project</h5>
          <div className="d-flex justify-content-center">
            <a href="NewPostForm" className="btn btn-primary">Add</a>
          </div>
        </div>
      </div>

      {/* Wave Image Section */}
      <div>
        <img src={wave} alt="wave image" style={{ width: "100%" }} />
        <h1 style={{ textAlign: 'center' }}>View your posts!!</h1>
      </div>

      {/* Posts Section */}
      <div className="container my-5">
        <Grid container spacing={3}>
          {posts.map((post, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ maxWidth: '100%', margin: 'auto', borderRadius: '15px', boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={post.image}
                  alt={post.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.content}
                  </Typography>
                </CardContent>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 16px 16px' }}>
                  <IconButton aria-label="like">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="comment">
                    <CommentIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Profile;
