import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar2 from './Navbar2';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Divider,
  Grid,
} from '@mui/material';

const InvestmentDetail = () => {
  const { id } = useParams(); // Get the investment ID from the URL
  const navigate = useNavigate();

  // Sample investment data (replace this with a fetch from a database)
  const investmentDetails = {
    id: '1',
    entrepreneurName: 'John Doe',
    projectTitle: 'Solar Power for Rural Areas',
    projectDescription:
      'This project aims to provide sustainable solar energy solutions to rural communities. The funds raised will be used for installing solar panels, creating jobs, and empowering communities through green energy.',
    amountInvested: 5000,
    expectedROI: 15,
    dateOfInvestment: '2023-05-15',
    projectImages: [
      'D:\DIEMS\NanoNest\Nanonest\src\Images\Solar_Power.jpg', // Placeholder images
      'D:\DIEMS\NanoNest\Nanonest\src\Images\Solar_Power.jpg',
    ],
    entrepreneurProfile: {
      bio: 'John Doe is a passionate environmentalist with over 10 years of experience in renewable energy.',
      contact: 'johndoe@example.com',
      location: 'California, USA',
    },
    status: 'Active',
    updates: [
      {
        date: '2023-06-10',
        message: 'Solar panels installed in 3 villages. Energy supply active and serving over 100 households.',
      },
      {
        date: '2023-08-20',
        message: 'Training sessions conducted for locals on solar panel maintenance.',
      },
    ],
  };

  return (
    <>
      <Navbar2 title="NanoNest" msg="Messages" notification="Notifications" button="Profile" />

      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          {investmentDetails.projectTitle}
        </Typography>
        
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          by {investmentDetails.entrepreneurName}
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={investmentDetails.projectImages[0]}
                alt="Project Image"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Project Description
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {investmentDetails.projectDescription}
                </Typography>
                <Divider sx={{ my: 2 }} />

                <Typography variant="h6" gutterBottom>
                  Entrepreneur Profile
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {investmentDetails.entrepreneurProfile.bio}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Location: {investmentDetails.entrepreneurProfile.location}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Contact: {investmentDetails.entrepreneurProfile.contact}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Investment Summary
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Amount Invested: ${investmentDetails.amountInvested}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Expected ROI: {investmentDetails.expectedROI}%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Date of Investment: {investmentDetails.dateOfInvestment}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Status: {investmentDetails.status}
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="h6" gutterBottom>
                  Project Updates
                </Typography>
                {investmentDetails.updates.map((update, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Typography variant="body2" fontWeight="bold">
                      {update.date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {update.message}
                    </Typography>
                  </Box>
                ))}

                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                  onClick={() => navigate(`/MessageSection?user=${investmentDetails.entrepreneurName}`)}
                >
                  Message {investmentDetails.entrepreneurName}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default InvestmentDetail;
