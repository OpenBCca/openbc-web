import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import About from '@/app/about/page';

describe('About Page', () => {
  it('should render title', () => {
    render(<About />);
    const title = screen.getByText('About');
    expect(title).toBeInTheDocument();
  });
});
