import React from 'react'

import { Box, Typography } from '@mui/material'

interface BannerProps {

}

function Banner() {
  return (
    <Box
      sx={{
        textAlign: 'center',
        backgroundColor: '#ededed',
        height: '15rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography variant='h3'>
        {'Be a Force For Good in BC!'}
      </Typography>
      <Typography variant='body1'>
        {'Do you have design, writing, or coding skills? You have the power to elevate British Columbia to new heights\n' +
          '        through OpenBC.'}
      </Typography>
    </Box>
  )
}

export default Banner
