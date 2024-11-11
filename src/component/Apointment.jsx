import React, { useState } from 'react';
import { Box, Grid, Typography, TextField, Button, Container, Dialog, DialogContent, DialogActions } from '@mui/material';
import { database } from './Firebase';  // Import your Firebase config
import { ref, push } from 'firebase/database';

const Appointment = () => {
  const [email, setEmail] = useState('');
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save email to Firebase
    const appointmentRef = ref(database, 'Appointment');
    push(appointmentRef, { email })
      .then(() => {
        setPopupOpen(true); // Show popup on success
        setEmail(''); // Clear the email input after booking
      })
      .catch((error) => {
        console.error("Error booking appointment:", error);
      });
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

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
            <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                type="submit"
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
              >
                Book My Free Appointment
              </Button>
            </Box>
          </Grid>
          
        </Grid>
      </Container>

      {/* Popup Message */}
      <Dialog open={isPopupOpen} onClose={handleClosePopup}>
        <DialogContent>
          <Typography variant="h6" color="textPrimary">
            Appointment Booked!
          </Typography>
          <Typography variant="body2" color="textSecondary">
            You will be notified of future details to your email. Thank you!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePopup} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Appointment;
