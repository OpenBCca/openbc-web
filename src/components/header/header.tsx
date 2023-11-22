'use client';

import { headerStyle } from '@/styles/header-style';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
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
        <Box
          sx={{
            fontSize: 28,
            fontWeight: '800',
          }}
        >
          OpenBC
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
          <BottomNavigationAction label="Projects" sx={headerStyle.link} />
          <BottomNavigationAction label="Join Us" sx={headerStyle.link} />
          <BottomNavigationAction label="About" sx={headerStyle.link} />
        </BottomNavigation>
      </Box>
    </Box>
  );
}

export default Header;
