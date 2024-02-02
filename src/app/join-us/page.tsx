import CoreValues from '@/components/core-values/core-values';
import Faq from '@/components/faq/faq';
import { Box, Divider, Paper, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import React from 'react';
import './join-us.scss';

export default function JoinUs() {
  return (
    <Container maxWidth="lg" className="container">
      <Box className="sub-container-2-col">
        <Box sx={{ width: '50%' }}>
          <img
            src="https://source.unsplash.com/random?wallpapers"
            alt="Description"
            style={{ width: '100%' }}
          />
        </Box>
        <Box sx={{ width: '50%', marginX: '2em' }}>
          <Typography className="sub-header" variant="h5">
            Our Mission
          </Typography>
          <Typography variant="body2" paragraph>
            At OpenBC, we're passionate about leveraging your unique abilities
            for the advancement of our province.
            <strong>
              Contribute to Open Source Projects for BC, from Anywhere, with
              OpenBC.
            </strong>
          </Typography>
        </Box>
      </Box>
      <Box sx={{ marginY: '4em' }}>
        <Typography className="sub-header" variant="h5">
          Visions
        </Typography>
        <Typography variant="body2" paragraph>
          Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque
          ornare pharetra faucibs arcu. Mauris blandit egestas nibh. eu et ipsum
          amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs
          arcu. Mauris blandit egestas nibh.
        </Typography>
      </Box>
      <Box sx={{ width: '40%', alignSelf: 'center' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h5">Volunteers</Typography>
          <Typography variant="h5">Be A Partner</Typography>
        </Box>
        <Divider sx={{ borderRadius: 1 }} />
      </Box>
      <Box className="sub-container-2-col">
        <Box sx={{ width: '50%' }}>
          <Typography className="sub-header" variant="h5">
            <strong>
              Ready to contribute to British Columbia through Open source
              projects?
            </strong>
          </Typography>
          <Typography variant="body2" paragraph>
            Join us at OpenBC and become a part of our active and welcoming
            community.
          </Typography>
        </Box>
        <Box sx={{ width: '50%' }}>
          <Box sx={{ display: 'flex' }}>
            <Paper className="square">
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                }}
              >
                <Typography>1</Typography>
              </Box>
            </Paper>
            <Typography sx={{ marginLeft: '1em' }} variant="h5">
              Tell Us About Yourself
            </Typography>
          </Box>
          <Typography sx={{ marginLeft: '4em' }} variant="body2" paragraph>
            Fill out our <u>2 minute form</u> so we can help match you with
            opportunities
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <Paper className="square">
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                }}
              >
                <Typography>2</Typography>
              </Box>
            </Paper>
            <Typography sx={{ marginLeft: '1em' }} variant="h5">
              Onboarding
            </Typography>
          </Box>
          <Typography sx={{ marginLeft: '4em' }} variant="body2" paragraph>
            Tortor interdumd pulvinar risus. Cursus in odio aenean.
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <Paper className="square">
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                }}
              >
                <Typography>3</Typography>
              </Box>
            </Paper>
            <Typography sx={{ marginLeft: '1em' }} variant="h5">
              Have a question?
            </Typography>
          </Box>
          <Typography sx={{ marginLeft: '4em' }} variant="body2" paragraph>
            Find you answers in FAQ or email openbc.ca@gmail.com with any
            questions or feedback.
          </Typography>
        </Box>
      </Box>
      <Typography className="sub-header" variant="h5">
        Core Values
      </Typography>
      <Box className="sub-container-2-col">
        <Box sx={{ width: '70%' }}>
          <CoreValues />
          <CoreValues />
          <CoreValues />
          <CoreValues />
          <CoreValues />
        </Box>
        <Box sx={{ width: '30%' }}>
          <img
            src="https://source.unsplash.com/random?wallpapers"
            alt="Description"
            style={{ width: '80%', verticalAlign: 'top' }}
          />
        </Box>
      </Box>
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography className="sub-header" variant="h5">
            Frequently Asked Question (FAQ)
          </Typography>
        </Box>
        <Faq />
        <Faq />
        <Faq />
        <Faq />
      </Box>
    </Container>
  );
}
