'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as React from 'react';

function Footer() {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        OpenBC
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Sample Text
      </Typography>
    </Box>
  );
}

export default Footer;
