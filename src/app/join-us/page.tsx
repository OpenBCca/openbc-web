import React from 'react';
import { Box, Typography, List, ListItem, Link } from '@mui/material';

export default function JoinUs() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        marginTop: '1rem',
      }}
    >
      <Box sx={{ maxWidth: 600, textAlign: 'left' }}>
        <Typography
          variant="h5"
          component="div"
          fontWeight="bold"
          textAlign={'center'}
        >
          Join Us
        </Typography>
        <Typography variant="body2">
          Ready to contribute to BC through Open source projects? Join us on the{' '}
          <Link
            href="https://discord.gg/JYr2EyEw"
            target="_blank"
            rel="noopener noreferrer"
          >
            OpenBC Discord
          </Link>{' '}
          and become a part of our active and welcoming community. Here's how
          you can engage:
        </Typography>
        <List>
          <ListItem>
            <Typography variant="body2">
              Say hi in our #introduce-yourself channel!
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body2">
              Ask our Support Squad a question in our #support-threads channel!
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body2">
              Let us know what projects you're interested in discussing in our
              #showcase channel!
            </Typography>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
