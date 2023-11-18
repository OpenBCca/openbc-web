import axios, { AxiosInstance, AxiosResponse } from 'axios';
import getConfig from 'next/config';

function axiosConfig(): AxiosInstance {
  const { serverRuntimeConfig } = getConfig();
  const accessToken: string | undefined = serverRuntimeConfig.githubApiToken;

  if (!accessToken) {
    throw new Error('GitHub access token is not provided.');
  }

  const axiosInstance = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
      Authorization: `token ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  return axiosInstance;
}

export async function getReposList(): Promise<AxiosResponse> {
  const response: AxiosResponse = await axiosConfig().get(
    '/orgs/OpenBCca/repos'
  );
  return response;
}

export async function getRepoInfo(
  repoName: string,
  parameter = ''
): Promise<AxiosResponse> {
  const response = await axiosConfig().get(
    `/repos/OpenBCca/${repoName}${parameter}`
  );
  return response;
}
