import JoinUs from '@/app/join-us/page';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';

describe('Join Us Page', () => {
  it('should render title', () => {
    render(<JoinUs />);
    const subTitle = screen.getByRole('heading', { name: 'Our Mission' });
    expect(subTitle).toBeInTheDocument();
  });
});
