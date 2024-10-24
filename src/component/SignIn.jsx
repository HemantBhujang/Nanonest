import React from 'react';
import { useNavigate , useLocation} from 'react-router-dom';
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
import { GoogleIcon } from './CustomIcons';
import { signInWithEmail, signInWithGoogle } from './AuthService'; // Custom auth functions
import { Link as RouterLink } from 'react-router-dom';
import real_img from '../assets/real_img.png';
import { sendPasswordResetEmail } from 'firebase/auth'; // Import Firebase reset email function
import { auth } from './Firebase'; // Ensure this is correctly imported

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
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userType = queryParams.get('userType');

  const handleSignUpClick = () => {
    navigate(`/signup?userType=${userType}`);
  };

  const handleEmailSignIn = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    try {
      const user = await signInWithEmail(email, password);
      if (user) {
        // Navigate based on userType
        if (userType === 'investor') {
          navigate('/AfterLogInInvestor'); // Change this to your route for investors
        } else if (userType === 'entrepreneur') {
          navigate('/AfterLogin'); // Change this to your route for entrepreneurs
        }
      } else {
        alert('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error during sign in:', error);
      alert('Error during sign-in. Please try again.');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const user = await signInWithGoogle();
      if (user) {
        // Navigate based on userType
        if (userType === 'investor') {
          navigate('/AfterLogInInvestor'); // Change this to your route for investors
        } else if (userType === 'entrepreneur') {
          navigate('/AfterLogin'); // Change this to your route for entrepreneurs
        }
      } else {
        alert('Google sign-in failed.');
      }
    } catch (error) {
      console.error('Error during Google sign-in:', error);
      alert('Error during Google sign-in. Please try again.');
    }
  };

  const handleForgotPassword = async () => {
    const email = prompt('Please enter your email to reset password:');
    if (!email) return;

    try {
      await sendPasswordResetEmail(auth, email); // Use 'auth' instead of 'firebaseAuth'
      alert('Password reset email sent! Please check your inbox.');
    } catch (error) {
      console.error('Error sending password reset email:', error);
      alert('Error sending password reset email. Please try again.');
    }
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      {/* <h1>Sign In as {userType}</h1> */}
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${real_img})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '150%',
          backgroundPosition: 'start',
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
            <Grid item xs>
              <Link href="#" variant="body2" onClick={handleForgotPassword}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <RouterLink to="/signup" variant="body2" onClick={handleSignUpClick}>
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