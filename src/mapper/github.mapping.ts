export function mapProject(
  repository: any,
  languages: string[],
  contributors: any[]
) {
  return {
    name: repository.name,
    description: repository.description,
    url: repository.url,
    language: repository.language,
    contributors: contributors?.map((contributor: any) => ({
      name: contributor.name,
      avatarUrl: contributor.avatarUrl,
    })),
    languages: languages,
  };
}

export function mapProjects(
  repositories: any[],
  repositoriesLanguages: any[],
  repositoriesContributors: any[]
) {
  return repositories.map((repository: any) =>
    mapProject(
      repository,
      repositoriesLanguages[repository.name],
      repositoriesContributors[repository.name]
    )
  );
}
