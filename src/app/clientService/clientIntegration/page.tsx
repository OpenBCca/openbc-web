// pages/api/github.js
import { NextApiRequest, NextApiResponse } from 'next';
import { getReposList, getRepoInfo } from './github_clinet';

interface RepoInfo {
    name: string;
    description?: string;
    url: string;
    languages: string[];
    language: string;
    contributors: { name: string; avatar_url: string }[];
}

export default async (eq: NextApiRequest, res: NextApiResponse) => {
    try {
      // Call the functions from github_client.js
      const reposListResponse = await getReposList();
      const repos: string[] = [];
      const repoInfo: { name: string; description?: string; url: string; languages: string[]; language: string; contributors: { name: string; avatar_url: string }[]; }[] = [];
      for (let i = 0; i < reposListResponse.data.length; i++) {
        repos.push(reposListResponse.data[i].name);
        repoInfo.push({ 'name': reposListResponse.data[i].name } as RepoInfo);
      }
  
      // Call the getRepoInfo function with repo names
      for (let i = 0; i < repos.length; i++) {
        const repoInfoResponse = await getRepoInfo(repos[i]);
        const data = repoInfoResponse.data;
        repoInfo[i]['description'] = data.description;
        repoInfo[i]['url'] = data.url;
        const languagesResponse = await getRepoInfo(repos[i], '/languages');
        repoInfo[i]['languages'] = Object.keys(languagesResponse.data);
        repoInfo[i]['language'] = data.language;
        const contributors = await getRepoInfo(repos[i], '/contributors');
        const allContributors: { name: string; avatar_url: string }[] = [];
        for (const contributor of contributors.data) {
          allContributors.push({ 'name': contributor.login, 'avatar_url': contributor.avatar_url });
        }
        repoInfo[i]['contributors'] = allContributors;
      }

  
      // Return the data as JSON
      return repoInfo.map((info) => (info.language));
    } catch (error) {
      console.error('Error:', error);
      return 'An error occurred';
    }
  };