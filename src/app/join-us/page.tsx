import { Box, Divider, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import React from 'react';
import './join-us.scss';

export default function JoinUs() {
  return (
    <Container maxWidth="lg" className="container">
      <Box className="sub-container-2-col">
        <Box sx={{ width: '50%' }}>
          <img src="https://source.unsplash.com/random?wallpapers" alt="Description" style={{ width: '100%' }} />
        </Box>
        <Box sx={{ width: '50%', marginX: '2em' }}>
          <Typography className="sub-header" variant="h5">
            Our Mission
          </Typography>
          <Typography variant="body2" paragraph>
            At OpenBC, we're passionate about leveraging your unique abilities for the advancement of our province. 
            <strong>
              Contribute to Open Source Projects for BC, from Anywhere, with OpenBC.
            </strong>
          </Typography>
        </Box>
      </Box>
      <Box sx={{ marginY: '4em' }}>
        <Typography className="sub-header" variant="h5">
          Visions
        </Typography>
        <Typography variant="body2" paragraph>
          Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh. eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh.
        </Typography>
      </Box>
      <Box sx={{ width: '40%', alignSelf: 'center' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h5">
            Volunteers
          </Typography>
          <Typography variant="h5">
            Be A Partner
          </Typography>
        </Box>
        <Divider sx={{ borderRadius: 1 }} />
      </Box>
      <Box className="sub-container-2-col">
        <Box sx={{ width: '50%' }}>
        <Typography className="sub-header" variant="h5">
            <strong>
              Ready to contribute to British Columbia through Open source projects?
            </strong>
          </Typography>
          <Typography variant="body2" paragraph>
            Join us at OpenBC and become a part of our active and welcoming community.
          </Typography>
        </Box>
        <Box sx={{ width: '50%' }}>
          <Typography variant="h5">
            Our Mission
          </Typography>
          <Typography variant="body2" paragraph>
            At OpenBC, we're passionate about leveraging your unique abilities for the advancement of our province. 
            <strong>
              Innovation
            </strong>
          </Typography>
        </Box>
      </Box>
      <Typography variant="h5">
        Core Values
      </Typography>
      <Box className="sub-container-2-col">
        <Box sx={{ width: '70%' }}>
          <Typography variant="body2" paragraph>
            <strong>
              Ready to contribute to British Columbia through Open source projects?
            </strong>
            Join us at OpenBC and become a part of our active and welcoming community.
          </Typography>
        </Box>
        <Box sx={{ width: '30%' }}>
          <img src="https://source.unsplash.com/random?wallpapers" alt="Description" style={{ width: '80%' }} />
        </Box>
      </Box>
      <Box>
        <Typography variant="h5">
          Frequently Asked QUestion (FAQ)
        </Typography>
        <Typography variant="body2" paragraph>
          Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh. eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh.
        </Typography>
      </Box>
    </Container>
  );
}
