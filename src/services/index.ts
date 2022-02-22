import Request from './request';
import { BASE_URL, TIMEOUT } from './request/config';

const RequestService = new Request({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    reqInterceptors(config) {
      const token = '111';
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    resInterceptors(response) {
      // console.log('单独的实例');
      return response.data;
    },
  },
});

RequestService.request({
  url: '/home/multidata',
  method: 'GET',
}).then((response) => {
  console.log(response);
});

export default RequestService;
