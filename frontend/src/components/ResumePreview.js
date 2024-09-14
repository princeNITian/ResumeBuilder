// src/components/ResumePreview.js
import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

const ResumePreview = ({ formData }) => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Paper elevation={3} sx={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          {formData.firstName} {formData.lastName}
        </Typography>
        <Typography variant="body1">{formData.email}</Typography>
        <Typography variant="body1">{formData.phone}</Typography>

        <Box mt={3}>
          <Typography variant="h6" gutterBottom>Work Experience</Typography>
          <Typography variant="body2">{formData.company} - {formData.position}</Typography>
          <Typography variant="body2">
            {formData.startDate} - {formData.endDate}
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h6" gutterBottom>Education</Typography>
          <Typography variant="body2">{formData.school} - {formData.degree}</Typography>
          <Typography variant="body2">
            {formData.eduStartYear} - {formData.eduEndYear}
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h6" gutterBottom>Skills</Typography>
          <Typography variant="body2">{formData.skills}</Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default ResumePreview;
