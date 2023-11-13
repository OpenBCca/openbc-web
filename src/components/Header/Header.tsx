'use client'

import { header_style } from '@/styles/header-style'
import { BottomNavigation, BottomNavigationAction, Box, Box } from '@mui/material'
import Link from 'next/link'
import React from 'react'

interface Props {}

function Header({}: Props) {
  const [value, setValue] = React.useState(0)
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
            textAlign: 'center',
          }}
        >
          OpenBC
        </Box>

        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue: number) => {
            setValue(newValue)
          }}
          sx={{
            display: 'flex',
            alignItems: 'center',
            columnGap: '0.4rem',
          }}
        >
          <BottomNavigationAction label="Projects" sx={header_style.link} />
          <BottomNavigationAction label="Join Us" sx={header_style.link} />
          <BottomNavigationAction label="About" sx={header_style.link} />
        </BottomNavigation>
          <Box
            component={'nav'}
            sx={{
              display: 'flex',
              alignItems: 'center',
              columnGap: '0.4rem',
              fontWeight: '600',
            }}
          >
            <Link style={style.link} href="\">
              Home
            </Link>
            <Link style={style.link} href="\project" passHref>
              Project
            </Link>
            <Link style={style.link} href="\projects" passHref>
              Projects
            </Link>
            <Link style={style.link} href="\join-us" passHref>
              Join Us
            </Link>
            <Link style={style.link} href="\about" passHref>
              About
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Header
