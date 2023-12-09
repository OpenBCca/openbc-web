'use client';

import { headerStyle } from '@/styles/header-style';
import { Tabs, Tab, Box, Link } from '@mui/material';
import React from 'react';

function Header() {
  return (
    <Box
      component={'header'}
      sx={{
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        borderBottom: 2,
        paddingY: '1.2rem',
        borderColor: '#e7e5e4',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '0.4rem',
          alignItems: 'center',
        }}
      >
        <Box>
          <Link
            href="/"
            sx={{
              fontSize: 28,
              fontWeight: '800',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            OpenBC
          </Link>
        </Box>
        <Tabs>
          <Tab
            label="Projects"
            value="/projects"
            href="/projects"
            role="button"
            sx={{
              ...headerStyle.link,
              color: location.pathname === '/projects' ? '#2563eb' : 'inherit',
            }}
            component={Link}
          />
          <Tab
            label="Join Us"
            value="/join-us"
            href="/join-us"
            role="button"
            sx={{
              ...headerStyle.link,
              color: location.pathname === '/join-us' ? '#2563eb' : 'inherit',
            }}
            component={Link}
          />
          <Tab
            label="About"
            value="/about"
            href="/about"
            role="button"
            sx={{
              ...headerStyle.link,
              color: location.pathname === '/about' ? '#2563eb' : 'inherit',
            }}
            component={Link}
          />
        </Tabs>
        <Box
          component={'nav'}
          sx={{
            display: 'flex',
            alignItems: 'center',
            columnGap: '0.4rem',
            fontWeight: '600',
          }}
        ></Box>
      </Box>
    </Box>
  );
}

export default Header;
