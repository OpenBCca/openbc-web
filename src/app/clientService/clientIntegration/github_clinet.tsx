import axios, { AxiosResponse } from 'axios';

// Your GitHub personal access token
// Replace 'YOUR_PERSONAL_ACCESS_TOKEN' with your GitHub personal access token
const accessToken: string | undefined = process.env.GITHUB_API_KEY;

if (!accessToken) {
  throw new Error('GitHub access token is not provided.');
}

// Axios instance with headers
const axiosInstance = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Authorization': `token ${accessToken}`,
    'Content-Type': 'application/json',
  },
});

// Function to get the list of repositories
const getReposList = async (): Promise<AxiosResponse> => {
  try {
    const response: AxiosResponse = await axiosInstance.get('/orgs/OpenBCca/repos');
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Function to get repository info
const getRepoInfo = async (repo_name: string, para: string = ''): Promise<AxiosResponse> => {
  try {
    const response: AxiosResponse = await axiosInstance.get(`/repos/OpenBCca/${repo_name}${para}`);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export {
  getReposList,
  getRepoInfo
};
