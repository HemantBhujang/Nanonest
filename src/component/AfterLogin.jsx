import React, { useEffect, useState } from 'react';
import { database } from './Firebase'; // Firebase setup
import { ref, get } from 'firebase/database';
import { useNavigate } from 'react-router-dom';
import Navbar2 from './Navbar2';
import IndustyCard from './IndustyCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Box, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';

const AfterLogin = ({ title, content, wave }) => {
  const navigate = useNavigate();
  const [entrepreneurData, setEntrepreneurData] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch Entrepreneur Data
    const fetchEntrepreneurData = async () => {
      const entrepreneurRef = ref(database, '/entrepreneurs');
      const snapshot = await get(entrepreneurRef);

      if (snapshot.exists()) {
        const data = snapshot.val();
        const formattedData = Object.keys(data).map(key => ({
          id: key,
          name: data[key].name,
          companyName: data[key].companyName,
          description: data[key].description,
          profileImageUrl: data[key].profileImageUrl
        }));
        setEntrepreneurData(formattedData);
      } else {
        console.log('No data available');
      }
    };

    // Fetch Posts Data
    const fetchPostsData = async () => {
      const postsRef = ref(database, '/posts');
      const snapshot = await get(postsRef);

      if (snapshot.exists()) {
        const data = snapshot.val();
        const formattedPosts = Object.keys(data).map(key => ({
          id: key,
          title: data[key].title,
          description: data[key].description,
          postImageUrl: data[key].postImageUrl,
          userProfilePic: data[key].userProfilePic
        }));
        setPosts(formattedPosts);
      } else {
        console.log('No posts available');
      }
    };

    fetchEntrepreneurData();
    fetchPostsData();
  }, []);

  const handleProfileClick = (id) => {
    navigate(`/profile/${id}`);
  };

  return (
    <>
      <Navbar2
        title="NanoNest"
        msg="Message"
        notification="Notification"
        menu="Menu"
        button="Profile"
      />
      <div className="container text-start my-5">
        <h1 style={{ fontSize: '8vmin' }} className="my-3">{title}</h1>
        <h3 style={{ fontSize: '4vmin', color: '#F9BC6E' }}>{content}</h3>
      </div>
      <img src={wave} alt="Wave Image" className="Start" width="100%" />
      
      {/* Entrepreneur Section */}
      <h1 style={{ textAlign: 'center' }}>Explore Startup Raising Now!!</h1>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        style={{ padding: '20px' }}
        modules={[Navigation, Pagination]}
      >
        {entrepreneurData.length > 0 ? (
          entrepreneurData.map((entrepreneur) => (
            <SwiperSlide key={entrepreneur.id}>
              <IndustyCard
                id={entrepreneur.id}
                name={entrepreneur.name}
                companyName={entrepreneur.companyName}
                description={entrepreneur.description}
                profileImageUrl={entrepreneur.profileImageUrl} 
                onClick={() => handleProfileClick(entrepreneur.id)}
              />
            </SwiperSlide>
          ))
        ) : (
          <p>No entrepreneurs available</p>
        )}
      </Swiper>

      {/* Posts Section */}
      <h1 style={{ textAlign: 'center', marginTop: '40px' }}>Latest Posts</h1>
      <Grid container spacing={4} sx={{ padding: 2 }}>
        {posts.length > 0 ? (
          posts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Card sx={{ boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={post.postImageUrl}
                  alt="Post image"
                />
                <CardContent>
                  <Box display="flex" alignItems="center" mb={2}>
                    <CardMedia
                      component="img"
                      image={post.userProfilePic}
                      alt="User profile"
                      sx={{ width: 40, height: 40, borderRadius: '50%', mr: 2 }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                      {post.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {post.description.length > 100
                      ? post.description.substring(0, 100) + '...'
                      : post.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" align="center" color="text.secondary" sx={{ width: '100%', mt: 4 }}>
            No posts available
          </Typography>
        )}
      </Grid>
    </>
  );
};

export default AfterLogin;
