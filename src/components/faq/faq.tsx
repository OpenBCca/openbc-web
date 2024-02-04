import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import './faq.scss';

export default function Faq() {
  return (
    <Box className="box-compressed__margin">
      <Box className="display-flex__space-between">
        <Typography variant="body2" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit?
        </Typography>
        <KeyboardArrowDownIcon />
      </Box>
      <Divider className="divider" />
    </Box>
  );
}
