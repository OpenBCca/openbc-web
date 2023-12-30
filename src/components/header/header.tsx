'use client';

import { Box, Link, Tab, Tabs } from '@mui/material';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import HeaderEnum from './header-enum';
import { headerData, pathToEnumMap } from './header-map';
import './header.scss';

function Header() {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState(
    pathToEnumMap[pathname] || false
  );

  useEffect(() => {
    setCurrentPath(pathToEnumMap[pathname] || false);
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
          {headerData.map((tab, index) => (
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
