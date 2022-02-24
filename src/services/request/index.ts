import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';
import { ElLoading } from 'element-plus';
import { LoadingInstance } from 'element-plus/es/components/loading/src/loading';

interface InterceptorsHooks {
  reqInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  reqInterceptorsCatch?: (error: any) => any;
  resInterceptors?: (response: AxiosResponse) => AxiosResponse;
  resInterceptorsCatch?: (error: any) => any;
}

interface ExAxiosRequestConfig extends AxiosRequestConfig {
  interceptors?: InterceptorsHooks;
  showLoading?: boolean;
}

const DEFAULT_LOADING = false;

class Request {
  instance: AxiosInstance;
  interceptors?: InterceptorsHooks;
  loading?: LoadingInstance;
  showLoading?: boolean;

  constructor(config: ExAxiosRequestConfig) {
    this.instance = axios.create(config);
    // 加载动画显示
    this.showLoading = config.showLoading ?? DEFAULT_LOADING;
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
      this.showLoading &&
        (this.loading = ElLoading.service({
          lock: true,
          text: '正在加载数据',
          background: 'rgba(0, 0, 0, .5)',
        }));
      return config;
    });
    this.instance.interceptors.response.use((response) => {
      // console.log('所有的实例');
      this.showLoading && this.loading?.close();
      this.showLoading = DEFAULT_LOADING;
      return response;
    });
  }

  request(reqConfig: ExAxiosRequestConfig) {
    reqConfig.interceptors?.reqInterceptors &&
      (reqConfig = reqConfig.interceptors.reqInterceptors(reqConfig));
    reqConfig.showLoading !== undefined &&
      (this.showLoading = reqConfig.showLoading);
    return this.instance.request(reqConfig);
  }
}

export default Request;
