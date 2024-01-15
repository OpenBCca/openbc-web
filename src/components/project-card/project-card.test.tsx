import Project from '@/components/project-card/project-card';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';

describe('Project', () => {
  const mockProjectData = {
    title: 'Test Project',
    description: 'Test Description',
    links: [
      {
        title: 'GitHub',
        url: 'https://github.com/example',
      },
    ],
    languages: ['JavaScript', 'TypeScript'],
    tools: ['React', 'Next.js'],
    technologies: ['MUI', 'Jest'],
    programAreas: ['Web Development'],
  };

  it('should render project card with title and description', () => {
    render(<Project {...mockProjectData} />);

    const title = screen.getByText(mockProjectData.title);
    const description = screen.getByText(mockProjectData.description);

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it('should render languages, tools, technologies, and program areas', () => {
    render(<Project {...mockProjectData} />);

    const languages = screen.getByText('Languages');
    const tools = screen.getByText('Tools');
    const technologies = screen.getByText('Technologies');
    const programAreas = screen.getByText('Program Areas');

    expect(languages).toBeInTheDocument();
    expect(tools).toBeInTheDocument();
    expect(technologies).toBeInTheDocument();
    expect(programAreas).toBeInTheDocument();
  });

  it('should render links with GitHub icon', () => {
    render(<Project {...mockProjectData} />);

    const links = screen.getByText('Links');
    const githubIcon = screen.getByAltText('GitHub');

    expect(links).toBeInTheDocument();
    expect(githubIcon).toBeInTheDocument();
  });

  it('should handle missing props gracefully', () => {
    render(<Project title="Test Project" description={''} links={[]} />);

    const title = screen.getByText('Test Project');
    const description = screen.queryByText('Test Description');

    expect(title).toBeInTheDocument();
    expect(description).toBeNull();
  });
});
