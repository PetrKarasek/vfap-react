import React from 'react';
import { Box, Typography } from '@mui/material';

const FooterPage = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: '#212529', 
        color: 'white', 
        py: 3, 
        textAlign: 'center',
        mt: 'auto'
      }}
    >
      <Typography variant="body2">
        © React VFAP {new Date().getFullYear()}
      </Typography>
    </Box>
  );
};

export default FooterPage;