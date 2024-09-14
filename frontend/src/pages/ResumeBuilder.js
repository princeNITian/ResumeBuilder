// src/pages/ResumeBuilder.js
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ResumeForm from '../components/ResumeForm';
import ResumePreview from '../components/ResumePreview';
import { Grid2 as Grid } from '@mui/material';

const ResumeBuilder = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    school: '',
    degree: '',
    eduStartYear: '',
    eduEndYear: '',
    skills: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Grid container>
      <Grid item>
        <Sidebar activeStep={activeStep} setActiveStep={setActiveStep} />
      </Grid>
      <Grid item xs={6} sx={{ padding: '20px' }}>
        <ResumeForm
          activeStep={activeStep}
          formData={formData}
          handleInputChange={handleInputChange}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      </Grid>
      <Grid item xs={5}>
        <ResumePreview formData={formData} />
      </Grid>
    </Grid>
  );
};

export default ResumeBuilder;
