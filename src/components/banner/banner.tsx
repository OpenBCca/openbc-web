'use client';

import { Box, Typography } from '@mui/material';
import React from 'react';
import './banner.scss';

function Banner() {
  return (
    <Box className="banner">
      <Typography variant="h4" className="banner-title">
        {'Be a Force For Good in BC!'}
      </Typography>
      <Typography variant="body1">
        {'Do you have design, writing, or coding skills? You have the power to elevate British Columbia to new heights\n' +
          '        through OpenBC.'}
      </Typography>
    </Box>
  );
}

export default Banner;
