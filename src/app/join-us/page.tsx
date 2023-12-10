import React from 'react';
import { Box, Typography } from '@mui/material';

export default function JoinUs() {
  return (
    <Box>
      <Typography
        variant="h5"
        component="div"
        sx={{ fontFamily: 'inherit', fontWeight: '700' }}
      >
        Join Us
      </Typography>
      <Typography variant="body2">
        {'Ready to contribute to BC through Open source projects? Join us on the ' +
          'OpenBC Discord and become a part of our active and welcoming community.' +
          "Here's how you can engage:"}
      </Typography>
      <ul>
        <li>Say hi in our #introduce-yourself channel!</li>
        <li>
          Ask our Support Squad a question in our #support-threads channel!
        </li>
        <li>
          Let us know what projects you're interested in discussing in our
          #showcase channel!
        </li>
      </ul>
    </Box>
  );
}
