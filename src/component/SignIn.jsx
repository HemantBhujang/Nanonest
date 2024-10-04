import React from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { GoogleIcon, FacebookIcon } from './CustomIcons';
import { signInWithEmail, signInWithGoogle } from './AuthService'; // Custom auth functions
import { Link as RouterLink } from 'react-router-dom';
import Profile from './Profile';

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

export default function SignInSide() {
  const navigate = useNavigate();

  // Handle email/password sign-in
  const handleEmailSignIn = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    try {
      const user = await signInWithEmail(email, password);
      if (user) {
        navigate('/AfterLogin'); // Redirect to Home.jsx on success
      } else {
        alert('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error during sign in:', error);
      alert('Error during sign-in. Please try again.');
    }
  };

  // Handle Google sign-in
  const handleGoogleSignIn = async () => {
    try {
      const user = await signInWithGoogle();
      if (user) {
        navigate('/AfterLogin'); // Redirect to Home.jsx on success
      } else {
        alert('Google sign-in failed.');
      }
    } catch (error) {
      console.error('Error during Google sign-in:', error);
      alert('Error during Google sign-in. Please try again.');
    }
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
          backgroundImage: `url(../assets/LogIn.jpg)`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
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
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          px: 4,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" noValidate onSubmit={handleEmailSignIn} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: '#F9BC6E',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#F9BC6E',
                },
              },
            }}
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
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: '#F9BC6E',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#F9BC6E',
                },
              },
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: '#F9BC6E',
            }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <RouterLink to="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </RouterLink>
            </Grid>
          </Grid>
        </Box>

        <Divider>or</Divider>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Button
            fullWidth
            variant="outlined"
            onClick={handleGoogleSignIn}
            startIcon={<GoogleIcon />}
          >
            Sign in with Google
          </Button>
        </Box>

        <Box mt={5}>
          <Copyright />
        </Box>
      </Grid>
    </Grid>
  );
}
