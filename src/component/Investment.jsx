import React, { useState } from 'react';
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Container,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Box,
  Fade,
  Slide,
  Snackbar,
  Alert,
} from '@mui/material';

const Investment = () => {
  const [companyName, setCompanyName] = useState('');
  const [date, setDate] = useState('');
  const [isSigned, setIsSigned] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!companyName || !date || !isSigned || !paymentMethod || !amount) {
      setError('Please fill all fields and agree to the terms.');
      return;
    }

    // Here you would send the request to your backend or Firebase
    console.log('Investment Request:', { companyName, date, isSigned, paymentMethod, amount });

    // Reset form after submission
    setCompanyName('');
    setDate('');
    setIsSigned(false);
    setPaymentMethod('');
    setAmount('');
    setError('');
    
    // Open Snackbar on successful submission
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem', padding: '2rem', borderRadius: '10px', backgroundColor: '#FFF', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
      <Fade in timeout={1000}>
        <Typography variant="h4" gutterBottom style={{ color: '#F9BC6E', textAlign: 'center' }}>
          Investment Request Form
        </Typography>
      </Fade>
      {error && <Typography color="error" style={{ textAlign: 'center' }}>{error}</Typography>}
      <Slide direction="up" in={true} timeout={1000}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Company Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <TextField
            label="Date"
            type="date"
            variant="outlined"
            fullWidth
            margin="normal"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="payment-method-label">Payment Method</InputLabel>
            <Select
              labelId="payment-method-label"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              variant="outlined"
            >
              <MenuItem value="creditCard">Credit Card</MenuItem>
              <MenuItem value="paypal">PayPal</MenuItem>
              <MenuItem value="bankTransfer">Bank Transfer</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Amount"
            variant="outlined"
            fullWidth
            margin="normal"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={isSigned}
                onChange={(e) => setIsSigned(e.target.checked)}
                color="primary"
              />
            }
            label="I agree to the terms and conditions (Digital Signature)"
          />
          <Button type="submit" variant="contained" style={{ backgroundColor: '#F9BC6E', color: '#FFF' }} fullWidth>
            Send Request
          </Button>
        </form>
      </Slide>
      
      {/* Snackbar for submission success */}
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" variant="filled" sx={{ width: '100%' }}>
          Your investment request has been submitted successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Investment;
