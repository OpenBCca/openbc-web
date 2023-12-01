import axios, { AxiosResponse } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  axiosConfig,
  getRepoInfo,
  getReposList,
} from '../client-services/github.client-service';

describe('Mock Axios', () => {
  let axiosMock: MockAdapter;
  let mockResponse: AxiosResponse | object | null;

  const accessToken = process.env.GITHUB_API_KEY;

  beforeEach(() => {
    axiosMock = new MockAdapter(axios);
  });

  afterEach(() => {
    axiosMock.restore();
    mockResponse = null;
  });

  it('should get axios config', async () => {
    mockResponse = { data: 'mocked data' };
    axiosMock
      .onGet('https://api.github.com/test-endpoint')
      .reply(200, mockResponse);

    const axiosInstance = axiosConfig();

    return axiosInstance.get('/test-endpoint').then((response) => {
      expect(response.status).toBe(200);
      expect(response.data).toEqual(mockResponse);
    });
  });

  describe('Github API calls', () => {
    mockResponse = {
      data: [{ name: 'openbc-web' }],
      baseURL: 'https://api.github.com',
      headers: {
        Authorization: `token ${accessToken}`,
        'Content-Type': 'application/json',
      },
    };

    it('should get the list of repositories', async () => {
      axiosMock
        .onGet('https://api.github.com/orgs/OpenBCca/repos')
        .reply(200, mockResponse);
      const reposListResponse = await getReposList();

      expect(reposListResponse.data).toEqual(mockResponse);
    });

    it('should get openbc-web repo info', async () => {
      const repoName = 'openbc-web';
      const parameter = '';

      axiosMock
        .onGet(`https://api.github.com/repos/OpenBCca/${repoName}${parameter}`)
        .reply(200, mockResponse);
      const testRepoResponse = await getRepoInfo(repoName, parameter);

      expect(testRepoResponse.data).toEqual(mockResponse);
    });
  });
});
