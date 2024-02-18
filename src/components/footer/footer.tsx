'use client';

import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Modal,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import './footer.scss';

function Footer() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box component="footer" className="footer-container">
      <Container className="footer" sx={{ display: 'flex' }}>
        <Box className="footer__wrapper">
          <Box className="footer__menu">
            <Link href="/">
              <Image
                src="/assets/OpenBC-logo.svg"
                width={48}
                height={48}
                alt="OpenBC logo"
                className="footer__logo"
              />
            </Link>
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

              <Button
                onClick={handleOpen}
                className="footer__subscribe-button"
                variant="outlined"
              >
                Subscribe
              </Button>
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
            <button onClick={handleOpen} className="footer__link">
              Terms of Service
            </button>
            <button onClick={handleOpen} className="footer__link">
              Privacy Policy
            </button>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="modal">
                <IconButton
                  onClick={handleClose}
                  className="modal__close"
                  color="error"
                >
                  <CloseIcon />
                </IconButton>
                <Typography
                  className="modal__title"
                  variant="h6"
                  component="h2"
                >
                  OOPS
                </Typography>
                <Typography
                  className="modal__text"
                  variant="body2"
                  component="h2"
                >
                  We&apos;re actively building this feature to make your
                  experience even better.
                </Typography>
              </Box>
            </Modal>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
