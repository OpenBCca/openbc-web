import {
  getRepoInfo,
  getReposList,
} from '../client-services/github.client-service'

interface Repos {
  name: string
}

// interface RepoInfo {
//   name: string
//   description?: string
//   url: string
//   languages: string[]
//   language: string
//   contributors: { name: string; avatarUrl: string }[]
// }

export async function mapRepoInfo(repo: Repos) {
  const repoInfoResponse = await getRepoInfo(repo.name)
  const data = repoInfoResponse.data

  const languagesResponse = await getRepoInfo(repo.name, '/languages')
  const contributorsResponse = await getRepoInfo(repo.name, '/contributors')

  return {
    name: repo.name,
    description: data.description,
    url: data.url,
    languages: Object.keys(languagesResponse.data),
    language: data.language,
    contributors: contributorsResponse.data.map((contributor: any) => ({
      name: contributor.login,
      avatarUrl: contributor.avatarUrl,
    })),
  }
}

export function mapProjects(repositories: any[]) {
  const reposListResponse = getReposList()
  const repos: Repos[] = reposListResponse.data.map((repo: any) => ({
    name: repo.name,
  }))
  const repoPromises = repos.map(mapRepoInfo)
  return Promise.all(repoPromises)
}
