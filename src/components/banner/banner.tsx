'use client';

import { Box, Typography } from '@mui/material';
import React from 'react';

function Banner() {
  return (
    <Box
      sx={{
        textAlign: 'center',
        backgroundColor: '#ededed',
        height: '7rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        padding: '5rem 0',
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontFamily: 'inherit', fontWeight: '700' }}
      >
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
