import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import JoinUs from '@/app/join-us/page';

describe('Join Us Page', () => {
  it('should render title', () => {
    render(<JoinUs />);
    const title = screen.getByText('Join Us');
    expect(title).toBeInTheDocument();
  });
});
