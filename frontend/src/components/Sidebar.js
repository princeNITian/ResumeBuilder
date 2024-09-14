// src/components/Sidebar.js
import React from 'react';
import { List, ListItem, ListItemText, Divider, Box } from '@mui/material';

const Sidebar = ({ activeStep, setActiveStep }) => {
  const steps = [
    "Personal Information",
    "Work Experience",
    "Education",
    "Skills",
    "Preview",
  ];

  return (
    <Box sx={{ width: '250px', bgcolor: '#f0f0f0', height: '100vh', padding: '20px' }}>
      <List component="nav">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <ListItem 
              button 
              selected={activeStep === index} 
              onClick={() => setActiveStep(index)}
            >
              <ListItemText primary={step} />
            </ListItem>
            {index < steps.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
