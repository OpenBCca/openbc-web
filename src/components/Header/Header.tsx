'use client'

import { header_style } from '@/styles/header-style'
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material'
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
        />
        <Box component={'a'} sx={style.link} href="">
          Projects
        </Box>
        <Box component={'a'} sx={style.link} href="">
          Join Us
        </Box>
        <Box component={'a'} sx={style.link} href="">
          About
        </Box>
      </Box>
    </Box>
  )
}

export default Header
