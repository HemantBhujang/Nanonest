import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from '../component/Footer'

const EntrepreneurFAQ = () => {
  return (
    <>
      <Box sx={{ padding: 4, textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom fontWeight="bold" color="primary">
          Frequently Asked Questions
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Empowering Entrepreneurs with Knowledge and Support
        </Typography>
      </Box>

      <Box sx={{ padding: 4 }}>
        <Accordion sx={{ boxShadow: 2, marginBottom: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: '#F9BC6E', color: 'white' }}>
            <Typography variant="h6" fontWeight="bold">
              What is NanoNest, and how can it benefit my business?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              NanoNest is a platform designed to connect micro and nano-entrepreneurs with investors, mentors, and resources. We help entrepreneurs gain funding, expand their networks, and access the guidance they need to scale their business.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ boxShadow: 2, marginBottom: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: '#F9BC6E', color: 'white' }}>
            <Typography variant="h6" fontWeight="bold">
              How do I sign up and create a profile on NanoNest?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Creating a profile is simple! Sign up with your email, fill out your business details, and add a profile picture to showcase your brand. Once completed, your profile will be visible to potential investors and mentors.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ boxShadow: 2, marginBottom: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: '#F9BC6E', color: 'white' }}>
            <Typography variant="h6" fontWeight="bold">
              How can I raise funds for my business on NanoNest?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              NanoNest offers various funding options, including crowdfunding and investor partnerships. Once your profile is complete, you can start a fundraising campaign, detailing your funding goals and use of funds to attract potential investors.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ boxShadow: 2, marginBottom: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: '#F9BC6E', color: 'white' }}>
            <Typography variant="h6" fontWeight="bold">
              Can I connect with mentors or industry experts on NanoNest?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Absolutely! NanoNest provides a network of industry experts and mentors who are passionate about helping entrepreneurs succeed. You can browse mentor profiles and send requests to connect, ensuring you find the right guidance for your journey.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ boxShadow: 2, marginBottom: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: '#F9BC6E', color: 'white' }}>
            <Typography variant="h6" fontWeight="bold">
              How can I ensure my profile stands out to investors?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A strong profile is key! Use a professional photo, clearly outline your business goals, and share compelling details about your achievements. Regularly update your profile with milestones to keep investors engaged and informed.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ boxShadow: 2, marginBottom: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: '#F9BC6E', color: 'white' }}>
            <Typography variant="h6" fontWeight="bold">
              What resources are available for new entrepreneurs on NanoNest?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              NanoNest offers a wealth of resources, including webinars, articles, and guides on everything from pitching to scaling. We also host regular Q&A sessions with successful entrepreneurs, so you can learn from those who have been where you are.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ boxShadow: 2, marginBottom: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: '#F9BC6E', color: 'white' }}>
            <Typography variant="h6" fontWeight="bold">
              Is there a cost to use NanoNest?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              NanoNest offers a variety of plans, including a free basic plan. Premium plans offer additional features, such as enhanced profile visibility, access to exclusive investor events, and one-on-one mentorship sessions.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ boxShadow: 2, marginBottom: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: '#F9BC6E', color: 'white' }}>
            <Typography variant="h6" fontWeight="bold">
              Who do I contact if I need help or support on NanoNest?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Our support team is here to help! If you have questions or need assistance, you can reach out to us via the support page or email us at support@nanonest.com. We’re committed to making your experience on NanoNest smooth and successful.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Footer />
    </>
  );
};

export default EntrepreneurFAQ;
