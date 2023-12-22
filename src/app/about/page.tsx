import React from 'react';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import './about.scss';

export default function About() {
  return (
    <Container maxWidth="lg" className="container">
      <Typography
        className="about-header"
        variant="h3"
        sx={{
          fontFamily: 'inherit',
          fontWeight: '700',
        }}
      >
        About
      </Typography>
      <Typography variant="body2" paragraph>
        OpenBC, a community-driven initiative dedicated to harnessing the power
        of technology, collaboration, and innovation to create positive impacts
        across British Columbia, Canada. Our mission is to bring together
        individuals passionate about technology, civic engagement, and community
        development to address the unique challenges and opportunities faced by
        our province.
      </Typography>
      <Typography variant="body2" paragraph>
        <strong>
          Utilize Your Skills for the Betterment of British Columbia with OpenBC
        </strong>
      </Typography>
      <Typography variant="body2" paragraph>
        Unlock the power of your skills and expertise to drive positive change
        in British Columbia through OpenBC. At OpenBC, we&apos;re passionate
        about leveraging your unique abilities for the advancement of our
        province. Whether you&apos;re a tech enthusiast, a creative visionary,
        or a community leader, your skills can play a crucial role in addressing
        challenges and creating opportunities.
      </Typography>
      <Typography variant="body2">
        <strong>
          Contribute to Open Source Projects for BC, from Anywhere, with OpenBC
        </strong>
      </Typography>
    </Container>
  );
}
