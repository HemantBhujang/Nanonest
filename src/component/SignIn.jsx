import React, { useState } from 'react';
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
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { GoogleIcon } from './CustomIcons';
import { signInWithEmail, signInWithGoogle } from './AuthService';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link as RouterLink } from 'react-router-dom';
import real_img from '../assets/real_img.png';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth ,database } from './Firebase';
import { ref, get } from "firebase/database";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import logo from "../Images/Logo_Login.png"


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
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility

  const handleEmailSignIn = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
  
    try {
      // Step 1: Sign in with email and password
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // Step 2: Retrieve the user's role from the database
      const roleRef = ref(database, `users/${user.uid}/role`);
      const roleSnapshot = await get(roleRef);
  
      if (roleSnapshot.exists()) {
        const userRole = roleSnapshot.val();
  
        // Step 3: Check if the role matches the selected role
        if (userRole === role) {
          if (userRole === 'Entrepreneur') {
            navigate('/AfterLogin');  // Navigate to Entrepreneur page
          } else if (userRole === 'Investor') {
            navigate('/AfterLogInInvestor');  // Navigate to Investor page
          }
        } else {
          alert('Role mismatch. Please select the correct role.');
        }
      } else {
        alert('Role not found for this user.');
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
      alert('Error during sign-in. Please try again.');
    }
  };
  
  
  const handleGoogleSignIn = async () => {
    try {
      const user = await signInWithGoogle();
      if (user) {
        navigate('/AfterLogin');
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
      await sendPasswordResetEmail(auth, email);
      alert('Password reset email sent! Please check your inbox.');
    } catch (error) {
      console.error('Error sending password reset email:', error);
      alert('Error sending password reset email. Please try again.');
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
          backgroundImage: `url(${logo})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '120%',
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
        type={passwordVisible ? 'text' : 'password'} // Toggle between text and password
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
        value={password} // Bind the password state
        onChange={(e) => setPassword(e.target.value)} // Update password state
        InputProps={{
          endAdornment: (
            <Button onClick={() => setPasswordVisible(!passwordVisible)} style={{ padding: 0 }}>
              {passwordVisible ? <VisibilityOff /> : <Visibility />}
            </Button>
          ),
        }}
      />
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel id="role-label">Role</InputLabel>
            <Select
              labelId="role-label"
              id="role"
              value={role}
              label="Role"
              onChange={(e) => setRole(e.target.value)}
            >
              <MenuItem value="Entrepreneur">Entrepreneur</MenuItem>
              <MenuItem value="Investor">Investor</MenuItem>
            </Select>
          </FormControl>
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