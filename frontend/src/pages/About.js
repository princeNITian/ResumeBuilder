// src/pages/About.js
import React from 'react';
import { Typography, Container, Box } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Box sx={{ my: 5 }}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to Resume Builder! Our mission is to provide an easy-to-use platform for building professional resumes. 
          We strive to make resume creation simple, efficient, and customizable for users of all backgrounds.
        </Typography>
        <Typography variant="body1" paragraph>
          Our team consists of experienced developers and designers who are passionate about helping job seekers present their skills and experiences in the best way possible.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
