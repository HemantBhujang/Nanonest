import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar2 from './Navbar2';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Divider,
} from '@mui/material';

const InvestorDashboard = () => {
  const navigate = useNavigate();

  // Dummy data for investments
  const investments = [
    {
      id: '1',
      entrepreneurName: 'John Doe',
      projectTitle: 'Solar Power for Rural Areas',
      amount: 5000,
      status: 'Active',
      expectedROI: 15,
      date: '2023-05-15',
      entrepreneurId: 'user123',
    },
    {
      id: '2',
      entrepreneurName: 'Alice Johnson',
      projectTitle: 'Organic Farming Initiative',
      amount: 8000,
      status: 'Pending',
      expectedROI: 10,
      date: '2023-07-20',
      entrepreneurId: 'user456',
    },
    {
      id: '3',
      entrepreneurName: 'Michael Brown',
      projectTitle: 'Waste Recycling Startup',
      amount: 12000,
      status: 'Completed',
      expectedROI: 20,
      date: '2022-09-10',
      entrepreneurId: 'user789',
    },
    {
      id: '4',
      entrepreneurName: 'Sarah Williams',
      projectTitle: 'Tech Education for Youth',
      amount: 3000,
      status: 'Active',
      expectedROI: 18,
      date: '2024-02-05',
      entrepreneurId: 'user101',
    },
    {
      id: '5',
      entrepreneurName: 'Robert King',
      projectTitle: 'Eco-Friendly Packaging',
      amount: 4500,
      status: 'Pending',
      expectedROI: 12,
      date: '2023-08-12',
      entrepreneurId: 'user202',
    },
  ];

  return (
    <>
      <Navbar2 title="NanoNest" msg="Messages" notification="Notifications" button="Profile" />

      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          My Investments Dashboard
        </Typography>
        
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Track and manage your investments in various entrepreneurs.
        </Typography>

        <Grid container spacing={4}>
          {investments.map((investment) => (
            <Grid item xs={12} sm={6} md={4} key={investment.id}>
              <Card sx={{ boxShadow: 3, borderRadius: 4 }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {investment.entrepreneurName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {investment.projectTitle}
                  </Typography>

                  <Divider sx={{ my: 1 }} />

                  <Typography variant="body1">
                    Invested Amount: ${investment.amount}
                  </Typography>

                  <Box sx={{ mt: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Chip
                      label={investment.status}
                      color={
                        investment.status === "Active"
                          ? "success"
                          : investment.status === "Completed"
                          ? "primary"
                          : "default"
                      }
                    />
                  </Box>

                  <Divider sx={{ my: 1 }} />

                  <Typography variant="body2" color="text.secondary">
                    Expected ROI: {investment.expectedROI}%
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Investment Date: {investment.date}
                  </Typography>

                  <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={() => navigate(`/investment/${investment.id}`)}
                    >
                      View Details
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      fullWidth
                      onClick={() => navigate(`/MessageSection?user=${investment.entrepreneurId}`)}
                    >
                      Message
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default InvestorDashboard;
