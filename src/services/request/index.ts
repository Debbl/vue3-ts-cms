import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';
import { ElLoading } from 'element-plus';

interface InterceptorsHooks {
  reqInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  reqInterceptorsCatch?: (error: any) => any;
  resInterceptors?: (response: AxiosResponse) => AxiosResponse;
  resInterceptorsCatch?: (error: any) => any;
}

interface ExAxiosRequestConfig extends AxiosRequestConfig {
  interceptors?: InterceptorsHooks;
}

class Request {
  instance: AxiosInstance;
  interceptors?: InterceptorsHooks;
  loading?: any;

  constructor(config: ExAxiosRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;
    // 拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.reqInterceptors,
      this.interceptors?.reqInterceptorsCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.resInterceptors,
      this.interceptors?.resInterceptorsCatch
    );
    // 所有实例上都有的拦截器
    this.instance.interceptors.request.use((config) => {
      this.loading = ElLoading.service({
        lock: true,
        text: '正在加载数据',
        background: 'rgba(0, 0, 0, .5)',
      });
      return config;
    });
    this.instance.interceptors.response.use((response) => {
      // console.log('所有的实例');
      setTimeout(() => {
        this.loading?.close();
      }, 300);
      return response;
    });
  }

  request(reqConfig: AxiosRequestConfig) {
    return this.instance.request(reqConfig);
  }
}

export default Request;
