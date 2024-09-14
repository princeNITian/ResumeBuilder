// src/components/HeroSection.js
import React from 'react';
import { Typography, Button, Container, Box } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        padding: '80px 0',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" gutterBottom>
          Build Your Perfect Resume Effortlessly
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          Our resume builder makes it simple to create a polished, professional resume.
          Start from scratch or choose one of our templates.
        </Typography>
        <Button variant="contained" size="large" color="primary" href="resume-builder">
          Start Building Now
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
