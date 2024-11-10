import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
} from '@mui/material';
import techWave from '../Images/techWave.png';
import greenWorld from '../Images/GreenWorld.jpeg';
import finSecure from '../Images/FinSecure.jpg';
import Footer from './Footer';

const companies = [
  {
    name: 'TechWave Solutions',
    agent: 'John Doe',
    image: techWave,
  },
  {
    name: 'GreenWorld Innovations',
    agent: 'Alice Smith',
    image: greenWorld,
  },
  {
    name: 'FinSecure Advisors',
    agent: 'Michael Johnson',
    image: finSecure,
  },
  // Add more companies as needed
];

const Industry = () => {
  return (
    <>
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Typography
        variant="h2"
        align="center"
        gutterBottom
        style={{ color: '#F9BC6E', textShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)' }}
      >
        Industry Partnerships
      </Typography>
      <Typography
        variant="h6"
        align="center"
        style={{ color: '#424242', marginBottom: '40px' }}
      >
        Explore our network of companies and their dedicated investor agents.
      </Typography>

      <Grid container spacing={4}>
        {companies.map((company, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              style={{
                borderRadius: '15px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                overflow: 'hidden',
                maxHeight: '100%', // Fit within available space
              }}
              className="hover-card"
            >
              <CardMedia
                component="img"
                height="200"
                image={company.image}
                alt={`${company.name} logo`}
                style={{
                  transition: 'transform 0.4s ease-in-out',
                  borderTopLeftRadius: '15px',
                  borderTopRightRadius: '15px',
                  objectFit: 'cover',
                  width: '100%', // Ensure full width on all devices
                  height: 'auto',
                }}
                className="hover-image"
              />
              <CardContent style={{ backgroundColor: '#FFFBEA', padding: '20px' }}>
                <Typography
                  variant="h5"
                  component="div"
                  style={{ color: '#F9BC6E', fontWeight: 'bold', textAlign: 'center' }}
                >
                  {company.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{ color: '#424242', textAlign: 'center', marginTop: '8px' }}
                >
                  Investor Agent: {company.agent}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Inline CSS for Hover Effects */}
      <style>
        {`
          .hover-card:hover {
            transform: scale(1.05); /* Scale card on hover */
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3); /* Add a stronger shadow */
          }
          .hover-image {
            transition: transform 0.4s ease-in-out;
          }
          .hover-card:hover .hover-image {
            transform: scale(1.1); /* Zoom in image slightly more on hover */
          }
        `}
      </style>
    </Container>
    <Footer/>
    </>
  );
};

export default Industry;
