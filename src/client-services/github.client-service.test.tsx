import axios, { AxiosInstance, AxiosResponse } from 'axios';
import {
  axiosConfig,
  getReposList,
  getRepoInfo,
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

  describe('axiosConfig', () => {
    it('should return an Axios instance', async () => {
      axios.create.mockResolvedValueOnce(mockResponse);
      const axiosInstance: AxiosInstance = await axiosConfig();

      expect(axiosInstance).toEqual(mockResponse);
    });
  });

  describe('getReposList', () => {
    it('should get the list of repositories', async () => {
      axios.create.mockReturnValueOnce({
        get: jest.fn().mockResolvedValueOnce(mockResponse),
      });
      const reposListResponse: AxiosResponse = await getReposList();

      expect(reposListResponse).toEqual(mockResponse);
    });
  });

  describe('getRepoInfo', () => {
    it('should get openbc-web repo info', async () => {
      const repoName = 'openbc-web';
      const parameter = '';

      axios.create.mockReturnValueOnce({
        get: jest.fn().mockResolvedValueOnce(mockResponse),
      });
      const testRepoResponse: AxiosResponse = await getRepoInfo(
        repoName,
        parameter
      );

      expect(testRepoResponse).toEqual(mockResponse);
    });
  });
});
