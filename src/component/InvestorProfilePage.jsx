import React, { useEffect, useState } from 'react';
import { database } from './Firebase'; // Firebase setup
import { ref, get, child } from 'firebase/database';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Navbar2 from './Navbar2';
import { Box, Grid, Typography, Button, Card, CardContent, CardMedia, IconButton, Stack } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';

const InvestorProfilePage = () => {
  const navigate = useNavigate();
  const [investorData, setInvestorData] = useState(null);
  const [posts, setPosts] = useState([]);
  const { id } = useParams();

  const handleMessageClick = () => {
    navigate(`/message/${id}`);
  };

  useEffect(() => {
    const fetchInvestorData = async () => {
      const investorRef = ref(database, `/investors/${id}`);
      const snapshot = await get(investorRef);
      
      if (snapshot.exists()) {
        const data = snapshot.val();
        const profileImageUrl = `https://firebasestorage.googleapis.com/v0/b/nanonest-eb325.appspot.com/o/profileImages%2F${id}?alt=media&token=YOUR_TOKEN_HERE`;
        setInvestorData({ ...data, profileImageUrl });
      } else {
        console.log('No investor data available');
      }
    };

    const fetchPostsData = async () => {
      const postsRef = ref(database, `/post`);
      const snapshot = await get(postsRef);

      if (snapshot.exists()) {
        const data = snapshot.val();
        const filteredPosts = Object.keys(data)
          .map(key => ({
            id: key,
            ...data[key],
          }))
          .filter(post => post.userId === id);

        setPosts(filteredPosts);
      } else {
        console.log('No posts available');
      }
    };

    fetchInvestorData();
    fetchPostsData();
  }, [id]);

  if (!investorData) {
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
                image={investorData.profileImageUrl || '/static/images/default-profile.jpg'}
                alt="Profile Picture"
                sx={{ height: 280, borderRadius: 4, objectFit: 'cover' }}
              />
            </Grid>
            <Grid item xs={12} md={7}>
              <CardContent>
                <Typography variant="h3" fontWeight="bold" gutterBottom color="text.primary">
                  {investorData.name || 'Investor Name'}
                </Typography>
                <Typography variant="h5" color="text.secondary">
                  {investorData.companyName || 'Company Name'}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph mt={2}>
                  {investorData.description || 'Company description goes here.'}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {investorData.email || 'Contact information goes here.'}
                </Typography>
                <Typography variant="body2" color="text.secondary" mt={1}>
                  {investorData.website ? (
                    <a href={investorData.website} target="_blank" rel="noopener noreferrer">
                      {investorData.website}
                    </a>
                  ) : (
                    'Website not available'
                  )}
                </Typography>

                <Stack direction="row" spacing={2} mt={4} justifyContent="center">
                  <Button variant="outlined" color="warning" size="large">follow</Button>
                  <Button onClick={handleMessageClick} variant="outlined" color="warning" size="large">Message</Button>
                  
                </Stack>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Box>

     
      
    </>
  );
};

export default InvestorProfilePage;
