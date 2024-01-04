import { getLocalProjectData } from '@/utils/get-local-project-data/get-local-project-data';

const mockProjectJson = JSON.stringify([
  {
    title: 'Project 1',
    description: 'Description 1',
    links: [],
    languages: ['JavaScript'],
    status: 'In Progress',
    location: 'City A',
    contributors: ['User 1', 'User 2'],
  },
]);

jest.mock('fs', () => ({
  promises: {
    readFile: jest.fn().mockResolvedValue(
      JSON.stringify([
        {
          title: 'Project 1',
          description: 'Description 1',
          links: [],
          languages: ['JavaScript'],
          status: 'In Progress',
          location: 'City A',
          contributors: ['User 1', 'User 2'],
        },
      ])
    ),
  },
}));

describe('getLocalProjectData', () => {
  it('should fetch local project data correctly', async () => {
    const result = await getLocalProjectData();
    expect(result).toEqual(JSON.parse(mockProjectJson));
  });
});
