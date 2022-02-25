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

interface DataType {
  data: any;
  returnCode: string;
  success: boolean;
}
RequestService.get<DataType>({
  url: '/home/multidata',
  showLoading: true,
}).then((response) => {
  console.log(response);
});

export default RequestService;
