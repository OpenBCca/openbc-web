import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Divider, Typography } from '@mui/material';
import React from 'react';

export default function Faq() {
  return (
    <Box sx={{ width: '50%', margin: 'auto' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="body2" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit?
        </Typography>
        <KeyboardArrowDownIcon />
      </Box>
      <Divider sx={{ borderRadius: 1 }} />
    </Box>
  );
}
