import axios, { AxiosResponse, AxiosInstance } from 'axios';
import getConfig from 'next/config'

function axiosConfig(): AxiosInstance {
  const { serverRuntimeConfig } = getConfig()
  const accessToken: string | undefined = serverRuntimeConfig.githubApiToken;

  if (!accessToken) {
    throw new Error('GitHub access token is not provided.');
  }

  const axiosInstance = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
      'Authorization': `token ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  return axiosInstance;
}

const axiosInstance = axiosConfig();



export async function getReposList(): Promise<AxiosResponse> {
  const response: AxiosResponse = await axiosInstance.get('/orgs/OpenBCca/repos');
  return response;
}

export async function getRepoInfo(repo_name: string, para: string = ''): Promise<AxiosResponse> {
  const response = await axiosInstance.get(`/repos/OpenBCca/${repo_name}${para}`);
  return response;
}


