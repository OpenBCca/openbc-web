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
        Ready to contribute to BC through Open source projects? Join us on the
        OpenBC Discord and become a part of our active and welcoming community.
        Here&apos;s how you can engage:
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
          Say hi in our #introduce-yourself channel
          <br></br>
          <br></br>
          Ask our Support Squad a question in our #support-threads channel
          <br></br>
          <br></br>
          Let us know what projects you&apos;re interested in discussing in our
          #showcase channel!
          <br></br>
          <br></br>
          <a href="https://discord.gg/CquHqczqfm">
            https://discord.gg/CquHqczqfm
          </a>
        </strong>
      </Typography>
    </Container>
  );
}
