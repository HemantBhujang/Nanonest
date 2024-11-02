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
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { Card, CardContent, CardMedia, Typography, Grid, IconButton, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';

const AfterLogin = ({ title, content, wave }) => {
  const navigate = useNavigate();
  const [entrepreneurData, setEntrepreneurData] = useState([]);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [posts, setPosts] = useState([]); // State for posts data

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUserId(user.uid);
      }
    });
  }, []);

  useEffect(() => {
    const fetchEntrepreneurData = async () => {
      const entrepreneurRef = ref(database, '/entrepreneurs');
      const snapshot = await get(entrepreneurRef);

      if (snapshot.exists()) {
        const data = snapshot.val();
        const formattedData = Object.keys(data).map((key) => ({
          id: key,
          name: data[key].name,
          companyName: data[key].companyName,
          description: data[key].description,
          profileImageUrl: data[key].profileImageUrl,
        }));

        const filteredData = formattedData.filter(
          (entrepreneur) => entrepreneur.id !== currentUserId
        );

        setEntrepreneurData(filteredData);
      } else {
        console.log('No entrepreneur data available');
      }
    };

    if (currentUserId) {
      fetchEntrepreneurData();
    }
  }, [currentUserId]);

  useEffect(() => {
    const fetchPostsData = async () => {
      const postsRef = ref(database, '/post');
      const snapshot = await get(postsRef);

      if (snapshot.exists()) {
        const data = snapshot.val();
        const formattedPosts = Object.keys(data).map((key) => ({
          id: key,
          title: data[key].title,
          description: data[key].description,
          imageUrl: data[key].imageUrl,
          createdAt: data[key].createdAt,
        }));
        setPosts(formattedPosts);
      } else {
        console.log('No posts available');
      }
    };

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

    {/* Post Section */}
<div className="container my-5">
<h1  className="my-5"style={{ textAlign: 'center' }}>Explore projects here!!</h1>
  <Grid container spacing={3}>
    {posts.map((post, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Card 
          sx={{ 
            maxWidth: '100%', 
            margin: 'auto', 
            borderRadius: '15px', 
            boxShadow: 3,
            height: '450px' // Fixed height for the card
          }}
        >
          {/* Image Section */}
          <CardMedia
            component="img"
            image={post.imageUrl}
            alt={post.title}
            sx={{ height: '180px', objectFit: 'cover', borderRadius: '15px 15px 0 0' }} // Fixed height for image
          />
          
          {/* Content Section */}
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="div" color="#F9BC6E" sx={{height:'80px'}}>
              {post.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                display: '-webkit-box',
                WebkitLineClamp: 3,  // Limits description to 3 lines
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                height: '100px'  // Fixed height for consistent layout
              }}
            >
              {post.description}
            </Typography>
          </CardContent>
          
          {/* Icons Section */}
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-around', 
              alignItems: 'center', 
              padding: '16px', 
              borderTop: '1px solid #eee',
              height: '20px' // Fixed height for the icon section
            }}
          >
            <IconButton aria-label="like" sx={{ flex: 1 }}>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="comment" sx={{ flex: 1 }}>
              <CommentIcon />
            </IconButton>
            <IconButton aria-label="share" sx={{ flex: 1 }}>
              <ShareIcon />
            </IconButton>
          </Box>
          
        </Card>
      </Grid>
    ))}
  </Grid>
</div>
    </>
  );
};

export default AfterLogin;
