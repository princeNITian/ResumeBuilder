// src/pages/Contact.js
import React from 'react';
import { Typography, Container, Box, TextField, Button, Grid2 as Grid } from '@mui/material';

const Contact = () => {
  return (
    <Container>
      <Box sx={{ my: 5 }}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          Have any questions or need support? Feel free to reach out to us using the contact form below.
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField label="Name" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Email" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              multiline
              rows={4}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary">
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Contact;
