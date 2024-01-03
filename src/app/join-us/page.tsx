import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import React from 'react';
import './join-us.scss';

export default function JoinUs() {
  return (
    <Container maxWidth="lg" className="container">
      <Typography className="join-us-header" variant="h3">
        Join Us
      </Typography>
      <Typography variant="body2" paragraph>
        Unlock the power of your skills and expertise to drive positive change
        in British Columbia through OpenBC. At OpenBC, we&apos;re passionate
        about leveraging your unique abilities for the advancement of our
        province. Whether you&apos;re a tech enthusiast, a creative visionary,
        or a community leader, your skills can play a crucial role in addressing
        challenges and creating opportunities.
      </Typography>
      <Typography variant="body2" paragraph>
        Ready to contribute to British Columbia through Open source projects?
        Join us at OpenBC and become a part of our active and welcoming
        community. Here&apos;s how you can engage:
      </Typography>
      <Typography variant="body2">
        <strong>
          Email openbc.ca@gmail.com for opportunities to contribute.
        </strong>
      </Typography>
    </Container>
  );
}
