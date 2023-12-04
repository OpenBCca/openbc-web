import axios, { AxiosInstance, AxiosResponse } from 'axios';
import {
  getAxiosInstance,
  getRepositoryInformation,
  getRepositoryList,
} from '../client-services/github.client-service';

jest.mock('axios');

describe('Github client service test', () => {
  const accessToken = 'testToken';
  const mockResponse = {
    data: [{ name: 'openbc-web' }],
    headers: {
      Authorization: `token ${accessToken}`,
      'Content-Type': 'application/json',
    },
    config: {},
    request: {},
  };
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv, GITHUB_API_KEY: 'testApiKey' };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  describe('getAxiosInstance', () => {
    it('should return an Axios instance', () => {
      axios.create = jest.fn().mockReturnValue(mockResponse);
      const axiosInstance: AxiosInstance = getAxiosInstance();

      expect(axiosInstance).toEqual(mockResponse);
    });
  });

  describe('getRepositoryList', () => {
    it('should get the list of repositories', async () => {
      axios.create = jest.fn().mockReturnValue({
        get: jest.fn().mockResolvedValueOnce(mockResponse),
      });
      const reposListResponse: AxiosResponse = await getRepositoryList();

      expect(reposListResponse).toEqual(mockResponse);
    });
  });

  describe('getRepositoryInformation', () => {
    it('should get openbc-web repo info', async () => {
      const repositoryName = 'openbc-web';
      const parameter = '';

      axios.create = jest.fn().mockReturnValue({
        get: jest.fn().mockResolvedValueOnce(mockResponse),
      });
      const testRepoResponse: AxiosResponse = await getRepositoryInformation(
        repositoryName,
        parameter
      );

      expect(testRepoResponse).toEqual(mockResponse);
    });
  });
});
