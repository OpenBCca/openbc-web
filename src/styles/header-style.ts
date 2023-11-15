export const header_style = {
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
