import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Footer from './footer';

describe('Footer', () => {
  it('should render footer title', () => {
    render(<Footer />);
    const footerTitle = screen.getByText('OpenBC', {
      selector: '.footer-title',
    });
    expect(footerTitle).toBeInTheDocument();
  });

  it('should render footer subtitle', () => {
    render(<Footer />);

    const footerSubtitle = screen.getByText('Sample Text', {
      selector: '.footer-subtitle',
    });
    expect(footerSubtitle).toBeInTheDocument();
  });
});
