import React, { useState } from 'react';
import { auth } from './Firebase';
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup, GoogleAuthProvider, updateProfile } from "firebase/auth";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { GoogleIcon } from './CustomIcons';
import { Link as RouterLink } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar'; // For error notifications
import SignUp from '../assets/SignUp.png';
import { getDatabase, ref, set } from "firebase/database"; // Import Realtime Database
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


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
  const [role, setRole] = useState('');
  const [error, setError] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility

const handleSignUp = async (event) => {
  event.preventDefault();

  // const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}$/;
  // const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*\d)[A-Za-z\d!@#$&*]{8,}$/;


  if (!role) {
    setError('Please select a role.');
    setOpenSnackbar(true);
    return;
  }
// Password validation regex
const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_\-+=])(?=.*\d)[A-Za-z\d!@#$%^&*()_\-+=]{8,}$/;

// Log the password for debugging
console.log('Password:', password);

  if (!passwordRegex.test(password)) {
    setError('Password must contain at least 8 characters, one uppercase letter, one special character, and one number.');
    setOpenSnackbar(true);
    return;
  }
  

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('User created:', user);

    await sendEmailVerification(user);
    await updateProfile(user, { displayName: `${firstName} ${lastName}` });

    // Initialize Realtime Database
    const db = getDatabase();
    const userRef = ref(db, 'users/' + user.uid);

    // Save user info to Realtime Database
    await set(userRef, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      role: role,
      uid: user.uid,
    });

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setRole('');

    setError('A verification email has been sent. Please verify your email to complete the signup.');
    setOpenSnackbar(true);
  } catch (error) {
    setError(error.message);
    setOpenSnackbar(true);
  }
};

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log('User signed in with Google:', result.user);
    } catch (error) {
      setError(error.message);
      setOpenSnackbar(true);
    }
  };

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
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1, width: '100%', px: 4 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoComplete="fname"
            autoFocus
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            autoComplete="lname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <Select
            fullWidth
            variant="outlined"
            margin="normal"
            id="role"
            label="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            displayEmpty
          >
            <MenuItem value="" disabled>
              Select Role
            </MenuItem>
            <MenuItem value="Entrepreneur">Entrepreneur</MenuItem>
            <MenuItem value="Investor">Investor</MenuItem>
          </Select>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: '#F9BC6E' }}
            onClick={handleSignUp}
          >
            Sign Up
          </Button>
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
          <Grid container sx={{ mt: 2 }}>
            <Grid item xs>
              <RouterLink to="/signIn" variant="body2">
                {"Already have an account? Sign In"}
              </RouterLink>
            </Grid>
          </Grid>
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