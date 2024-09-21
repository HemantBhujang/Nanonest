import React from 'react';
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
import LogIn from '../assets/LogIn.jpg';
import Divider from '@mui/material/Divider';
import { GoogleIcon, FacebookIcon, SitemarkIcon } from './CustomIcons';

export default function SignInSide({ toggleForm }) {
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${LogIn})`,
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
        <Box component="form" noValidate sx={{ mt: 1 }}>  
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
          borderColor: '#F9BC6E', // Border color on hover  
        },  
        '&.Mui-focused fieldset': {  
          borderColor: '#F9BC6E', // Border color when focused  
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
          borderColor: '#F9BC6E', // Border color on hover  
        },  
        '&.Mui-focused fieldset': {  
          borderColor: '#F9BC6E', // Border color when focused  
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
              <Link href="#" variant="body2" onClick={toggleForm}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>

        <Divider>or</Divider>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              onClick={() => alert('Sign in with Google')}
              startIcon={<GoogleIcon />}
            >
              Sign in with Google
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              onClick={() => alert('Sign in with Facebook')}
              startIcon={<FacebookIcon />}
            >
              Sign in with Facebook
            </Button>
          </Box>
      </Grid>
    </Grid>
  );
}
