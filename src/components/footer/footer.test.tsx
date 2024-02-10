import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Footer from './footer';

describe('Footer', () => {
  it('should render footer title', () => {
    render(<Footer />);
    const footerTitle = screen.getByText('OpenBC', {
      selector: '.footer__logo',
    });
    expect(footerTitle).toBeInTheDocument();
  });

  it('should render footer subtitle', () => {
    render(<Footer />);

    const footerLabel = screen.getByText(
      'Get the latest updates about OpenBC',
      {
        selector: '.footer__label',
      }
    );
    expect(footerLabel).toBeInTheDocument();
  });
});
