import headerData from '@/components/header/header-data';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import HeaderEnum from '../../enum/header-enum';
import Header from './header';

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

  it('should have unique href values in headerData', () => {
    const hrefSet = new Set<string>();
    let hasDuplicate = false;

    headerData.forEach((tab: any) => {
      if (hrefSet.has(tab.href)) {
        hasDuplicate = true;
      }

      hrefSet.add(tab.href);
    });

    expect(hasDuplicate).toBe(false);
  });

  it('should have enum values as unique numbers', () => {
    expect(typeof HeaderEnum.projects).toBe('number');
    expect(typeof HeaderEnum.joinUs).toBe('number');
    expect(typeof HeaderEnum.about).toBe('number');
    expect(HeaderEnum.projects).not.toEqual(HeaderEnum.joinUs);
    expect(HeaderEnum.projects).not.toEqual(HeaderEnum.about);
    expect(HeaderEnum.joinUs).not.toEqual(HeaderEnum.about);
  });
});
