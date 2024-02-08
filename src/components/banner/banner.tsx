'use client';

import { Box, Button, Container, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import './banner.scss';

function Banner() {
  return (
    <Box className="banner-container">
      <Container className="banner">
        <Box className="banner__text-container">
          <Typography variant="h1" className="banner__title page-heading">
            {'Be a Force For Good in BC!'}
          </Typography>
          <Typography variant="body1" className="banner__text">
            Do you have design, writing, or coding skills? You have the power to
            elevate British Columbia to new heights through OpenBC.
          </Typography>
          <Box className="banner__button-container">
            <Button
              className="banner__button"
              variant="outlined"
              size="large"
              href="mailto:openbc@gmail.com"
            >
              Become A Partner
            </Button>
            <Button
              className="banner__button"
              variant="contained"
              size="large"
              href="mailto:openbc@gmail.com"
            >
              Join Us
            </Button>
          </Box>
        </Box>
        <Box className="banner__image-container">
          <Image
            src="https://source.unsplash.com/random?wallpapers"
            alt="banner image"
            width={1500}
            height={440}
            className="banner__image"
          />
        </Box>
      </Container>
    </Box>
  );
}

export default Banner;
