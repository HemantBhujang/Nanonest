import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid, Link } from '@mui/material';
import Footer from '../component/Footer';

const blogs = [
  { title: "How Micro and Nano-Entrepreneurs are Changing the World", summary: "Explore the stories of entrepreneurs making a difference in local economies.", link: "/blog/micro-entrepreneurs" },
  { title: "5 Key Benefits of Investing in Emerging Markets", summary: "Understand the growth potential and impact of emerging markets.", link: "/blog/emerging-markets" },
  { title: "Tips for Nano-Entrepreneurs: How to Attract Investors", summary: "Learn how to showcase your startup to get the investment it deserves.", link: "/blog/attract-investors" },
];

const videos = [
  { title: "Getting Started on NanoNest", url: "https://www.youtube.com/embed/KQcbjphd7sw?si=ygDO4sCM3q5mB1qv", description: "A quick walkthrough on how to navigate and invest on NanoNest." },
  { title: "Success Stories of NanoNest Entrepreneurs", url: "https://www.youtube.com/embed/NciV3gPQmAw?si=d0PuT4wpHidz99sA", description: "Inspiring stories from successful entrepreneurs." },
  { title: "Investing in Emerging Markets", url: "https://www.youtube.com/embed/9xWFon5h_-4?si=UP2CP5l3_gKbFbcX", description: "An educational guide to the potential of emerging market investments." },
];

const Resources = () => {
  return (
    <>
    <Box sx={{ padding: 4 }}>
      <Typography variant="h2" textAlign="center" gutterBottom>
        Resources
      </Typography>
      
      {/* Blog Section */}
      <Typography variant="h4" mt={4} mb={2}>Blogs</Typography>
      <Grid container spacing={4}>
        {blogs.map((blog, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ boxShadow: 2, height: '100%' }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold">{blog.title}</Typography>
                <Typography variant="body2" color="text.secondary" mt={2}>
                  {blog.summary}
                </Typography>
                <Link href={blog.link} color="primary" sx={{ textDecoration: 'none', display: 'block', mt: 2 }}>Read More</Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      {/* Video Section */}
      <Typography variant="h4" mt={6} mb={2}>Videos</Typography>
      <Grid container spacing={4}>
        {videos.map((video, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ boxShadow: 2 }}>
              <CardMedia component="iframe" src={video.url} title={video.title} sx={{ height: 200 }} />
              <CardContent>
                <Typography variant="h5" fontWeight="bold">{video.title}</Typography>
                <Typography variant="body2" color="text.secondary" mt={2}>{video.description}</Typography>
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

export default Resources;
