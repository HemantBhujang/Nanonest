import React from 'react';
import { useInView } from 'react-intersection-observer';
import {
  Container,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
} from '@mui/material';
import me from '../assets/InvestorRelationManagement.png';
import me2 from '../Images/Market_Analysis.jpg';
import me3 from '../Images/communication2.jpg';
import Footer from '../component/Footer'

const servicesData = [
  {
    title: 'Investor Relations Management',
    content: 'Tools for managing investor communications with customizable dashboards, key metrics, financial reports, and company updates. Helping entrepreneurs maintain transparency and keep investors informed about business performance.',
    image: me
  },
  {
    title: 'Financial Advisory Services',
    content: 'Expert advice on financial planning, investments, and risk management to help clients make informed decisions for their growth.',
    image: me3
  },
  {
    title: 'Market Analysis',
    content: 'In-depth market research and analysis to identify new opportunities, optimize business strategies, and stay ahead of competitors.',
    image: me2 // Replace with actual image path
  },
  // Add more services as needed
];


const Services = ({title,content,itWorker}) => {
  return (
    <>
        <div className="container text-center my-5">
  <div className="row">
    <div className="col my-5">
    <h1 className="my-5 "style={{textShadow: "5px 5px 10px #F9BC6E",fontSize: '12vmin'}}>{title}</h1>
        <h4 className='text-start my-3' >{content}</h4>
        <button type="button" className="btn btn-lg my-4 mx-5" style={{backgroundColor : '#F9BC6E'}}>Contact Us </button>
    </div>
    <div className="col">
      <img src={itWorker} width="735rem" height='433rem' alt="It Worker" className='img-fluid' />
    </div>
      </div>
      
    
    {/* Service Cards Section */}
    <Container maxWidth="lg">
        {servicesData.map((service, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.2,
          });
          return (
            <Box
              ref={ref}
              key={index}
              style={{
                marginBottom: '30px',
                transform: inView ? 'translateY(0)' : 'translateY(50px)',
                opacity: inView ? 1 : 0,
                transition: 'all 0.6s ease-out',
              }}
            >
              <Card
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  borderRadius: '15px',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                  backgroundColor: '#FFFBEA',
                  overflow: 'hidden',
                  width: '100%',
                }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={service.image}
                  alt={service.title}
                  style={{
                    width: '100%',
                    objectFit: 'cover',
                    borderTopLeftRadius: '15px',
                    borderTopRightRadius: '15px',
                  }}
                />
                <CardContent style={{ padding: '20px', textAlign: 'center' }}>
                  <Typography
                    variant="h5"
                    component="div"
                    style={{ color: '#F9BC6E', fontWeight: 'bold', marginBottom: '15px' }}
                  >
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {service.content}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          );
        })}
      </Container>
    </div>
   <Footer />
      </>
  )
}

export default Services