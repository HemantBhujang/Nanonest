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
import { Box, Typography, Card, CardContent, IconButton,CardMedia, Grid } from '@mui/material';

import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import Footer from './Footer'


const AfterLogin = ({ title, content, wave }) => {
  const navigate = useNavigate();
  const [entrepreneurData, setEntrepreneurData] = useState([]);
  const [posts, setPosts] = useState([]);
  const [investorData, setInvestorData] = useState([]);


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

    const fetchInvestorData = async () => {
      try {
        const investorRef = ref(database, '/investors');
        const snapshot = await get(investorRef);
    
        if (snapshot.exists()) {
          const data = snapshot.val();
          const formattedData = Object.keys(data).map(key => ({
            id: key,
            name: data[key].name,
            companyName: data[key].companyName,
            description: data[key].description,
            profileImageUrl: data[key].profileImageUrl,
            website: data[key].website,
            linkedin: data[key].linkedin
          }));
          setInvestorData(formattedData);
        } else {
          console.log('No data available for investors');
        }
      } catch (error) {
        console.error('Error fetching investor data:', error);
      }
    };
    

    // Fetch Posts Data
    const fetchPostsData = async () => {
      const postsRef = ref(database, '/post');
      const snapshot = await get(postsRef);

      if (snapshot.exists()) {
        const data = snapshot.val();
        const formattedPosts = Object.keys(data).map(key => ({
          id: key,
          title: data[key].title,
          description: data[key].description,
          postImageUrl: data[key].imageUrl,
          userId: data[key].userId,
          createdAt: data[key].createdAt
        }));
        setPosts(formattedPosts);
      } else {
        console.log('No posts available');
      }
    };

    fetchEntrepreneurData();
    fetchInvestorData();
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
      <Swiper
        direction="vertical" // Set the direction to vertical
        spaceBetween={30}
        slidesPerView={1} // Each slide will contain three columns
        navigation
        pagination={{ clickable: true }}
        style={{ height: '500px', padding: '20px' }} // Adjust height as needed
        modules={[Navigation, Pagination]}
      >
        {Array.from({ length: Math.ceil(posts.length / 3) }).map((_, index) => (
          <SwiperSlide key={index}>
            <Grid container spacing={2}>
              {posts.slice(index * 3, index * 3 + 3).map((post) => {
                // Find the corresponding user profile image using userId
                const user = entrepreneurData.find(entrepreneur => entrepreneur.id === post.userId);
                const userProfileImage = user ? user.profileImageUrl : '/path/to/default/profile.png'; // Default image if user not found

                return (
                  <Grid item xs={12} sm={4} key={post.id}>
  <Card sx={{ boxShadow: 3, height: '400px', display: 'flex', flexDirection: 'column' }}>
    <CardMedia
      component="img"
      height="150"
      image={post.postImageUrl}
      alt="Post image"
    />
    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Box display="flex" alignItems="center" mb={2}>
        <CardMedia
          component="img"
          image={userProfileImage} // Use fetched user profile image
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
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 16px' }}>
      <IconButton aria-label="like" size="small">
        <FavoriteIcon />
      </IconButton>
      
      <IconButton aria-label="share" size="small">
        <ShareIcon />
      </IconButton>
    </div>
  </Card>
</Grid>
                );
              })}
            </Grid>
          </SwiperSlide>
        ))}
      </Swiper>


{/* Investor Section */}
<h1 style={{ textAlign: 'center' }}>Top Investors</h1>
<Swiper
  spaceBetween={20}
  slidesPerView={1} // Each slide contains a row of two investors
  navigation
  pagination={{ clickable: true }}
  style={{ height: 'auto', padding: '20px' }}
  modules={[Navigation, Pagination]}
>
  {Array.from({ length: Math.ceil(investorData.length / 2) }).map((_, index) => (
    <SwiperSlide key={index}>
      <Grid container spacing={2}>
        {investorData.slice(index * 2, index * 2 + 2).map((investor) => (
          <Grid item xs={12} sm={6} key={investor.id}>
            <Card sx={{ display: 'flex', alignItems: 'center', boxShadow: 3, padding: 2 }}>
              <CardMedia
                component="img"
                image={investor.profileImageUrl}
                alt={investor.name}
                sx={{ width: 60, height: 60, borderRadius: '50%', marginRight: 2 }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                  {investor.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {investor.companyName}
                </Typography>
                <Box display="flex" alignItems="center" gap={1} mt={1}>
                  <a href={investor.website} target="_blank" rel="noopener noreferrer">
                    Website
                  </a>
                  <a href={investor.linkedin} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px' }}>
                    LinkedIn
                  </a>
                </Box>
                <button
  style={{
    marginTop: '10px',
    padding: '6px 12px',
    backgroundColor: '#F9BC6E',
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
    cursor: 'pointer'
  }}
  onClick={() => navigate(`/InvestorProfilePage/${investor.id}`)}
>
  View Profile
</button>

              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </SwiperSlide>
  ))}
</Swiper>

      <Footer></Footer>
    </>
  );
};

export default AfterLogin;
