import { mapProject, mapProjects } from '../mapper/github.mapping';

describe('mapProject', () => {
  it('should map a repository object to a project object', () => {
    const repository = {
      name: 'test-repo',
      description: 'This is a test repository.',
      url: 'https://github.com/test/test-repo',
      language: 'Python',
    };
    const languages = ['Python', 'JavaScript'];
    const contributors = [
      { name: 'johndoe', avatarUrl: 'https://example.com/avatar.png' },
    ];

    const project = mapProject(repository, languages, contributors);

    expect(project).toEqual({
      name: 'test-repo',
      description: 'This is a test repository.',
      url: 'https://github.com/test/test-repo',
      language: 'Python',
      contributors: [
        { name: 'johndoe', avatarUrl: 'https://example.com/avatar.png' },
      ],
      languages: ['Python', 'JavaScript'],
    });
  });
});

describe('mapProjects', () => {
  it('should map an array of repository objects to an array of project objects', () => {
    const repositories = [
      {
        name: 'test-repo1',
        description: 'This is the first test repository.',
        url: 'https://github.com/test/test-repo1',
        language: 'Python',
      },
      {
        name: 'test-repo2',
        description: 'This is the second test repository.',
        url: 'https://github.com/test/test-repo2',
        language: 'JavaScript',
      },
    ];
    const repositoriesLanguages = {
      'test-repo1': ['Python', 'JavaScript'],
      'test-repo2': ['JavaScript', 'CSS', 'HTML'],
    };
    const repositoriesContributors = {
      'test-repo1': [
        { name: 'janedoe', avatarUrl: 'https://example.com/avatar1.png' },
        { name: 'sarahdoe', avatarUrl: 'https://example.com/avatar2.png' },
      ],
      'test-repo2': [
        { name: 'johndoe', avatarUrl: 'https://example.com/avatar.png' },
      ],
    };
    // const repositoriesLanguagesArray = Object.values(repositoriesLanguages);
    // const repositoriesContributorsArray = Object.values(
    //   repositoriesContributors
    // ).flat();

    const projects = mapProjects(
      repositories,
      repositoriesLanguages,
      repositoriesContributors
    );

    expect(projects).toEqual([
      {
        name: 'test-repo1',
        description: 'This is the first test repository.',
        url: 'https://github.com/test/test-repo1',
        language: 'Python',
        contributors: [
          { name: 'janedoe', avatarUrl: 'https://example.com/avatar1.png' },
          { name: 'sarahdoe', avatarUrl: 'https://example.com/avatar2.png' },
        ],
        languages: ['Python', 'JavaScript'],
      },
      {
        name: 'test-repo2',
        description: 'This is the second test repository.',
        url: 'https://github.com/test/test-repo2',
        language: 'JavaScript',
        contributors: [
          { name: 'johndoe', avatarUrl: 'https://example.com/avatar.png' },
        ],
        languages: ['JavaScript', 'CSS', 'HTML'],
      },
    ]);
  });
});
