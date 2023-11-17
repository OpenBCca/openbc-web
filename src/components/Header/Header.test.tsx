import Header from '@/components/Header/Header'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('Header', () => {
  it('should render header', () => {
    render(<Header />)

    // Query header element
    const header = screen.getByRole('banner')

    // Query the navigation anchor elements
    const projectNav = screen.getByRole('link', {
      name: 'Projects',
    })
    const joinUsNav = screen.getByRole('link', {
      name: 'Join Us',
    })
    const aboutNav = screen.getByRole('link', {
      name: 'About',
    })

    // Check if header is in the document
    expect(header).toBeInTheDocument()

    // Check href for each anchor link
    expect(projectNav).toHaveAttribute('href', '')
    expect(joinUsNav).toHaveAttribute('href', '')
    expect(aboutNav).toHaveAttribute('href', '')
  })
})
