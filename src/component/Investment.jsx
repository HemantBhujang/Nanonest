import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Grid, MenuItem, InputAdornment, FormControl, InputLabel, Select, Snackbar, Alert } from '@mui/material';

const Investment = () => {
  const [formData, setFormData] = useState({
    amount: '',
    purpose: '',
    duration: '',
    paymentMethod: '',
    additionalInfo: '',
  });

  const [notification, setNotification] = useState({ open: false, message: '' });

  const paymentMethods = [
    { label: 'Bank Transfer', value: 'bank' },
    { label: 'Online Payment (Credit/Debit Card)', value: 'card' },
    { label: 'UPI', value: 'upi' },
    { label: 'Cryptocurrency', value: 'crypto' },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add logic to handle form submission, e.g., send data to Firebase
    console.log(formData);

    // Show a notification after submission
    setNotification({
      open: true,
      message: 'Funding request submitted successfully!',
    });

    // Reset form data (optional)
    setFormData({
      amount: '',
      purpose: '',
      duration: '',
      paymentMethod: '',
      additionalInfo: '',
    });
  };

  const handleCloseNotification = () => {
    setNotification({ open: false, message: '' });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600, mx: 'auto', p: 3, boxShadow: 3, borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ color: '#F9BC6E' }}>
        Funding Request Form
      </Typography>
      
      <Grid container spacing={2}>
        {/* Funding Amount */}
        <Grid item xs={12}>
          <TextField
            label="Funding Amount"
            variant="outlined"
            fullWidth
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
            type="number"
            InputProps={{
              startAdornment: <InputAdornment position="start">₹</InputAdornment>,
            }}
          />
        </Grid>

        {/* Purpose of Funding */}
        <Grid item xs={12}>
          <TextField
            label="Purpose of Funding"
            variant="outlined"
            fullWidth
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            required
            multiline
            rows={3}
          />
        </Grid>

        {/* Duration for Repayment */}
        <Grid item xs={12}>
          <TextField
            label="Duration for Repayment (in months)"
            variant="outlined"
            fullWidth
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
            type="number"
          />
        </Grid>

        {/* Payment Method Selection */}
        <Grid item xs={12}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Payment Method</InputLabel>
            <Select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              label="Payment Method"
              required
            >
              {paymentMethods.map((method) => (
                <MenuItem key={method.value} value={method.value}>
                  {method.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Additional Information */}
        <Grid item xs={12}>
          <TextField
            label="Additional Information"
            variant="outlined"
            fullWidth
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            multiline
            rows={3}
            placeholder="Add any other information about the funding request."
          />
        </Grid>
      </Grid>

      {/* Submit Button */}
      <Box textAlign="center" mt={3}>
        <Button variant="contained" sx={{ backgroundColor: '#F9BC6E', color: 'black' }} type="submit" size="large">
          Submit Funding Request
        </Button>
      </Box>

      {/* Notification Snackbar */}
      <Snackbar
        open={notification.open}
        autoHideDuration={4000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseNotification} severity="success" sx={{ width: '100%' }}>
          {notification.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Investment;
