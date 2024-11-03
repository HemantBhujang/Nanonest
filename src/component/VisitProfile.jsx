import React, { useEffect, useState } from 'react';
import { database } from './Firebase'; // Firebase setup
import { ref, get, child } from 'firebase/database';
import { useParams } from 'react-router-dom';
import Navbar2 from './Navbar2';
import { Box, Grid, Typography, Button, Card, CardContent, CardMedia, Stack } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const VisitProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const [posts, setPosts] = useState([]); // State to hold posts
  const { id } = useParams(); // Get profile ID from route

  useEffect(() => {
    const fetchProfileData = async () => {
      const profileRef = ref(database, `/entrepreneurs/${id}`);
      const snapshot = await get(profileRef);
      
      if (snapshot.exists()) {
        const data = snapshot.val();
        const profileImageUrl = `https://firebasestorage.googleapis.com/v0/b/nanonest-eb325.appspot.com/o/profileImages%2F${id}?alt=media&token=YOUR_TOKEN_HERE`; // Replace YOUR_TOKEN_HERE if necessary
        setProfileData({ ...data, profileImageUrl });
      } else {
        console.log('No profile data available');
      }
    };

    const fetchPostsData = async () => {
      const postsRef = ref(database, `/posts`); // Assuming posts are stored under 'posts'
      const snapshot = await get(postsRef);

      if (snapshot.exists()) {
        const data = snapshot.val();
        const formattedPosts = Object.keys(data).map(key => ({
          id: key,
          ...data[key],
        }));
        setPosts(formattedPosts);
      } else {
        console.log('No posts available');
      }
    };

    fetchProfileData();
    fetchPostsData();
  }, [id]);

  if (!profileData) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Navbar2 title="NanoNest" msg="Message" notification="Notification" button="Profile" />
      
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 4 }}>
        <Card sx={{ maxWidth: '800px', boxShadow: 3, borderRadius: 4 }}>
          <Grid container spacing={3} alignItems="center" justifyContent="center" padding={2}>
            <Grid item xs={12} md={5}>
              <CardMedia
                component="img"
                image={profileData.profileImageUrl || '/static/images/default-profile.jpg'}
                alt="Profile Picture"
                sx={{ height: 280, borderRadius: 4, objectFit: 'cover' }}
              />
            </Grid>
            <Grid item xs={12} md={7}>
              <CardContent>
                <Typography variant="h3" fontWeight="bold" gutterBottom color="text.primary">
                  {profileData.name || 'Entrepreneur Name'}
                </Typography>
                <Typography variant="h5" color="text.secondary">
                  {profileData.companyName || 'Company Name'}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph mt={2}>
                  {profileData.description || 'Company description goes here.'}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {profileData.contact || 'Contact information goes here.'}
                </Typography>
                <Typography variant="body2" color="text.secondary" mt={1}>
                  {profileData.website ? (
                    <a href={profileData.website} target="_blank" rel="noopener noreferrer">
                      {profileData.website}
                    </a>
                  ) : (
                    'Website not available'
                  )}
                </Typography>

                <Stack direction="row" spacing={2} mt={4} justifyContent="center">
                  <Button variant="outlined" color="warning" size="large">Add to List</Button>
                  <Button variant="outlined" color="warning" size="large">Message</Button>
                  <Button variant="outlined" color="warning" size="large">Invest</Button>
                </Stack>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Box>

      {/* Posts Section */}
      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Posts by {profileData.name}
        </Typography>
        {posts.length > 0 ? (
          posts.map((post) => (
            <Card key={post.id} sx={{ marginBottom: 2, boxShadow: 2 }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {post.description}
                </Typography>
                {post.image && (
                  <CardMedia
                    component="img"
                    image={post.image}
                    alt={post.title}
                    sx={{ height: 140, borderRadius: 1, objectFit: 'cover' }} // Ensures the image is properly sized
                  />
                )}
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography>No posts available</Typography>
        )}
      </Box>
    </>
  );
};

export default VisitProfile;
