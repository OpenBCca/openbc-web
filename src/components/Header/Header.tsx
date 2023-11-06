import { Box } from '@mui/material'

interface Props {}

const style = {
  link: {
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
    transition: 'all 240ms cubic-bezier(0.4, 0.4, 0.4, 0.4)',
  },
}

function Header({}: Props) {
  return (
    <Box
      component={'header'}
      sx={{
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        paddingY: '1.4rem',
        borderBottom: 2,
        borderColor: '#e7e5e4',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '0.8rem' }}>
        <Box
          sx={{
            fontSize: 34,
            fontWeight: '700',
          }}
        >
          OpenBC
        </Box>

        <Box
          component={'nav'}
          sx={{
            display: 'flex',
            alignItems: 'center',
            columnGap: '0.4rem',
            fontWeight: '600',
          }}
        >
          <Box component={'a'} sx={style.link}>
            Projects
          </Box>
          <Box component={'a'} sx={style.link}>
            Join Us
          </Box>
          <Box component={'a'} sx={style.link}>
            About
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Header
