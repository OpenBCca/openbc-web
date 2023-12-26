'use client';

import { Box, Link, Tab, Tabs } from '@mui/material';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import './header.scss';

enum TabValue {
  projects = '/projects',
  joinUs = '/join-us',
  about = '/about',
}

function Header() {
  const [currentPath, setCurrentPath] = useState<string>(TabValue.projects);
  const pathname = usePathname();
  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  const tabsData = [
    { label: 'Projects', value: TabValue.projects, href: '/projects' },
    { label: 'Join Us', value: TabValue.joinUs, href: '/join-us' },
    { label: 'About', value: TabValue.about, href: '/about' },
  ];

  const handleChange = (event: React.ChangeEvent<any>, newValue: TabValue) => {
    setCurrentPath(newValue);
  };

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
        <Tabs value={currentPath} onChange={handleChange}>
          {tabsData.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              value={tab.value}
              href={tab.href}
              role="button"
              className="header-tab"
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
