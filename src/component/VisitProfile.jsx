import React, { useEffect, useState } from 'react';
import { database } from './Firebase'; // Firebase setup
import { ref, get } from 'firebase/database';
import { useParams } from 'react-router-dom';
import Navbar2 from './Navbar2';
import { Box, Grid, Typography, Button, Card, CardContent, CardMedia, Stack } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const VisitProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const { id } = useParams(); // Get profile ID from route

  useEffect(() => {
    const fetchProfileData = async () => {
      const profileRef = ref(database, `/entrepreneurs/${id}`);
      const snapshot = await get(profileRef);
      
      if (snapshot.exists()) {
        setProfileData(snapshot.val());
      } else {
        console.log('No profile data available');
      }
    };

    fetchProfileData();
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
                image={profileData.profilePic || '/static/images/default-profile.jpg'} // Use profileData.profileImage or default image
                alt="Profile Picture"
                sx={{ height: 280, borderRadius: 4, objectFit: 'cover' }} // Ensures the image is properly sized
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
                  {profileData.description || 'Company description goes here. Describe the business, its services, and mission.'}
                </Typography>

                {/* Additional Profile Information */}
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
    </>
  );
};

export default VisitProfile;
