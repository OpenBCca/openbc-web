'use client';

import { headerStyle } from '@/styles/header-style';
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Link,
} from '@mui/material';
import React from 'react';

function Header() {
  const [value, setValue] = React.useState(0);
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
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue: any) => {
            setValue(newValue);
          }}
          sx={{
            display: 'flex',
            alignItems: 'center',
            columnGap: '0.4rem',
          }}
        >
          <BottomNavigationAction
            role="button"
            label="Projects"
            href="/projects"
            sx={{
              ...headerStyle.link,
              color: location.pathname === '/join-us' ? '#2563eb' : 'inherit', // Change color for current page
            }}
          />
          <BottomNavigationAction
            role="button"
            label="Join Us"
            href="/join-us"
            sx={{
              ...headerStyle.link,
              color: location.pathname === '/join-us' ? '#2563eb' : 'inherit', // Change color for current page
            }}
          />
          <BottomNavigationAction
            role="button"
            label="About"
            href="/about"
            sx={{
              ...headerStyle.link,
              color: location.pathname === '/join-us' ? '#2563eb' : 'inherit', // Change color for current page
            }}
          />
        </BottomNavigation>
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
