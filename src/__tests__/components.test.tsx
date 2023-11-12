import Header from '@/components/Header/Header'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('Header', () => {
  it('renders header', () => {
    render(<Header />)

    const header = screen.getByRole('banner', {
      name: '',
    })

    expect(header).toBeInTheDocument()
  })
})
