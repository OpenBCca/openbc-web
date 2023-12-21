'use client';
import { Box, Link, Tab, Tabs } from '@mui/material';
import React from 'react';
import './header.scss';

function Header() {
  return (
    <Box component={'header'} className="header-outer-box">
      <Box className="header-inner-box">
        <Box>
          <Link href="/" className="header-title">
            OpenBC
          </Link>
        </Box>
        <Tabs value={false}>
          <Tab
            label="Projects"
            value="/projects"
            href="/projects"
            role="button"
            className="header-tab"
            component={Link}
          />
          <Tab
            label="Join Us"
            value="/join-us"
            href="/join-us"
            role="button"
            className="header-tab"
            component={Link}
          />
          <Tab
            label="About"
            value="/about"
            href="/about"
            role="button"
            className="header-tab"
            component={Link}
          />
        </Tabs>
        <Box component={'nav'} className="header-nav"></Box>
      </Box>
    </Box>
  );
}

export default Header;
