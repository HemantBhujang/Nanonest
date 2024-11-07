import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from '../component/Footer';

const InvestorFAQ = () => {
  return (
    <>
      <Box sx={{ padding: 4, textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom fontWeight="bold" color="primary">
          Frequently Asked Questions
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Investing in the Future of Innovation
        </Typography>
      </Box>

      <Box sx={{ padding: 4 }}>
        <Accordion sx={{ boxShadow: 2, marginBottom: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: '#F9BC6E', color: 'white' }}>
            <Typography variant="h6" fontWeight="bold">
              What is NanoNest, and why should I invest here?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              NanoNest is a platform that connects investors with promising micro and nano-entrepreneurs. By investing here, you support innovative ideas, create social impact, and access high-potential opportunities that might otherwise go unnoticed.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ boxShadow: 2, marginBottom: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: '#F9BC6E', color: 'white' }}>
            <Typography variant="h6" fontWeight="bold">
              How do I start investing on NanoNest?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Sign up on NanoNest, complete your profile, and explore the platform to find entrepreneurs that align with your investment goals. You can review profiles, connect with entrepreneurs, and start investing with a few simple steps.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ boxShadow: 2, marginBottom: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: '#F9BC6E', color: 'white' }}>
            <Typography variant="h6" fontWeight="bold">
              What types of businesses can I invest in?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              NanoNest features a diverse range of entrepreneurs across various industries, including technology, arts, education, and sustainability. You can browse profiles and select projects that match your interests and investment criteria.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ boxShadow: 2, marginBottom: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: '#F9BC6E', color: 'white' }}>
            <Typography variant="h6" fontWeight="bold">
              How does the funding process work?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Once you identify a project you’d like to support, you can commit funds directly through the platform. Entrepreneurs outline their funding goals and provide updates, giving you insight into how your investment contributes to their success.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ boxShadow: 2, marginBottom: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: '#F9BC6E', color: 'white' }}>
            <Typography variant="h6" fontWeight="bold">
              What kind of return on investment (ROI) can I expect?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              ROI varies by project, depending on the entrepreneur's business model and market. Many investments focus on long-term growth and social impact, while others offer profit-sharing or equity arrangements. Each project’s profile outlines potential ROI.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ boxShadow: 2, marginBottom: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: '#F9BC6E', color: 'white' }}>
            <Typography variant="h6" fontWeight="bold">
              How do I communicate with entrepreneurs after investing?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              NanoNest provides a messaging system that allows you to directly communicate with entrepreneurs. You can discuss project progress, offer advice, and receive updates on how your investment is being used.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ boxShadow: 2, marginBottom: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: '#F9BC6E', color: 'white' }}>
            <Typography variant="h6" fontWeight="bold">
              Are there risks involved with investing on NanoNest?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              As with any investment, there are risks, particularly since many businesses on NanoNest are startups. We encourage investors to research projects thoroughly, connect with entrepreneurs, and consider their own risk tolerance before investing.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ boxShadow: 2, marginBottom: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: '#F9BC6E', color: 'white' }}>
            <Typography variant="h6" fontWeight="bold">
              What fees are associated with investing on NanoNest?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              NanoNest charges a nominal fee for certain investment transactions. Details on fees can be found on our fees page, ensuring transparency so you know exactly what to expect when investing.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ boxShadow: 2, marginBottom: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: '#F9BC6E', color: 'white' }}>
            <Typography variant="h6" fontWeight="bold">
              Can I invest internationally on NanoNest?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, NanoNest connects investors with entrepreneurs globally, allowing you to support innovative projects worldwide. Some restrictions may apply based on local laws and regulations, so please check relevant guidelines for international investments.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Footer/>
    </>
  );
};

export default InvestorFAQ;
