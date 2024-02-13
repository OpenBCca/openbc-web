'use client';

import {
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import './footer.scss';

function Footer() {
  return (
    <Box component="footer" className="footer-container">
      <Container className="footer">
        <Box className="footer__wrapper">
          <Box className="footer__menu">
            <Image
              src="/assets/OpenBC-logo.svg"
              width={48}
              height={48}
              alt="OpenBC logo"
              className="footer__logo"
            />
            <Typography className="footer__button">
              <Link
                underline="none"
                color="inherit"
                href="/about"
                className="footer__button"
              >
                About
              </Link>
            </Typography>
            <Typography className="footer__button">
              <Link
                underline="none"
                color="inherit"
                href="/join-us"
                className="footer__button footer__button--highlight"
              >
                Join Us!
              </Link>
            </Typography>

            <Typography className="footer__button">
              <Link
                underline="none"
                color="inherit"
                href="mailto:openbc.ca@gmail.com"
              >
                Contact Us
              </Link>
            </Typography>
          </Box>
          <form className="footer__newsletter">
            <label htmlFor="" className="footer__label">
              Get the latest updates about OpenBC
            </label>
            <Box className="footer__group">
              <input
                className="footer__input"
                placeholder="Enter your Email."
              />

              <Button className="footer__subscribe-button">Subscribe</Button>
            </Box>
          </form>
        </Box>
        <Box className="footer__wrapper">
          <Box className="footer__social-icons">
            <IconButton
              className="footer__icon-button"
              href="https://github.com/OpenBCca"
              aria-label="github account"
            >
              <Image
                src="/assets/github_Icon.svg"
                alt="GitHub"
                width={24}
                height={24}
              />
            </IconButton>
            <IconButton
              className="footer__icon-button"
              href="https://www.linkedin.com/company/openbc/"
              aria-label="linkedin account"
            >
              <Image
                src="/assets/linkedin_Icon.svg"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </IconButton>
          </Box>
          <Box className="footer__links">
            <Typography className="footer__link">
              <Link href="#" color="inherit" underline="none">
                Terms of Service
              </Link>
            </Typography>
            <Typography className="footer__link">
              <Link href="#" color="inherit" underline="none">
                Privacy Policy
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
