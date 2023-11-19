import { getReposList, getRepoInfo } from '../client-services/github.client-service'

interface RepoInfo {
    name: string;
    description?: string;
    url: string;
    languages: string[];
    language: string;
    contributors: { 
        name: string; 
        avatarUrl: string 
    }[];
}

export async function map(): Promise<RepoInfo[]> {
    const reposListResponse = await getReposList();
    const repos: string[] = [];
    const repoInfo: { 
        name: string; 
        description?: string; 
        url: string; languages: string[]; 
        language: string; 
        contributors: { 
            name: string; 
            avatarUrl: string 
        }[]; 
    }[] = [];

    for (let i = 0; i < reposListResponse.data.length; i++){
        repos.push(reposListResponse.data[i].name);
        repoInfo.push({ name: reposListResponse.data[i].name } as RepoInfo);
    }

    for (let i = 0; i < repos.length; i++){
        const repoInfoResponse = await getRepoInfo(repos[i]);
        const data = repoInfoResponse.data;

        repoInfo[i].description = data.description;
        repoInfo[i].url = data.url;

        const languagesResponse = await getRepoInfo(repos[i], '/languages');
        repoInfo[i].languages = Object.keys(languagesResponse.data);
        repoInfo[i].language = data.language;

        const contributorsResponse = await getRepoInfo(repos[i], '/contributors');
        const allContributors: { 
            name: string; 
            avatarUrl: string 
        }[] = [];

        for (const contributor of contributorsResponse.data) {
            allContributors.push({ name: contributor.login, avatarUrl: contributor.avatarUrl });
        }
        repoInfo[i].contributors = allContributors;
    }
    return repoInfo;

}