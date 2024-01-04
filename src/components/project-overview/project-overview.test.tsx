import ProjectOverview from '@/components/project-overview/project-overview';
import * as getLocalProjectDataModule from '@/utils/get-local-project-data/get-local-project-data';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

jest.mock('@/utils/get-local-project-data/get-local-project-data');

describe('Project Overview', () => {
  const mockProjectData = [
    {
      title: 'Project 1',
      description: 'Description 1',
      links: [{ title: 'project1', url: 'https://project1.com' }],
      languages: ['Javascript', 'CSS'],
      status: 'In Progress',
      location: 'Canada',
      contributors: ['Alex', 'Emily'],
    },
    {
      title: 'Project 2',
      description: 'Description 2',
      links: [{ title: 'project2', url: 'https://project2.com' }],
      languages: ['Python', 'Java'],
      status: 'Inactive',
      location: 'USA',
      contributors: ['John', 'Ted', 'Riley'],
    },
  ];

  beforeAll(() => {
    jest
      .spyOn(getLocalProjectDataModule, 'getLocalProjectData')
      .mockResolvedValue(mockProjectData);
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should render project cards with correct data', async () => {
    render(await ProjectOverview());

    mockProjectData.forEach((project) => {
      const titleElement = screen.getByText(project.title);
      const descriptionElement = screen.getByText(project.description);

      expect(titleElement).toBeInTheDocument();
      expect(descriptionElement).toBeInTheDocument();

      project.links.forEach((link) => {
        const linkElement = screen.getByText(link.title);
        expect(linkElement).toBeInTheDocument();
        expect(linkElement.closest('a')).toHaveAttribute('href', link.url);
      });

      expect(
        screen.getByText(`${project.languages.join(', ')}`)
      ).toBeInTheDocument();
      expect(screen.getByText(`${project.status}`)).toBeInTheDocument();
      expect(screen.getByText(`${project.location}`)).toBeInTheDocument();
      expect(
        screen.getByText(`${project.contributors.join(', ')}`)
      ).toBeInTheDocument();
    });
  });
});
