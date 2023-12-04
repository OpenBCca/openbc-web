import axios, { AxiosInstance, AxiosResponse } from 'axios';
import {
  getAxiosInstance,
  getRepositoryList,
  getRepositoryInformation,
} from '../client-services/github.client-service';

jest.mock('axios');

describe('Github client service test', () => {
  const accessToken = 'testToken';
  const mockResponse: AxiosResponse = {
    data: [{ name: 'openbc-web' }],
    headers: {
      Authorization: `token ${accessToken}`,
      'Content-Type': 'application/json',
    },
    config: {},
    headers: {},
    request: {},
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('getAxiosInstance', () => {
    it('should return an Axios instance', async () => {
      axios.create.mockResolvedValueOnce(mockResponse);
      const axiosInstance: AxiosInstance = await getAxiosInstance();

      expect(axiosInstance).toEqual(mockResponse);
    });
  });

  describe('getRepositoryList', () => {
    it('should get the list of repositories', async () => {
      axios.create.mockReturnValueOnce({
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

      axios.create.mockReturnValueOnce({
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
