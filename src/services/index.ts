import Request from './request';
import { BASE_URL, TIMEOUT } from './request/config';

const RequestService = new Request({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    reqInterceptors(config) {
      return config;
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
