import Banner from '@/components/banner/banner';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Banner', () => {
  it('should render banner heading', () => {
    render(<Banner />);
    const bannerHeading = screen.getByText('Be a Force For Good in BC!');
    expect(bannerHeading).toBeInTheDocument();
  });

  it('should render banner text', () => {
    render(<Banner />);

    const bannerTextRegex = new RegExp(
      'Do you have design, writing, or coding skills?.*through OpenBC.',
      's' // 's' flag for dotAll mode, allowing the regex to match across multiple lines
    );

    const bannerTextElement = screen.getByText(bannerTextRegex);
    expect(bannerTextElement).toBeInTheDocument();
  });
});
