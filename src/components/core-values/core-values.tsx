import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export default function CoreValues() {
  return (
    <Box className="sub-container-2-col">
      <Box sx={{ width: '20%' }}>
        <Image
          src="https://source.unsplash.com/random?wallpapers"
          alt="Description"
          width={500}
          height={500}
          style={{ width: '80%', height: 'auto' }}
        />
      </Box>
      <Box sx={{ width: '80%' }}>
        <Typography variant="h6">Innovation</Typography>
        <Typography variant="body2" paragraph>
          We are committed to continuous improvement, embracing new ideas that
          drive both technological and societal advancement.
        </Typography>
      </Box>
    </Box>
  );
}
