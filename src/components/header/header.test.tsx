import Header from '@/components/header/header';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Header', () => {
  it('should render header', () => {
    render(<Header />);

    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });

  it('should render navigation buttons', () => {
    render(<Header />);

    const projectNav = screen.getByRole('button', {
      name: 'Projects',
    });
    const joinUsNav = screen.getByRole('button', {
      name: 'Join Us',
    });
    const aboutNav = screen.getByRole('button', {
      name: 'About',
    });

    expect(projectNav).toBeInTheDocument();
    expect(joinUsNav).toBeInTheDocument();
    expect(aboutNav).toBeInTheDocument();
  });
});
