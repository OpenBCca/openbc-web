import React from 'react'

import { Box, Typography } from '@mui/material'

interface BannerProps {
  title?: string;
  description?: string;
  backgroundColor?: string;
  height?: string;
}

function Banner({
                  title = 'Be a Force For Good in BC!',
                  description = 'Do you have design, writing, or coding skills? You have the power to elevate British Columbia to new heights\n' +
                  '        through OpenBC.',
                  backgroundColor = '#ededed',
                  height = '15rem',
                }: BannerProps) {
  return (
    <Box
      sx={{
        textAlign: 'center',
        backgroundColor,
        height,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography variant='h3'>
        {title}
      </Typography>
      <Typography variant='body1'>
        {description}
      </Typography>
    </Box>
  )
}

export default Banner
