'use client';
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import React from 'react';
import './footer.scss';

function Footer() {
  const pathname = usePathname();

  const isMenuItemActive = (href: string) => {
    return pathname === href;
  };

  return (
    <Box className="footer-container">
      <Container className="footer" maxWidth="lg">
        <Grid container className="footer__content-container">
          <Grid
            item
            xs={12}
            md={6}
            className="footer__menu-container"
            direction="column"
          >
            <Typography variant="h6" className="footer__logo">
              OpenBC
            </Typography>
            <Stack className="footer__menu" direction="row" spacing={2}>
              <Button
                href="/about"
                size="small"
                className={`footer__menu-item ${
                  isMenuItemActive('/about') ? 'footer__menu-item--active' : ''
                }`}
                variant="text"
              >
                About
              </Button>
              <Button
                href="/join-us"
                size="small"
                className={`footer__menu-item ${
                  isMenuItemActive('/join-us')
                    ? 'footer__menu-item--active'
                    : ''
                }`}
                variant="text"
              >
                Join Us
              </Button>
              <Button
                href="/contact-us"
                size="small"
                className={`footer__menu-item ${
                  isMenuItemActive('/contact-us')
                    ? 'footer__menu-item--footer__menu-item--active'
                    : ''
                }`}
                variant="text"
              >
                Contact Us
              </Button>
            </Stack>
          </Grid>
          <Grid className="footer__form" item xs={12} md={6}>
            <Stack
              spacing={2}
              className="footer__form-group"
              direction="column"
            >
              <Typography variant="subtitle1" className="footer__form-label">
                Get the latest updates about OpenBC
              </Typography>
              <TextField
                className="footer__form-input"
                variant="outlined"
                fullWidth
                size="small"
              />
            </Stack>
            <Button className="footer__form-submit" variant="outlined">
              Subscribe
            </Button>
          </Grid>
        </Grid>

        <Grid
          container
          className="footer__content-container footer__content-container--border"
        >
          <Grid
            className="footer__icon-container"
            direction="row"
            alignItems="center"
            spacing={2}
            xs={12}
            md={6}
          >
            <Image
              alt="linkedin"
              src="/assets/linkedin_Icon.svg"
              className="footer__icon"
              width={20}
              height={20}
            />
            <Image
              alt="github"
              src="/assets/github_Icon.svg"
              className="footer__icon"
              width={20}
              height={20}
            />
            <Image
              alt="discord"
              src="/assets/discord_Icon.svg"
              className="footer__icon"
              width={20}
              height={20}
            />
          </Grid>
          <Grid
            xs={12}
            md={6}
            className="footer__terms-container"
            direction="row"
            alignItems="center"
            spacing={4}
          >
            <Typography variant="body2" className="footer__terms">
              Terms of Service
            </Typography>
            <Typography variant="body2" className="footer__terms">
              Privacy Policy
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
