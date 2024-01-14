import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import RootLayout from './layout';

jest.mock(
  '@/components/header/header',
  () =>
    function MockHeader() {
      return <div data-testid="mock-header">Mock Header</div>;
    }
);
jest.mock(
  '@/components/footer/footer',
  () =>
    function MockFooter() {
      return <div data-testid="mock-footer">Mock Footer</div>;
    }
);

describe('RootLayout', () => {
  it('renders without crashing', () => {
    render(<RootLayout />);
  });

  it('renders Header and Footer components', () => {
    const { getByTestId } = render(<RootLayout />);

    expect(getByTestId('mock-header')).toBeInTheDocument();
    expect(getByTestId('mock-footer')).toBeInTheDocument();
  });

  it('renders children properly', () => {
    const mockChildren = <div data-testid="mock-children">Mock Children</div>;
    const { getByTestId } = render(<RootLayout>{mockChildren}</RootLayout>);

    expect(getByTestId('mock-children')).toBeInTheDocument();
  });
});
