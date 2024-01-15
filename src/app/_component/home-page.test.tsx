import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { HomePage } from '@/app/_component/home-page';

jest.mock('@/components/banner/banner', () => {
  const mockedBanner = () => (
    <div data-testid="mocked-banner">Mocked Banner</div>
  );
  mockedBanner.displayName = 'MockedBanner';
  return mockedBanner;
});

jest.mock('@/components/project-overview/project-overview', () => {
  const mockedProjectOverview = () => (
    <div data-testid="mocked-project-overview">Mocked Project Overview</div>
  );
  mockedProjectOverview.displayName = 'MockedProjectOverview';
  return mockedProjectOverview;
});

describe('HomePage', () => {
  it('renders Banner and ProjectOverview components', () => {
    render(<HomePage />);

    const bannerElement = screen.getByTestId('mocked-banner');
    expect(bannerElement).toBeInTheDocument();
    expect(bannerElement).toHaveTextContent('Mocked Banner');

    const projectOverviewElement = screen.getByTestId(
      'mocked-project-overview'
    );
    expect(projectOverviewElement).toBeInTheDocument();
    expect(projectOverviewElement).toHaveTextContent('Mocked Project Overview');
  });
});
