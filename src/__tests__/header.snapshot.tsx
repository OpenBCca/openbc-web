import Header from '@/components/Header/Header'
import { render } from '@testing-library/react'

// Use this if you want to skip this test
describe.skip('skips snapshot test', () => {})

describe('Header snapshot test', () => {
  it('renders header unchanged', () => {
    const { container } = render(<Header />)
    expect(container).toMatchSnapshot()
  })
})
