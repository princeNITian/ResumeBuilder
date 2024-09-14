// src/components/Footer.js
import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#333', color: '#fff', padding: '20px 0', marginTop: 'auto' }}>
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          {'© '}
          {new Date().getFullYear()}
          {' Resume Builder. All rights reserved.'}
        </Typography>
        <Typography variant="body2" align="center">
          <Link href="#" color="inherit">Privacy Policy</Link> | <Link href="#" color="inherit">Terms of Service</Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
