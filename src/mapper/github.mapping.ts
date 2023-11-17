import { getReposList, getRepoInfo } from '../client-services/github.client-service'

interface RepoInfo {
    name: string;
    description?: string;
    url: string;
    languages: string[];
    language: string;
    contributors: { 
        name: string; 
        avatar_url: string 
    }[];
}

async function githubMapping(): Promise<void> {
    try {
        const reposListResponse = await getReposList();
        const repos: string[] = [];
        const repoInfo: { 
            name: string; 
            description?: string; 
            url: string; languages: string[]; 
            language: string; 
            contributors: { 
                name: string; 
                avatar_url: string 
            }[]; 
        }[] = [];

        for (let i = 0; i < reposListResponse.data.length; i++){
            repos.push(reposListResponse.data[i].name);
            repoInfo.push({ name: reposListResponse.data[i].name } as RepoInfo);
        }
        console.log(repos);
        console.log(repoInfo);

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
                avatar_url: string 
            }[] = [];

            for (const contributor of contributorsResponse.data) {
                allContributors.push({ name: contributor.login, avatar_url: contributor.avatar_url });
            }
            repoInfo[i].contributors = allContributors;
        }
        console.log(repoInfo);

    } catch (error) {
        console.error('Error:', error);
    }
}