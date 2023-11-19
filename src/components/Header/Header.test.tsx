import Header from '@/components/Header/Header'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('Header', () => {
  it('should render header', () => {
    render(<Header />)

    const header = screen.getByRole('banner')
    const projectNav = screen.getByRole('link', {
      name: 'Projects',
    })
    const joinUsNav = screen.getByRole('link', {
      name: 'Join Us',
    })
    const aboutNav = screen.getByRole('link', {
      name: 'About',
    })

    expect(header).toBeInTheDocument()
    expect(projectNav).toHaveAttribute('href', '')
    expect(joinUsNav).toHaveAttribute('href', '')
    expect(aboutNav).toHaveAttribute('href', '')
  })
})
