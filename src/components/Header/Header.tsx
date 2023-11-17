'use client'

import { header_style } from '@/styles/header-style'
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material'
import Link from 'next/link'
import React from 'react'

interface Props {}

const style = {
  link: {
    fontSize: 14,
    cursor: 'pointer',
    borderRadius: '6px',
    paddingX: '0.8rem',
    paddingY: '0.4rem',
    textDecoration: 'none',
    '&:hover': {
      transform: 'translateY(0.4rem)',
      backgroundColor: 'black',
      color: 'white',
    },
    '&:active': {
      transform: 'scale(0.90) translateY(0.4rem)',
    },
    '&:visited': {
      color: 'inherit',
    },
    transition: 'all 240ms cubic-bezier(0.4, 0.4, 0.4, 0.4)',
  },
}

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
          <BottomNavigationAction
            label="Home"
            href="/"
            sx={header_style.link}
          />
          <BottomNavigationAction
            label="Project"
            href="/project"
            sx={header_style.link}
          />
          <BottomNavigationAction
            label="Projects"
            href="/projects"
            sx={header_style.link}
          />
          <BottomNavigationAction
            label="Join Us"
            href="/join-us"
            sx={header_style.link}
          />
          <BottomNavigationAction
            label="About"
            href="about"
            sx={header_style.link}
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
  )
}

export default Header
