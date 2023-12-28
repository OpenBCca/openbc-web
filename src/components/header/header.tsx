'use client';

import { Box, Link, Tab, Tabs } from '@mui/material';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { HeaderEnum, pathToEnumMap, tabsData } from './header-constants';
import './header.scss';

function Header() {
  const [currentPath, setCurrentPath] = useState(HeaderEnum.default);
  const pathname = usePathname();

  useEffect(() => {
    setCurrentPath(pathToEnumMap[pathname] || HeaderEnum.default);
  }, [pathname]);

  const handleChange = (
    event: React.ChangeEvent<any>,
    newValue: HeaderEnum
  ) => {
    setCurrentPath(newValue);
  };

  return (
    <Box component={'header'} className="header-outer-box">
      <Box className="header-inner-box">
        <Link href="/" className="title-link">
          OpenBC
        </Link>
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
