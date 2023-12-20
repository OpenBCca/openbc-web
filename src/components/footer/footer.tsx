'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import './footer.scss';

function Footer() {
  return (
    <Box className="footer-container" component="footer">
      <Typography variant="h6" className="footer-title" gutterBottom>
        OpenBC
      </Typography>
      <Typography variant="subtitle1" className="footer-subtitle" component="p">
        Sample Text
      </Typography>
    </Box>
  );
}

export default Footer;
