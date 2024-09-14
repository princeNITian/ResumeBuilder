// src/pages/ForgotPassword.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Grid2 as Grid, Alert } from '@mui/material';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!email || !emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    // Simulate sending reset link
    setSuccess('A password reset link has been sent to your email.');

    // Call backend API to send the reset link
    console.log('Sending reset link to:', email);
  };

  return (
    <Container>
      <Box sx={{ my: 5 }}>
        <Typography variant="h4" gutterBottom>
          Forgot Password
        </Typography>
        <Typography variant="body1" paragraph>
          Enter your email address to receive a password reset link. Please make sure to check your inbox or spam folder.
        </Typography>

        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12}>
              <TextField
                label="Email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                error={Boolean(error)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Send Reset Link
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
