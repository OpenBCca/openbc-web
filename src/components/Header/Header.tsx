'use client'

import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material'
import React from 'react'

interface Props {}

const style = {
  link: {
    fontSize: 14,
    fontWeight: '600',
    cursor: 'pointer',
    borderRadius: '6px',
    paddingX: '0.8rem',
    paddingY: '0.4rem',
    '&:hover': {
      transform: 'translateY(0.4rem)',
      backgroundColor: 'black',
      color: 'white',
    },
    '&:active': {
      transform: 'scale(0.90) translateY(0.4rem)',
    },
    '& .Mui-selected': {
      color: '#2563eb',
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
      <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '0.4rem' }}>
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
          onChange={(event, newValue) => {
            if (typeof newValue === 'number') setValue(newValue)
          }}
          sx={{
            display: 'flex',
            alignItems: 'center',
            columnGap: '0.4rem',
          }}
        >
          <BottomNavigationAction label="Projects" sx={style.link} />
          <BottomNavigationAction label="Join Us" sx={style.link} />
          <BottomNavigationAction label="About" sx={style.link} />
        </BottomNavigation>
      </Box>
    </Box>
  )
}

export default Header
