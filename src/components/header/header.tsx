'use client';

import { Box, Link, Tab, Tabs } from '@mui/material';
import { usePathname } from 'next/navigation';
import React from 'react';
import './header.scss';

function Header() {
  const pathname = usePathname();
  const tabsData = [
    { label: 'Projects', value: '/projects', href: '/projects' },
    { label: 'Join Us', value: '/join-us', href: '/join-us' },
    { label: 'About', value: '/about', href: '/about' },
  ];
  return (
    <Box component={'header'} className="header-outer-box">
      <Box className="header-inner-box">
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
              className="header-tab"
              sx={{
                color: pathname === tab.href ? 'blue' : 'inherit',
              }}
              component={Link}
            />
          ))}
        </Tabs>
        <Box component={'nav'} className="header-nav"></Box>
      </Box>
    </Box>
  );
}

export default Header;
