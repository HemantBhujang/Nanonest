import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { database } from './Firebase'; // Assuming Firebase setup is already done
import { ref, get, child } from 'firebase/database';
import Navbar2 from './Navbar2';
import Footer from './Footer';
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
} from '@mui/material';

const InvestorPage = () => {
  const navigate = useNavigate();
  const [entrepreneurs, setEntrepreneurs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEntrepreneurs = async () => {
      const dbRef = ref(database);
      const snapshot = await get(child(dbRef, `/entrepreneurs`));

      if (snapshot.exists()) {
        const data = snapshot.val();
        const formattedEntrepreneurs = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setEntrepreneurs(formattedEntrepreneurs);
      } else {
        console.log('No entrepreneurs found');
      }
      setLoading(false);
    };

    fetchEntrepreneurs();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Navbar2 title="NanoNest" msg="Messages" notification="Notifications" button="Profile" />

      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Discover Entrepreneurs
        </Typography>

        <Grid container spacing={4}>
          {entrepreneurs.map((entrepreneur) => (
            <Grid item xs={12} sm={6} md={4} key={entrepreneur.id}>
              <Card sx={{ boxShadow: 3, borderRadius: 4 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={entrepreneur.profileImageUrl || '/static/images/default-profile.jpg'}
                  alt={entrepreneur.name}
                />
                <CardContent>
                  <Typography variant="h5" fontWeight="bold">
                    {entrepreneur.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {entrepreneur.companyName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 2 }}>
                    {entrepreneur.description || 'Company description goes here.'}
                  </Typography>

                  <Button
                    variant="outlined"
                    color="warning"
                    fullWidth
                    onClick={() => navigate(`/profile/${entrepreneur.id}`)}
                  >
                    View Profile
                  </Button>

                  <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => navigate(`/MessageSection?user=${entrepreneur.id}`)}
                      sx={{ flex: 1 }}
                    >
                      Message
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => navigate(`/investment?user=${entrepreneur.id}`)}
                      sx={{ flex: 1 }}
                    >
                      Invest
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer/>
    </>
  );
};

export default InvestorPage;
