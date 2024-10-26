import React, { useState } from 'react';  
import { auth } from './Firebase'; 
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, updateProfile } from "firebase/auth"; 
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import SignUp from '../assets/SignUp.png';
import Divider from '@mui/material/Divider';
import { GoogleIcon, FacebookIcon } from './CustomIcons';
import { Link as RouterLink } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar'; // For error notifications

// Copyright footer
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        NanoNest
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignUpSide() {
  const [firstName, setFirstName] = useState('');  
  const [lastName, setLastName] = useState('');  
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');  
  const [error, setError] = useState(null);  
  const [openSnackbar, setOpenSnackbar] = useState(false); // Snackbar state

  // Handle user sign up
  const handleSignUp = async (event) => {  
    event.preventDefault();
    
    // Password validation regex: Minimum 8 characters, one uppercase letter, one special character, and one number
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}$/;

    // Check if the password meets the required conditions
    if (!passwordRegex.test(password)) {
      setError('Password must contain at least 8 characters, one uppercase letter, one special character, and one number.');
      setOpenSnackbar(true); // Show error in snackbar
      return; // Stop signup process if password is invalid
    }

    try {  
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);  
      const user = userCredential.user;  
      console.log('User created:', user);  

      // Send email verification after sign-up
      await sendEmailVerification(user);
      console.log('Verification email sent to:', user.email);
      
      // Update user's profile with their first and last name
      await updateProfile(user, { displayName: `${firstName} ${lastName}` });
      
      // Clear form fields after successful sign-up
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      
      // Notify user to verify their email
      setError('A verification email has been sent. Please verify your email to complete the signup.');
      setOpenSnackbar(true);
      
    } catch (error) {  
      setError(error.message);  
      setOpenSnackbar(true); // Show error in snackbar
    }  
  };  

  // Handle Google sign in
  const handleGoogleSignIn = async () => {  
    try {
      const provider = new GoogleAuthProvider();  
      const result = await signInWithPopup(auth, provider);  
      const user = result.user;  
      console.log('User signed in with Google:', user);
    } catch (error) {
      setError(error.message);
      setOpenSnackbar(true); // Show error in snackbar
    }
  };

 

  // Handle closing of the snackbar
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${SignUp})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, backgroundColor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              autoComplete="fname"
              autoFocus
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              sx={{  
                '& .MuiOutlinedInput-root': {  
                  '&:hover fieldset': {  
                    borderColor: '#F9BC6E', // Border color on hover  
                  },  
                  '&.Mui-focused fieldset': {  
                    borderColor: '#F9BC6E', // Border color when focused  
                  },  
                },  
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              sx={{  
                '& .MuiOutlinedInput-root': {  
                  '&:hover fieldset': {  
                    borderColor: '#F9BC6E', // Border color on hover  
                  },  
                  '&.Mui-focused fieldset': {  
                    borderColor: '#F9BC6E', // Border color when focused  
                  },  
                },  
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{  
                '& .MuiOutlinedInput-root': {  
                  '&:hover fieldset': {  
                    borderColor: '#F9BC6E', // Border color on hover  
                  },  
                  '&.Mui-focused fieldset': {  
                    borderColor: '#F9BC6E', // Border color when focused  
                  },  
                },  
              }}
            />
            <TextField
              variant="outlined"
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
              sx={{  
                '& .MuiOutlinedInput-root': {  
                  '&:hover fieldset': {  
                    borderColor: '#F9BC6E', // Border color on hover  
                  },  
                  '&.Mui-focused fieldset': {  
                    borderColor: '#F9BC6E', // Border color when focused  
                  },  
                },  
              }}
            />
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSignUp} 
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: '#F9BC6E',
              }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
                <RouterLink to="/signIn" variant="body2">
                  {"Already have account ? Sign In"}
                </RouterLink>
              </Grid>
            </Grid>
            <Divider>or</Divider>
        
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Button
                fullWidth
                variant="outlined"
                onClick={handleGoogleSignIn}
                startIcon={<GoogleIcon />}
              >
                Sign Up with Google
              </Button>
              

            </Box>
            {error && <Typography color="error">{error}</Typography>}
          </Box>
        </Box>
        <Copyright />
      </Grid>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={error}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      />
    </Grid>
  );
}