'use client';
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link';
import './footer.scss';

function Footer() {
  const theme = useTheme();
  const mobileBreakpoint = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box component="footer" className="footer-container">
      <Container>
        <Grid container spacing={2} className="footer">
          <Grid item xs={12} md={4} className="footer__text-container">
            <Link href="#" className="footer__link">
              <Typography variant="h6">OpenBC</Typography>
            </Link>

            <Typography variant="body2">
              Volunteer-driven community for positive impact in British Columbia
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            className={mobileBreakpoint ? '' : 'footer__nav-container'}
          >
            <Button variant="text" size="small" href="/projects">
              Projects
            </Button>
            <Button variant="text" size="small" href="/join-us">
              Join Us
            </Button>
            <Button variant="text" size="small" href="/about">
              About
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            className={mobileBreakpoint ? '' : 'footer__link-container'}
          >
            <IconButton
              href="https://github.com/OpenBCca"
              aria-label="GitHub Account"
            >
              <Image
                src="/assets/github_Icon.svg"
                alt="github account"
                width={20}
                height={20}
              />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/company/openbc/"
              aria-label="LinkedIn Account"
            >
              <Image
                src="/assets/linkedin_Icon.svg"
                alt="Linkedin account"
                width={20}
                height={20}
              />
            </IconButton>
          </Grid>
        </Grid>
        <Box className="copyright">
          <Typography variant="body2" className="copyright__text">
            <Link href="#" className="footer__link">
              <strong>OpenBC</strong>
            </Link>{' '}
            © 2024 All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
