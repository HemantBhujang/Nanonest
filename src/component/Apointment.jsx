import React from 'react';
import { Box, Grid, Typography, TextField, Button, Container } from '@mui/material';

const Appointment = () => {
  return (
    <Box sx={{ backgroundColor: '#F9BC6E', color: 'white', height: '300px', width: '100%' }}>
      <Container>
        <Grid container spacing={4} alignItems="center" justifyContent="space-between" sx={{ height: '100%' }}>
          
          {/* Title Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'left', marginY: 3 }}>
              Book A Free <br />Digital Marketing Consultation
            </Typography>
          </Grid>
          
          {/* Input and Button Section */}
          <Grid item xs={12} md={6}>
            <Box component="form" noValidate autoComplete="off">
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Enter your email"
                sx={{
                  backgroundColor: 'white',
                  borderRadius: 1,
                  marginBottom: 2,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#F9BC6E' },
                    '&:hover fieldset': { borderColor: 'white' },
                  },
                }}
              />
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: 'white',
                  color: '#F9BC6E',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: '#f2f2f2',
                  },
                }}
                onClick={() => alert("Appointment Booked")}
              >
                Book My Free Appointment
              </Button>
            </Box>
          </Grid>
          
        </Grid>
      </Container>
    </Box>
  );
};

export default Appointment;
