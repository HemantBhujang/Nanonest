import React from 'react';
import { Box, Container, Grid, Typography, IconButton, Link } from '@mui/material';
import { Email, Phone, LocationOn, Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#F9BC6E', color: 'black', py: 4, mt: 5 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Us Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              NanoNest connects micro and nano entrepreneurs with investors to fuel their growth. Our mission is to provide accessible funding to help these businesses thrive.
            </Typography>
          </Grid>

          {/* Contact Us Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              <Email sx={{ verticalAlign: 'middle', mr: 1 }} /> Email: contact@nanonest.com
            </Typography>
            <Typography variant="body2">
              <Phone sx={{ verticalAlign: 'middle', mr: 1 }} /> Phone: +91 12345 67890
            </Typography>
            <Typography variant="body2">
              <LocationOn sx={{ verticalAlign: 'middle', mr: 1 }} /> Address: DIEMS, AURANGABAD.
            </Typography>
          </Grid>

          {/* Follow Us Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton component={Link} href="https://www.facebook.com" target="_blank" sx={{ color: 'black' }}>
                <Facebook />
              </IconButton>
              <IconButton component={Link} href="https://www.twitter.com" target="_blank" sx={{ color: 'black' }}>
                <Twitter />
              </IconButton>
              <IconButton component={Link} href="https://www.linkedin.com" target="_blank" sx={{ color: 'black' }}>
                <LinkedIn />
              </IconButton>
              <IconButton component={Link} href="https://www.instagram.com" target="_blank" sx={{ color: 'black' }}>
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box textAlign="center" mt={3} pt={3} borderTop="1px solid rgba(0, 0, 0, 0.2)">
          <Typography variant="body2" color="textSecondary">
            © {new Date().getFullYear()} NanoNest. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
