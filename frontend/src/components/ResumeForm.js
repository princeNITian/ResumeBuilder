// src/components/ResumeForm.js
import React from 'react';
import { TextField, Button, Grid2 as Grid } from '@mui/material';

const ResumeForm = ({ activeStep, formData, handleInputChange, handleNext, handleBack }) => {
  const renderFormFields = () => {
    switch (activeStep) {
      case 0: // Personal Information
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
          </Grid>
        );
      case 1: // Work Experience
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Position"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Start Date"
                name="startDate"
                type="date"
                value={formData.startDate}
                onChange={handleInputChange}
                fullWidth
                InputLabels={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="End Date"
                name="endDate"
                type="date"
                value={formData.endDate}
                onChange={handleInputChange}
                fullWidth
                InputLabels={{ shrink: true }}
              />
            </Grid>
          </Grid>
        );
      case 2: // Education
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="School"
                name="school"
                value={formData.school}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Degree"
                name="degree"
                value={formData.degree}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Start Year"
                name="eduStartYear"
                value={formData.eduStartYear}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="End Year"
                name="eduEndYear"
                value={formData.eduEndYear}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
          </Grid>
        );
      case 3: // Skills
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Skills"
                name="skills"
                value={formData.skills}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
          </Grid>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {renderFormFields()}
      <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid item>
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleNext}>
            {activeStep === 3 ? 'Preview' : 'Next'}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default ResumeForm;
