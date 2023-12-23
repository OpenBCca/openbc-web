'use client';

import { Box, Link, Tab, Tabs } from '@mui/material';
import { usePathname } from 'next/navigation';
import React from 'react';

function Header() {
  const pathname = usePathname();
  const tabsData = [
    { label: 'Projects', value: '/projects', href: '/projects' },
    { label: 'Join Us', value: '/join-us', href: '/join-us' },
    { label: 'About', value: '/about', href: '/about' },
  ];
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
              transition: 'opacity 0.25s ease-in-out',
              '&:hover': {
                opacity: 0.25,
              },
            }}
          >
            OpenBC
          </Link>
        </Box>
        <Tabs>
          {tabsData.map((tab: any, index: number) => (
            <Tab
              key={index}
              label={tab.label}
              value={tab.value}
              href={tab.href}
              role="button"
              sx={{
                fontSize: 16,
                fontWeight: '600',
                color: pathname === tab.href ? 'blue' : 'inherit',
                textDecoration: 'none',
                transition: 'opacity 0.25s ease-in-out',
                '&:hover': {
                  opacity: 0.25,
                },
              }}
              component={Link}
            />
          ))}
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
