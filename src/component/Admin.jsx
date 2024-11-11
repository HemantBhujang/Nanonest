import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Container, Dialog, DialogContent, DialogActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [isErrorPopupOpen, setErrorPopupOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple authentication check; replace with real backend logic
    if (userId === 'admin' && password === 'admin123') {
      navigate('/email');  // Redirect to Email component
    } else {
      setErrorPopupOpen(true);  // Show error popup if credentials are invalid
    }
  };

  const handleCloseErrorPopup = () => {
    setErrorPopupOpen(false);
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: 4,
          borderRadius: 2,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Typography component="h1" variant="h5" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
          Admin Login
        </Typography>

        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="userId"
            label="User ID"
            name="userId"
            autoComplete="user-id"
            autoFocus
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: '#1976d2',
              color: 'white',
              '&:hover': { backgroundColor: '#115293' },
            }}
          >
            Sign In
          </Button>
        </Box>
      </Box>

      {/* Error Popup */}
      <Dialog open={isErrorPopupOpen} onClose={handleCloseErrorPopup}>
        <DialogContent>
          <Typography variant="h6" color="textPrimary">
            Invalid Credentials
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Please check your User ID and Password and try again.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseErrorPopup} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AdminLogin;
