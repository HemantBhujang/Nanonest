import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Avatar } from '@mui/material';
import teamImage from '../Images/teamImage.webp'
import sakshi from '../assets/Sakshi.jpg'
import Footer from './Footer'

const AboutUs = () => {
  return (
    <>
      <Box sx={{ padding: 4, textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom fontWeight="bold" color="primary">
          About NanoNest
        </Typography>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          Empowering the Future of Entrepreneurship
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          NanoNest is a groundbreaking platform dedicated to connecting micro and nano-entrepreneurs with the resources, mentorship, and funding they need to thrive. Our mission is to empower entrepreneurs from diverse backgrounds to scale their businesses, drive innovation, and create a positive impact on communities. Whether you're looking to raise capital, expand your network, or find skilled mentors, NanoNest is here to support your entrepreneurial journey.
        </Typography>
        
        <img src={teamImage} alt="Our Team" style={{ width: '80%', borderRadius: '10px', marginTop: '20px' }} />
      </Box>

      <Box sx={{ padding: 4, backgroundColor: '#F9BC6E', borderRadius: '8px' }}>
        <Typography variant="h4" color="white" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" color="white" paragraph>
          We believe in a world where anyone with a vision can make it a reality. NanoNest was created to break down barriers to entrepreneurship by providing equal access to resources and funding for aspiring business owners, no matter their background. Our platform bridges the gap between entrepreneurs and investors, allowing micro and nano enterprises to grow sustainably.
        </Typography>
      </Box>

      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          How NanoNest Works
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card sx={{ boxShadow: 2 }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  1. Connect
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Entrepreneurs can create a profile, showcase their projects, and connect with potential investors and mentors.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ boxShadow: 2 }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  2. Fundraise
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Access funding opportunities through crowdfunding, investment partnerships, or grants to bring your ideas to life.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ boxShadow: 2 }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  3. Grow
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Gain valuable insights and mentorship from industry experts, helping you scale your business effectively.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ padding: 4, textAlign: 'center' }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Meet Our Team
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Our passionate team of professionals is dedicated to supporting entrepreneurs in reaching their potential. With backgrounds in finance, technology, and community building, we are here to guide you every step of the way.
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Card sx={{ boxShadow: 2, textAlign: 'center' }}>
              <CardContent>
                <Avatar src="/path/to/avatar1.jpg" sx={{ width: 100, height: 100, margin: 'auto' }} />
                <Typography variant="h6" fontWeight="bold" mt={2}>
                  Hemant Bhujang
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  CEO & Founder
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ boxShadow: 2, textAlign: 'center' }}>
              <CardContent>
                <Avatar src="/path/to/avatar2.jpg" sx={{ width: 100, height: 100, margin: 'auto' }} />
                <Typography variant="h6" fontWeight="bold" mt={2}>
                  Sakshi Kakde
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  CTO & Co-Founder
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ boxShadow: 2, textAlign: 'center' }}>
              <CardContent>
                <Avatar src="/path/to/avatar2.jpg" sx={{ width: 100, height: 100, margin: 'auto' }} />
                <Typography variant="h6" fontWeight="bold" mt={2}>
                  Sneha Sonwane
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Project Manager & UI/UX
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Add more team members as needed */}
        </Grid>
      </Box>
      <Footer/>
    </>
  );
};

export default AboutUs;
