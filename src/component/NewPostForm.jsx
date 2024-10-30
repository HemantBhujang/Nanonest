import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Snackbar from '@mui/material/Snackbar';
import { styled } from '@mui/system';
import { getDatabase, ref, push } from 'firebase/database';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getAuth, onAuthStateChanged } from 'firebase/auth';  // Import onAuthStateChanged

export default function NewPostForm() {
  const [postTitle, setPostTitle] = useState('');
  const [postDescription, setPostDescription] = useState('');
  const [postImage, setPostImage] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [currentUser, setCurrentUser] = useState(null); // State to hold the current user

  useEffect(() => {
    const auth = getAuth();

    // Set up an observer on the Auth object
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user); // Save user to state
        console.log('Current User ID:', user.uid); // Log the user ID
      } else {
        console.log('No user is signed in.');
        setCurrentUser(null); // Clear user from state
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []); // Empty dependency array ensures this runs once on component mount

  const handleFileChange = (e) => {
    setPostImage(e.target.files[0]);
  };
  const handlePostSubmit = async (event) => {
    event.preventDefault();
  
    if (currentUser) {
      const userId = currentUser.uid; // Get the current user's ID
  
      if (postTitle && postDescription) {
        const db = getDatabase();
        const postRef = ref(db, 'post');
        const storage = getStorage();
  
        let imageUrl = null;
  
        // Upload image if selected
        if (postImage) {
          const imageRef = storageRef(storage, `images/${postImage.name}`);
          try {
            const snapshot = await uploadBytes(imageRef, postImage);
            imageUrl = await getDownloadURL(snapshot.ref);
          } catch (error) {
            setSnackbarMessage('Error uploading image. Please try again.');
            setOpenSnackbar(true);
            return;
          }
        }
  
        const newPost = {
          title: postTitle,
          description: postDescription,
          imageUrl: imageUrl, // Store the image URL in the database
          userId: userId, // Store the user ID in the post
          createdAt: new Date().toISOString(),
        };
  
        try {
          await push(postRef, newPost);
          setSnackbarMessage('Post submitted successfully!');
          setPostTitle('');
          setPostDescription('');
          setPostImage(null);
        } catch (error) {
          setSnackbarMessage('Error submitting post. Please try again.');
        }
      } else {
        setSnackbarMessage('Please fill out all required fields.');
      }
    } else {
      setSnackbarMessage('No user is signed in. Please log in.');
    }
    setOpenSnackbar(true);
  };
  

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#F9BC6E',
    '&:hover': {
      backgroundColor: '#e1a259',
    },
    marginTop: theme.spacing(2),
    color: '#fff',
    fontWeight: 'bold',
  }));

  return (
    <Grid container component="main" sx={{ height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
      <CssBaseline />
      <Grid
        item
        xs={12}
        sm={10}
        md={6}
        component={Paper}
        elevation={6}
        square
        sx={{
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#fff',
        }}
      >
        <Avatar sx={{ m: 1, backgroundColor: '#F9BC6E' }}>
          {/* You can add an icon for the post form */}
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', color: '#333' }}>
          Create New Post
        </Typography>
        <Box component="form" noValidate onSubmit={handlePostSubmit} sx={{ mt: 3, width: '100%' }}>
          <TextField
            required
            fullWidth
            id="postTitle"
            label="Post Title"
            name="postTitle"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
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
            required
            fullWidth
            id="postDescription"
            label="Post Description"
            name="postDescription"
            multiline
            rows={4}
            value={postDescription}
            onChange={(e) => setPostDescription(e.target.value)}
            sx={{
              mt: 2,
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
            variant="contained"
            component="label"
            sx={{ mt: 2, backgroundColor: '#F9BC6E', '&:hover': { backgroundColor: '#e1a259' } }}
          >
            Upload Image
            <input type="file" hidden onChange={handleFileChange} />
          </Button>
          {postImage && <Typography sx={{ mt: 1 }}>File: {postImage.name}</Typography>}

          <StyledButton type="submit" fullWidth variant="contained">
            Submit Post
          </StyledButton>
        </Box>
      </Grid>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      />
    </Grid>
  );
}
