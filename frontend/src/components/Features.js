// src/components/Features.js
import React from 'react';
import { Container, Grid2 as Grid, Typography, Box } from '@mui/material';

const features = [
  { title: 'Customizable Templates', description: 'Choose from multiple templates that suit your style.' },
  { title: 'Drag-and-drop Sections', description: 'Rearrange sections to fit your needs.' },
  { title: 'Auto-suggestions', description: 'Get suggestions for skills and job descriptions.' },
  { title: 'Export to PDF/Word', description: 'Download your resume in PDF or Word format.' }
];

const Features = () => {
  return (
    <Box sx={{ padding: '60px 0' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Typography variant="h6" gutterBottom>{feature.title}</Typography>
              <Typography variant="body1" color="textSecondary">{feature.description}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
