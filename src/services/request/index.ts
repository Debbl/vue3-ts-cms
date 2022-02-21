import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';

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

  constructor(config: ExAxiosRequestConfig) {
    this.instance = axios.create(config);
    // 拦截器
    this.interceptors = config.interceptors;
    this.instance.interceptors.request.use(
      this.interceptors?.reqInterceptors,
      this.interceptors?.reqInterceptorsCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.resInterceptors,
      this.interceptors?.resInterceptorsCatch
    );
  }

  request(reqConfig: AxiosRequestConfig) {
    return this.instance.request(reqConfig);
  }
}

export default Request;
